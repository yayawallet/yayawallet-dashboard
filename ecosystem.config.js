module.exports = {
   apps: [
     {
       name: "docker-compose-app",
       script: "docker-compose",
       args: "up",
       interpreter: "/usr/bin/docker-compose", // Use the path to your docker-compose installation
       watch: false,
     },
   ],
 };