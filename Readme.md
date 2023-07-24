## ARK

This is my first TS project. ARK is a website where people can sell their art. 

This project is just me trying to lear TS, Microservices, Kubernetes, NodeJS. It is basically a walkthrough of the Udemy course https://www.udemy.com/course/microservices-with-node-js-and-react/ by Stephen Grider.

# BUILD

To build this project now you just need to:

1) Turn Docker and Kubernetes on.

2) Run `kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.8.1/deploy/static/provider/cloud/deploy.yaml` for using the nginx ingress

3) Run `npm install` inside the auth folder.

4) Build the docker image on /auth with:

`docker build -t caio/auth`.

5) Run

`skaffold dev`.

# Secret 

You would probably need to define a secret (for the JWT) on your Kubernetes by using 

`kubectl create secret generic jwt-secret --from-literal=JWT_KEY=yoursecret`

