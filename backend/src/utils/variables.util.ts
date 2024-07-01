const { env } = process as {env: { [key: string]: string }};
export const MONGODB_URI = env.MONGODB_URI;
export const PORT = env.PORT;
export const NODEMAILER_SMTP_HOST = env.NODEMAILER_SMTP_HOST;
export const NODEMAILER_SMTP_PORT = env.NODEMAILER_SMTP_PORT;
export const NODEMAILER_SMTP_USER = env.NODEMAILER_SMTP_USER;
export const NODEMAILER_SMTP_PASS = env.NODEMAILER_SMTP_PASS;