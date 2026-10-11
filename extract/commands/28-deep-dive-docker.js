const WEEKS = require('../weeks');
module.exports = {
  category: 'deep-dive-docker',
  week: WEEKS.W9_TH16,
  commands: [
    {
      name: 'docker network ls',
      description: 'liệt kê các mạng ảo Docker hiện có trên máy',
      flags: [],
      scenarios: [
        { task: 'Xem danh sách các mạng Docker hiện có', accepted: ['docker network ls'] },
      ],
    },
    {
      name: 'docker network create',
      description: 'tạo một mạng ảo Docker mới, cho phép các container giao tiếp với nhau theo tên',
      flags: [
        { flag: '--driver bridge', meaning: 'chỉ định driver bridge (mặc định) cho mạng Docker' },
      ],
      scenarios: [
        { task: 'Tạo một mạng Docker mới tên app-network', accepted: ['docker network create app-network'] },
      ],
    },
    {
      name: 'docker network connect',
      description: 'kết nối một container đang chạy vào một mạng Docker đã tồn tại',
      flags: [],
      scenarios: [
        { task: 'Kết nối container mysite vào mạng app-network', accepted: ['docker network connect app-network mysite'] },
      ],
    },
    {
      name: 'docker inspect',
      description: 'hiển thị thông tin cấu hình chi tiết dạng JSON của một container hoặc image',
      flags: [
        { flag: "-f '{{.State.Status}}'", meaning: 'chỉ trích xuất một trường cụ thể từ kết quả JSON bằng Go template' },
      ],
      scenarios: [
        { task: 'Xem thông tin chi tiết cấu hình của container mysite', accepted: ['docker inspect mysite'] },
        { task: 'Chỉ lấy địa chỉ IP nội bộ của container mysite từ docker inspect', accepted: ["docker inspect -f '{{.NetworkSettings.IPAddress}}' mysite"] },
      ],
    },
    {
      name: 'docker cp',
      description: 'sao chép tệp/thư mục giữa máy host và một container',
      flags: [],
      scenarios: [
        { task: 'Sao chép tệp config.conf từ máy host vào container mysite tại /etc/app/', accepted: ['docker cp config.conf mysite:/etc/app/'] },
        { task: 'Sao chép tệp /var/log/app.log từ container mysite ra máy host', accepted: ['docker cp mysite:/var/log/app.log .'] },
      ],
    },
    {
      name: 'docker tag',
      description: 'gán thêm một tên/tag mới cho một image đã có, thường dùng trước khi push lên registry',
      flags: [],
      scenarios: [
        { task: 'Gán tag myapp:1.0 thành myapp:latest', accepted: ['docker tag myapp:1.0 myapp:latest'] },
      ],
    },
    {
      name: 'docker push',
      description: 'đẩy (upload) một image lên registry (vd: Docker Hub)',
      flags: [],
      scenarios: [
        { task: 'Đẩy image myapp:latest lên Docker Hub', accepted: ['docker push myapp:latest'] },
      ],
    },
    {
      name: 'docker system prune',
      description: 'dọn dẹp các container dừng, network không dùng, và image dangling để giải phóng dung lượng',
      flags: [
        { flag: '-a', meaning: 'dọn dẹp cả các image không được container nào sử dụng (không chỉ dangling)' },
        { flag: '--volumes', meaning: 'dọn dẹp cả các volume không còn được sử dụng' },
      ],
      scenarios: [
        { task: 'Dọn dẹp toàn bộ container dừng, network và image không dùng', accepted: ['docker system prune'] },
        { task: 'Dọn dẹp triệt để kể cả image không dùng và volume mồ côi', accepted: ['docker system prune -a --volumes'] },
      ],
    },
    {
      name: 'docker stats',
      description: 'hiển thị mức sử dụng tài nguyên (CPU, RAM, mạng) theo thời gian thực của các container đang chạy',
      flags: [],
      scenarios: [
        { task: 'Xem mức sử dụng tài nguyên theo thời gian thực của các container đang chạy', accepted: ['docker stats'] },
      ],
    },
    {
      name: 'docker-compose down',
      description: 'dừng và xóa toàn bộ các container, network được định nghĩa trong docker-compose.yml',
      flags: [
        { flag: '-v', meaning: 'xóa luôn cả các volume được định nghĩa trong docker-compose.yml' },
      ],
      scenarios: [
        { task: 'Dừng và xóa toàn bộ dịch vụ trong docker-compose.yml', accepted: ['docker-compose down', 'docker compose down'] },
        { task: 'Dừng, xóa toàn bộ dịch vụ và cả volume dữ liệu trong docker-compose.yml', accepted: ['docker-compose down -v', 'docker compose down -v'] },
      ],
    },
    {
      name: 'docker-compose logs',
      description: 'xem log của các dịch vụ được quản lý bởi docker-compose',
      flags: [
        { flag: '-f', meaning: 'theo dõi log liên tục giống tail -f' },
      ],
      scenarios: [
        { task: 'Theo dõi log liên tục của toàn bộ dịch vụ trong docker-compose', accepted: ['docker-compose logs -f', 'docker compose logs -f'] },
      ],
    },
    {
      name: 'docker-compose ps',
      description: 'liệt kê trạng thái các container được quản lý bởi docker-compose trong dự án hiện tại',
      flags: [],
      scenarios: [
        { task: 'Xem trạng thái các container trong docker-compose của dự án hiện tại', accepted: ['docker-compose ps', 'docker compose ps'] },
      ],
    },
  ],
};
