import Link from 'next/link';
import { Lock, CheckCircle, Mail, Phone, MapPin } from 'lucide-react';
import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container">
        {/* Linha Superior */}
        <div className={styles.topRow}>
          <div className={styles.brandCol}>
            <Link href="/" className={styles.logoLink}>
              <img
                src="/logo-branca.png"
                alt="Portal Escuta Logo"
                className={styles.logoImg}
              />
            </Link>
            <p className={styles.brandDesc}>
              A solução definitiva em Canal de Denúncias anônimo, conformidade com a CIPA+A (Lei nº 14.457/22) e gestão preventiva de riscos ocupacionais (NR-1).
            </p>
            <div className={styles.securityBadges}>
              <div className={styles.badgeItem}>
                <Lock size={14} color="#00F59B" />
                <span>Criptografia SSL & LGPD</span>
              </div>
              <div className={styles.badgeItem}>
                <CheckCircle size={14} color="#00F59B" />
                <span>100% Auditável</span>
              </div>
            </div>
          </div>

          <div className={styles.linksCol}>
            <h4 className={styles.colTitle}>Navegação</h4>
            <ul className={styles.linkList}>
              <li><Link href="#recursos">Recursos da Plataforma</Link></li>
              <li><Link href="#cipa">Conformidade CIPA+A</Link></li>
              <li><Link href="#como-funciona">Como Funciona</Link></li>
              <li><Link href="#faq">Perguntas Frequentes</Link></li>
              <li><Link href="#contato">Solicitar Proposta</Link></li>
            </ul>
          </div>

          <div className={styles.linksCol}>
            <h4 className={styles.colTitle}>Conformidade Legal</h4>
            <ul className={styles.linkList}>
              <li><span>Lei nº 14.457/22 (CIPA+A)</span></li>
              <li><span>NR-1 (Gerenciamento de Riscos)</span></li>
              <li><span>Lei 13.709/18 (LGPD)</span></li>
              <li><span>Garantia de Anonimato</span></li>
              <li><span>Prevenção ao Assédio</span></li>
            </ul>
          </div>

          <div className={styles.contactCol}>
            <h4 className={styles.colTitle}>Atendimento Comercial</h4>
            <div className={styles.contactList}>
              <div className={styles.contactItem}>
                <Mail size={16} color="#0070F3" />
                <span>contato@portalescuta.com.br</span>
              </div>
              <div className={styles.contactItem}>
                <Phone size={16} color="#0070F3" />
                <span>(77) 99999-9999</span>
              </div>
              <div className={styles.contactItem}>
                <MapPin size={16} color="#0070F3" />
                <span>Vitória da Conquista - BA</span>
              </div>
            </div>
          </div>
        </div>

        {/* Linha Inferior */}
        <div className={styles.bottomBar}>
          <p className={styles.copyright}>
            © {currentYear} <strong>Portal Escuta</strong>. Todos os direitos reservados.
          </p>
          <div className={styles.credits}>
            <span>Desenvolvido por</span>
            <a
              href="https://agavelab.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.agaveLink}
            >
              <img
                src="/logo-agave.png"
                alt="Ágave Lab"
                className={styles.agaveLogo}
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}