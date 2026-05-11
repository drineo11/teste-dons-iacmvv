import nodemailer from 'nodemailer';

// ── Airtable ──────────────────────────────────────────────────────────────────
async function registrarNoAirtable(nome, email, telefone) {
  const token   = process.env.AIRTABLE_TOKEN;
  const baseId  = process.env.AIRTABLE_BASE_ID;
  const tableId = process.env.AIRTABLE_TABLE_ID;

  if (!token || !baseId || !tableId) {
    console.warn('Airtable: variáveis de ambiente não configuradas. Registro ignorado.');
    return;
  }

  // Data/Hora no fuso de Brasília em formato legível
  const dataHora = new Date().toLocaleString('pt-BR', {
    timeZone: 'America/Sao_Paulo',
    day: '2-digit', month: '2-digit', year: 'numeric',
    hour: '2-digit', minute: '2-digit', second: '2-digit',
  });

  const res = await fetch(`https://api.airtable.com/v0/${baseId}/${tableId}`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      fields: {
        Nome:      nome,
        Email:     email,
        Telefone:  telefone,
        'Data/Hora': dataHora,
      },
    }),
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Airtable: ${err}`);
  }
}

const EMAIL_USER = process.env.EMAIL_USER;
const EMAIL_PASS = process.env.EMAIL_PASS;
const PASTOR_EMAIL = process.env.PASTOR_EMAIL;

function getBadgeStyle(interpretacao) {
  const map = {
    'SIM':          'background:#C94A4A;color:#fff;',
    'POSSIVELMENTE':'background:#D4EDDA;color:#155724;',
    'DIFICILMENTE': 'background:#FFF3CD;color:#856404;',
    'NÃO':          'background:#FFE8E8;color:#9E1F1F;',
  };
  return map[interpretacao] || 'background:#eee;color:#333;';
}

function gerarHtmlParticipante(nome, resultados) {
  const linhas = resultados.map(r => `
    <tr>
      <td style="padding:10px 16px;border-bottom:1px solid #F5CFCF;color:#6B1A1A;font-weight:500;">
        ${r.nome}
      </td>
      <td style="padding:10px 16px;border-bottom:1px solid #F5CFCF;text-align:center;font-weight:700;color:#6B1A1A;">
        ${r.pontuação}/12
      </td>
      <td style="padding:10px 16px;border-bottom:1px solid #F5CFCF;text-align:center;">
        <span style="display:inline-block;padding:4px 14px;border-radius:20px;font-size:0.8rem;font-weight:700;text-transform:uppercase;${getBadgeStyle(r.interpretação)}">
          ${r.interpretação}
        </span>
      </td>
    </tr>
  `).join('');

  return `
