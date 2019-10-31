#Deployment notes

Web Servers run web applications

- accept requests from clients
- send back responses to clients

web servers are a software running on someone's machine

[client] === [web server (mutiple web applications/apis)]

Dev process

- write code
- commit and push
- profit (it's deployed automatically to heroku)

Steps to prepare our API for deployment to Heroku

- dynamic port
- setup a `start` script that uses 'node' to run server

The environment is the platform (the place/operating system/machine) where the app is running
