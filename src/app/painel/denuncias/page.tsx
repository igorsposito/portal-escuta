'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  LayoutDashboard,
  ShieldAlert,
  QrCode,
  Settings,
  LogOut,
  Building2,
  Search,
  Filter,
  Eye,
  X,
  Send,
  Lock,
  MessageSquare,
  FileSpreadsheet,
} from 'lucide-react';
import styles from './denuncias.module.css';

const allReports = [
  {
    id: 'ESC-2026-8941',
    categoria: 'Assédio Moral (CIPA+A)',
    setor: 'Chão de Fábrica - Linha 02',
    data: '25/09/2026',
    urgencia: 'Alta',
    status: 'Pendente',
    descricao: 'Supervisão utilizando palavras ofensivas e ameaças de demissão frequentes durante a cobrança de metas do turno da noite.',
    historico: [
      { autor: 'Colaborador (Anônimo)', data: '25/09/2026 10:14', texto: 'Registrei o relato pois a situação na Linha 02 está insustentável.' },
    ]
  },
  {
    id: 'ESC-2026-7210',
    categoria: 'Falta de EPI / Risco SST',
    setor: 'Almoxarifado Central',
    data: '24/09/2026',
    urgencia: 'Média',
    status: 'Em Investigação',
    descricao: 'Operadores trabalhando sem protetor auricular adequado na área de prensas de alta pressão.',
    historico: [
      { autor: 'Colaborador (Anônimo)', data: '24/09/2026 14:30', texto: 'Aguardando substituição dos abafadores desde semana passada.' },
      { autor: 'Gestão CIPA / SST', data: '25/09/2026 09:00', texto: 'Solicitação de compra emergencial de EPIs enviada ao setor de compras.' }
    ]
  },
  {
    id: 'ESC-2026-5519',
    categoria: 'Discriminação',
    setor: 'Atendimento Comercial',
    data: '20/09/2026',
    urgencia: 'Média',
    status: 'Concluído',
    descricao: 'Comentários preconceituosos recorrentes no ambiente de descanso.',
    historico: [
      { autor: 'Gestão CIPA / SST', data: '22/09/2026 16:00', texto: 'Treinamento de conscientização e advertência verbal realizada com a equipe.' }
    ]
  },
  {
    id: 'ESC-2026-4102',
    categoria: 'Assédio Sexual (CIPA+A)',
    setor: 'Recursos Humanos',
    data: '18/09/2026',
    urgencia: 'Urgente',
    status: 'Em Investigação',
    descricao: 'Comportamento inadequado e abordagens constrangedoras fora do expediente por parte de um superior.',
    historico: [
      { autor: 'Gestão CIPA / SST', data: '19/09/2026 11:20', texto: 'Iniciada apuração sigilosa com apoio do comitê de ética.' }
    ]
  },
];

