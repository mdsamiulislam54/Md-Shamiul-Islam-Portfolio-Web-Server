import { sendMail } from "../../config/sendMessage"
import { Contact } from "../../generated/prisma/client"
import { prisma } from "../../lib/prisma";

const sendMessage = async (payload: Contact) => {
    await sendMail(payload);
    const contact = await prisma.contact.create({
        data: payload,
    });
    return contact
}

const getAllMessages = async () => {
    return await prisma.contact.findMany({
        where: {
            isDelete: false
        },
        orderBy: {
            createdAt: "desc",
        },
    });
};

const getSingleMessage = async (id: string) => {
    return await prisma.contact.findUnique({
        where: {
            id,
        },
    });
};

const deleteMessage = async (id: string) => {
    const contact = await prisma.contact.update({
        where: {
            id,
            isDelete: false
        },
        data: { isDelete: true }
    });

    return contact;
};

export const contactService = {
    sendMessage,
    getAllMessages,
    getSingleMessage,
    deleteMessage,
};