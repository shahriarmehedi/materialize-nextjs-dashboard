// create user using prisma

import { PrismaClient } from '@prisma/client';
import { hash } from 'bcryptjs';

const prisma = new PrismaClient();


// GET ALL USERS

export const GET = async (req, res) => {
    try {
        const users = await prisma.user.findMany();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// CREATE USER

export const POST = async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const user = await prisma.user.create({
            data: {
                username,
                email,
                password: await hash(password, 10),
            },
        });
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


