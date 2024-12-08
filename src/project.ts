// move it to index.ts to run it sucessfully

import express from 'express';
import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const app = express();
const client = new PrismaClient();

app.get('/users', async (req: Request, res: Response) => {
    const users = await client.user.findMany();

    res.json({
        users,
    });
});

//to get dor specific id
app.get('/todos/:id', async (req: Request, res: Response) => {
    const id = req.params.id; // takes sas string "1"

    const user = await client.user.findFirst({
        where: {
            id: Number(id), //converts string to number
        },
        select: {
            todos: true,

            username: true,
            password: true,
        },
    });

    res.json({
        user,
    });
});

app.listen(3000);
