import nodemailer, { SendMailOptions } from "nodemailer";
import config from "config";
import { log } from "./";

const smtp = config.get<{
  user: string;
  pass: string;
  service: string;
}>("smtp");

const transporter = nodemailer.createTransport({
  ...smtp,
  auth: { user: smtp.user, pass: smtp.pass },
  tls: {
    rejectUnauthorized: false,
  },
});

async function sendEmail(payload: SendMailOptions) {
  transporter.sendMail(payload, (err, info) => {
    if (err) {
      log.error(err, "Error sending email");
      return;
    }

    log.info(`Preview URL: ${nodemailer.getTestMessageUrl(info)}`);
  });
}

export default sendEmail;
