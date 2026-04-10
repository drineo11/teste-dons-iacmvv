import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import handler from './api/enviar.js';

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/enviar', (req, res) => handler(req, res));

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`✅ Servidor de API local rodando em http://localhost:${PORT}`);
  console.log(`   EMAIL_USER : ${process.env.EMAIL_USER}`);
  console.log(`   PASTOR_EMAIL: ${process.env.PASTOR_EMAIL}`);
});
