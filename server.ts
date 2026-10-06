import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI } from '@google/genai';
import { Resend } from 'resend';
import { rateLimit } from 'express-rate-limit';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = Number(process.env.PORT) || 3000;
const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;
const contactRecipient = 'ruanpinheirolima2003@gmail.com';
const contactRateLimit = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 5,
  standardHeaders: 'draft-8',
  legacyHeaders: false,
  message: { error: 'Muitas tentativas. Aguarde alguns minutos e tente novamente.' },
});

const escapeHtml = (value: string) =>
  value.replace(/[&<>"']/g, (character) => {
    switch (character) {
      case '&':
        return '&amp;';
      case '<':
        return '&lt;';
      case '>':
        return '&gt;';
      case '"':
        return '&quot;';
      case "'":
        return '&#39;';
      default:
        return character;
    }
  });

app.use(express.json());

app.post('/api/contact', contactRateLimit, async (req, res) => {
  const { name, contact, projectType, message = '' } = req.body ?? {};
  const allowedProjectTypes = new Set([
    'Landing Page',
    'Site Institucional',
    'Aplicação Web',
    'Automação / Integração',
    'Outro',
  ]);

  if (
    typeof name !== 'string' ||
    typeof contact !== 'string' ||
    typeof projectType !== 'string' ||
    typeof message !== 'string' ||
    !name.trim() ||
    !contact.trim() ||
    !allowedProjectTypes.has(projectType)
  ) {
    return res.status(400).json({ error: 'Preencha seu nome e contato.' });
  }

  if (
    name.length > 120 ||
    contact.length > 254 ||
    projectType.length > 80 ||
    message.length > 5000
  ) {
    return res.status(400).json({ error: 'Um ou mais campos excedem o limite permitido.' });
  }

  if (!resend) {
    return res.status(503).json({
      error: 'O envio por e-mail ainda não está configurado. Tente novamente mais tarde.',
    });
  }

  const safeName = name.trim();
  const safeContact = contact.trim();
  const safeProjectType = projectType.trim();
  const safeMessage = message.trim() || 'Nenhuma mensagem adicional.';
  const replyTo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(safeContact)
    ? safeContact
    : undefined;
  const escapedName = escapeHtml(safeName);
  const escapedContact = escapeHtml(safeContact);
  const escapedProjectType = escapeHtml(safeProjectType);
  const escapedMessage = escapeHtml(safeMessage);
  const subjectName = safeName.replace(/[\r\n]+/g, ' ').slice(0, 80);
  const html = `<!doctype html>
<html lang="pt-BR">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Novo contato do portfólio</title>
    <style>
      @media only screen and (max-width: 600px) {
        .email-card { width: 100% !important; }
        .email-content { padding: 24px 20px !important; }
      }
    </style>
  </head>
  <body style="margin:0; padding:0; background:#101211; color:#f5f7f5; font-family:Arial,Helvetica,sans-serif;">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#101211; padding:32px 12px;">
      <tr>
        <td align="center">
          <table role="presentation" class="email-card" width="600" cellspacing="0" cellpadding="0" style="width:100%; max-width:600px; overflow:hidden; border:1px solid #303632; border-radius:16px; background:#181c19;">
            <tr>
              <td style="padding:22px 28px; border-bottom:1px solid #303632;">
                <span style="display:inline-block; padding:7px 9px; border:1px solid #3b4a40; border-radius:8px; color:#00df5e; font-size:13px; font-weight:bold;">RP</span>
                <span style="margin-left:10px; color:#f5f7f5; font-size:14px; font-weight:bold;">Ruan Pinheiro</span>
                <span style="float:right; padding-top:8px; color:#00df5e; font-family:monospace; font-size:10px; letter-spacing:1px;">NOVO CONTATO</span>
              </td>
            </tr>
            <tr>
              <td class="email-content" style="padding:34px 32px;">
                <p style="margin:0 0 8px; color:#00df5e; font-family:monospace; font-size:11px; letter-spacing:1px; text-transform:uppercase;">Mensagem recebida pelo portfólio</p>
                <h1 style="margin:0 0 24px; color:#f5f7f5; font-size:26px; line-height:1.25;">Novo contato de ${escapedName}</h1>
                <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border:1px solid #303632; border-radius:12px; background:#202521;">
                  <tr><td style="padding:16px 18px; border-bottom:1px solid #303632;"><p style="margin:0 0 6px; color:#9da79f; font-family:monospace; font-size:10px; letter-spacing:1px; text-transform:uppercase;">Tipo de projeto</p><p style="margin:0; color:#00df5e; font-size:15px; font-weight:bold;">${escapedProjectType}</p></td></tr>
                  <tr><td style="padding:16px 18px; border-bottom:1px solid #303632;"><p style="margin:0 0 6px; color:#9da79f; font-family:monospace; font-size:10px; letter-spacing:1px; text-transform:uppercase;">Contato para retorno</p><p style="margin:0; color:#f5f7f5; font-size:14px; word-break:break-word;">${escapedContact}</p></td></tr>
                  <tr><td style="padding:16px 18px;"><p style="margin:0 0 6px; color:#9da79f; font-family:monospace; font-size:10px; letter-spacing:1px; text-transform:uppercase;">Mensagem</p><p style="margin:0; color:#e0e5e1; font-size:14px; line-height:1.7; white-space:pre-wrap;">${escapedMessage}</p></td></tr>
                </table>
                <p style="margin:24px 0 0; color:#9da79f; font-size:12px; line-height:1.6;">Responda a este e-mail${replyTo ? ' para falar diretamente com o remetente' : ' pelo contato informado'}.</p>
              </td>
            </tr>
            <tr><td style="padding:16px 28px; border-top:1px solid #303632; color:#758078; font-size:11px;">Enviado pelo formulário de contato de ruan.dev</td></tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
  const text = [
    `Novo contato de ${safeName} pelo portfólio`,
    `Tipo de projeto: ${safeProjectType}`,
    `Contato: ${safeContact}`,
    '',
    'Mensagem:',
    safeMessage,
  ].join('\n');

  try {
    const { data, error } = await resend.emails.send({
      from:
        process.env.RESEND_FROM_EMAIL ||
        'Ruan Pinheiro <onboarding@resend.dev>',
      to: [contactRecipient],
      subject: `Novo contato de ${subjectName}`,
      html,
      text,
      ...(replyTo ? { replyTo } : {}),
    });

    if (error) {
      console.error('Resend contact email failed:', error);
      return res.status(502).json({
        error: 'Não foi possível enviar a mensagem agora. Tente novamente em instantes.',
      });
    }

    return res.status(200).json({ ok: true, id: data?.id });
  } catch (error) {
    console.error('Resend contact email request failed:', error);
    return res.status(502).json({
      error: 'Não foi possível enviar a mensagem agora. Tente novamente em instantes.',
    });
  }
});

const apiKey = process.env.GEMINI_API_KEY;
let ai: GoogleGenAI | null = null;

if (apiKey) {
  ai = new GoogleGenAI({
    apiKey,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      },
    },
  });
}

// Endpoint do Chatbot com Gemini 3.8 Flash
app.post('/api/chat', async (req, res) => {
  try {
    const { messages } = req.body;
    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: 'Array de mensagens é obrigatório.' });
    }

    if (!ai) {
      return res.json({
        reply: 'Olá! Sou o assistente virtual de Ruan Pinheiro. Como o ambiente está sem a chave de API configurada no momento, você pode falar diretamente com o Ruan pelo WhatsApp ou pelo e-mail ruanpinheirolima2003@gmail.com!'
      });
    }
    const client = ai;

    // Formata o histórico multi-turn
    const contents = messages.map((m: { role: string; content: string }) => ({
      role: m.role === 'assistant' || m.role === 'model' ? 'model' : 'user',
      parts: [{ text: m.content }]
    }));

    const config = {
        systemInstruction: `Você é o assistente virtual e concierge técnico do portfólio de Ruan Pinheiro, Desenvolvedor Web.
Seu objetivo é apresentar o trabalho, os serviços, o processo e a stack do Ruan de forma precisa, elegante e profissional, ajudando potenciais clientes a entenderem como ele pode transformar suas ideias em projetos digitais de alto impacto.

Sobre Ruan Pinheiro:
- Função: Desenvolvedor Web
- Filosofia: Design moderno, performance sólida (Core Web Vitals), código limpo, usabilidade intuitiva e foco em resultados reais.
- Estética & Padrão: Minimalista, editorial, dark mode refinado, tecnologia de ponta sem excessos ou clichês vazios.

Serviços Prestados:
1. Sites Institucionais: Presença digital sólida e elegante para marcas, empresas e profissionais liberais.
2. Landing Pages de Alta Conversão: Páginas estratégicas para validação, lançamento de produtos, campanhas de tráfego pago e captação de leads.
3. Aplicações Web Modernas: Sistemas, dashboards e interfaces sob medida com React, TypeScript e Tailwind CSS.
4. Automações & Integrações: Otimização de processos, conexão com APIs REST, webhooks e automação de fluxos usando n8n e Node.js.

Stack Tecnológica:
- Front-end: React, TypeScript, JavaScript (ES6+), Tailwind CSS, HTML5 semântico, CSS3 moderno, Vite.
- Back-end & Integrações: Node.js, Express, REST APIs, n8n.
- Workflow & Ferramentas: Git, GitHub, Vercel, Power BI, Figma.

Processo de Trabalho (5 etapas):
1. Entendimento: Alinhamento de objetivos, público-alvo e necessidades.
2. Planejamento: Estrutura, arquitetura de informação e direção visual.
3. Desenvolvimento: Código limpo, componentização e responsividade.
4. Refinamento: Otimização de performance, acessibilidade e testes em múltiplos dispositivos.
5. Publicação: Deploy em ambiente seguro e entrega documentada.

Projetos em Destaque no Portfólio:
1. Stone Cler (www.stonecler.com.br) - Website institucional para marca de arquitetura e superfícies nobres.
2. Marcia Menon (www.marciamenon.com.br) - Website institucional e portfólio autoral para consultoria e posicionamento de marca.
3. Cardoso Higienização (cardoso-higienizacao.vercel.app) - Landing page de alta conversão para serviços especializados de higienização e impermeabilização.
4. Drogaria Consolação (www.drogariaconsolacao.com.br) - Portal institucional e conveniência para rede farmacêutica com canais rápidos de televendas e WhatsApp.

Canais de Contato:
- WhatsApp: Canal mais rápido para orçamentos e agendamento de conversas.
- E-mail: ruanpinheirolima2003@gmail.com
- Instagram disponível no rodapé do portfólio.

Diretrizes de Resposta:
- Seja conciso, atencioso, técnico quando necessário e acessível para leigos.
- Responda em português com clareza editorial.
- Se o usuário perguntar por prazos ou valores específicos, explique que cada projeto possui escopo personalizado e convide-o a clicar no botão de WhatsApp para uma estimativa precisa e sem compromisso.
- Nunca invente clientes ou empresas que não constem no portfólio.`,
        temperature: 0.7,
    };

    const generate = (model: string) =>
      client.models.generateContent({ model, contents, config });
    const models = [
      'gemini-3.8-flash',
      'gemini-3.7-flash',
      'gemini-3.6-flash',
      'gemini-3.5-flash',
    ];
    let response: Awaited<ReturnType<typeof generate>> | undefined;

    for (const [index, model] of models.entries()) {
      try {
        response = await generate(model);
        break;
      } catch (error: any) {
        let status = error?.status ?? error?.code ?? error?.error?.code;
        if (!status && typeof error?.message === 'string') {
          try {
            status = JSON.parse(error.message)?.error?.code;
          } catch {
            status = undefined;
          }
        }

        if (Number(status) !== 503 || index === models.length - 1) throw error;
        console.warn(`${model} indisponível; tentando ${models[index + 1]}.`);
      }
    }

    if (!response) throw new Error('Nenhum modelo Gemini retornou uma resposta.');

    const reply = response.text || 'Não consegui formular uma resposta no momento. Por favor, entre em contato via WhatsApp!';
    return res.json({ reply });
  } catch (error: any) {
    console.error('Chat error:', error);
    return res.status(500).json({
      error: 'Erro ao gerar resposta do assistente.',
      message: error?.message || 'Erro inesperado'
    });
  }
});

async function startServer() {
  const isDev = process.env.NODE_ENV !== 'production';

  if (isDev) {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.resolve(__dirname, 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req, res) => {
      res.sendFile(path.resolve(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server listening on http://0.0.0.0:${PORT}`);
  });
}

startServer();
