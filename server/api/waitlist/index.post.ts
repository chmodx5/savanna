import { defineEventHandler, readBody } from "h3";
import prisma from "~/lib/db";

export default defineEventHandler(async (event) => {
    // get and validate the form data
    const body = await readBody(event);

    if (!body.email) {
        throw createError({
            statusCode: 400,
            message: "Please provide an email",
        });
    }

    // check if it is in the database
    const checkIfEmailExits = await prisma.waitlist.findUnique({
        where: {
            email: body.email,
        },
    });

    if (checkIfEmailExits && checkIfEmailExits.id) {
        throw createError({
            statusCode: 400,
            message: "Email already registered",
        });
    }

    // store it in the database
    const storeUser = await prisma.waitlist.create({
        data: {
            email: body.email,
        },
    });

    // check if the store has not been created
    if (!storeUser) {
        throw createError({
            statusCode: 500,
            message: "Something went wrong creating the user, try again",
        });
    }

    // return success response
    return {
        statusCode: 200,
        message: "Email added successfuly",
    };
});
