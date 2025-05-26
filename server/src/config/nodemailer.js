import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  secure: false, // TLS
  auth: {
    user: "marjorie.abbott@ethereal.email", // Auto-generated test account
    pass: "sY4nzqP5V1JxYbJQfH", // Auto-generated password
  },
});

export default transporter;
