import { type ResultadoDon } from '../data/perguntas';
import '../styles/DonCard.css';

interface DonCardProps {
  don: ResultadoDon;
}

export function DonCard({ don }: DonCardProps) {
  const percentual = (don.pontuação / 24) * 100;

  return (
    <div className="don-card">
      <div className="don-nome">{don.nome}</div>
      <div className="don-pontuacao">{don.pontuação}/24</div>
      <div className={`don-interpretação ${don.interpretação.toLowerCase()}`}>
        {don.interpretação}
      </div>
      <div className="barra-progresso">
        <div className="barra-preenchida" style={{ width: `${percentual}%` }} />
      </div>
    </div>
  );
}
