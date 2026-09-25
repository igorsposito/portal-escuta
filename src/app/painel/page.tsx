'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import {
  LayoutDashboard,
  ShieldAlert,
  QrCode,
  Settings,
  LogOut,
  Bell,
  CheckCircle2,
  Clock,
  AlertTriangle,
  FileSpreadsheet,
  Building2,
  Eye,
  X,
  MessageSquare,
  AlertCircle
} from 'lucide-react';
import styles from './painel.module.css';

// Dados simulados para o protótipo
const initialReports = [
  {
    id: 'ESC-2026-8941',
    categoria: 'Assédio Moral (CIPA+A)',
    setor: 'Chão de Fábrica - Linha 02',
    data: '25/09/2026',
    urgencia: 'Alta',
    status: 'Pendente',
    descricao: 'Supervisão utilizando palavras ofensivas e ameaças de demissão frequentes.',
  },
  {
    id: 'ESC-2026-7210',
    categoria: 'Falta de EPI / Risco SST',
    setor: 'Almoxarifado Central',
    data: '24/09/2026',
    urgencia: 'Média',
    status: 'Em Investigação',
    descricao: 'Operadores trabalhando sem protetor auricular adequado na área de prensas.',
  },
  {
    id: 'ESC-2026-5519',
    categoria: 'Discriminação',
    setor: 'Atendimento Comercial',
    data: '20/09/2026',
    urgencia: 'Média',
    status: 'Concluído',
    descricao: 'Comentários preconceituosos recorrentes no ambiente de descanso.',
  },
  {
    id: 'ESC-2026-4102',
    categoria: 'Assédio Sexual (CIPA+A)',
    setor: 'Recursos Humanos',
    data: '18/09/2026',
    urgencia: 'Urgente',
    status: 'Em Investigação',
    descricao: 'Comportamento inadequado e abordagens constrangedoras fora do expediente.',
  },
];

// Notificações simuladas
const initialNotifications = [
  {
    id: 1,
    titulo: 'Novo Relato Registrado',
    subtitulo: 'Protocolo #ESC-2026-8941 • Assédio Moral na Linha 02',
    tempo: 'Há 15 minutos',
    lida: false,
    tipo: 'urgente'
  },
  {
    id: 2,
    titulo: 'Mensagem do Colaborador',
    subtitulo: 'Resposta enviada no protocolo #ESC-2026-7210 (SST)',
    tempo: 'Há 2 horas',
    lida: false,
    tipo: 'mensagem'
  },
  {
    id: 3,
    titulo: 'Lembrete de Prazo CIPA+A',
    subtitulo: 'Investigação do protocolo #ESC-2026-4102 completa 7 dias',
    tempo: 'Ontem',
    lida: true,
    tipo: 'alerta'
  }
];

