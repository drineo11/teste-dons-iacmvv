import nodemailer from 'nodemailer';

const EMAIL_USER = process.env.EMAIL_USER;
const EMAIL_PASS = process.env.EMAIL_PASS;
const PASTOR_EMAIL = process.env.PASTOR_EMAIL;

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ erro: 'Método não permitido' });
  }

  const { nome, email, telefone, resultados } = req.body;

  if (!nome || !email || !telefone || !resultados) {
    return res.status(400).json({ erro: 'Dados incompletos' });
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: EMAIL_USER,
      pass: EMAIL_PASS,
    },
  });

  const resultadosTexto = resultados
    .map(r => `${r.nome}: ${r.pontuação}/24 - ${r.interpretação}`)
    .join('\n');

  const mailOptionsParticipante = {
    from: EMAIL_USER,
    to: email,
    subject: 'Resultado do Teste de Dons - IACMVV',
    text: `
Olá ${nome},

Você completou o Teste de Dons da IACMVV. Aqui estão seus resultados:

${resultadosTexto}

Atenciosamente,
IACMVV
    `.trim(),
  };

  const mailOptionsPastor = {
    from: EMAIL_USER,
    to: PASTOR_EMAIL,
    subject: `Novo teste realizado - ${nome}`,
    text: `
Um novo teste foi realizado por ${nome} (${email}, ${telefone}).

Resultados:
${resultadosTexto}
    `.trim(),
  };

  try {
    await transporter.sendMail(mailOptionsParticipante);
    await transporter.sendMail(mailOptionsPastor);
    res.status(200).json({ sucesso: true });
  } catch (erro) {
    console.error('Erro ao enviar email:', erro);
    res.status(500).json({ erro: 'Falha ao enviar email' });
  }
}
