# React // Node + Express // Mongo + Mongoose template

## Running the stack

docker-compose up -d

## Running the stack with logs

docker-compose up -d && docker-compose logs -f

## Stopping the stack

docker-compose down

## Mongo

Mongo database volume is mapped to ./dbdata, if api can't find user/initial user data is changed, you can:

1. docker-compose down
2. delete dbdata folder
3. docker-compose up -d

This will create a fresh database and initialise a new database with the MONGO_USERNAME and MONGO_PASSWORD specified in the .env file.
