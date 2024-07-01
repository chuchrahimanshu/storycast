import nodemailer from "nodemailer";

import { 
    NODEMAILER_SMTP_HOST, 
    NODEMAILER_SMTP_PASS, 
    NODEMAILER_SMTP_PORT, 
    NODEMAILER_SMTP_USER 
} from "src/utils/variables.util";

const transport = nodemailer.createTransport({
    host: NODEMAILER_SMTP_HOST,
    port: Number(NODEMAILER_SMTP_PORT),
    auth: {
        user: NODEMAILER_SMTP_USER,
        pass: NODEMAILER_SMTP_PASS
    }
});

export { transport };