export default function DenunciasPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('Todos');
  const [activeModalReport, setActiveModalReport] = useState<any | null>(null);
  const [newMessage, setNewMessage] = useState('');

  const filtered = allReports.filter((item) => {
    const matchesSearch = item.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.categoria.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.setor.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = selectedStatus === 'Todos' || item.status === selectedStatus;
    return matchesSearch && matchesStatus;
  });

  const handleSendMessage = () => {
    if (!newMessage.trim() || !activeModalReport) return;
    const updatedHistory = [
      ...activeModalReport.historico,
      { autor: 'Gestão CIPA / SST', data: 'Hoje às ' + new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}), texto: newMessage }
    ];
    setActiveModalReport({ ...activeModalReport, historico: updatedHistory });
    setNewMessage('');
  };

  return (
    <div className={styles.layoutWrapper}>
      {/* Sidebar Lateral */}
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
          <Link href="/painel/denuncias" className={`${styles.navItem} ${styles.navItemActive}`}>
            <ShieldAlert size={18} />
            <span>Relatos & Chamados</span>
            <span className={styles.badgeCount}>2</span>
          </Link>
          <Link href="/painel/qrcode" className={styles.navItem}>
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

      {/* Conteúdo */}
      <main className={styles.mainContent}>
        <header className={styles.topHeader}>
          <div>
            <h1 className={styles.pageTitle}>Gestão de Relatos & Denúncias</h1>
            <p className={styles.pageSubtitle}>
              Filtre, analise a causa raiz e interaja anonimamente com o relator.
            </p>
          </div>
        </header>

        {/* Filtros e Busca */}
        <div className={styles.filterBar}>
          <div className={styles.searchBox}>
            <Search size={18} color="#64748B" />
            <input
              type="text"
              placeholder="Buscar por código de protocolo, categoria ou setor..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={styles.searchInput}
            />
          </div>

          <div className={styles.statusFilters}>
            {['Todos', 'Pendente', 'Em Investigação', 'Concluído'].map((status) => (
              <button
                key={status}
                onClick={() => setSelectedStatus(status)}
                className={`${styles.filterChip} ${selectedStatus === status ? styles.filterChipActive : ''}`}
              >
                {status}
              </button>
            ))}
          </div>
        </div>

        {/* Tabela de Relatos */}
        <div className={styles.tableCard}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Protocolo</th>
                <th>Categoria</th>
                <th>Setor</th>
                <th>Data</th>
                <th>Urgência</th>
                <th>Status</th>
                <th>Ação</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((item) => (
                <tr key={item.id}>
                  <td className={styles.protocolCell}>{item.id}</td>
                  <td className={styles.categoryCell}>{item.categoria}</td>
                  <td>{item.setor}</td>
                  <td>{item.data}</td>
                  <td>
                    <span className={`${styles.urgencyBadge} ${item.urgencia === 'Urgente' || item.urgencia === 'Alta' ? styles.urgencyHigh : styles.urgencyMedium}`}>
                      {item.urgencia}
                    </span>
                  </td>
                  <td>
                    <span className={`${styles.statusBadge} ${item.status === 'Pendente' ? styles.statusPendente : item.status === 'Em Investigação' ? styles.statusInvestigacao : styles.statusConcluido}`}>
                      {item.status}
                    </span>
                  </td>
                  <td>
                    <button onClick={() => setActiveModalReport(item)} className={styles.openBtn}>
                      <Eye size={15} />
                      <span>Detalhes</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>

      {/* Modal de Detalhes e Chat Anônimo */}
      {activeModalReport && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalCard}>
            <div className={styles.modalHeader}>
              <div>
                <span className={styles.modalProtocol}>{activeModalReport.id}</span>
                <h2 className={styles.modalTitle}>{activeModalReport.categoria}</h2>
              </div>
              <button onClick={() => setActiveModalReport(null)} className={styles.closeBtn}>
                <X size={20} />
              </button>
            </div>

            <div className={styles.modalBody}>
              <div className={styles.infoRow}>
                <div><strong>Setor:</strong> {activeModalReport.setor}</div>
                <div><strong>Data:</strong> {activeModalReport.data}</div>
                <div><strong>Urgência:</strong> {activeModalReport.urgencia}</div>
              </div>

              <div className={styles.descBox}>
                <label>Descrição do Relato:</label>
                <p>{activeModalReport.descricao}</p>
              </div>

              {/* Chat Anônimo de Acompanhamento */}
              <div className={styles.chatSection}>
                <h3><MessageSquare size={16} /> Canal de Comunicação Anônimo com o Colaborador</h3>
                <div className={styles.chatHistory}>
                  {activeModalReport.historico.map((msg: any, idx: number) => (
                    <div key={idx} className={`${styles.chatBubble} ${msg.autor.includes('Gestão') ? styles.chatBubbleGestor : styles.chatBubbleUser}`}>
                      <div className={styles.chatMeta}>{msg.autor} • {msg.data}</div>
                      <div className={styles.chatText}>{msg.texto}</div>
                    </div>
                  ))}
                </div>

                <div className={styles.chatInputRow}>
                  <input
                    type="text"
                    placeholder="Digite uma mensagem para o relator (ele lerá usando o código de protocolo)..."
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    className={styles.chatInput}
                  />
                  <button onClick={handleSendMessage} className={styles.sendBtn}>
                    <Send size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}