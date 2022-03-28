import nodemailer from 'nodemailer'

export default async function handler(req, res) {
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.MAILER_USER,
      pass: process.env.MAILER_PASSWORD
    }
  })
  // send mail with defined transport object
  try {
    await transporter.sendMail({
      to: process.env.MAILER_USER,
      subject: `PRESCONINC WEBSITE MESSAGE - ${req.body.subject}`,
      text: `From: ${req.body.name}(${req.body.contactNumber}) <${req.body.email}> \n\n ${req.body.message}` // plain text body
    })

    res.status(200).json({ message: 'Email sent' })
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' })
  }
}
