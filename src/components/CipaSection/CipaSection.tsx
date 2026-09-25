import Link from 'next/link';
import { AlertTriangle, ShieldCheck, FileText, Scale, ArrowRight, CheckCircle2, ShieldAlert } from 'lucide-react';
import ScrollReveal from '../ScrollReveal/ScrollReveal';
import styles from './CipaSection.module.css';

export default function CipaSection() {
  return (
    <section id="cipa" className={styles.section}>
      {/* Luzes Neon de Fundo */}
      <div className={styles.glowLeft} />
      <div className={styles.glowRight} />

      <div className="container">
        <ScrollReveal>
          <div className={styles.header}>
            <div className={styles.badge}>
              <Scale size={18} color="#38BDF8" />
              <span>Conformidade Obrigatória • Lei nº 14.457/22</span>
            </div>
            <h2 className={styles.title}>
              Sua empresa pronta para as exigências da CIPA+A e Ministério do Trabalho
            </h2>
            <p className={styles.subtitle}>
              A legislação tornou <strong className={styles.highlightText}>obrigatória</strong> a implementação de um Canal de Denúncias seguro e procedimentos eficazes para prevenção do assédio e riscos ocupacionais.
            </p>
          </div>
        </ScrollReveal>

        {/* Layout Principal: Imagem Humana com Badges + Grid Comparativo */}
        <div className={styles.mainContainer}>
          {/* Lado Esquerdo: Composição Fotográfica com Badges 3D */}
          <ScrollReveal delay={100}>
            <div className={styles.visualWrapper}>
              <div className={styles.imageCard}>
                <img
                  src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=800&q=80"
                  alt="Equipe de Segurança do Trabalho e RH alinhando conformidade e CIPA"
                  className={styles.cipaImage}
                />
                <div className={styles.imageOverlay} />
              </div>

              {/* Card Flutuante 1: Alerta Neon de Multa/Risco */}
              <div className={styles.floatingCardTop}>
                <div className={styles.cardGlassDanger}>
                  <ShieldAlert size={22} color="#FF3B30" />
                  <div>
                    <h4 className={styles.glassTitleDanger}>Risco de Fiscalização</h4>
                    <p className={styles.glassDescDanger}>Multas da NR-01 e CIPA+A</p>
                  </div>
                </div>
              </div>

              {/* Card Flutuante 2: Proteção Total Aprovada */}
              <div className={styles.floatingCardBottom}>
                <div className={styles.cardGlassSuccess}>
                  <CheckCircle2 size={24} color="#00F59B" />
                  <div>
                    <h4 className={styles.glassTitleSuccess}>100% Protegido</h4>
                    <p className={styles.glassDescSuccess}>Canal Auditável & Seguro</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Lado Direito: Comparativo Com vs Sem Canal */}
          <div className={styles.gridComparison}>
            {/* Card Sem o Canal */}
            <ScrollReveal delay={200}>
              <div className={`${styles.card} ${styles.cardDanger}`}>
                <div className={styles.cardHeader}>
                  <div className={styles.iconBoxDanger}>
                    <AlertTriangle size={24} color="#FF3B30" />
                  </div>
                  <h3 className={styles.cardTitle}>Sem o Portal Escuta</h3>
                </div>
                <ul className={styles.cardList}>
                  <li>
                    <span className={styles.bulletRed}>✕</span>
                    <span>Denúncias diretas no MPT e Ministério do Trabalho</span>
                  </li>
                  <li>
                    <span className={styles.bulletRed}>✕</span>
                    <span>Exposição a multas e passivos trabalhistas elevados</span>
                  </li>
                  <li>
                    <span className={styles.bulletRed}>✕</span>
                    <span>Acidentes ocultados por receio de retaliação</span>
                  </li>
                </ul>
              </div>
            </ScrollReveal>

            {/* Card Com o Portal Escuta */}
            <ScrollReveal delay={300}>
              <div className={`${styles.card} ${styles.cardSuccess}`}>
                <div className={styles.cardHeader}>
                  <div className={styles.iconBoxSuccess}>
                    <ShieldCheck size={24} color="#00F59B" />
                  </div>
                  <h3 className={styles.cardTitle}>Com o Portal Escuta</h3>
                </div>
                <ul className={styles.cardList}>
                  <li>
                    <span className={styles.bulletGreen}>✓</span>
                    <span>Resolução interna ágil preservando o clima profissional</span>
                  </li>
                  <li>
                    <span className={styles.bulletGreen}>✓</span>
                    <span>Compliance 100% alinhado à CIPA+A e Normas de SST</span>
                  </li>
                  <li>
                    <span className={styles.bulletGreen}>✓</span>
                    <span>Relatórios e históricos auditáveis para fiscalizações</span>
                  </li>
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Faixa CTA Neon Integrada */}
        <ScrollReveal delay={400}>
          <div className={styles.ctaBox}>
            <div className={styles.ctaText}>
              <div className={styles.ctaIconBox}>
                <FileText size={28} color="#0070F3" />
              </div>
              <div>
                <h4 className={styles.ctaTitle}>Adeque sua empresa em menos de 24 horas</h4>
                <p className={styles.ctaDesc}>Fornecemos cartazes com QR Code, termos de privacidade e acesso ao painel de gestão.</p>
              </div>
            </div>
            <Link href="#contato" className={styles.ctaBtn}>
              <span>Adequar Minha Empresa</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}