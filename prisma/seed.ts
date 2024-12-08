import { PrismaClient } from '@prisma/client';

const client = new PrismaClient();

async function createDummyUsers() {
    const user = await client.user.create({
        data: {
            username: 'rwkyktyd',
            password: '1234',
            age: 20,
            city: 'Dhaka',
        },
    });

    await client.todo.createMany({
        data: [
            {
                title: 'Todo 1',
                description: 'Description 1',
                done: false,
                userId: user.id,
            },
            {
                title: 'Todo 2',
                description: 'Description 2',
                done: false,
                userId: user.id,
            },
        ],
    });
}
