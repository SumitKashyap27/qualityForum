import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    const token = await getToken({ req: req });
    const data = await req.json();
    if (token && token.user.id) {
      const response = await prisma.user.create({
        data: data,
      });
      return NextResponse.json({ data: response }, { status: 200 });
    }
    return NextResponse.json({ data: "unauthorized" }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
