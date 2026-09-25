'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ShieldAlert, ArrowRight, CheckCircle2, ChevronLeft, ChevronRight, Lock, QrCode, Activity } from 'lucide-react';
import styles from './Hero.module.css';

const slides = [
  {
    id: 1,
    badge: 'Lei nº 14.457/22 • Conformidade CIPA+A',
    title: 'Canal de Denúncias Anônimo que Protege sua Empresa',
    subtitle: 'Atenda integralmente às exigências legais de SST e CIPA+A com uma plataforma segura, imparcial e de implantação imediata.',
    image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=1600&q=80',
    primaryCta: 'Solicitar Demonstração',
    secondaryCta: 'Conhecer Recursos',
    cardTag: 'SST & CIPA+A',
    cardTitle: 'Central de Compliance',
    cardValue: '100%',
    cardDesc: 'Adequação legal auditável',
  },
  {
    id: 2,
    badge: 'Acesso Rápido via Celular',
    title: 'Facilidade Absoluta para o Colaborador Relatar',
    subtitle: 'Sem baixar aplicativos ou criar cadastros. O funcionário aponta a câmera para o QR Code e faz seu relato com garantia total de anonimato.',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1600&q=80',
    primaryCta: 'Ver Demonstração Mobile',
    secondaryCta: 'Como Funciona',
    cardTag: 'QR Code Instantâneo',
    cardTitle: 'Canal do Funcionário',
    cardValue: '24/7',
    cardDesc: 'Sem gravação de IP ou dados',
  },
  {
    id: 3,
    badge: 'Gestão Inteligente & NR-1',
    title: 'Dashboard Gerencial para Decisões Preventivas',
    subtitle: 'Centralize a triagem e investigação de ocorrências, identificando riscos psicossociais e de segurança antes que virem acidentes ou processos.',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1600&q=80',
    primaryCta: 'Falar com Consultor',
    secondaryCta: 'Ver Indicadores',
    cardTag: 'Gestão em Tempo Real',
    cardTitle: 'Intelligence Dashboard',
    cardValue: '4.8h',
    cardDesc: 'Tempo médio de resolução',
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  // Troca automática a cada 6 segundos
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className={styles.hero}>
      {/* Imagens do Carrossel em Camadas com Overlay */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`${styles.slideBg} ${index === current ? styles.activeBg : ''}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className={styles.overlay} />
        </div>
      ))}

      <div className={`container ${styles.heroContainer}`}>
        {/* Conteúdo do Slide Ativo */}
        <div className={styles.content}>
          <div className={styles.badge}>
            <ShieldAlert size={16} color="#00F59B" />
            <span>{slides[current].badge}</span>
          </div>

          <h1 className={styles.title}>{slides[current].title}</h1>

          <p className={styles.subtitle}>{slides[current].subtitle}</p>

          <div className={styles.ctaGroup}>
            <Link href="#contato" className={styles.btnPrimary}>
              <span>{slides[current].primaryCta}</span>
              <ArrowRight size={18} />
            </Link>
            <Link href="#como-funciona" className={styles.btnSecondary}>
              {slides[current].secondaryCta}
            </Link>
          </div>

          <div className={styles.trustBadges}>
            <div className={styles.trustItem}>
              <CheckCircle2 size={16} className={styles.checkIcon} />
              <span>Garantia de Anonimato LGPD</span>
            </div>
            <div className={styles.trustItem}>
              <CheckCircle2 size={16} className={styles.checkIcon} />
              <span>Sem Instalação de App</span>
            </div>
            <div className={styles.trustItem}>
              <CheckCircle2 size={16} className={styles.checkIcon} />
              <span>Implantação Imediata</span>
            </div>
          </div>
        </div>

        {/* Card de Destaque Vivo no Lado Direito */}
        <div className={styles.visual}>
          <div className={styles.glassCard}>
            <div className={styles.cardHeader}>
              <span className={styles.cardTag}>{slides[current].cardTag}</span>
              <div className={styles.liveBadge}>
                <span className={styles.pulseDot} /> AO VIVO
              </div>
            </div>

            <h3 className={styles.cardTitle}>{slides[current].cardTitle}</h3>
            <span className={styles.cardValue}>{slides[current].cardValue}</span>
            <p className={styles.cardDesc}>{slides[current].cardDesc}</p>

            <div className={styles.cardFooter}>
              <Lock size={14} color="#00F59B" />
              <span>Protocolo Anônimo Criptografado</span>
            </div>
          </div>
        </div>
      </div>

      {/* Controles do Carrossel (Setas e Indicadores) */}
      <div className={`container ${styles.controlsContainer}`}>
        <div className={styles.controls}>
          <button onClick={prevSlide} className={styles.navBtn} aria-label="Slide anterior">
            <ChevronLeft size={22} />
          </button>

          <div className={styles.dotsGroup}>
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`${styles.dot} ${index === current ? styles.activeDot : ''}`}
                aria-label={`Ir para o slide ${index + 1}`}
              />
            ))}
          </div>

          <button onClick={nextSlide} className={styles.navBtn} aria-label="Próximo slide">
            <ChevronRight size={22} />
          </button>
        </div>
      </div>
    </section>
  );
}