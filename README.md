# 🛡️ Portal Escuta — Plataforma B2B de Canal de Denúncias e Compliance (CIPA+A & LGPD)

> Sistema SaaS de alta segurança voltado para o cumprimento das exigências legais da **Lei nº 14.457/22 (CIPA+A)** e **NR-1**, oferecendo anonimato absoluto aos colaboradores e gestão unificada para comitês de compliance e RH.

---

## 📌 Visão Geral do Produto

O **Portal Escuta** foi projetado para resolver a necessidade corporativa de canais de relatos seguros, confidenciais e auditáveis. Através de URLs exclusivas e QR Codes dinâmicos por empresa, colaboradores podem reportar ocorrências de assédio, riscos ocupacionais (SST) e inconsistências éticas com total proteção de identidade.

### 🔑 Diferenciais & Recursos Principais

- **🔒 Anonimato por Design (Zero-IP Log):** O sistema descarte e sobrescreve qualquer identificador de IP no envio de relatos.
- **🖼️ Higienização de Mídia:** Remoção automática de metadados EXIF (dados de câmera, GPS e modelo do dispositivo) em arquivos e fotos anexados.
- **💬 Chat Anônimo Bidirecional:** Canal de mensagens criptografado entre a equipe de investigação e o colaborador através do código de protocolo exclusivo.
- **🏢 Multi-tenancy Nativo:** Isolamento total de dados por empresa via Row Level Security (RLS).
- **🖨️ Gerador de Cartazes CIPA+A:** Criação e exportação de artes e QR Codes prontos em A4 para fixação nos setores e murais fabris.
- **📊 Painel de Compliance:** Métrica de KPIs, prazos legais de apuração, filtros por setor e exportação de relatórios para auditoria.

---

## 🛠️ Tech Stack

- **Front-end:** [Next.js](https://nextjs.org/) (App Router, React 19)
- **Linguagem:** [TypeScript](https://www.typescriptlang.org/)
- **Estilização:** CSS Modules (Design responsivo e acessível)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Hospedagem & CDN:** [Vercel Pro](https://vercel.com/)
- **Banco de Dados & Autenticação:** [Supabase](https://supabase.com/) / PostgreSQL *(em integração)*

---

## 🚀 Como Rodar o Projeto Localmente

### Pré-requisitos
- [Node.js](https://nodejs.org/) versão 18.x ou superior
- Gerenciador de pacotes `npm` ou `yarn`

### Passo a Passo

1. **Clone o repositório:**
   ```bash
   git clone [https://github.com/SEU_USUARIO/portal-escuta.git](https://github.com/SEU_USUARIO/portal-escuta.git)
   cd portal-escuta