import { Mailer } from "@/app/mailer";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const { email } = await req.json();

    const mailer = new Mailer();

    try {
        await mailer.sendEmail({
            to: 'info@amaroamaurio.it',
            subject: "Nuovo iscritto",
            text: email,
        });

        return NextResponse.json({ message: "Email registrata" });
    } catch (error) {
        return NextResponse.json({ message: "Email non registrata, riprovare" }, { status: 500 });
    }
}