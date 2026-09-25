'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ShieldCheck, Lock, Upload, AlertCircle, CheckCircle2, ArrowLeft, Copy, Eye } from 'lucide-react';
import styles from './denunciar.module.css';

export default function DenunciarPage() {
  const [isAnonymous, setIsAnonymous] = useState(true);
  const [submittedProtocol, setSubmittedProtocol] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  // Estados do formulário
  const [formData, setFormData] = useState({
    categoria: '',
    unidade: '',
    descricao: '',
    nome: '',
    email: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simula a geração do protocolo único
    const randomProtocol = `ESC-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
    setSubmittedProtocol(randomProtocol);
  };

  const handleCopyProtocol = () => {
    if (submittedProtocol) {
      navigator.clipboard.writeText(submittedProtocol);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className={styles.pageWrapper}>
      {/* Topo Limpo e Institucional */}
      <header className={styles.header}>
        <div className="container">
          <div className={styles.headerContent}>
            <Link href="/" className={styles.logoLink}>
              <img src="/logo.png" alt="Portal Escuta" className={styles.logoImg} />
            </Link>
            <Link href="/" className={styles.backLink}>
              <ArrowLeft size={16} />
              <span>Voltar ao site</span>
            </Link>
          </div>
        </div>
      </header>

      <main className="container">
        <div className={styles.contentContainer}>
          {/* Se a denúncia já foi enviada: Tela de Protocolo */}
          {submittedProtocol ? (
            <div className={styles.successCard}>
              <div className={styles.successIconBox}>
                <CheckCircle2 size={48} color="#059669" />
              </div>
              <h1 className={styles.successTitle}>Relato Enviado com Sucesso!</h1>
              <p className={styles.successDesc}>
                Sua manifestação foi registrada e encaminhada com segurança para a equipe de investigação responsável.
              </p>

              <div className={styles.protocolBox}>
                <span className={styles.protocolLabel}>SEU NÚMERO DE PROTOCOLO ANÔNIMO</span>
                <div className={styles.protocolRow}>
                  <span className={styles.protocolCode}>{submittedProtocol}</span>
                  <button onClick={handleCopyProtocol} className={styles.copyBtn}>
                    <Copy size={16} />
                    <span>{copied ? 'Copiado!' : 'Copiar'}</span>
                  </button>
                </div>
                <p className={styles.protocolNotice}>
                  <strong>Guarde este número!</strong> Com ele você poderá acompanhar o andamento da apuração e interagir com o RH/SST de forma 100% anônima.
                </p>
              </div>

              <div className={styles.successActions}>
                <Link href="/" className={styles.btnHome}>
                  Ir para a Página Inicial
                </Link>
                <button
                  onClick={() => setSubmittedProtocol(null)}
                  className={styles.btnNewReport}
                >
                  Fazer Outro Relato
                </button>
              </div>
            </div>
          ) : (
            /* Formulário Principal do Colaborador */
            <div className={styles.formCard}>
              {/* Banner de Garantia de Anonimato */}
              <div className={styles.securityBanner}>
                <div className={styles.securityIconBox}>
                  <Lock size={20} color="#059669" />
                </div>
                <div>
                  <h3 className={styles.securityTitle}>Canal 100% Anônimo e Protegido</h3>
                  <p className={styles.securityDesc}>
                    Sua identidade e endereço de IP não são gravados. Você pode relatar com total liberdade e sem receio de retaliação.
                  </p>
                </div>
              </div>

              <div className={styles.formHeader}>
                <h1 className={styles.title}>Registrar um Relato ou Denúncia</h1>
                <p className={styles.subtitle}>
                  Preencha os campos abaixo com o máximo de detalhes possível para ajudar na investigação.
                </p>
              </div>

              <form onSubmit={handleSubmit} className={styles.form}>
                {/* Seleção de Categoria */}
                <div className={styles.inputGroup}>
                  <label className={styles.label}>
                    Tipo de Ocorrência <span className={styles.required}>*</span>
                  </label>
                  <select
                    required
                    className={styles.select}
                    value={formData.categoria}
                    onChange={(e) => setFormData({ ...formData, categoria: e.target.value })}
                  >
                    <option value="">Selecione a categoria principal...</option>
                    <option value="assedio-moral">Assédio Moral ou Abuso de Autoridade (CIPA+A)</option>
                    <option value="assedio-sexual">Assédio Sexual ou Inconveniência (CIPA+A)</option>
                    <option value="seguranca-sst">Risco de Acidente, Máquina sem Proteção ou Falta de EPI (SST/NR-1)</option>
                    <option value="discriminacao">Discriminação, Preconceito ou Intimidação</option>
                    <option value="fraude">Fraude, Desvio ou Irregularidade</option>
                    <option value="outros">Outros assuntos corporativos</option>
                  </select>
                </div>

                {/* Unidade ou Setor */}
                <div className={styles.inputGroup}>
                  <label className={styles.label}>
                    Unidade, Filial ou Setor onde ocorreu <span className={styles.required}>*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: Chão de Fábrica - Setor de Usinagem, Recepção, Obra 02..."
                    className={styles.input}
                    value={formData.unidade}
                    onChange={(e) => setFormData({ ...formData, unidade: e.target.value })}
                  />
                </div>

                {/* Descrição Detalhada */}
                <div className={styles.inputGroup}>
                  <label className={styles.label}>
                    Descrição Detalhada do Fato <span className={styles.required}>*</span>
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Descreva o que aconteceu, quando ocorreu e quem esteve envolvido. Dica: Para manter o anonimato absoluto, evite incluir seus dados pessoais aqui."
                    className={styles.textarea}
                    value={formData.descricao}
                    onChange={(e) => setFormData({ ...formData, descricao: e.target.value })}
                  />
                </div>

                {/* Upload de Evidências (Opcional) */}
                <div className={styles.inputGroup}>
                  <label className={styles.label}>Anexar Evidências ou Fotos (Opcional)</label>
                  <div className={styles.fileUploadBox}>
                    <Upload size={22} color="#0070F3" />
                    <span className={styles.uploadText}>
                      Clique aqui para selecionar arquivos ou fotos
                    </span>
                    <span className={styles.uploadSubtext}>PNG, JPG, PDF ou MP4 até 10MB</span>
                    <input type="file" className={styles.fileInput} />
                  </div>
                </div>

                {/* Alternância de Anonimato vs Identificação */}
                <div className={styles.anonymityOptionBox}>
                  <div className={styles.anonymityHeader}>
                    <input
                      type="checkbox"
                      id="anonymityCheck"
                      checked={isAnonymous}
                      onChange={(e) => setIsAnonymous(e.target.checked)}
                      className={styles.checkbox}
                    />
                    <label htmlFor="anonymityCheck" className={styles.checkboxLabel}>
                      <strong>Desejo manter meu relato 100% Anônimo</strong>
                    </label>
                  </div>

                  {!isAnonymous && (
                    <div className={styles.identityInputs}>
                      <div className={styles.inputRow}>
                        <div className={styles.inputGroup}>
                          <label className={styles.label}>Seu Nome</label>
                          <input
                            type="text"
                            placeholder="Nome completo"
                            className={styles.input}
                            value={formData.nome}
                            onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                          />
                        </div>
                        <div className={styles.inputGroup}>
                          <label className={styles.label}>Seu E-mail ou Telefone</label>
                          <input
                            type="text"
                            placeholder="Contato para retorno"
                            className={styles.input}
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Botão de Envio */}
                <button type="submit" className={styles.submitBtn}>
                  <ShieldCheck size={20} />
                  <span>Enviar Relato com Segurança</span>
                </button>
              </form>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}