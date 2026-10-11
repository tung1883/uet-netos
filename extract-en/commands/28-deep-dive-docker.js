const WEEKS = require('../weeks');
module.exports = {
  category: 'deep-dive-docker',
  week: WEEKS.W9_TH16,
  commands: [
    {
      name: 'docker network ls',
      description: 'list the Docker virtual networks currently on the machine',
      flags: [],
      scenarios: [
        { task: 'View the list of existing Docker networks', accepted: ['docker network ls'] },
      ],
    },
    {
      name: 'docker network create',
      description: 'create a new Docker virtual network, letting containers communicate with each other by name',
      flags: [
        { flag: '--driver bridge', meaning: 'specify the bridge driver (default) for the Docker network' },
      ],
      scenarios: [
        { task: 'Create a new Docker network named app-network', accepted: ['docker network create app-network'] },
      ],
    },
    {
      name: 'docker network connect',
      description: 'connect a running container to an existing Docker network',
      flags: [],
      scenarios: [
        { task: 'Connect container mysite to network app-network', accepted: ['docker network connect app-network mysite'] },
      ],
    },
    {
      name: 'docker inspect',
      description: 'show detailed configuration info in JSON for a container or image',
      flags: [
        { flag: "-f '{{.State.Status}}'", meaning: 'extract just one specific field from the JSON result using a Go template' },
      ],
      scenarios: [
        { task: 'View detailed configuration info for container mysite', accepted: ['docker inspect mysite'] },
        { task: 'Get only the internal IP address of container mysite from docker inspect', accepted: ["docker inspect -f '{{.NetworkSettings.IPAddress}}' mysite"] },
      ],
    },
    {
      name: 'docker cp',
      description: 'copy a file/directory between the host machine and a container',
      flags: [],
      scenarios: [
        { task: 'Copy file config.conf from the host machine into container mysite at /etc/app/', accepted: ['docker cp config.conf mysite:/etc/app/'] },
        { task: 'Copy file /var/log/app.log from container mysite out to the host machine', accepted: ['docker cp mysite:/var/log/app.log .'] },
      ],
    },
    {
      name: 'docker tag',
      description: 'add a new name/tag to an existing image, usually done before pushing it to a registry',
      flags: [],
      scenarios: [
        { task: 'Tag myapp:1.0 as myapp:latest', accepted: ['docker tag myapp:1.0 myapp:latest'] },
      ],
    },
    {
      name: 'docker push',
      description: 'upload an image to a registry (e.g. Docker Hub)',
      flags: [],
      scenarios: [
        { task: 'Push image myapp:latest to Docker Hub', accepted: ['docker push myapp:latest'] },
      ],
    },
    {
      name: 'docker system prune',
      description: 'clean up stopped containers, unused networks, and dangling images to free up space',
      flags: [
        { flag: '-a', meaning: 'also clean up images not used by any container (not just dangling ones)' },
        { flag: '--volumes', meaning: 'also clean up volumes that are no longer in use' },
      ],
      scenarios: [
        { task: 'Clean up every stopped container, unused network and unused image', accepted: ['docker system prune'] },
        { task: 'Thoroughly clean up, including unused images and orphaned volumes', accepted: ['docker system prune -a --volumes'] },
      ],
    },
    {
      name: 'docker stats',
      description: 'show real-time resource usage (CPU, RAM, network) of running containers',
      flags: [],
      scenarios: [
        { task: 'View real-time resource usage of running containers', accepted: ['docker stats'] },
      ],
    },
    {
      name: 'docker-compose down',
      description: 'stop and remove every container and network defined in docker-compose.yml',
      flags: [
        { flag: '-v', meaning: 'also remove the volumes defined in docker-compose.yml' },
      ],
      scenarios: [
        { task: 'Stop and remove every service in docker-compose.yml', accepted: ['docker-compose down', 'docker compose down'] },
        { task: 'Stop, remove every service and the data volumes in docker-compose.yml', accepted: ['docker-compose down -v', 'docker compose down -v'] },
      ],
    },
    {
      name: 'docker-compose logs',
      description: 'view the logs of services managed by docker-compose',
      flags: [
        { flag: '-f', meaning: 'continuously follow the log, like tail -f' },
      ],
      scenarios: [
        { task: 'Continuously follow the logs of every service in docker-compose', accepted: ['docker-compose logs -f', 'docker compose logs -f'] },
      ],
    },
    {
      name: 'docker-compose ps',
      description: 'list the status of the containers managed by docker-compose in the current project',
      flags: [],
      scenarios: [
        { task: 'View the status of the containers in the current project\'s docker-compose', accepted: ['docker-compose ps', 'docker compose ps'] },
      ],
    },
  ],
};
