import sendgrid from '@sendgrid/mail'
// import { Mail } from '@sendgrid/helpers'
const { classes: { Mail,  },} = require('@sendgrid/helpers');

sendgrid.setApiKey(process.env.SENDGRID_API_KEY)

function payloadOutput(data) {
  const mail = Mail.create(data)
  const body = mail.toJSON()
  return JSON.stringify(body)
}

export const sendEmail = ({to, from, subject, text, html}) => {
  const msg = {to, from, subject, text, html};
  // console.log(payloadOutput(msg))
  return sendgrid.send(msg);
}
