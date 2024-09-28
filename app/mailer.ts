import nodemailer, { Transporter } from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';
import SMTPPool from 'nodemailer/lib/smtp-pool';
import SMTPTransport from 'nodemailer/lib/smtp-transport';

export class Mailer {
    transport: Transporter<SMTPTransport.SentMessageInfo, SMTPTransport.Options>;

    constructor() {
        if (!process.env.MAIL_HOST || !process.env.MAIL_PORT || !process.env.MAIL_USER || !process.env.MAIL_PASS) {
            throw new Error("Email configuration is missing");
        }

        this.transport = nodemailer.createTransport({
            host: process.env.MAIL_HOST,
            port: parseInt(process.env.MAIL_PORT),
            secure: true,
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS
            }
        } as SMTPTransport.Options);
    }

    sendEmail({ to, subject, text }: { to: string, subject: string, text: string }) {
        const mailOps: Mail.Options = {
            from: process.env.MAIL_FROM,
            to,
            subject,
            text,
        };

        return new Promise((resolve, reject) => {
            this.transport.sendMail(mailOps, (err, info) => {
                if (err) {
                    return reject(err);
                }

                return resolve(info);
            });
        });
    }
}