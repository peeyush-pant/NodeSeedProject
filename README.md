# Node.js microsevice seed project

### Technologies used

1. Node.js
2. MongoDB 


### Dependencies:

1.  body-parser : This extracts the entire body portion of an incoming request stream and exposes it on req.body.
2.  cors : To enable cross origin request.
3.  dotenv : It loads environment variables from a .env file into process.env.
4.  express : Our choice of Node.js web application framework that provides a robust set of features for web and mobile applications.
5.  helmet : It helps by securing our Express apps by setting various HTTP headers.
6.  mongodb : Our prefered NoSQL DB.
7.  mongoose : Object Data Modeling (ODM) library for MongoDB and Node.js.
8.  mongoose-long : Provides Number Long support for Mongoose.
9.  morgan : HTTP request logger middleware for node.js.
10. winston : For storing logs into a file.
11. winston-daily-rotate-file : A transport for winston which logs to a rotating file.

### Dev dependencies:

1. eslint : Static code analysis tool for identifying problematic patterns found in our JavaScript code.
2. eslint-config-google : ESLint shareable config for the Google JavaScript style guide
3. eslint-plugin-mocha : ESLint rules for mocha.
4. mocha : Our choice of javaScript test framework.
5. nodemon : Simple monitor script for use during development of a node.js app.
6. should : It is an expressive, readable, framework-agnostic assertion library.
7. supertest : Small progressive client-side HTTP request library.



### Environment variables
Two set of configuration is used in the application.
One will be used in production and the other during development.

##### During development:
1. Make sure that .env file's ***NODE_ENV*** variable is set to ***development***.
2. All the environment variables used in the application during production are present in this .env file.
3. Environment variables whose name start with Development will be used.

##### During production:
1. Make sure that .env file's ***NODE_ENV*** variable is set to ***production***.
2. All the environment variables used in the application during production are present in this .env file.
3. Environment variables whose name start with Production will be used.

---
### Steps to run

Required:  **node** and **npm**

1. Clone the project and move into the root of the project
2. Run the following commands
    ```
    npm install
    ```
3. To start the server use
    ```
    npm start
    ```

4. Update the following files for connection to your db.
    1. .env
    2. app/model/test.model.js

5. Update the controller according to the data in your collection.

---
### Steps to deploy

Required:  **node** and **npm**

1. Clone the project and move into the root of the project
2. Run the following commands
    ```
    npm run deploy
    ```

---
### Commands
    1. "npm start": Start the node server.
    2. "npm run deploy": Deploy and start the pm2 server using the ecosystem.config.js.
    3. "npm run reload deploy": Reload all the pm2 servers running.
    4. "npm test": Run the unit tests.
    5. "stop-server": Stop all pm2 servers named 'BinaryInfo Microservice'.
