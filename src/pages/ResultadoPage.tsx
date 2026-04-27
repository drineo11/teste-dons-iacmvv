import { useEffect, useState } from 'react';
import { type ResultadoDon } from '../data/perguntas';
import { type DefiniçãoDon, getDefiniçãoDon } from '../data/definicoesDons';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { DonCard } from '../components/DonCard';
import { DonModal } from '../components/DonModal';
import '../styles/ResultadoPage.css';

interface DadosSalvos {
  dados: { nome: string; email: string; telefone: string };
  resultados: ResultadoDon[];
}

export function ResultadoPage() {
  const [dados, setDados] = useState<DadosSalvos | null>(null);
  const [donSelecionado, setDonSelecionado] = useState<DefiniçãoDon | null>(null);

  useEffect(() => {
    const salvo = sessionStorage.getItem('resultados');
    if (salvo) {
      setDados(JSON.parse(salvo));
    } else if (import.meta.env.DEV) {
      // Injeta dados de mentira apenas quando estiver rodando localmente (npm run dev)
      setDados({
        dados: { nome: 'Desenvolvedor', email: 'dev@exemplo.com', telefone: '(11) 99999-9999' },
        resultados: [
          { nome: 'Apóstolo',               pontuação: 11, interpretação: 'SIM' },
          { nome: 'Profeta',                pontuação: 8,  interpretação: 'POSSIVELMENTE' },
          { nome: 'Evangelista',            pontuação: 5,  interpretação: 'DIFICILMENTE' },
          { nome: 'Pastor',                 pontuação: 9,  interpretação: 'POSSIVELMENTE' },
          { nome: 'Ensino / Mestre',        pontuação: 12, interpretação: 'SIM' },
          { nome: 'Conhecimento',           pontuação: 2,  interpretação: 'NÃO' },
          { nome: 'Sabedoria',              pontuação: 7,  interpretação: 'POSSIVELMENTE' },
          { nome: 'Exortação/Aconselhamento', pontuação: 6, interpretação: 'DIFICILMENTE' },
          { nome: 'Liderança',              pontuação: 10, interpretação: 'SIM' },
          { nome: 'Serviço / Diaconia',     pontuação: 4,  interpretação: 'DIFICILMENTE' },
          { nome: 'Contribuição',           pontuação: 5,  interpretação: 'DIFICILMENTE' },
          { nome: 'Misericórdia',           pontuação: 8,  interpretação: 'POSSIVELMENTE' },
          { nome: 'Discernimento',          pontuação: 3,  interpretação: 'NÃO' },
          { nome: 'Fé',                     pontuação: 11, interpretação: 'SIM' },
        ],
      });
    } else {
      window.location.href = '/';
    }
  }, []);

  const refazerTeste = () => {
    sessionStorage.removeItem('resultados');
    window.location.href = '/';
  };

  if (!dados) return null;

  return (
    <>
      <div className="container">
        <Header />

        <section className="section">
          <h2>Dados do Participante</h2>
          <div className="dados-grid">
            <div className="dado-item">
              <span className="dado-label">Nome:</span>
              <span className="dado-value">{dados.dados.nome}</span>
            </div>
            <div className="dado-item">
              <span className="dado-label">Email:</span>
              <span className="dado-value">{dados.dados.email}</span>
            </div>
            <div className="dado-item">
              <span className="dado-label">Telefone:</span>
              <span className="dado-value">{dados.dados.telefone}</span>
            </div>
          </div>
        </section>

        <section className="section">
          <h2>Seus Dons Identificados</h2>
          <p className="resultado-nota">
            O resultado abaixo indica sua pontuação em cada don espiritual.
            A escala de interpretação é baseada em respostas de 0 a 3 para cada pergunta.
          </p>
          <div className="resultados-grid">
            {dados.resultados.map((don, index) => {
              const definicao = getDefiniçãoDon(don.nome);
              return (
                <DonCard
                  key={index}
                  don={don}
                  onClick={definicao ? () => setDonSelecionado(definicao) : undefined}
                />
              );
            })}
          </div>
        </section>

        <section className="section">
          <div className="botoes">
            <button type="button" className="btn btn-secondary" onClick={refazerTeste}>
              Refazer Teste
            </button>
          </div>
        </section>

        <Footer />
      </div>

      {donSelecionado && (
        <DonModal
          definicao={donSelecionado}
          onClose={() => setDonSelecionado(null)}
        />
      )}
    </>
  );
}
