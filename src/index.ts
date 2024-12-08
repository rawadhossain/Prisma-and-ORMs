import { PrismaClient } from '@prisma/client';

const client = new PrismaClient();

//insert values into "User" table
async function createUser() {
    await client.user.create({
        data: {
            username: 'rwd',
            password: '1234',
            age: 20,
            city: 'Dhaka',
        },
    });
}

//delete record
async function deleteUser() {
    await client.user.delete({
        where: {
            id: 1,
        },
    });
}

//update User
async function updateUser() {
    await client.user.update({
        where: {
            id: 1,
        },
        data: {
            username: 'rwd123',
        },
    });
}

//read record
async function readUser() {
    /*
    findFirst => for one record
    findMany => for multiple record 
    */
    const user = await client.user.findFirst({
        where: {
            id: 100,
        },

        select: {
            username: true, //select only username to log
        },
    });
    console.log(user); //can be a value of null so '?'
}

// createUser();
// deleteUser();
// updateUser();
readUser();
