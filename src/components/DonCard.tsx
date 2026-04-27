import { type ResultadoDon } from '../data/perguntas';
import '../styles/DonCard.css';

interface DonCardProps {
  don: ResultadoDon;
  onClick?: () => void;
}

export function DonCard({ don, onClick }: DonCardProps) {
  const percentual = (don.pontuação / 12) * 100;

  return (
    <div
      className={`don-card${onClick ? ' clicavel' : ''}`}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={onClick ? (e) => { if (e.key === 'Enter' || e.key === ' ') onClick(); } : undefined}
      aria-label={onClick ? `Ver detalhes do dom ${don.nome}` : undefined}
    >
      <div className="don-nome">{don.nome}</div>
      <div className="don-pontuacao">{don.pontuação}/12</div>
      <div className={`don-interpretação ${don.interpretação.toLowerCase()}`}>
        {don.interpretação}
      </div>
      <div className="barra-progresso">
        <div className="barra-preenchida" style={{ width: `${percentual}%` }} />
      </div>
      {onClick && <span className="don-card-hint">Ver detalhes →</span>}
    </div>
  );
}

