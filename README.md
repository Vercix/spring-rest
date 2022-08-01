<h1 align="center">Spring Rest & React</h1>

# About

This is a starter project, implementing Spring Data Rest and React. Just a simple ToDo app. But should have everything needed to implement a usable full stack app. 

# How to use

You can start the spring project by running the foolowing command in the root folder

```bash
mvn spring-boot:run
```

You can access the server on [http://localhost:8080](http://localhost:8080) with your browser.

It implements Spring Frontend. So the React app is build upon running the above command. The React app can be found in:

```
/src/main/ui
```

# Config

You can change the app configuration in 
```
/src/main/resources/application.properties
```

There are 2 settings there already. 

```
server.port=8080
```

This sets the port that the server will run on.

```
spring.data.rest.base-path=/api
```
This sets the base path for spring boot data rest to be served from.

Specifically in this application it would serve 

# Acknoledgments

This application is mainly based on [this](https://spring.io/guides/tutorials/react-and-spring-data-rest/) tutorial on the official spring website.

