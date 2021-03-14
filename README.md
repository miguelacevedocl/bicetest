# Starting with this test

To work with this template **locally (debug mode)**, follow these commands:

    npm run install:all # Install all dependencies required for both NodeJS and Angular
    npm run node # Run the NodeJS on debug mode
    npm run angular # Run Angular

We don't run the `npm start` command as it is reserved only for the compiled code to run on a production server.

In order to compile and build this template for your **production server** run the following:

    npm run install:all # Install all dependencies required for both NodeJS and Angular
    npm run build # Run the build.sh script to compile and NodeJS and Angular for production
    npm start

These list of commands will install, compile and run the output NodeJS.
