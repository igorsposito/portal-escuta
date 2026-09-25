'use client';

import { useState } from 'react';
import { Send, ShieldCheck, CheckCircle2, Building2, PhoneCall, Mail } from 'lucide-react';
import ScrollReveal from '../ScrollReveal/ScrollReveal';
import styles from './ContactSection.module.css';

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contato" className={styles.section}>
      <div className={styles.glowOverlay} />

      <div className="container">
        <div className={styles.contactLayout}>
          {/* Lado Esquerdo: Proposta de Valor Comercial & estatísticas */}
          <ScrollReveal>
            <div className={styles.infoBox}>
              <div className={styles.badge}>
                <ShieldCheck size={18} color="#00F59B" />
                <span>Demonstração Sem Compromisso</span>
              </div>

              <h2 className={styles.title}>
                Proteja sua empresa e atenda à Lei da CIPA+A hoje mesmo
              </h2>

              <p className={styles.desc}>
                Solicite uma apresentação personalizada. Nossa equipe preparará a estrutura do portal e o kit de sinalização para sua empresa.
              </p>

              <div className={styles.trustGrid}>
                <div className={styles.trustCard}>
                  <h3 className={styles.trustNumber}>24h</h3>
                  <p className={styles.trustLabel}>Tempo médio de ativação</p>
                </div>
                <div className={styles.trustCard}>
                  <h3 className={styles.trustNumber}>100%</h3>
                  <p className={styles.trustLabel}>Alinhado às NRs e CIPA+A</p>
                </div>
              </div>

              <div className={styles.contactDetails}>
                <div className={styles.detailItem}>
                  <Building2 size={20} color="#0070F3" />
                  <span>Atendimento em todo o Brasil</span>
                </div>
                <div className={styles.detailItem}>
                  <PhoneCall size={20} color="#0070F3" />
                  <span>Suporte especializado em SST & RH</span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Lado Direito: Formulário Interativo em Vidro Neon */}
          <ScrollReveal delay={150}>
            <div className={styles.formCard}>
              {submitted ? (
                <div className={styles.successState}>
                  <div className={styles.successIconBox}>
                    <CheckCircle2 size={48} color="#00F59B" />
                  </div>
                  <h3 className={styles.successTitle}>Solicitação Enviada com Sucesso!</h3>
                  <p className={styles.successDesc}>
                    Nosso consultor entrará em contato em breve para agendar sua demonstração ao vivo.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className={styles.form}>
                  <h3 className={styles.formTitle}>Solicitar Proposta Comercial</h3>

                  <div className={styles.inputGroup}>
                    <label htmlFor="nome" className={styles.label}>Seu Nome Completo</label>
                    <input type="text" id="nome" required placeholder="Ex: Roberto Silva" className={styles.input} />
                  </div>

                  <div className={styles.inputRow}>
                    <div className={styles.inputGroup}>
                      <label htmlFor="email" className={styles.label}>E-mail Corporativo</label>
                      <input type="email" id="email" required placeholder="roberto@suaempresa.com.br" className={styles.input} />
                    </div>
                    <div className={styles.inputGroup}>
                      <label htmlFor="telefone" className={styles.label}>WhatsApp / Telefone</label>
                      <input type="tel" id="telefone" required placeholder="(77) 99999-9999" className={styles.input} />
                    </div>
                  </div>

                  <div className={styles.inputRow}>
                    <div className={styles.inputGroup}>
                      <label htmlFor="empresa" className={styles.label}>Nome da Empresa</label>
                      <input type="text" id="empresa" required placeholder="Sua Empresa Ltda" className={styles.input} />
                    </div>
                    <div className={styles.inputGroup}>
                      <label htmlFor="funcionarios" className={styles.label}>Nº de Colaboradores</label>
                      <select id="funcionarios" required className={styles.select}>
                        <option value="">Selecione...</option>
                        <option value="1-20">Até 20 funcionários</option>
                        <option value="21-50">21 a 50 funcionários</option>
                        <option value="51-200">51 a 200 funcionários</option>
                        <option value="201+">Mais de 200 funcionários</option>
                      </select>
                    </div>
                  </div>

                  <button type="submit" className={styles.submitBtn}>
                    <span>Agendar Demonstração Grátis</span>
                    <Send size={18} />
                  </button>

                  <p className={styles.privacyNote}>
                    🔒 Seus dados estão 100% seguros. Não enviamos spam.
                  </p>
                </form>
              )}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}