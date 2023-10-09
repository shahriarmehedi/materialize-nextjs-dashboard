// create user using prisma

import { hash } from 'bcryptjs';
import { NextResponse } from 'next/server';
import prisma from '../../libs/prismadb';


// GET ALL USERS

export const GET = async (req, res) => {
    try {
        const users = await prisma.user.findMany();
        return NextResponse.json({
            success: true,
            message: "success get all users",
            data: users
        });

    } catch (error) {
        return NextResponse.json({
            success: false,
            message: error.message,
            data: null
        });
    }
};

// CREATE USER

export const POST = async (request) => {
    const body = await request.json();
    const { username, email, password } = body;
    try {
        const user = await prisma.user.create({
            data: {
                username,
                email,
                password: await hash(password, 10),
            },
        });
        return NextResponse.json({
            success: true,
            message: "success create user",
            data: user
        });

    } catch (error) {
        return NextResponse.json({
            success: false,
            message: error.message,
            data: null
        });
    }
};


