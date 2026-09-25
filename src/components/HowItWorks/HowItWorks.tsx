import { QrCode, ShieldAlert, CheckCircle2, ArrowRight } from 'lucide-react';
import ScrollReveal from '../ScrollReveal/ScrollReveal';
import styles from './HowItWorks.module.css';

const steps = [
  {
    stepNumber: '01',
    icon: QrCode,
    badgeColor: '#0070F3',
    badgeText: 'Via Celular ou QR Code',
    title: 'Acesso Rápido e Anônimo',
    description: 'O funcionário aponta a câmera para o QR Code impresso no mural da empresa ou acessa o link. Relata a ocorrência sem necessidade de login.',
    image: 'https://images.unsplash.com/photo-1556742049-0a670f4a458d?auto=format&fit=crop&w=800&q=80',
    imgAlt: 'Funcionário escaneando QR Code e utilizando smartphone no ambiente corporativo',
    floatingTag: '🔒 Sem gravação de IP',
  },
  {
    stepNumber: '02',
    icon: ShieldAlert,
    badgeColor: '#FF3B30',
    badgeText: 'Notificação Imediata',
    title: 'Triagem e Tratativa Segura',
    description: 'A equipe de SST e RH recebe o alerta no painel em tempo real, investiga a causa raiz e interage com o denunciante mantendo o anonimato.',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80',
    imgAlt: 'Engenheiro de segurança analisando dados de conformidade técnica',
    floatingTag: '⚡ Notificação em tempo real',
  },
  {
    stepNumber: '03',
    icon: CheckCircle2,
    badgeColor: '#00F59B',
    badgeText: 'Conformidade CIPA+A',
    title: 'Resolução e Relatório Técnico',
    description: 'A irregularidade é corrigida preventivamente antes de gerar acidentes ou multas, gerando históricos auditáveis para fiscalizações.',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80',
    imgAlt: 'Equipe de trabalho em ambiente seguro e alinhado com normas regulamentadoras',
    floatingTag: '🟢 Relatório Auditável',
  },
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className={styles.section}>
      {/* Esferas luminosas de fundo */}
      <div className={styles.glowTop} />
      <div className={styles.glowBottom} />

      <div className="container">
        <ScrollReveal>
          <div className={styles.header}>
            <span className={styles.tag}>Fluxo de Trabalho Intuitivo</span>
            <h2 className={styles.title}>Como o Portal Escuta funciona na prática</h2>
            <p className={styles.subtitle}>
              Três etapas simples que integram o colaborador no chão de fábrica diretamente com o painel de gestão da sua equipe.
            </p>
          </div>
        </ScrollReveal>

        <div className={styles.stepsGrid}>
          {steps.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <ScrollReveal key={index} delay={index * 120}>
                <div className={styles.stepCard}>
                  {/* Imagem de Capa com Efeito Glass Overlay */}
                  <div className={styles.imageWrapper}>
                    <img src={item.image} alt={item.imgAlt} className={styles.cardImage} />
                    <div className={styles.imageOverlay} />
                    <span className={styles.floatingBadge}>{item.floatingTag}</span>
                    <span className={styles.stepNumberBadge}>{item.stepNumber}</span>
                  </div>

                  {/* Conteúdo do Card */}
                  <div className={styles.cardContent}>
                    <div className={styles.iconRow}>
                      <div className={styles.iconBox} style={{ borderColor: item.badgeColor, backgroundColor: `${item.badgeColor}12` }}>
                        <IconComponent size={22} color={item.badgeColor} />
                      </div>
                      <span className={styles.stepTag} style={{ color: item.badgeColor }}>
                        {item.badgeText}
                      </span>
                    </div>

                    <h3 className={styles.stepTitle}>{item.title}</h3>
                    <p className={styles.stepDesc}>{item.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}