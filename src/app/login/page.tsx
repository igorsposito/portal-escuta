'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Mail, Lock, ShieldCheck, ArrowRight, Eye, EyeOff, ShieldAlert } from 'lucide-react';
import styles from './login.module.css';

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = '/painel'; 
  };

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.glowTop} />
      
      <div className={styles.container}>
        {/* Banner para o Colaborador que errou a rota */}
        <div className={styles.collaboratorNotice}>
          <ShieldAlert size={18} color="#0070F3" />
          <span>É colaborador e quer fazer um relato anônimo?</span>
          <Link href="/denunciar" className={styles.collaboratorLink}>
            Clique aqui
          </Link>
        </div>

        {/* Logo Superior */}
        <div className={styles.brand}>
          <Link href="/" className={styles.logoLink}>
            <img src="/logo.png" alt="Portal Escuta" className={styles.logoImg} />
          </Link>
        </div>

        {/* Card de Login */}
        <div className={styles.loginCard}>
          <div className={styles.cardHeader}>
            <h1 className={styles.title}>Painel de Gestão</h1>
            <p className={styles.subtitle}>
              Acesse a central de investigações e conformidade da sua empresa.
            </p>
          </div>

          <form onSubmit={handleSubmit} className={styles.form}>
            {/* Input E-mail */}
            <div className={styles.inputGroup}>
              <label className={styles.label}>E-mail Corporativo</label>
              <div className={styles.inputWrapper}>
                <div className={styles.inputIcon}>
                  <Mail size={18} color="#64748B" />
                </div>
                <input
                  type="email"
                  required
                  placeholder="gestor@suaempresa.com.br"
                  className={styles.input}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
            </div>

            {/* Input Senha */}
            <div className={styles.inputGroup}>
              <label className={styles.label}>Senha</label>
              <div className={styles.inputWrapper}>
                <div className={styles.inputIcon}>
                  <Lock size={18} color="#64748B" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  placeholder="••••••••"
                  className={styles.input}
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                />
                <button
                  type="button"
                  className={styles.eyeBtn}
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff size={18} color="#64748B" />
                  ) : (
                    <Eye size={18} color="#64748B" />
                  )}
                </button>
              </div>
            </div>

            {/* Linha de Opções */}
            <div className={styles.optionsRow}>
              <label className={styles.rememberBox}>
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className={styles.checkbox}
                />
                <span>Mantenha-me conectado</span>
              </label>

              <Link href="/recuperar-senha" className={styles.forgotPassword}>
                Esqueceu a senha?
              </Link>
            </div>

            {/* Botão Entrar */}
            <button type="submit" className={styles.submitBtn}>
              <span>Entrar na Plataforma</span>
              <ArrowRight size={18} />
            </button>
          </form>

          {/* Selo de Segurança */}
          <div className={styles.securityBadge}>
            <ShieldCheck size={16} color="#059669" />
            <span>Ambiente Criptografado & LGPD Compliant</span>
          </div>
        </div>

        {/* Link para Cadastro */}
        <p className={styles.registerPrompt}>
          Sua empresa ainda não possui conta?{' '}
          <Link href="/cadastro" className={styles.registerLink}>
            Cadastre-se agora
          </Link>
        </p>

        {/* Rodapé com Status do Sistema e Links */}
        <div className={styles.footerInfo}>
          <div className={styles.statusBadge}>
            <span className={styles.statusDot} />
            <span>Sistemas Operacionais</span>
          </div>
          <div className={styles.footerLinks}>
            <Link href="/privacidade">Privacidade</Link>
            <span>•</span>
            <Link href="/termos">Termos</Link>
          </div>
        </div>
      </div>
    </div>
  );
}