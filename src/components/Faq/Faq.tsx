'use client';

import { useState } from 'react';
import { HelpCircle, ChevronDown, MessageSquare, Headphones } from 'lucide-react';
import ScrollReveal from '../ScrollReveal/ScrollReveal';
import styles from './Faq.module.css';

const faqItems = [
  {
    question: 'A plataforma atende 100% às exigências da Lei 14.457/22 (CIPA+A)?',
    answer: 'Sim! O Portal Escuta foi desenvolvido em conformidade direta com as exigências da Lei nº 14.457/22, oferecendo canal de denúncias independente, garantia de anonimato, recebimento e acompanhamento de relatos sobre assédio moral, sexual e riscos ocupacionais.',
  },
  {
    question: 'Como é garantido o anonimato do colaborador?',
    answer: 'Nenhum dado pessoal, IP de conexão ou cookie rastreável é gravado no banco de dados quando o colaborador opta pelo envio anônimo. O acompanhamento é feito exclusivamente por um código de protocolo criptografado e senha gerados no momento do envio.',
  },
  {
    question: 'Quem recebe e trata as denúncias enviadas?',
    answer: 'As denúncias são direcionadas exclusivamente para os gestores credenciados da sua empresa (Comitê de Ética / CIPA / RH) ou para a nossa equipe de consultoria de Segurança do Trabalho, garantindo sigilo e imparcialidade.',
  },
  {
    question: 'O colaborador precisa instalar algum aplicativo no celular?',
    answer: 'Não. O acesso é feito instantaneamente via navegador de qualquer smartphone ao escanear o QR Code impresso nos cartazes da fábrica/escritório ou através do link direto.',
  },
  {
    question: 'Em quanto tempo o sistema é implantado na minha empresa?',
    answer: 'A liberação é imediata. Após o cadastro, você recebe o acesso ao Painel de Gestão e o kit completo de sinalização com os QR Codes prontos para impressão.',
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className={styles.section}>
      <div className={styles.glowBg} />

      <div className="container">
        <ScrollReveal>
          <div className={styles.header}>
            <div className={styles.badge}>
              <HelpCircle size={18} color="#0070F3" />
              <span>Tire Suas Dúvidas</span>
            </div>
            <h2 className={styles.title}>Perguntas Frequentes</h2>
            <p className={styles.subtitle}>
              Entenda todos os detalhes técnicos, jurídicos e operacionais do Portal Escuta.
            </p>
          </div>
        </ScrollReveal>

        <div className={styles.faqLayout}>
          {/* Lado Esquerdo: Accordion Interativo */}
          <div className={styles.accordionGroup}>
            {faqItems.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <ScrollReveal key={index} delay={index * 60}>
                  <div
                    className={`${styles.faqItem} ${isOpen ? styles.faqItemOpen : ''}`}
                    onClick={() => toggleFaq(index)}
                  >
                    <div className={styles.faqQuestion}>
                      <span className={styles.questionText}>{item.question}</span>
                      <div className={`${styles.arrowBox} ${isOpen ? styles.arrowRotated : ''}`}>
                        <ChevronDown size={20} color={isOpen ? '#0070F3' : '#64748B'} />
                      </div>
                    </div>
                    {isOpen && (
                      <div className={styles.faqAnswer}>
                        <p>{item.answer}</p>
                      </div>
                    )}
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

          {/* Lado Direito: Card de Suporte Humano Vivo */}
          <ScrollReveal delay={200}>
            <div className={styles.supportCard}>
              <div className={styles.supportImageWrapper}>
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80"
                  alt="Especialista de atendimento e consultoria em Segurança do Trabalho"
                  className={styles.supportImg}
                />
                <div className={styles.supportBadge}>
                  <span className={styles.pulseDot} />
                  <span>Especialistas de Plantão</span>
                </div>
              </div>

              <div className={styles.supportBody}>
                <div className={styles.supportIconBox}>
                  <Headphones size={24} color="#00F59B" />
                </div>
                <h3 className={styles.supportTitle}>Ainda tem alguma dúvida?</h3>
                <p className={styles.supportDesc}>
                  Fale diretamente com um especialista em Engenharia de Segurança e Compliance.
                </p>
                <a href="#contato" className={styles.supportBtn}>
                  <MessageSquare size={18} />
                  <span>Falar com Consultor</span>
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}