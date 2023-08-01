const nodemailer = require('nodemailer')

const signup = async (req, res) => {

    /**testing account */
    let testAccount = await nodemailer.createTestAccount();

    /** create reusable transporter object using the default SMTP transport */
    const transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false,
        auth: {
          user: testAccount.user,
          pass: testAccount.pass
        }
      });

      let message = {
        from: '"Fred Foo 👻" <foo@example.com>', // sender address
        to: "bar@example.com, baz@example.com", // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Successfully Register with us.", // plain text body
        html: "<b>Successfully Register with us.</b>", // html body
      }

      transporter.sendMail(message).then((info) =>{
        return res.status(201).json({
            msg: "You should receive an email",
            info: info.messageId,
            preview: nodemailer.getTestMessageUrl(info)
        })
      }).catch(error => {
        return res.status(500).json({ error })
      })
      

    // res.status(201).json("Signup successfully...!")
}

const getbill = (req, res) => {
    res.status(201).json("getbill successfully...!")
}

module.exports = {
    signup,
    getbill
}