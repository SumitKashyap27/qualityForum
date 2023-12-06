import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
const bcrypt = require("bcryptjs");

const prisma = new PrismaClient();

export async function POST(req) {
  try {
    const token = await getToken({ req: req });
    const data = await req.json();
    const { type, satisfied } = data;

    if (token && token.user.id) {
      // Check if a record with the given type already exists
      const existingRecord = await prisma.satisfaction.findUnique({
        where: { type: type },
      });

      if (existingRecord) {
        // If the record exists, update it
        const updatedRecord = await prisma.satisfaction.update({
          where: { type: type },
          data: { satisfied: satisfied },
        });

        return NextResponse.json({ data: updatedRecord }, { status: 200 });
      } else {
        // If the record does not exist, create a new one
        const newRecord = await prisma.satisfaction.create({
          data: { type: type, satisfied: satisfied },
        });

        return NextResponse.json({ data: newRecord }, { status: 200 });
      }
    }

    return NextResponse.json({ data: "unauthorized" }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
