'use client';

import Link from 'next/link';
import {
  LayoutDashboard,
  ShieldAlert,
  QrCode,
  Settings,
  LogOut,
  Building2,
  Save,
  Users,
  ShieldCheck,
} from 'lucide-react';
import { useState } from 'react';
import styles from './configuracoes.module.css';

export default function ConfiguracoesPage() {
  const [saved, setSaved] = useState(false);
  const [formData, setFormData] = useState({
    nomeEmpresa: 'Construtora Bahia S.A.',
    cnpj: '12.345.678/0001-90',
    emailNotificacao: 'cipa@construtorabahia.com.br',
    responsavelSst: 'Eng. Carlos Andrade (CREA-BA 98412)',
    slugUrl: 'construtora-bahia',
  });

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  return (
    <div className={styles.layoutWrapper}>
      <aside className={styles.sidebar}>
        <div className={styles.sidebarHeader}>
          <img src="/logo-branca.png" alt="Portal Escuta" className={styles.logoImg} />
        </div>

        <div className={styles.companyBadge}>
          <Building2 size={18} color="#38BDF8" />
          <div className={styles.companyInfo}>
            <span className={styles.companyName}>Construtora Bahia</span>
            <span className={styles.companyCnpj}>CNPJ: 12.345.678/0001-90</span>
          </div>
        </div>

        <nav className={styles.navMenu}>
          <Link href="/painel" className={styles.navItem}>
            <LayoutDashboard size={18} />
            <span>Visão Geral</span>
          </Link>
          <Link href="/painel/denuncias" className={styles.navItem}>
            <ShieldAlert size={18} />
            <span>Relatos & Chamados</span>
          </Link>
          <Link href="/painel/qrcode" className={styles.navItem}>
            <QrCode size={18} />
            <span>Cartazes & QR Code</span>
          </Link>
          <Link href="/painel/configuracoes" className={`${styles.navItem} ${styles.navItemActive}`}>
            <Settings size={18} />
            <span>Configurações</span>
          </Link>
        </nav>

        <div className={styles.sidebarFooter}>
          <Link href="/login" className={styles.logoutBtn}>
            <LogOut size={18} />
            <span>Sair do Painel</span>
          </Link>
        </div>
      </aside>

      <main className={styles.mainContent}>
        <header className={styles.topHeader}>
          <div>
            <h1 className={styles.pageTitle}>Configurações da Empresa</h1>
            <p className={styles.pageSubtitle}>
              Atualize dados cadastrais, e-mails de alerta da CIPA+A e responsáveis de SST.
            </p>
          </div>
        </header>

        <form onSubmit={handleSave} className={styles.formCard}>
          <div className={styles.sectionHeader}>
            <Building2 size={20} color="#0070F3" />
            <h2>Dados Gerais da Empresa</h2>
          </div>

          <div className={styles.inputGrid}>
            <div className={styles.inputGroup}>
              <label>Razão Social / Nome Fantasia</label>
              <input
                type="text"
                value={formData.nomeEmpresa}
                onChange={(e) => setFormData({ ...formData, nomeEmpresa: e.target.value })}
                className={styles.input}
              />
            </div>

            <div className={styles.inputGroup}>
              <label>CNPJ</label>
              <input
                type="text"
                value={formData.cnpj}
                onChange={(e) => setFormData({ ...formData, cnpj: e.target.value })}
                className={styles.input}
              />
            </div>
          </div>

          <div className={styles.sectionHeader} style={{ marginTop: '24px' }}>
            <Users size={20} color="#059669" />
            <h2>Comitê CIPA+A e Alertas</h2>
          </div>

          <div className={styles.inputGrid}>
            <div className={styles.inputGroup}>
              <label>E-mail para Receber Notificações de Denúncias</label>
              <input
                type="email"
                value={formData.emailNotificacao}
                onChange={(e) => setFormData({ ...formData, emailNotificacao: e.target.value })}
                className={styles.input}
              />
            </div>

            <div className={styles.inputGroup}>
              <label>Engenheiro / Técnico de SST Responsável</label>
              <input
                type="text"
                value={formData.responsavelSst}
                onChange={(e) => setFormData({ ...formData, responsavelSst: e.target.value })}
                className={styles.input}
              />
            </div>
          </div>

          <div className={styles.formFooter}>
            <button type="submit" className={styles.saveBtn}>
              <Save size={18} />
              <span>{saved ? 'Alterações Salvas!' : 'Salvar Configurações'}</span>
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}