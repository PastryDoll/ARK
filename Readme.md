## ARK

This is my first TS project. ARK is a website where people can sell their art. 

This project is just me trying to lear TS, Microservices, Kubernetes, NodeJS. It is basically a walkthrough of the Udemy course https://www.udemy.com/course/microservices-with-node-js-and-react/ by Stephen Grider.

# BUILD

To build this project now you just need to build the docker image on /auth with (dont forget to run `npm install`) 

`docker build -t caio/auth`.

Then you should run

`skaffold dev`.

