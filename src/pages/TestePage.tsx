import { useState } from 'react';
import { PERGUNTAS, ESCALA, calcularResultados } from '../data/perguntas';
import { enviarResultado } from '../lib/api';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import '../styles/TestePage.css';

interface DadosUsuario {
  nome: string;
  email: string;
  telefone: string;
}

export function TestePage() {
  const [dados, setDados] = useState<DadosUsuario>({
    nome: '',
    email: '',
    telefone: ''
  });
  const [respostas, setRespostas] = useState<Record<number, number>>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDados({ ...dados, [e.target.name]: e.target.value });
  };

  const handleRespostaChange = (perguntaId: number, valor: number) => {
    setRespostas({ ...respostas, [perguntaId]: valor });
  };

  const preencherTesteRapido = () => {
    const novasRespostas: Record<number, number> = {};
    PERGUNTAS.forEach(p => {
      novasRespostas[p.id] = Math.floor(Math.random() * 4);
    });
    setRespostas(novasRespostas);
  };

  const validarFormulario = () => {
    if (!dados.nome) { alert('Informe seu nome.'); return false; }
    if (!dados.email || !dados.email.includes('@')) { alert('Informe um email válido.'); return false; }
    if (!dados.telefone) { alert('Informe seu telefone.'); return false; }
    return true;
  };

  const validarRespostas = () => {
    for (let i = 1; i <= 56; i++) {
      if (respostas[i] === undefined) return false;
    }
    return true;
  };

  const exibirResultados = async () => {
    if (!validarFormulario()) return;
    if (!validarRespostas()) { alert('Responda todas as 56 perguntas.'); return; }

    const resultados = calcularResultados(respostas);

    sessionStorage.setItem('resultados', JSON.stringify({
      dados,
      resultados
    }));

    await enviarResultado({ ...dados, resultados });

    window.location.href = '/resultado';
  };

  const perguntasPorBloco = 8;
  const blocos: number[][] = [];
  for (let i = 0; i < PERGUNTAS.length; i += perguntasPorBloco) {
    blocos.push(PERGUNTAS.slice(i, i + perguntasPorBloco).map(p => p.id));
  }

  return (
    <div className="container">
      <Header />

      <section className="section">
        <h2>Identificação</h2>
        <div className="form-group">
          <label htmlFor="nome">Nome completo *</label>
          <input type="text" id="nome" name="nome" value={dados.nome} onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email *</label>
          <input type="email" id="email" name="email" value={dados.email} onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label htmlFor="telefone">Telefone *</label>
          <input type="tel" id="telefone" name="telefone" value={dados.telefone} onChange={handleInputChange} />
        </div>
      </section>

      <section className="section">
        <h2>Instruções</h2>
        <p className="instrucoes-text">
          Este inventário poderá auxiliá-lo a perceber áreas com as quais seus dons podem estar relacionados.
          A partir desta identificação, você poderá estar mais sensível quanto a alegria de seu coração,
          os resultados de suas ações e ao reconhecimento espontâneo de outros.
        </p>
        <p className="instrucoes-text">
          Preencha as lacunas correspondentes conforme os valores a seguir:
        </p>
        <div className="escala">
          {ESCALA.map(e => (
            <div key={e.valor} className="escala-item">
              <span className="escala-valor">{e.valor}</span> {e.texto}
            </div>
          ))}
        </div>
        <p className="instrucoes-text alert">
          Responda com toda honestidade. Não responda segundo o que você acha que seus sentimentos
          e/ou atitudes deveriam ser, mas de acordo com o que eles <strong>são em realidade hoje</strong>.
        </p>
      </section>

      <section className="section">
        <h2>Perguntas</h2>
        {blocos.map((bloco, blocoIndex) => (
          <div key={blocoIndex} className="pergunta-block">
            {bloco.map(id => {
              const pergunta = PERGUNTAS.find(p => p.id === id)!;
              return (
                <div key={id} className="pergunta">
                  <div className="pergunta-texto">
                    <span className="pergunta-numero">{pergunta.id}.</span>
                    {pergunta.texto}
                  </div>
                  <div className="respostas">
                    {ESCALA.map(e => (
                      <label key={e.valor} className="radio-option">
                        <input
                          type="radio"
                          name={`pergunta-${id}`}
                          value={e.valor}
                          checked={respostas[id] === e.valor}
                          onChange={() => handleRespostaChange(id, e.valor)}
                        />
                        <span className="radio-label">{e.valor}</span>
                      </label>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        ))}

        <div className="botoes">
          <button type="button" className="btn btn-secondary" onClick={preencherTesteRapido}>
            Preencher Teste Rápido
          </button>
          <button type="button" className="btn btn-primary" onClick={exibirResultados}>
            Ver Resultado
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
