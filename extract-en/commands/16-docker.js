const WEEKS = require('../weeks');
module.exports = {
  category: 'docker',
  week: WEEKS.W9_TH16,
  commands: [
    {
      name: 'docker pull',
      description: 'download an image onto the machine from a registry (e.g. Docker Hub)',
      flags: [],
      scenarios: [
        { task: 'Pull the latest nginx image from Docker Hub', accepted: ['docker pull nginx'] },
      ],
    },
    {
      name: 'docker run',
      description: 'create and start a new container from an image',
      flags: [
        { flag: '-d', meaning: 'run the container in the background (detached)' },
        { flag: '-p <host>:<container>', meaning: 'map a port from the host machine to the container' },
        { flag: '-v <host>:<container>', meaning: 'mount a directory/volume from the host into the container' },
        { flag: '--name <name>', meaning: 'give the container a name instead of a random one' },
        { flag: '-e <KEY>=<value>', meaning: 'pass an environment variable into the container' },
        { flag: '--rm', meaning: 'automatically remove the container when it stops' },
      ],
      scenarios: [
        { task: 'Run an nginx container in the background, mapping host port 8080 to container port 80', accepted: ['docker run -d -p 8080:80 nginx'] },
        { task: 'Run an nginx container named mysite, mapping port 80, mounting directory ./html into /usr/share/nginx/html', accepted: ['docker run -d --name mysite -p 80:80 -v ./html:/usr/share/nginx/html nginx'] },
      ],
    },
    {
      name: 'docker ps',
      description: 'list running containers',
      flags: [
        { flag: '-a', meaning: 'list all containers, including stopped ones' },
      ],
      scenarios: [
        { task: 'List all containers, including stopped ones', accepted: ['docker ps -a'] },
        { task: 'View the list of currently running containers', accepted: ['docker ps'] },
      ],
    },
    {
      name: 'docker stop',
      description: 'stop a running container',
      flags: [],
      scenarios: [
        { task: 'Stop the container named mysite', accepted: ['docker stop mysite'] },
      ],
    },
    {
      name: 'docker start',
      description: 'start a previously stopped container again (does not create a new one)',
      flags: [],
      scenarios: [
        { task: 'Start the stopped container mysite again', accepted: ['docker start mysite'] },
      ],
    },
    {
      name: 'docker restart',
      description: 'restart (stop then run again) a container',
      flags: [],
      scenarios: [
        { task: 'Restart the container mysite', accepted: ['docker restart mysite'] },
      ],
    },
    {
      name: 'docker rm',
      description: 'remove a container (must be stopped first, unless using -f)',
      flags: [
        { flag: '-f', meaning: 'force-stop and remove the container even if it\'s currently running' },
      ],
      scenarios: [
        { task: 'Remove the stopped container mysite', accepted: ['docker rm mysite'] },
        { task: 'Force-remove container mysite even if it\'s running', accepted: ['docker rm -f mysite'] },
      ],
    },
    {
      name: 'docker rmi',
      description: 'remove an image from the machine',
      flags: [],
      scenarios: [
        { task: 'Remove the nginx image from the machine', accepted: ['docker rmi nginx'] },
      ],
    },
    {
      name: 'docker images',
      description: 'list the images currently present on the machine',
      flags: [],
      scenarios: [
        { task: 'View the list of images currently on the machine', accepted: ['docker images'] },
      ],
    },
    {
      name: 'docker logs',
      description: 'view the output log (stdout/stderr) of a container',
      flags: [
        { flag: '-f', meaning: 'continuously follow the log, like tail -f' },
      ],
      scenarios: [
        { task: 'Continuously follow the log of container mysite', accepted: ['docker logs -f mysite'] },
      ],
    },
    {
      name: 'docker exec',
      description: 'execute a command inside a running container',
      flags: [
        { flag: '-it', meaning: 'open an interactive session with a terminal (tty) into the container' },
      ],
      scenarios: [
        { task: 'Open an interactive bash shell inside the running container mysite', accepted: ['docker exec -it mysite bash', 'docker exec -it mysite /bin/bash'] },
      ],
    },
    {
      name: 'docker build',
      description: 'build a new image from a Dockerfile',
      flags: [
        { flag: '-t <name:tag>', meaning: 'name and tag the image being built' },
      ],
      scenarios: [
        { task: 'Build an image from the Dockerfile in the current directory, named myapp:1.0', accepted: ['docker build -t myapp:1.0 .'] },
      ],
    },
    {
      name: 'docker-compose up',
      description: 'start every service defined in the docker-compose.yml file',
      flags: [
        { flag: '-d', meaning: 'run in the background (detached)' },
      ],
      scenarios: [
        { task: 'Start every service in docker-compose.yml in the background', accepted: ['docker-compose up -d', 'docker compose up -d'] },
      ],
    },
    {
      name: 'docker volume ls',
      description: 'list the volumes currently available for persisting container data',
      flags: [],
      scenarios: [
        { task: 'View the list of existing Docker volumes', accepted: ['docker volume ls'] },
      ],
    },
  ],
};
