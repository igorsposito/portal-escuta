'use client';

import Link from 'next/link';
import {
  LayoutDashboard,
  ShieldAlert,
  QrCode,
  Settings,
  LogOut,
  Building2,
  Download,
  Printer,
  Copy,
  ExternalLink,
  Check,
} from 'lucide-react';
import { useState } from 'react';
import styles from './qrcode.module.css';

export default function QrCodePage() {
  const [copied, setCopied] = useState(false);
  const companyUrl = 'https://portalescuta.com.br/relato/construtora-bahia';

  const handleCopy = () => {
    navigator.clipboard.writeText(companyUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
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
          <Link href="/painel/qrcode" className={`${styles.navItem} ${styles.navItemActive}`}>
            <QrCode size={18} />
            <span>Cartazes & QR Code</span>
          </Link>
          <Link href="/painel/configuracoes" className={styles.navItem}>
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
            <h1 className={styles.pageTitle}>Cartazes & QR Code da Empresa</h1>
            <p className={styles.pageSubtitle}>
              Imprima os cartazes de conformidade CIPA+A e cole nos murais e setores da empresa.
            </p>
          </div>
        </header>

        <div className={styles.gridContainer}>
          {/* Gerador de Link e QR Code */}
          <div className={styles.card}>
            <h2 className={styles.cardTitle}>Seu Link Exclusivo de Relatos</h2>
            <p className={styles.cardDesc}>
              Este é o canal oficial de recepção de denúncias da Construtora Bahia.
            </p>

            <div className={styles.urlBox}>
              <span className={styles.urlText}>{companyUrl}</span>
              <button onClick={handleCopy} className={styles.copyBtn}>
                {copied ? <Check size={16} /> : <Copy size={16} />}
                <span>{copied ? 'Copiado!' : 'Copiar'}</span>
              </button>
            </div>

            <div className={styles.qrCodeVisualBox}>
              {/* Simulação visual do QR Code */}
              <div className={styles.qrCodeFrame}>
                <QrCode size={160} color="#0F172A" />
              </div>
              <p className={styles.qrSubtext}>Aponta para a URL exclusiva de relatos anônimos da sua empresa.</p>
            </div>
          </div>

          {/* Cartaz para Impressão A4 */}
          <div className={styles.card}>
            <h2 className={styles.cardTitle}>Cartaz Oficial CIPA+A (Pronto em PDF)</h2>
            <p className={styles.cardDesc}>
              Modelo formatado em A4 exigido para fiscalizações do Ministério do Trabalho.
            </p>

            <div className={styles.posterPreview}>
              <div className={styles.posterHeader}>
                <img src="/logo.png" alt="Portal Escuta" className={styles.posterLogo} />
                <span className={styles.posterBadge}>Lei nº 14.457/22 • CIPA+A</span>
              </div>

              <h3 className={styles.posterTitle}>CANAL DE DENÚNCIAS ANÔNIMO</h3>
              <p className={styles.posterDesc}>Sua voz com segurança, sigilo e zero gravação de IP.</p>

              <div className={styles.posterQrCenter}>
                <QrCode size={120} color="#0070F3" />
                <span>Escaneie com a câmera do seu celular</span>
              </div>

              <div className={styles.posterFooter}>
                <span>Construtora Bahia • Gestão Preventiva de Riscos</span>
              </div>
            </div>

            <div className={styles.posterActions}>
              <button className={styles.btnPrimary}>
                <Printer size={18} />
                <span>Imprimir Cartaz em PDF</span>
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}