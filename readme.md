HOW TO START APP
1. npm install
2. npm run start 
PLEASE NOT 
1. .env is also pushed
2. your system must have node & postgresql installed
3. you will need to run migration. (before than you will have to compile using tsc or using npm run start which also compiles your app) You will first need to go dist folder and run `npx knex migrate:latest`. 

NOTE: we had to navigate to dist folder and knexfile.js is compile there only. This is done because otherwise had to create migrations and configuration in js only. 

This is an Node APP for groceries booking.
Following Tech is used
1. Express js (to manage server & routes)
2. npm (to add or remove node package)
3. typescript
4. eslint 
5. nodemon (to watch changes and restart the server)
6. bcrypt
7. pg (postgreSQL client for node)
8. Knexjs (Query builder for our app)
8. jsonwebtoken (for token based authentication)


