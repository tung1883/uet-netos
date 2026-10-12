# Lab 8
## Họ và tên: Nguyễn Đức Tùng - MSV: 21020556

- Máy chủ `ubuntu-server` với user tung1883
- Máy khách `ubuntu-client` với user tung1884

## 1. Cấu hình mạng bằng Netplan
- Tạo file cấu hình cho `enp0s8`.
```bash
sudo tee /etc/netplan/02-hostonly.yaml > /dev/null <<'EOF'
network:
  version: 2
  ethernets:
    enp0s8:
      dhcp4: false
      addresses: [192.168.139.10/24]
      nameservers:
        addresses: [8.8.8.8, 1.1.1.1]
EOF
sudo chmod 600 /etc/netplan/02-hostonly.yaml
```

- Áp dụng file config
```bash
sudo netplan generate
sudo netplan try
```

!(1.PNG)

## 2. Kiểm tra kết nối

### 2.1 Trạng thái giao diện
```bash
ip link show enp0s8
ip -br a show enp0s8
```
!(2.PNG)

### 2.2 Kết nối tới default gateway
```bash
ip r | grep default
ping -c 4 10.0.2.2
```
!(3.PNG)


### 2.3 Kết nối giữa máy khách và máy chủ
Trên máy khách:
```bash
ping -c 4 192.168.139.10
```
!(4.PNG)

### 2.4 Phân giải tên miền
```bash
resolvectl query example.com
getent hosts example.com
```
!(5.PNG)

## 3. Cấu hình dịch vụ SSH

### 3.1 Cài OpenSSH Server (máy chủ)
```bash
sudo apt update
sudo apt install -y openssh-server
```

### 3.2 Tự khởi động cùng hệ thống
```bash
sudo systemctl enable --now ssh
systemctl is-enabled ssh
```

### 3.3 Trạng thái dịch vụ và cổng 22
```bash
systemctl status ssh --no-pager
sudo ss -tlnp | grep :22
```
!(6.PNG)


### 3.4 Đăng nhập từ máy khách bằng mật khẩu
Trên máy khách:
```bash
ssh tung1883@192.168.139.10
exit
```
!(7.PNG)


## 4. Xác thực bằng khóa công khai

### 4.1 Tạo cặp khóa trên máy khách
```bash
ssh-keygen -t ed25519 -f ~/.ssh/lab8_key -C "lab8" -N ""
ls -l ~/.ssh/lab8_key ~/.ssh/lab8_key.pub
```
!(8.PNG)

### 4.2 Chuyển public key sang máy chủ
```bash
ssh-copy-id -i ~/.ssh/lab8_key.pub tung1883@192.168.139.10
```
!(9.PNG)


### 4.3 Đăng nhập lại bằng khóa
```bash
ssh -i ~/.ssh/lab8_key -o PasswordAuthentication=no -o PreferredAuthentications=publickey tung1883@192.168.139.10 "hostname; whoami"
```
!(10.PNG)


## 5. Truyền tệp bằng SFTP

### 5.1 Tạo tệp văn bản trên máy khách
```bash
echo "Lab 8 - tep tu may khach" > ~/lab8_client.txt
cat ~/lab8_client.txt
```
!(11.PNG)


### 5.2 Kết nối SFTP tới máy chủ
```bash
sftp -i ~/.ssh/lab8_key tung1883@192.168.139.10
```
!(12.PNG)

### 5.3 Tải tệp lên máy chủ
Trong phiên `sftp>`:
```
cd /home/tung1883
put /home/tung1884/lab8_client.txt
```
!(13.PNG)


### 5.4 Tải tệp từ máy chủ về máy khách
Trên máy chủ, tạo tệp mẫu:
```bash
echo "Lab 8 - tep tu may chu" > /home/tung1883/lab8_server.txt
cat ~/lab8_server.txt
```
!(14.PNG)

Trong phiên `sftp>` trên máy khách:
```
cd /home/tung1883
get lab8_server.txt /home/tung1884/lab8_server.txt
exit
```
!(15.PNG)

### 5.5 Kiểm tra nội dung và vị trí
Trên máy chủ:
```bash
ls -l /home/tung1883/lab8_client.txt
cat /home/tung1883/lab8_client.txt
```
!(16.PNG)

Trên máy khách:
```bash
ls -l ~/lab8_server.txt
cat ~/lab8_server.txt
```
!(17.PNG)

