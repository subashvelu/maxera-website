import nodemailer from "nodemailer";

function getTransporter() {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || "587");
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASSWORD;
  const secure = process.env.SMTP_SECURE === "true";

  if (!host || !user || !pass) {
    throw new Error("SMTP_HOST, SMTP_USER, and SMTP_PASSWORD must be set to send email.");
  }

  return nodemailer.createTransport({
    host,
    port,
    secure,
    auth: {
      user,
      pass,
    },
  });
}

export async function sendDigitalProductEmail({ to, customerName, productName, deliveryLink }) {
  const from = process.env.EMAIL_FROM || process.env.SMTP_USER || "no-reply@maxera.com";
  const fromName = process.env.EMAIL_FROM_NAME || "MaxEra";
  const subject = `Your ${productName} is ready to download`;
  const html = `
    <div style="font-family: system-ui, sans-serif; color: #111;">
      <h1 style="color: #7c3aed;">Thanks for your purchase, ${customerName || "Customer"}!</h1>
      <p>Your digital product is ready. Click the button below to access it instantly:</p>
      <p><a href="${deliveryLink}" style="display: inline-block; padding: 14px 22px; color: #fff; background: #7c3aed; border-radius: 12px; text-decoration: none;">Download ${productName}</a></p>
      <p>If the button does not work, copy and paste this link into your browser:</p>
      <p><a href="${deliveryLink}">${deliveryLink}</a></p>
      <p style="margin-top: 24px; color: #555;">Thank you for shopping with MaxEra.</p>
    </div>
  `;

  const transporter = getTransporter();

  await transporter.sendMail({
    from: `${fromName} <${from}>`,
    to,
    subject,
    html,
  });
}
