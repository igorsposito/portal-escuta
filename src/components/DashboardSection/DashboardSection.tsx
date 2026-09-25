import Link from 'next/link';
import { LayoutDashboard, ArrowRight, Activity, AlertCircle, BarChart3, CheckCircle2 } from 'lucide-react';
import ScrollReveal from '../ScrollReveal/ScrollReveal';
import styles from './DashboardSection.module.css';

const signals = [
  'Assédio Moral & Sexual',
  'Falta de EPIs / Risco de Acidente',
  'Conflitos & Clima Ocupacional',
  'Pressão Abusiva & Sobrecarga',
  'Discriminação e Inclusão',
  'Descumprimento de NRs',
];

export default function DashboardSection() {
  return (
    <section className={styles.section}>
      <div className={styles.glowBg} />

      <div className="container">
        {/* PARTE 1: O Dashboard que traz Visibilidade */}
        <div className={styles.topBlock}>
          <ScrollReveal>
            <div className={styles.textContent}>
              <div className={styles.tagGroup}>
                <LayoutDashboard size={16} color="#0070F3" />
                <span>Gestão em Tempo Real</span>
              </div>

              <h2 className={styles.title}>
                O que sua empresa não consegue enxergar, ela não consegue gerenciar.
              </h2>

              <p className={styles.desc}>
                O <strong>Portal Escuta Intelligence Dashboard</strong> organiza os relatos para oferecer uma visão gerencial completa de ocorrências, categorias, status e indicadores de risco. O objetivo não é expor pessoas, mas ajudar sua organização a identificar e corrigir situações críticas antes que virem acidentes ou processos.
              </p>

              <Link href="#contato" className={styles.btnPrimary}>
                <span>Conhecer o Painel por Dentro</span>
                <ArrowRight size={18} />
              </Link>
            </div>
          </ScrollReveal>

          {/* Mockup Interativo do Dashboard */}
          <ScrollReveal delay={150}>
            <div className={styles.dashboardMockup}>
              <div className={styles.mockupHeader}>
                <div className={styles.mockupTitleRow}>
                  <div className={styles.dots}>
                    <span className={styles.dotRed} />
                    <span className={styles.dotYellow} />
                    <span className={styles.dotGreen} />
                  </div>
                  <span className={styles.mockupName}>PortalEscuta® Intelligence Dashboard</span>
                </div>
                <span className={styles.liveBadge}>
                  <span className={styles.liveDot} /> AO VIVO
                </span>
              </div>

              <div className={styles.mockupBody}>
                {/* Grid de Métricas */}
                <div className={styles.metricsGrid}>
                  <div className={styles.metricCard}>
                    <span className={styles.metricVal}>31</span>
                    <span className={styles.metricLabel}>Recebidos</span>
                  </div>
                  <div className={styles.metricCard}>
                    <span className={styles.metricVal}>08</span>
                    <span className={styles.metricLabel}>Em Análise</span>
                  </div>
                  <div className={styles.metricCard}>
                    <span className={styles.metricVal}>05</span>
                    <span className={styles.metricLabel}>Investigação</span>
                  </div>
                  <div className={styles.metricCardSuccess}>
                    <span className={styles.metricValSuccess}>18</span>
                    <span className={styles.metricLabelSuccess}>Concluídos</span>
                  </div>
                </div>

                {/* Barras de Categoria de Ocorrências */}
                <div className={styles.categoriesBox}>
                  <h4 className={styles.boxTitle}>
                    <BarChart3 size={16} color="#0070F3" />
                    <span>Ocorrências por Categoria</span>
                  </h4>

                  <div className={styles.barItem}>
                    <div className={styles.barInfo}>
                      <span>Segurança do Trabalho (SST)</span>
                      <strong>68%</strong>
                    </div>
                    <div className={styles.barTrack}>
                      <div className={styles.barFill} style={{ width: '68%', backgroundColor: '#0070F3' }} />
                    </div>
                  </div>

                  <div className={styles.barItem}>
                    <div className={styles.barInfo}>
                      <span>Assédio Moral / Prevenção CIPA+A</span>
                      <strong>45%</strong>
                    </div>
                    <div className={styles.barTrack}>
                      <div className={styles.barFill} style={{ width: '45%', backgroundColor: '#FF3B30' }} />
                    </div>
                  </div>

                  <div className={styles.barItem}>
                    <div className={styles.barInfo}>
                      <span>Conflitos e Riscos Psicossociais (NR-1)</span>
                      <strong>32%</strong>
                    </div>
                    <div className={styles.barTrack}>
                      <div className={styles.barFill} style={{ width: '32%', backgroundColor: '#00F59B' }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* PARTE 2: NR-1 & Riscos Psicossociais (Sinais de Alerta) */}
        <div className={styles.bottomBlock}>
          <ScrollReveal>
            <div className={styles.bottomText}>
              <div className={styles.tagGroupOrange}>
                <AlertCircle size={16} color="#FF9500" />
                <span>NR-1 • Riscos Ocupacionais e Psicossociais</span>
              </div>

              <h2 className={styles.bottomTitle}>
                Quando as pessoas falam, a organização recebe sinais.
              </h2>

              <p className={styles.bottomDesc}>
                Assédio, riscos de acidentes, pressão excessiva, sobrecarga e falhas de liderança aparecem primeiro através da escuta ativa. O Portal Escuta fornece informações organizacionais valiosas para apoiar seus processos de análise, prevenção de acidentes e conformidade total com a NR-1.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <div className={styles.signalsCard}>
              <h3 className={styles.signalsHeader}>
                <Activity size={20} color="#0070F3" />
                <span>Sinais que merecem atenção na sua empresa:</span>
              </h3>

              <div className={styles.signalsGrid}>
                {signals.map((signal, idx) => (
                  <div key={idx} className={styles.signalPill}>
                    <CheckCircle2 size={16} color="#00F59B" />
                    <span>{signal}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}