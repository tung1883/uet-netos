const WEEKS = require('../weeks');
module.exports = {
  category: 'docker',
  week: WEEKS.W9_TH16,
  commands: [
    {
      name: 'docker pull',
      description: 'tải một image về máy từ registry (vd: Docker Hub)',
      flags: [],
      scenarios: [
        { task: 'Tải image nginx mới nhất từ Docker Hub', accepted: ['docker pull nginx'] },
      ],
    },
    {
      name: 'docker run',
      description: 'tạo và khởi chạy một container mới từ một image',
      flags: [
        { flag: '-d', meaning: 'chạy container ở chế độ nền (detached)' },
        { flag: '-p <host>:<container>', meaning: 'ánh xạ cổng từ máy host sang container' },
        { flag: '-v <host>:<container>', meaning: 'gắn kết (mount) thư mục/volume từ host vào container' },
        { flag: '--name <tên>', meaning: 'đặt tên cho container thay vì dùng tên ngẫu nhiên' },
        { flag: '-e <KEY>=<value>', meaning: 'truyền biến môi trường vào container' },
        { flag: '--rm', meaning: 'tự động xóa container khi nó dừng' },
      ],
      scenarios: [
        { task: 'Chạy container nginx ở chế độ nền, ánh xạ cổng 8080 của host sang cổng 80 của container', accepted: ['docker run -d -p 8080:80 nginx'] },
        { task: 'Chạy container nginx tên mysite, ánh xạ cổng 80, gắn kết thư mục ./html vào /usr/share/nginx/html', accepted: ['docker run -d --name mysite -p 80:80 -v ./html:/usr/share/nginx/html nginx'] },
      ],
    },
    {
      name: 'docker ps',
      description: 'liệt kê các container đang chạy',
      flags: [
        { flag: '-a', meaning: 'liệt kê tất cả container kể cả những container đã dừng' },
      ],
      scenarios: [
        { task: 'Liệt kê tất cả container kể cả đã dừng', accepted: ['docker ps -a'] },
        { task: 'Xem danh sách container đang chạy', accepted: ['docker ps'] },
      ],
    },
    {
      name: 'docker stop',
      description: 'dừng một container đang chạy',
      flags: [],
      scenarios: [
        { task: 'Dừng container tên mysite', accepted: ['docker stop mysite'] },
      ],
    },
    {
      name: 'docker start',
      description: 'khởi động lại một container đã dừng trước đó (không tạo mới)',
      flags: [],
      scenarios: [
        { task: 'Khởi động lại container mysite đã dừng', accepted: ['docker start mysite'] },
      ],
    },
    {
      name: 'docker restart',
      description: 'khởi động lại (dừng rồi chạy lại) một container',
      flags: [],
      scenarios: [
        { task: 'Khởi động lại container mysite', accepted: ['docker restart mysite'] },
      ],
    },
    {
      name: 'docker rm',
      description: 'xóa một container (phải dừng trước khi xóa, trừ khi dùng -f)',
      flags: [
        { flag: '-f', meaning: 'buộc dừng và xóa container ngay cả khi đang chạy' },
      ],
      scenarios: [
        { task: 'Xóa container mysite đã dừng', accepted: ['docker rm mysite'] },
        { task: 'Buộc xóa container mysite kể cả khi đang chạy', accepted: ['docker rm -f mysite'] },
      ],
    },
    {
      name: 'docker rmi',
      description: 'xóa một image khỏi máy',
      flags: [],
      scenarios: [
        { task: 'Xóa image nginx khỏi máy', accepted: ['docker rmi nginx'] },
      ],
    },
    {
      name: 'docker images',
      description: 'liệt kê các image hiện có trên máy',
      flags: [],
      scenarios: [
        { task: 'Xem danh sách các image hiện có trên máy', accepted: ['docker images'] },
      ],
    },
    {
      name: 'docker logs',
      description: 'xem log đầu ra (stdout/stderr) của một container',
      flags: [
        { flag: '-f', meaning: 'theo dõi log liên tục giống tail -f' },
      ],
      scenarios: [
        { task: 'Theo dõi log liên tục của container mysite', accepted: ['docker logs -f mysite'] },
      ],
    },
    {
      name: 'docker exec',
      description: 'thực thi một lệnh bên trong một container đang chạy',
      flags: [
        { flag: '-it', meaning: 'mở phiên tương tác (interactive) kèm terminal (tty) vào container' },
      ],
      scenarios: [
        { task: 'Mở shell bash tương tác bên trong container mysite đang chạy', accepted: ['docker exec -it mysite bash', 'docker exec -it mysite /bin/bash'] },
      ],
    },
    {
      name: 'docker build',
      description: 'xây dựng một image mới từ một Dockerfile',
      flags: [
        { flag: '-t <tên:tag>', meaning: 'đặt tên và tag cho image được xây dựng' },
      ],
      scenarios: [
        { task: 'Xây dựng image từ Dockerfile trong thư mục hiện tại, đặt tên myapp:1.0', accepted: ['docker build -t myapp:1.0 .'] },
      ],
    },
    {
      name: 'docker-compose up',
      description: 'khởi chạy toàn bộ các dịch vụ được định nghĩa trong tệp docker-compose.yml',
      flags: [
        { flag: '-d', meaning: 'chạy ở chế độ nền (detached)' },
      ],
      scenarios: [
        { task: 'Khởi chạy toàn bộ dịch vụ trong docker-compose.yml ở chế độ nền', accepted: ['docker-compose up -d', 'docker compose up -d'] },
      ],
    },
    {
      name: 'docker volume ls',
      description: 'liệt kê các volume hiện có dùng để lưu trữ dữ liệu bền vững cho container',
      flags: [],
      scenarios: [
        { task: 'Xem danh sách các Docker volume hiện có', accepted: ['docker volume ls'] },
      ],
    },
  ],
};
