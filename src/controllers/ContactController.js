const handleEmail = (req, res, nodemailer, receiver) => {
  const transporter = nodemailer.createTransport({
    service: process.env.NODEMAILER_SERVICE,
    auth: {
      user: process.env.NODEMAILER_USER,
      pass: process.env.NODEMAILER_PASS,
    },
  });

  const {
    email, name, message, phone,
  } = req.body;


  const mailOptions = {
    from: 'aneospes@gmail.com',
    to: receiver,
    subject: 'Contato site',
    html: `
                 <h3>De ${name} - ${email} </h3>
                 <p>${message}</p>
                 <p>Telefone - ${phone}</p>
                 `,
  };

  transporter.sendMail(mailOptions, (error) => {
    if (error) {
      res.status(400).json('Unable to send email');
    }
    res.status(200).json('Success');
  });
};

module.exports = {
  handleEmail,
};