export default function PainelPage() {
  const [reports] = useState(initialReports);
  const [selectedFilter, setSelectedFilter] = useState('Todos');
  const [showNotifications, setShowNotifications] = useState(false);
  const [notifications, setNotifications] = useState(initialNotifications);
  
  const notifRef = useRef<HTMLDivElement>(null);

  // Fecha o menu de notificações ao clicar fora dele
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (notifRef.current && !notifRef.current.contains(event.target as Node)) {
        setShowNotifications(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const unreadCount = notifications.filter(n => !n.lida).length;

  const markAllAsRead = () => {
    setNotifications(notifications.map(n => ({ ...n, lida: true })));
  };

  const filteredReports = reports.filter((r) => {
    if (selectedFilter === 'Todos') return true;
    return r.status === selectedFilter;
  });

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
          <Link href="/painel" className={`${styles.navItem} ${styles.navItemActive}`}>
            <LayoutDashboard size={18} />
            <span>Visão Geral</span>
          </Link>
          <Link href="/painel/denuncias" className={styles.navItem}>
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

      {/* Conteúdo Principal */}
      <main className={styles.mainContent}>
        {/* Topo do Painel */}
        <header className={styles.topHeader}>
          <div>
            <h1 className={styles.pageTitle}>Painel de Gestão & Compliance</h1>
            <p className={styles.pageSubtitle}>
              Monitore ocorrências, responda a chamados anônimos e mantenha sua CIPA+A em dia.
            </p>
          </div>

          <div className={styles.topActions}>
            {/* Botão de Notificação com Dropdown Interativo */}
            <div className={styles.notifContainer} ref={notifRef}>
              <button
                className={styles.iconNotifBtn}
                title="Notificações"
                onClick={() => setShowNotifications(!showNotifications)}
              >
                <Bell size={20} />
                {unreadCount > 0 && <span className={styles.notifDot} />}
              </button>

              {/* Menu Suspenso de Notificações */}
              {showNotifications && (
                <div className={styles.notifDropdown}>
                  <div className={styles.notifHeader}>
                    <div className={styles.notifTitleGroup}>
                      <h3>Notificações</h3>
                      {unreadCount > 0 && (
                        <span className={styles.unreadBadge}>{unreadCount} novas</span>
                      )}
                    </div>
                    {unreadCount > 0 && (
                      <button onClick={markAllAsRead} className={styles.markReadBtn}>
                        Marcar como lidas
                      </button>
                    )}
                  </div>

                  <div className={styles.notifList}>
                    {notifications.map((item) => (
                      <div
                        key={item.id}
                        className={`${styles.notifItem} ${!item.lida ? styles.notifUnread : ''}`}
                      >
                        <div className={styles.notifIconBox}>
                          {item.tipo === 'urgente' && <AlertCircle size={16} color="#EF4444" />}
                          {item.tipo === 'mensagem' && <MessageSquare size={16} color="#0070F3" />}
                          {item.tipo === 'alerta' && <Clock size={16} color="#F59E0B" />}
                        </div>
                        <div className={styles.notifContent}>
                          <h4>{item.titulo}</h4>
                          <p>{item.subtitulo}</p>
                          <span className={styles.notifTime}>{item.tempo}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className={styles.notifFooter}>
                    <Link href="/painel/denuncias" onClick={() => setShowNotifications(false)}>
                      Ver todos os relatos e chamados →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <div className={styles.userProfile}>
              <div className={styles.avatar}>RH</div>
              <div>
                <span className={styles.userName}>Gestão CIPA / SST</span>
                <span className={styles.userRole}>Administrador</span>
              </div>
            </div>
          </div>
        </header>

        {/* Cards de Métricas e KPIs */}
        <div className={styles.kpiGrid}>
          <div className={styles.kpiCard}>
            <div className={styles.kpiIconBox} style={{ backgroundColor: 'rgba(0, 112, 243, 0.1)', color: '#0070F3' }}>
              <ShieldAlert size={22} />
            </div>
            <div>
              <span className={styles.kpiLabel}>Total de Relatos</span>
              <strong className={styles.kpiValue}>14</strong>
              <span className={styles.kpiTrend}>+3 neste mês</span>
            </div>
          </div>

          <div className={styles.kpiCard}>
            <div className={styles.kpiIconBox} style={{ backgroundColor: 'rgba(239, 68, 68, 0.1)', color: '#EF4444' }}>
              <AlertTriangle size={22} />
            </div>
            <div>
              <span className={styles.kpiLabel}>Pendentes de Triagem</span>
              <strong className={styles.kpiValue}>1</strong>
              <span className={styles.kpiNoticeDanger}>Requer atenção imediata</span>
            </div>
          </div>

          <div className={styles.kpiCard}>
            <div className={styles.kpiIconBox} style={{ backgroundColor: 'rgba(245, 158, 11, 0.1)', color: '#F59E0B' }}>
              <Clock size={22} />
            </div>
            <div>
              <span className={styles.kpiLabel}>Em Investigação</span>
              <strong className={styles.kpiValue}>2</strong>
              <span className={styles.kpiNoticeWarning}>Prazo médio: 4 dias</span>
            </div>
          </div>

          <div className={styles.kpiCard}>
            <div className={styles.kpiIconBox} style={{ backgroundColor: 'rgba(16, 185, 129, 0.1)', color: '#10B981' }}>
              <CheckCircle2 size={22} />
            </div>
            <div>
              <span className={styles.kpiLabel}>Concluídos & Resolvidos</span>
              <strong className={styles.kpiValue}>11</strong>
              <span className={styles.kpiSuccess}>100% Auditável</span>
            </div>
          </div>
        </div>

        {/* Tabela Principal de Relatos */}
        <section className={styles.tableSection}>
          <div className={styles.tableHeader}>
            <div>
              <h2 className={styles.tableTitle}>Ocorrências Recentes</h2>
              <p className={styles.tableSubtitle}>Acompanhe o status e interaja com os relatos em andamento.</p>
            </div>

            <div className={styles.tableControls}>
              <div className={styles.filterGroup}>
                {['Todos', 'Pendente', 'Em Investigação', 'Concluído'].map((status) => (
                  <button
                    key={status}
                    onClick={() => setSelectedFilter(status)}
                    className={`${styles.filterBtn} ${selectedFilter === status ? styles.filterBtnActive : ''}`}
                  >
                    {status}
                  </button>
                ))}
              </div>

              <button className={styles.exportBtn}>
                <FileSpreadsheet size={16} />
                <span>Exportar Relatório</span>
              </button>
            </div>
          </div>

          <div className={styles.tableWrapper}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Protocolo</th>
                  <th>Categoria</th>
                  <th>Setor / Local</th>
                  <th>Data</th>
                  <th>Urgência</th>
                  <th>Status</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                {filteredReports.map((report) => (
                  <tr key={report.id}>
                    <td className={styles.protocolCell}>{report.id}</td>
                    <td className={styles.categoryCell}>{report.categoria}</td>
                    <td>{report.setor}</td>
                    <td>{report.data}</td>
                    <td>
                      <span
                        className={`${styles.badgeUrgencia} ${
                          report.urgencia === 'Urgente' || report.urgencia === 'Alta'
                            ? styles.urgenciaAlta
                            : styles.urgenciaMedia
                        }`}
                      >
                        {report.urgencia}
                      </span>
                    </td>
                    <td>
                      <span
                        className={`${styles.badgeStatus} ${
                          report.status === 'Pendente'
                            ? styles.statusPendente
                            : report.status === 'Em Investigação'
                            ? styles.statusInvestigacao
                            : styles.statusConcluido
                        }`}
                      >
                        {report.status}
                      </span>
                    </td>
                    <td>
                      <Link href="/painel/denuncias" className={styles.actionBtn} title="Abrir Detalhes e Responder">
                        <Eye size={16} />
                        <span>Abrir</span>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
}