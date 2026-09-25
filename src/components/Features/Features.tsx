'use client';

import { useState } from 'react';
import { HardHat, Users, Scale, QrCode, Lock, BarChart3, ShieldCheck, ArrowRight, Zap } from 'lucide-react';
import ScrollReveal from '../ScrollReveal/ScrollReveal';
import styles from './Features.module.css';

const tabs = [
  {
    id: 'sst',
    label: 'Segurança do Trabalho (SST)',
    icon: HardHat,
    tag: 'Engenharia de Segurança & NRs',
    title: 'Identificação imediata de riscos no chão de fábrica e obras',
    description: 'Permita que operários e técnicos relatem falta de EPIs, máquinas sem proteção, quase-acidentes e desvios de conduta das Normas Regulamentadoras antes que gerem acidentes graves.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80',
    stat: '100%',
    statLabel: 'Conformidade com NRs',
    features: [
      {
        icon: QrCode,
        title: 'Reporte via QR Code no Mural',
        desc: 'Sinalização em cartazes no setor de produção para acesso instantâneo via celular.',
      },
      {
        icon: Zap,
        title: 'Alerta Imediato para Equipe Técnica',
        desc: 'Notificação automática por e-mail e painel para o Técnico de Segurança investigar.',
      },
    ],
  },
  {
    id: 'cipa',
    label: 'CIPA+A & Prevenção ao Assédio',
    icon: Users,
    tag: 'Lei nº 14.457/22 • Compliance Trabalhista',
    title: 'Atendimento integral à legislação contra o assédio moral e sexual',
    description: 'Garantia de um ambiente seguro e acolhedor. O colaborador faz o relato e acompanha a tratativa sem revelar sua identidade, blindando a empresa de passivos jurídicos.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
    stat: '0',
    statLabel: 'Risco de Exposição do Denunciante',
    features: [
      {
        icon: Lock,
        title: 'Criptografia & Anonimato LGPD',
        desc: 'Sem registro de IP ou rastreamento de dados pessoais durante o envio.',
      },
      {
        icon: Scale,
        title: 'Relatório Auditável para CIPA',
        desc: 'Histórico de manifestações com evidências prontas para fiscalizações e auditorias.',
      },
    ],
  },
  {
    id: 'gestao',
    label: 'Gestão & Inteligência',
    icon: BarChart3,
    tag: 'Painel do Gestor & RH',
    title: 'Visão holística dos indicadores e clima organizacional',
    description: 'Acompanhe gráficos em tempo real, tempo médio de resposta por chamado e identifique setores com maior índice de ocorrências para aplicar treinamentos preventivos.',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80',
    stat: '4.8h',
    statLabel: 'Tempo Médio de Tratativa',
    features: [
      {
        icon: BarChart3,
        title: 'Métricas por Categoria e Setor',
        desc: 'Gráficos interativos para mapear vulnerabilidades e direcionar ações corretivas.',
      },
      {
        icon: ShieldCheck,
        title: 'Exportação de Relatórios PDF/Excel',
        desc: 'Documentação completa para prestação de contas à Diretoria e Ministério do Trabalho.',
      },
    ],
  },
];

export default function Features() {
  const [activeTab, setActiveTab] = useState(0);
  const current = tabs[activeTab];

  return (
    <section id="recursos" className={styles.section}>
      <div className={styles.glowBg} />

      <div className="container">
        <ScrollReveal>
          <div className={styles.header}>
            <span className={styles.tag}>Plataforma Completa</span>
            <h2 className={styles.title}>Tecnologia desenvolvida para proteger pessoas e empresas</h2>
            <p className={styles.subtitle}>
              Conheça os pilares fundamentais do Portal Escuta desenhados para integrar colaboradores, Segurança do Trabalho e RH.
            </p>
          </div>
        </ScrollReveal>

        {/* Navegação por Abas (Tabs) */}
        <ScrollReveal delay={100}>
          <div className={styles.tabsNav}>
            {tabs.map((tab, idx) => {
              const IconComp = tab.icon;
              const isActive = idx === activeTab;
              return (
                <button
                  key={tab.id}
                  className={`${styles.tabBtn} ${isActive ? styles.tabBtnActive : ''}`}
                  onClick={() => setActiveTab(idx)}
                >
                  <IconComp size={20} color={isActive ? '#0070F3' : '#64748B'} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </ScrollReveal>

        {/* Conteúdo Dinâmico da Aba Ativa */}
        <div className={styles.tabContentContainer}>
          <ScrollReveal delay={150}>
            <div className={styles.mainGrid}>
              {/* Lado Esquerdo: Imagem Viva com Card Flutuante de Métrica */}
              <div className={styles.visualColumn}>
                <div className={styles.imageCard}>
                  <img src={current.image} alt={current.title} className={styles.tabImage} />
                  <div className={styles.imageOverlay} />

                  <div className={styles.floatingMetricCard}>
                    <span className={styles.metricValue}>{current.stat}</span>
                    <span className={styles.metricLabel}>{current.statLabel}</span>
                  </div>
                </div>
              </div>

              {/* Lado Direito: Descrição e Sub-recursos */}
              <div className={styles.textColumn}>
                <div className={styles.badgeTag}>
                  <Zap size={14} color="#00F59B" />
                  <span>{current.tag}</span>
                </div>

                <h3 className={styles.contentTitle}>{current.title}</h3>
                <p className={styles.contentDesc}>{current.description}</p>

                <div className={styles.featuresList}>
                  {current.features.map((item, index) => {
                    const SubIcon = item.icon;
                    return (
                      <div key={index} className={styles.featureBox}>
                        <div className={styles.iconBox}>
                          <SubIcon size={22} color="#0070F3" />
                        </div>
                        <div>
                          <h4 className={styles.boxTitle}>{item.title}</h4>
                          <p className={styles.boxDesc}>{item.desc}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}