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
          <p className="resultado-referencias">
            Definições dos Dons Espirituais: Romanos 12:7-8 | ICoríntios 12:7-10 | Efésios 4:11
          </p>
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
