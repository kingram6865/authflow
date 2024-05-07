import { sendEmail } from "../util/sendEmail";

export const testEmailRoute = {
  path: '/api/test-email',
  method: 'post',
  handler: async (req, res) => {
    try {
      await sendEmail({
        to: 'ken.ingram+test1@gmail.com',
        from: 'ken.ingram@gmail.com',
        subject: 'Does this work?',
        text: "If you are reading this, it works."
      })

      res.sendStatus(200)
    } catch(err) {
      console.log(e)
      res.sendStatus(500)
    }
  }
}