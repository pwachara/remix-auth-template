import postmark from "postmark"
import { createVerifyEmailLink } from "./auth/verifyEmail.server";

var client = new postmark.ServerClient(process.env.MAIL_USER!);

export async function sendVerificationEmail(email: string) {
  
  const verifyLink = await createVerifyEmailLink(email);

  return client.sendEmail({
    "From": process.env.MAIL_FROM!,
    "To": "pwachara@hotmail.com",
    "Subject": "Verify your Email using Postmark",
    "HtmlBody": `<a href="${verifyLink}">Verify</a>`,
    "TextBody": "Hello from Postmark!",
    "MessageStream": "outbound"

  })

  }


export async function sendForgotPasswordEmail(email: string, token: string) {

  return client.sendEmail({
    "From": process.env.MAIL_FROM!,
    "To": email,
    "Subject": "Password reset link from Postmark",
    "HtmlBody": `<a href="http://localhost:3000/auth/forgot-password/${token}">Reset password</a><br /><p>Note: this link will expire in 24 hours</p>`,
    "TextBody": "Hello from Postmark!",
    "MessageStream": "outbound"

  })


}
