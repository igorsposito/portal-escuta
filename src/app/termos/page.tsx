import Link from 'next/link';
import { ArrowLeft, Scale, CheckCircle2, ShieldAlert } from 'lucide-react';
import styles from './termos.module.css';

export const metadata = {
  title: 'Termos de Uso | Portal Escuta',
  description: 'Regras e condições de uso da plataforma Portal Escuta para empresas e colaboradores.',
};

export default function TermosPage() {
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
            <span className={styles.categoryBadge}>TERMOS LEGAIS</span>
            <h1 className={styles.title}>Termos de Uso do Serviço</h1>
            <p className={styles.subtitle}>
              Conheça os direitos, deveres e regras para utilização do Portal Escuta por contratantes e relatores.
            </p>
          </div>

          {/* Conteúdo Textual */}
          <article className={styles.article}>
            <section className={styles.section}>
              <h2>1. Aceitação dos Termos</h2>
              <p>
                Ao acessar ou utilizar o <strong>Portal Escuta</strong>, seja na condição de colaborador/relator ou de empresa gestora, você concorda em cumprir e respeitar as condições descritas nestes Termos de Uso.
              </p>
            </section>

            <section className={styles.section}>
              <h2>2. Finalidade da Plataforma</h2>
              <p>
                O Portal Escuta destina-se estritamente ao recebimento, tratamento, investigação e arquivo de relatos sobre irregularidades, riscos à segurança do trabalho (SST) e atos de assédio moral/sexual (Lei nº 14.457/22).
              </p>
            </section>

            <section className={styles.section}>
              <h2>3. Uso Responsável do Canal do Colaborador</h2>
              <p>
                O Canal de Denúncias deve ser utilizado com responsabilidade e boa-fé:
              </p>
              <ul>
                <li><strong>Proibição de Falsas Acusações:</strong> É vedado o envio deliberado de relatos falsos ou difamatórios visando prejudicar terceiros.</li>
                <li><strong>Linguagem e Conteúdo:</strong> O relator deve fornecer detalhes objetivos dos fatos, anexando evidências reais sempre que disponível.</li>
                <li><strong>Proteção do Protocolo:</strong> O guarda do código de protocolo gerado é de responsabilidade do relator para acompanhar o andamento.</li>
              </ul>
            </section>

            <section className={styles.section}>
              <h2>4. Deveres da Empresa Contratante</h2>
              <p>
                As empresas cadastradas comprometem-se a:
              </p>
              <ul>
                <li>Garantir a apuração isenta e sigilosa de todos os relatos recebidos.</li>
                <li>Cumprir com as diretrizes de não retaliação previstas na legislação trabalhista e de compliance.</li>
                <li>Manter atualizados os acessos e permissões da comissão responsável pela triagem.</li>
              </ul>
            </section>

            <section className={styles.section}>
              <h2>5. Disponibilidade e Suporte</h2>
              <p>
                Buscamos manter o Portal Escuta disponível 24 horas por dia, 7 dias por semana, com SLA de disponibilidade de 99,9%. Eventuais manutenções programadas serão comunicadas previamente aos administradores.
              </p>
            </section>
          </article>
        </div>
      </main>
    </div>
  );
}