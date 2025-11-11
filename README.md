# canvass-app

A minimal canvassing web app that allows you to create contacts and save notes about them.

## How to run the program

You must have `node` and `mysql` installed locally to run this program.

1. First we'll configure the database. Create a `.env` file in the `/server` directory. Copy the `.env-example` file and fill in your own `mysql user` variables

```
DB_HOST=localhost
DB_PORT=3306
DB_USER=your_user
DB_PASSWORD=your_password
DB_NAME=canvassdb
```

2. Lets start the service. In the same `server` directory the following commands will build the typescript types, create the database, and start the express service.

```
npm run build
npm start
```

3. In a separate terminal start the client app

```
cd client
npm start
```

## Contacts API

The following routes are being used by the client service.

_To create a new contact_

```
POST: http://localhost:8080/contact/

{
  "firstName": "Deanna",
  "lastName": "Troi",
  "notes": "Empathetic, willing to help in any way she can"
}

```

_To retrieve all contacts_

```
GET: http://localhost:8080/contacts/
```

## DB Schema

Database - `canvassdb`

`Contacts` table schema

```
CREATE TABLE IF NOT EXISTS contacts (
    id INT AUTO_INCREMENT,
    firstName VARCHAR(100) NOT NULL,
    lastName VARCHAR(100),
    notes VARCHAR(8000),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id)
  )
```