<!DOCTYPE html>
<html lang="pt-BR">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#FFF5F5;font-family:Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#FFF5F5;padding:32px 16px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#fff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(158,31,31,0.10);">

        <!-- HEADER -->
        <tr>
          <td style="background:linear-gradient(135deg,#C94A4A 0%,#9E1F1F 100%);padding:36px 32px;text-align:center;">
            <p style="margin:0 0 10px;color:rgba(255,255,255,0.85);font-size:0.95rem;letter-spacing:1px;text-transform:uppercase;">Igreja Aliança</p>
            <h1 style="margin:0;color:#fff;font-size:1.8rem;font-weight:700;">Teste de Dons</h1>
            <p style="margin:10px 0 0;color:rgba(255,255,255,0.8);font-size:0.9rem;">Seu resultado está aqui 🎁</p>
          </td>
        </tr>

        <!-- SAUDAÇÃO -->
        <tr>
          <td style="padding:32px 32px 16px;">
            <p style="margin:0 0 8px;font-size:1.1rem;color:#6B1A1A;font-weight:600;">Olá, ${nome}! 👋</p>
            <p style="margin:0;font-size:0.95rem;color:#555;line-height:1.7;">
              Obrigado por completar o <strong>Teste de Dons da IACMVV</strong>. Abaixo você encontra sua pontuação em cada dom espiritual identificado.
            </p>
          </td>
        </tr>

        <!-- TABELA DE RESULTADOS -->
        <tr>
          <td style="padding:8px 32px 32px;">
            <p style="margin:0 0 12px;font-size:0.85rem;color:#9E1F1F;font-weight:700;text-transform:uppercase;letter-spacing:1px;">Seus Dons Identificados</p>
            <table width="100%" cellpadding="0" cellspacing="0" style="border-radius:12px;overflow:hidden;border:1px solid #F5CFCF;">
              <thead>
                <tr style="background:#FBEAEA;">
                  <th style="padding:10px 16px;text-align:left;font-size:0.8rem;color:#9E1F1F;text-transform:uppercase;letter-spacing:0.5px;">Dom</th>
                  <th style="padding:10px 16px;text-align:center;font-size:0.8rem;color:#9E1F1F;text-transform:uppercase;letter-spacing:0.5px;">Pontuação</th>
                  <th style="padding:10px 16px;text-align:center;font-size:0.8rem;color:#9E1F1F;text-transform:uppercase;letter-spacing:0.5px;">Resultado</th>
                </tr>
              </thead>
              <tbody>${linhas}</tbody>
            </table>
          </td>
        </tr>

        <!-- LEGENDA -->
        <tr>
          <td style="padding:0 32px 28px;">
            <p style="margin:0 0 10px;font-size:0.8rem;color:#9E1F1F;font-weight:700;text-transform:uppercase;letter-spacing:1px;">Legenda</p>
            <table cellpadding="0" cellspacing="0">
              <tr>
                <td style="padding:4px 8px 4px 0;">
                  <span style="display:inline-block;padding:3px 12px;border-radius:20px;font-size:0.75rem;font-weight:700;background:#C94A4A;color:#fff;">SIM</span>
                </td>
                <td style="padding:4px 0;font-size:0.82rem;color:#555;">Forte indicação deste dom</td>
              </tr>
              <tr>
                <td style="padding:4px 8px 4px 0;">
                  <span style="display:inline-block;padding:3px 12px;border-radius:20px;font-size:0.75rem;font-weight:700;background:#D4EDDA;color:#155724;">POSSIVELMENTE</span>
                </td>
                <td style="padding:4px 0;font-size:0.82rem;color:#555;">Indício moderado deste dom</td>
              </tr>
              <tr>
                <td style="padding:4px 8px 4px 0;">
                  <span style="display:inline-block;padding:3px 12px;border-radius:20px;font-size:0.75rem;font-weight:700;background:#FFF3CD;color:#856404;">DIFICILMENTE</span>
                </td>
                <td style="padding:4px 0;font-size:0.82rem;color:#555;">Pouca indicação deste dom</td>
              </tr>
              <tr>
                <td style="padding:4px 8px 4px 0;">
                  <span style="display:inline-block;padding:3px 12px;border-radius:20px;font-size:0.75rem;font-weight:700;background:#FFE8E8;color:#9E1F1F;">NÃO</span>
                </td>
                <td style="padding:4px 0;font-size:0.82rem;color:#555;">Sem indicação deste dom</td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- LINK SOBRE DONS -->
        <tr>
          <td style="padding:24px 32px 8px;text-align:center;">
            <p style="margin:0;font-size:0.95rem;color:#6B1A1A;font-weight:600;line-height:1.7;background:#FBEAEA;border:1px solid #F5CFCF;border-radius:10px;padding:16px 20px;">
              <a href="https://sobre-os-dons-iacmvv.vercel.app/" style="color:#C94A4A;font-weight:700;text-decoration:underline;">Clique aqui</a> e saiba um pouco mais sobre os dons do Espírito Santo
            </p>
          </td>
        </tr>

        <!-- FOOTER -->
        <tr>
          <td style="background:#FBEAEA;padding:20px 32px;text-align:center;border-top:1px solid #F5CFCF;">
            <p style="margin:0 0 4px;font-size:0.85rem;color:#9E1F1F;font-weight:700;">Igreja Aliança CMVV</p>
            <p style="margin:0;font-size:0.8rem;color:#aaa;">Este e-mail foi gerado automaticamente. Por favor, não responda.</p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>
  `.trim();
}

function gerarHtmlPastor(nome, email, telefone, resultados) {
  const linhas = resultados.map(r => `
    <tr>
      <td style="padding:8px 14px;border-bottom:1px solid #F5CFCF;color:#6B1A1A;">${r.nome}</td>
      <td style="padding:8px 14px;border-bottom:1px solid #F5CFCF;text-align:center;font-weight:700;color:#6B1A1A;">${r.pontuação}/12</td>
      <td style="padding:8px 14px;border-bottom:1px solid #F5CFCF;text-align:center;">
        <span style="display:inline-block;padding:3px 12px;border-radius:20px;font-size:0.75rem;font-weight:700;text-transform:uppercase;${getBadgeStyle(r.interpretação)}">${r.interpretação}</span>
      </td>
    </tr>
  `).join('');

  return `
