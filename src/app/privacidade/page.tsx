import Link from 'next/link';
import { ArrowLeft, ShieldCheck, Lock, EyeOff, Server, FileText } from 'lucide-react';
import styles from './privacidade.module.css';

export const metadata = {
  title: 'Política de Privacidade | Portal Escuta',
  description: 'Conheça nossos compromissos com o anonimato, segurança de dados e conformidade com a LGPD e Lei nº 14.457/22.',
};

export default function PrivacidadePage() {
  return (
    <div className={styles.pageWrapper}>
      {/* Topo Limpo */}
      <header className={styles.header}>
        <div className="container">
          <div className={styles.headerContent}>
            <Link href="/" className={styles.logoLink}>
              <img src="/logo.png" alt="Portal Escuta" className={styles.logoImg} />
            </Link>
            <Link href="/" className={styles.backLink}>
              <ArrowLeft size={16} />
              <span>Voltar ao site</span>
            </Link>
          </div>
        </div>
      </header>

      <main className="container">
        <div className={styles.contentContainer}>
          {/* Hero da Página */}
          <div className={styles.pageHeader}>
            <span className={styles.categoryBadge}>COMPLIANCE & LGPD</span>
            <h1 className={styles.title}>Política de Privacidade</h1>
            <p className={styles.subtitle}>
              Última atualização: Setembro de 2026. Saiba como o Portal Escuta garante o anonimato absoluto e a proteção rigorosa das informações.
            </p>
          </div>

          {/* Destaques de Segurança */}
          <div className={styles.highlightGrid}>
            <div className={styles.highlightCard}>
              <div className={styles.iconBox}>
                <EyeOff size={22} color="#0070F3" />
              </div>
              <h3>Zero Gravação de IP</h3>
              <p>Não registramos endereço de IP, geolocalização ou metadados de identificação nos relatos anônimos.</p>
            </div>
            <div className={styles.highlightCard}>
              <div className={styles.iconBox}>
                <Lock size={22} color="#059669" />
              </div>
              <h3>Criptografia SSL / TLS</h3>
              <p>Todas as comunicações e arquivos anexados são armazenados em servidores com criptografia ponta a ponta.</p>
            </div>
            <div className={styles.highlightCard}>
              <div className={styles.iconBox}>
                <ShieldCheck size={22} color="#0070F3" />
              </div>
              <h3>Conformidade CIPA+A</h3>
              <p>Alinhado com a Lei nº 14.457/22 para prevenção e combate ao assédio e violência no ambiente corporativo.</p>
            </div>
          </div>

          {/* Conteúdo Textual */}
          <article className={styles.article}>
            <section className={styles.section}>
              <h2>1. Objetivos desta Política</h2>
              <p>
                O <strong>Portal Escuta</strong> é uma plataforma SaaS desenvolvida para gestão de Canais de Denúncias anônimos, prevenção do assédio (Lei nº 14.457/22) e gestão de riscos ocupacionais (NR-1). Esta Política estabelece como lidamos com a privacidade, segurança de dados e confidencialidade.
              </p>
            </section>

            <section className={styles.section}>
              <h2>2. Anonimato Absoluto do Relator</h2>
              <p>
                A garantia do anonimato é a pedra angular da nossa plataforma. Ao utilizar o Canal do Colaborador:
              </p>
              <ul>
                <li>Não exigimos criação de conta ou fornecimento de e-mail/CPF para realização do relato.</li>
                <li>Não armazenamos ou vinculamos o endereço IP, sistema operacional ou dados do navegador do usuário.</li>
                <li>Os arquivos anexados (fotos, PDFs, vídeos) passam por processo de higienização de metadados para evitar identificação involuntária.</li>
              </ul>
            </section>

            <section className={styles.section}>
              <h2>3. Tratamento de Dados Pessoais (LGPD)</h2>
              <p>
                Nos casos em que o relator opte voluntariamente por se identificar, ou no cadastro de gestores/administradores das empresas contratantes, o tratamento dos dados observará rigorosamente os princípios da Lei Geral de Proteção de Dados (Lei nº 13.709/2018):
              </p>
              <ul>
                <li><strong>Finalidade Exclusiva:</strong> Apuração interna de denúncias, triagem e contatos oficiais de investigação.</li>
                <li><strong>Não Comercialização:</strong> O Portal Escuta não compartilha, vende ou cede dados pessoais para terceiros ou fins publicitários.</li>
                <li><strong>Direito dos Titulares:</strong> O gestor cadastrado poderá solicitar alteração ou exclusão de seus dados mediante requisição formal.</li>
              </ul>
            </section>

            <section className={styles.section}>
              <h2>4. Armazenamento e Segurança da Informação</h2>
              <p>
                Adotamos os mais elevados padrões de segurança cibernética, incluindo backups diários redundantes, controle de acesso baseado em funções (RBAC) e protocolos HTTPS/TLS em toda a navegação.
              </p>
            </section>

            <section className={styles.section}>
              <h2>5. Contato e Encarregado de Dados (DPO)</h2>
              <p>
                Para dúvidas sobre esta Política de Privacidade ou solicitações referentes à LGPD, entre em contato com nosso Encarregado de Proteção de Dados pelo e-mail: <strong>dpo@portalescuta.com.br</strong>.
              </p>
            </section>
          </article>
        </div>
      </main>
    </div>
  );
}