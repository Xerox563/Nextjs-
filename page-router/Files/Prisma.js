/* Prisma is a helper for your server side code that makes talkign to your tb much easier .
-> It is a next gen ORM tool for nodejs and ts. It acts as a bridge between your code and your database allowing you to interact with your data .
* Prisma Client 
-> Library which is created by the Prisma , which lets your code talk to the db using easy commands .
-> We use it like by importing Prisma Client in our Code .

* Prisma Schema 
-> schema.prisma -> describes what your data looks like .
-> Includes all of our Models

* Model
-> Think of it as a blueprint for a kind of thing you want to store. For example, a “Todo” model describes a todo item.
How you use it?
In schema.prisma:
------
model Todo {
  id        Int      @id @default(autoincrement())
  title     String
  completed Boolean  @default(false)
}  

* Migration 
-> Its a change you make to your db structure , like adding or removing the table..
-> Done by running a command (npx prisma migrate dev) and Prisma updates your database to match your models.

* Prisma Studio
-> A visual tool (like a mini admin dashboard) to look at and edit your data in the browser.
-> Run npx prisma studio and a webpage opens where you can see your todos.

* Datasource
-> This tells Prisma what kind of database you are using and where to find it.
-> In your schema.prisma, you set it up like:
datasource db {
  provider = "sqlite"
  url      = env("DATABASE_URL")
}

* Generator
-> This tells Prisma what tools to make for you. By default, it makes the Prisma Client.
-> In your schema.prisma:

generator client {
  provider = "prisma-client-js"
}


---------------
* WORKFLOW
-> You write your models in schema.prisma.
Think of this as telling Prisma what kind of data you want to store in your database.
Example:
“I want to store todos. Each todo should have an id, a title, and a status if it’s done or not.”
-- code 
---
model todo {
 id Int @id@default(autoincrement())
 title String
 compeleted Boolean @default(false) 
}
--- 
!!!
-> You run a migration command to update your database.
   Now you need to tell your actual database to create a place(a table) for your todos. 

---
  npx prisma migrate dev --name init
  This tells Prisma to look at your model and create the matching table in your database.
!!!

-> Prisma generates the Prisma Client for you, based on your models.
after You run the migrartion, Prisma creates a special librray just for your project. this Library knows all about your todo model.
!!!

-> You use Prisma Client in your code to create, read, update, or delete data (CRUD operations).
-> Use Prisma Studio to see/edit your data visually.
---
 npx prisma studio
!!!
*/