<!DOCTYPE html>
<html lang="pt-BR">
<head><meta charset="UTF-8"></head>
<body style="margin:0;padding:0;background:#FFF5F5;font-family:Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#FFF5F5;padding:32px 16px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#fff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(158,31,31,0.10);">

        <tr>
          <td style="background:linear-gradient(135deg,#C94A4A 0%,#9E1F1F 100%);padding:28px 32px;">
            <p style="margin:0 0 4px;color:rgba(255,255,255,0.75);font-size:0.8rem;text-transform:uppercase;letter-spacing:1px;">IACMVV · Novo Resultado</p>
            <h2 style="margin:0;color:#fff;font-size:1.4rem;">Teste de Dons realizado</h2>
          </td>
        </tr>

        <tr>
          <td style="padding:28px 32px 16px;">
            <p style="margin:0 0 16px;font-size:0.95rem;color:#555;line-height:1.7;">
              Um novo teste foi concluído. Confira os dados do participante e os resultados abaixo.
            </p>
            <table cellpadding="0" cellspacing="0" style="background:#FBEAEA;border-radius:10px;padding:16px 20px;width:100%;border:1px solid #F5CFCF;">
              <tr>
                <td style="padding:4px 0;font-size:0.85rem;color:#9E1F1F;font-weight:700;width:100px;">Nome</td>
                <td style="padding:4px 0;font-size:0.95rem;color:#6B1A1A;font-weight:600;">${nome}</td>
              </tr>
              <tr>
                <td style="padding:4px 0;font-size:0.85rem;color:#9E1F1F;font-weight:700;">E-mail</td>
                <td style="padding:4px 0;font-size:0.95rem;color:#6B1A1A;">${email}</td>
              </tr>
              <tr>
                <td style="padding:4px 0;font-size:0.85rem;color:#9E1F1F;font-weight:700;">Telefone</td>
                <td style="padding:4px 0;font-size:0.95rem;color:#6B1A1A;">${telefone}</td>
              </tr>
            </table>
          </td>
        </tr>

        <tr>
          <td style="padding:8px 32px 32px;">
            <p style="margin:0 0 12px;font-size:0.85rem;color:#9E1F1F;font-weight:700;text-transform:uppercase;letter-spacing:1px;">Resultados</p>
            <table width="100%" cellpadding="0" cellspacing="0" style="border-radius:12px;overflow:hidden;border:1px solid #F5CFCF;">
              <thead>
                <tr style="background:#FBEAEA;">
                  <th style="padding:8px 14px;text-align:left;font-size:0.78rem;color:#9E1F1F;text-transform:uppercase;">Dom</th>
                  <th style="padding:8px 14px;text-align:center;font-size:0.78rem;color:#9E1F1F;text-transform:uppercase;">Pontuação</th>
                  <th style="padding:8px 14px;text-align:center;font-size:0.78rem;color:#9E1F1F;text-transform:uppercase;">Resultado</th>
                </tr>
              </thead>
              <tbody>${linhas}</tbody>
            </table>
          </td>
        </tr>

        <tr>
          <td style="background:#FBEAEA;padding:16px 32px;text-align:center;border-top:1px solid #F5CFCF;">
            <p style="margin:0;font-size:0.8rem;color:#aaa;">Gerado automaticamente pelo sistema de Teste de Dons · IACMVV</p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>
  `.trim();
}

// ── Rate Limiter simples em memória ──────────────────────────────────────────
const rateMap = new Map();
const RATE_LIMIT = 3;       // máximo de envios por IP
const RATE_WINDOW = 15 * 60 * 1000; // janela de 15 minutos

function checkRateLimit(ip) {
  const now = Date.now();
  const entry = rateMap.get(ip) || { count: 0, start: now };

  if (now - entry.start > RATE_WINDOW) {
    // janela expirou, reinicia
    rateMap.set(ip, { count: 1, start: now });
    return true;
  }

  if (entry.count >= RATE_LIMIT) return false;

  rateMap.set(ip, { count: entry.count + 1, start: entry.start });
  return true;
}

// ── Validação de entrada ──────────────────────────────────────────────────────
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validarDados(nome, email, telefone, resultados) {
  if (!nome || typeof nome !== 'string' || nome.trim().length > 200) return false;
  if (!email || !EMAIL_REGEX.test(email) || email.length > 254) return false;
  if (!telefone || typeof telefone !== 'string' || telefone.trim().length > 30) return false;
  if (!Array.isArray(resultados) || resultados.length === 0 || resultados.length > 100) return false;
  return true;
}

// ── Handler ───────────────────────────────────────────────────────────────────
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ erro: 'Método não permitido' });
  }

  // Rate limiting por IP
  const ip = req.headers['x-forwarded-for']?.split(',')[0].trim() || req.socket?.remoteAddress || 'unknown';
  if (!checkRateLimit(ip)) {
    return res.status(429).json({ erro: 'Muitas requisições. Aguarde alguns minutos.' });
  }

  const { nome, email, telefone, resultados } = req.body;

  if (!validarDados(nome, email, telefone, resultados)) {
    return res.status(400).json({ erro: 'Dados inválidos ou incompletos' });
  }

  const isDev = process.env.NODE_ENV !== 'production';
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: EMAIL_USER,
      pass: EMAIL_PASS,
    },
    tls: isDev ? { rejectUnauthorized: false } : undefined,
  });

  const mailOptionsParticipante = {
    from: `"Teste de Dons · IACMVV" <${EMAIL_USER}>`,
    to: email,
    subject: 'Resultado do Teste de Dons - IACMVV',
    html: gerarHtmlParticipante(nome.trim(), resultados),
  };

  const mailOptionsPastor = {
    from: `"Teste de Dons · IACMVV" <${EMAIL_USER}>`,
    to: PASTOR_EMAIL,
    subject: `🎁 Novo teste realizado — ${nome.trim()}`,
    html: gerarHtmlPastor(nome.trim(), email, telefone.trim(), resultados),
  };

  try {
    await transporter.sendMail(mailOptionsParticipante);
    await transporter.sendMail(mailOptionsPastor);
    res.status(200).json({ sucesso: true });
  } catch (erro) {
    console.error('Erro ao enviar email:', erro);
    res.status(500).json({ erro: 'Falha ao enviar email' });
  }

  // Registro no Airtable — não bloqueia a resposta ao usuário
  try {
    await registrarNoAirtable(nome.trim(), email.trim(), telefone.trim());
    console.log(`✅ Airtable: registro salvo para ${nome.trim()}`);
  } catch (erro) {
    console.error('⚠️ Airtable: falha ao registrar (não afeta o usuário):', erro.message);
  }
}
