const express = require("express");
const sgMail = require("@sendgrid/mail");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = 5000;

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

app.use(cors());
app.use(express.json());

app.post("/send-email", async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: "E-mail é obrigatório!" });
  }

  const message = {
    to: email,
    from: process.env.EMAIL_FROM,
    subject: "Boas-vindas à Casa Verde!",
    text: "Olá! Boas-vindas à Casa Verde! Você se cadastrou em nossa newsletter e vai começar a receber e-mails com as novidades de nossa loja e dicas de como cuidar de suas plantas. Até logo!",
  };

  try {
    await sgMail.send(message);
    return res.status(200).json({ message: "E-mail enviado com sucesso!" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Erro ao enviar o e-mail." });
  }
});

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
