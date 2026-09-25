import Link from 'next/link';
import { ShieldCheck, Lock } from 'lucide-react';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.headerContainer}`}>
        <Link href="/" className={styles.logoLink}>
          <img
            src="/logo.png"
            alt="Portal Escuta Logo"
            className={styles.logoImg}
          />
        </Link>

        <nav className={styles.nav}>
          <Link href="#recursos" className={styles.navLink}>Recursos</Link>
          <Link href="#cipa" className={styles.navLink}>CIPA+A & NRs</Link>
          <Link href="#como-funciona" className={styles.navLink}>Como Funciona</Link>
          <Link href="#faq" className={styles.navLink}>FAQ</Link>
          <Link href="#contato" className={styles.navLinkHighlight}>Demonstração</Link>
        </nav>

        <div className={styles.actions}>
          {/* Botão de Destaque para o Colaborador Fazer o Relato */}
          <Link href="/denunciar" className={styles.btnDenuncia}>
            <Lock size={15} color="#FFFFFF" />
            <span>Fazer Relato Anônimo</span>
          </Link>

          {/* Acesso da Empresa / Gestor */}
          <div className={styles.authPill}>
            <Link href="/login" className={styles.btnLogin}>
              Entrar
            </Link>
            <Link href="/cadastro" className={styles.btnRegister}>
              Cadastrar
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}