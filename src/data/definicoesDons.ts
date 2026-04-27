export interface DefiniçãoDon {
  nomeTeste: string;
  titulo: string;
  referenciaBiblica: string;
  descricao: string;
  perguntaOrientadora: string;
  exemploBiblico: string;
  possivelAtuacao: string[];
}

export const DEFINICOES_DONS: DefiniçãoDon[] = [
  {
    nomeTeste: 'Apóstolo',
    titulo: 'Apostolado / Apóstolo',
    referenciaBiblica: 'Ef. 4:11',
    descricao: 'É movido por Deus a dar início a novas igrejas em lugares ainda não alcançados pelo evangelho de Jesus, lançando os fundamentos da vida com Deus numa sociedade e/ou grupo de pessoas.',
    perguntaOrientadora: 'Onde ainda não há presença do evangelho e poderíamos iniciar algo?',
    exemploBiblico: 'Atos 13:1-3',
    possivelAtuacao: ['Presbitério', 'Sup. Célula', 'Missões', 'Plantação de igrejas'],
  },
  {
    nomeTeste: 'Profeta',
    titulo: 'Profecia / Profeta',
    referenciaBiblica: 'Rom. 12:6; I Co. 12:10',
    descricao: 'É porta voz da mensagem de Deus às pessoas, conciliando com muita relevância os desafios contemporâneos com os princípios da Palavra.',
    perguntaOrientadora: 'O que Deus está querendo nos comunicar?',
    exemploBiblico: 'Atos 15:32',
    possivelAtuacao: ['Presbitério', 'Líder de célula', 'Louvor', 'Intercessão'],
  },
  {
    nomeTeste: 'Evangelista',
    titulo: 'Evangelista',
    referenciaBiblica: 'Ef. 4:11',
    descricao: 'Possui grande preocupação e interesse pelas pessoas que ainda não conhecem o evangelho de Jesus, procurando constantemente meios para comunicar-lhes.',
    perguntaOrientadora: 'Como posso alcançar intencionalmente quem ainda não conhece Jesus?',
    exemploBiblico: 'Atos 8:26-40',
    possivelAtuacao: ['Líder de célula', 'Recepção', 'Missões', 'Plantação de igrejas'],
  },
  {
    nomeTeste: 'Pastor',
    titulo: 'Pastor',
    referenciaBiblica: 'Ef. 4:11',
    descricao: 'Ocupa-se com o cuidado daqueles que já tomaram uma posição como discípulos de Jesus, procurando zelar pela sua saúde e desenvolvimento espiritual.',
    perguntaOrientadora: 'Quem está precisando de cuidado?',
    exemploBiblico: 'Atos 28:28-31',
    possivelAtuacao: ['Presbitério', 'Líder de célula', 'Ministério infantil', 'J.A.'],
  },
  {
    nomeTeste: 'Ensino / Mestre',
    titulo: 'Ensino / Mestre',
    referenciaBiblica: 'Rom. 12:7; Ef. 4:11',
    descricao: 'É usado por Deus para oferecer uma compreensão mais organizada e preventiva de Sua vontade expressa na Palavra.',
    perguntaOrientadora: 'Como posso apresentar as verdades bíblicas de forma clara e aplicável?',
    exemploBiblico: 'Atos 18:24-38',
    possivelAtuacao: ['Presbitério', 'Ministério infantil', 'Aliança em movimento'],
  },
  {
    nomeTeste: 'Conhecimento',
    titulo: 'Conhecimento',
    referenciaBiblica: 'I Co. 12:8',
    descricao: 'Revelação sobrenatural da parte de Deus, comunicando fatos objetivos sobre o passado ou o presente que não poderiam ser acessados pelo intelecto ou pela observação natural.',
    perguntaOrientadora: 'O que Deus quer revelar que não seria possível saber naturalmente?',
    exemploBiblico: 'Atos 11:27-28',
    possivelAtuacao: ['Intercessão', 'Diaconia'],
  },
  {
    nomeTeste: 'Sabedoria',
    titulo: 'Sabedoria',
    referenciaBiblica: 'I Co. 12:8',
    descricao: 'Compreensão da parte de Deus de como agir, trazendo soluções divinas para determinadas situações.',
    perguntaOrientadora: 'Qual a melhor decisão segundo a perspectiva de Deus?',
    exemploBiblico: 'Atos 15:12-21',
    possivelAtuacao: ['Diretoria', 'Sup. Células', 'Eventos'],
  },
  {
    nomeTeste: 'Exortação/Aconselhamento',
    titulo: 'Encorajamento / Exortação / Aconselhamento',
    referenciaBiblica: 'Rom. 12:8',
    descricao: 'Tem grande capacidade em aproximar-se de uma pessoa ou grupo, entendendo seu problema, encorajando com palavras e mantendo-se ao lado.',
    perguntaOrientadora: 'Quem está precisando de consolo ou encorajamento?',
    exemploBiblico: 'Atos 9:26-27',
    possivelAtuacao: ['Diaconia', 'Líder de célula', 'Ministério infantil'],
  },
  {
    nomeTeste: 'Liderança',
    titulo: 'Administração / Governo / Liderança',
    referenciaBiblica: 'I Co. 12:28; Rom. 12:8',
    descricao: 'Preocupa-se com a elaboração de um plano e o suprimento de recursos físicos e humanos para que o propósito de Deus para um grupo seja viabilizado.',
    perguntaOrientadora: 'Como posso organizar pessoas e recursos para cumprir os propósitos de Deus?',
    exemploBiblico: 'Atos 6:1-7',
    possivelAtuacao: ['Diretoria', 'Diaconia', 'Eventos', 'Bazar'],
  },
  {
    nomeTeste: 'Serviço / Diaconia',
    titulo: 'Serviço / Socorro / Diaconia',
    referenciaBiblica: 'Rom. 12:7; I Co. 12:28',
    descricao: 'Percebe com facilidade a necessidade de ajudar pessoas ou grupos em determinadas tarefas de apoio, tomando a iniciativa com atitudes práticas.',
    perguntaOrientadora: 'Onde há uma necessidade prática que posso suprir agora?',
    exemploBiblico: 'Atos 9:36',
    possivelAtuacao: ['Diaconia', 'Eventos', 'Ministério infantil', 'Bazar'],
  },
  {
    nomeTeste: 'Contribuição',
    titulo: 'Contribuição',
    referenciaBiblica: 'Rom. 12:8',
    descricao: 'Sente-se impelido a compartilhar seus bens materiais e apoiar financeiramente pessoas e grupos em dificuldades ou quando engajados numa tarefa.',
    perguntaOrientadora: 'Como posso usar meus recursos para o avanço do Reino de Deus?',
    exemploBiblico: 'Atos 4:36-37',
    possivelAtuacao: ['Diretoria', 'Diaconia', 'Bazar'],
  },
  {
    nomeTeste: 'Misericórdia',
    titulo: 'Misericórdia',
    referenciaBiblica: 'Rom. 12:8',
    descricao: 'Possui grande sensibilidade para com os que sofrem física ou emocionalmente, o que o leva a se aproximar com atitudes de consolo e encorajamento.',
    perguntaOrientadora: 'Quem está sofrendo e pode sentir o amor de Deus através de mim?',
    exemploBiblico: 'Atos 28:8',
    possivelAtuacao: ['Diaconia', 'Bazar'],
  },
  {
    nomeTeste: 'Discernimento',
    titulo: 'Discernimento',
    referenciaBiblica: 'I Co. 12:10',
    descricao: 'Tem grande sensibilidade para perceber quando pessoas e situações são fruto do mover de Deus ou quando são fruto de uma estratégia maligna.',
    perguntaOrientadora: 'Isso vem de Deus, do homem ou de outra influência?',
    exemploBiblico: 'Atos 16:16-18',
    possivelAtuacao: ['Intercessão', 'Louvor'],
  },
  {
    nomeTeste: 'Fé',
    titulo: 'Fé',
    referenciaBiblica: 'I Co. 12:9',
    descricao: 'Tem grande facilidade em confiar firmemente no poder de Deus, especialmente quando pessoas ou grupos estão diante de problemas humanamente impossíveis de serem solucionados.',
    perguntaOrientadora: 'O que está além do que meus olhos podem ver?',
    exemploBiblico: 'Atos 3:1-6',
    possivelAtuacao: ['Intercessão', 'Diretoria'],
  },
];

/** Retorna a definição de um dom pelo nome usado no teste, ou null se não encontrada. */
export function getDefiniçãoDon(nomeTeste: string): DefiniçãoDon | null {
  return DEFINICOES_DONS.find((d) => d.nomeTeste === nomeTeste) ?? null;
}
