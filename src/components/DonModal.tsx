import { useEffect } from 'react';
import { type DefiniçãoDon } from '../data/definicoesDons';
import '../styles/DonModal.css';

interface DonModalProps {
  definicao: DefiniçãoDon;
  onClose: () => void;
}

export function DonModal({ definicao, onClose }: DonModalProps) {
  // Fecha com Escape e bloqueia scroll do body
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div
      className="modal-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={definicao.titulo}
    >
      {/* Impede que cliques dentro do modal fechem o overlay */}
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        {/* Barra de arraste (visual, mobile) */}
        <div className="modal-drag-bar" />

        {/* Cabeçalho */}
        <div className="modal-header">
          <div className="modal-titulo-grupo">
            <h2 className="modal-titulo">{definicao.titulo}</h2>
            <span className="modal-ref-biblica">
              📖 {definicao.referenciaBiblica}
            </span>
          </div>
          <button
            className="modal-btn-fechar"
            onClick={onClose}
            aria-label="Fechar modal"
          >
            ✕
          </button>
        </div>

        <hr className="modal-divider" />

        {/* Descrição */}
        <div className="modal-secao">
          <p className="modal-secao-label">✦ Descrição</p>
          <div className="modal-descricao">{definicao.descricao}</div>
        </div>

        {/* Pergunta Orientadora */}
        <div className="modal-secao">
          <p className="modal-secao-label">💬 Pergunta Orientadora</p>
          <div className="modal-pergunta">"{definicao.perguntaOrientadora}"</div>
        </div>

        {/* Exemplo Bíblico */}
        <div className="modal-secao">
          <p className="modal-secao-label">📚 Exemplo Bíblico</p>
          <div className="modal-exemplo">{definicao.exemploBiblico}</div>
        </div>

        {/* Possíveis Atuações */}
        <div className="modal-secao">
          <p className="modal-secao-label">🎯 Possíveis Atuações</p>
          <div className="modal-chips">
            {definicao.possivelAtuacao.map((item) => (
              <span key={item} className="modal-chip">{item}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
