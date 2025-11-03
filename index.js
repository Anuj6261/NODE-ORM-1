
const  db = require('./db/index.js');
const { usersTable } = require('./drizzle/schema.js');

async function getAllUsers()
{
    const users = await db.select().from(usersTable);
    console.log(users);
    return users;
}

async function createUser({id,name,email}){
    await db.insert(usersTable).values({
        id,
        name,
        email
    })
}

getAllUsers();