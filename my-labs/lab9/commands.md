# Lab 9
## Họ và tên: Nguyễn Đức Tùng - MSV: 21020556

- Máy chủ DNS/DHCP `ubuntu-server`, IP tĩnh `192.168.139.10/24` (em xin phép thầy sử dụng lại IP từ Lab8 thay vì dải `192.168.10.0/24` ạ!!)
- Máy khách `ubuntu-client` với user tung1884, sẽ nhận IP qua DHCP ở mục 4
- Default gateway: `192.168.139.1` - Tên miền thực hành: `lab.local`

## 1. Cấu hình DNS

### 1.1 Cài đặt và khởi động dịch vụ DNS
```bash
sudo apt update
sudo apt install -y bind9 bind9utils bind9-doc dnsutils
sudo systemctl enable --now named
```

!(1.PNG)

### 1.2 Khai báo vùng phân giải thuận + ngược
```bash
sudo nano /etc/bind/named.conf.local
```
Thêm vào cuối file:
```
zone "lab.local" {
    type master;
    file "/etc/bind/db.lab.local";
};

zone "139.168.192.in-addr.arpa" {
    type master;
    file "/etc/bind/db.192.168.139";
};
```

!(2.PNG)

### 1.3 Tạo file zone thuận (db.lab.local) với 2 bản ghi A
```bash
sudo cp /etc/bind/db.local /etc/bind/db.lab.local
sudo nano /etc/bind/db.lab.local
```

Edit file thành:
```
$TTL    604800
@       IN      SOA     dns.lab.local. admin.lab.local. (
                              2         ; Serial
                         604800         ; Refresh
                          86400         ; Retry
                        2419200         ; Expire
                         604800 )       ; Negative Cache TTL
;
@       IN      NS      dns.lab.local.
dns     IN      A       192.168.139.10
web     IN      A       192.168.139.20
```

!(3.PNG)

### 1.4 Tạo file zone ngược (db.192.168.139) với bản ghi PTR
```bash
sudo cp /etc/bind/db.127 /etc/bind/db.192.168.139
sudo nano /etc/bind/db.192.168.139
```

Edit file thành:
```
$TTL    604800
@       IN      SOA     dns.lab.local. admin.lab.local. (
                              1         ; Serial
                         604800         ; Refresh
                          86400         ; Retry
                        2419200         ; Expire
                         604800 )       ; Negative Cache TTL
;
@       IN      NS      dns.lab.local.
10      IN      PTR     dns.lab.local.
20      IN      PTR     web.lab.local.
```

!(4.PNG)

### 1.5 Kiểm tra cú pháp trước khi khởi động lại
```bash
sudo named-checkconf
sudo named-checkzone lab.local /etc/bind/db.lab.local
sudo named-checkzone 139.168.192.in-addr.arpa /etc/bind/db.192.168.139
sudo systemctl restart named
systemctl status named --no-pager
```

!(5.PNG)


## 2. Kiểm tra DNS (từ máy khách)

### 2.1 Trỏ máy khách về DNS server (tạm thời, trước khi cấu hình DHCP)
```bash
sudo resolvectl dns enp0s8 192.168.139.10
sudo resolvectl domain enp0s8 lab.local
```
!(6.PNG)

### 2.2 Phân giải thuận
```bash
dig @192.168.139.10 dns.lab.local A +short
dig @192.168.139.10 web.lab.local A +short
getent hosts dns.lab.local
getent hosts web.lab.local
```

!(7.PNG)

### 2.3 Phân giải ngược
```bash
dig @192.168.139.10 -x 192.168.139.10 +short
```
!(8.PNG)

### 2.4 Trạng thái và nhật ký dịch vụ DNS (trên server)
```bash
systemctl status named --no-pager
sudo journalctl -u named --no-pager -n 50
```
!(9.PNG)

## 3. Cấu hình DHCP (trên server)

### 3.1 Cài đặt isc-dhcp-server
```bash
sudo apt update
sudo apt install -y isc-dhcp-server
```
!(10.PNG)

### 3.2 Chỉ định interface lắng nghe DHCP
```bash
sudo sed -i 's/^INTERFACESv4=.*/INTERFACESv4="enp0s8"/' /etc/default/isc-dhcp-server
```
!(11.PNG)

### 3.3 Khai báo subnet, dải cấp phát, gateway, DNS, domain
```bash
sudo tee -a /etc/dhcp/dhcpd.conf > /dev/null <<'EOF'
subnet 192.168.139.0 netmask 255.255.255.0 {
    range 192.168.139.100 192.168.139.150;
    option subnet-mask 255.255.255.0;
    option routers 192.168.139.1;
    option domain-name-servers 192.168.139.10;
    option domain-name "lab.local";
    default-lease-time 600;
    max-lease-time 7200;
}
EOF
```
!(12.PNG)

### 3.4 Kiểm tra cú pháp và khởi động dịch vụ
```bash
sudo dhcpd -t -cf /etc/dhcp/dhcpd.conf
sudo systemctl enable --now isc-dhcp-server
systemctl status isc-dhcp-server --no-pager
```
!(13.PNG)

## 4. Kiểm tra DHCP (trên máy khách)

### 4.1 Giải phóng và yêu cầu cấp lại địa chỉ IP
```bash
sudo dhclient -r enp0s8
sudo dhclient -v enp0s8
```
!(14.PNG)

### 4.2 Kiểm tra IP, gateway, DNS nhận được
```bash
ip -4 addr show enp0s8
ip route | grep default
resolvectl status enp0s8
```
!(15.PNG)

### 4.3 Xác định thời gian thuê địa chỉ
```bash
cat /var/lib/dhcp/dhclient.leases
```
!(16.PNG)

### 4.4 Truy vấn các bản ghi DNS đã tạo (qua DNS server nhận từ DHCP)
```bash
dig dns.lab.local A +short
dig web.lab.local A +short
```
!(17.PNG)

### 4.5 Kiểm tra thông tin cấp phát và nhật ký trên máy chủ DHCP
```bash
cat /var/lib/dhcp/dhcpd.leases
sudo journalctl -u isc-dhcp-server --no-pager -n 50
```
!(18.PNG)