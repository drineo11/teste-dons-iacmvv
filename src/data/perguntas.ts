export interface Pergunta {
  id: number;
  texto: string;
}

export interface Don {
  nome: string;
  perguntas: number[];
}

export interface ResultadoDon {
  nome: string;
  pontuação: number;
  interpretação: string;
}

export const ESCALA = [
  { valor: 0, texto: 'Não sei / Nunca' },
  { valor: 1, texto: 'Dificilmente' },
  { valor: 2, texto: 'Possivelmente / Às vezes' },
  { valor: 3, texto: 'Sim / Com frequência' },
];

export const PERGUNTAS: Pergunta[] = [
  { id: 1, texto: 'Quando escuto notícias sobre missionários ou trabalho transcultural, sinto um grande desejo de participar desses projetos.' },
  { id: 2, texto: 'Tenho facilidade em identificar quando outras pessoas estão com necessidades emocionais ou espirituais.' },
  { id: 3, texto: 'Consigo explicar verdades bíblicas complexas de forma que outros entendam facilmente.' },
  { id: 4, texto: 'Sou movido por um propósito claro de estabelecer congregações ou comunidades de fé em novos lugares.' },
  { id: 5, texto: 'Tenho facilidade em falar com pessoas sobre decisões importantes de vida.' },
  { id: 6, texto: 'Quando participo de grupos, percebo facilmente quando alguém está excluído ou precisa de inclusão.' },
  { id: 7, texto: 'Costumo criar abordagens novas e criativas para compartilhar o evangelho.' },
  { id: 8, texto: 'Tenho facilidade em liderar e coordenar projetos ou atividades da igreja.' },
  { id: 9, texto: 'Sinto que Deus me dá sabedoria para aconselhar pessoas em dificuldades.' },
  { id: 10, texto: 'Tenho facilidade em ajudar as pessoas a entender a Bíblia de forma prática e aplicável.' },
  { id: 11, texto: 'Gosto de trabalhar em projetos de longo prazo que tenham impacto duradouro.' },
  { id: 12, texto: 'Tenho facilidade em iniciar conversas com desconhecidos sobre fé.' },
  { id: 13, texto: 'Consigo perceber quando alguém precisa de encorajamento e sei como fazê-lo.' },
  { id: 14, texto: 'Tenho facilidade em criar materiais visuais, artísticos ou criativos para comunicar a mensagem bíblica.' },
  { id: 15, texto: 'Tenho capacidade de supervisionar e guiar outros líderes na igreja.' },
  { id: 16, texto: 'Frequentemente oro para que Deus abra oportunidades de compartilhar o evangelho.' },
  { id: 17, texto: 'Tenho facilidade em identificar necessidades práticas das pessoas ao meu redor.' },
  { id: 18, texto: 'Consigo transmitir ensinamentos bíblicos de forma clara e organizada.' },
  { id: 19, texto: 'Tenho um olhar estratégico para identificar onde o evangelho precisa ser levado.' },
  { id: 20, texto: 'Sinto uma satisfação profunda quando ajudo alguém a tomar uma decisão de fé.' },
  { id: 21, texto: 'Tenho facilidade em integrar novas pessoas na comunidade de fé.' },
  { id: 22, texto: 'Minhas ideias e projetos costumam despertar interesse e entusiasmo em outras pessoas.' },
  { id: 23, texto: 'Sou capaz de interceder por longos períodos com fervor e persistência.' },
  { id: 24, texto: 'Tenho facilidade em criar histórias, ilustrações ou metáforas que tornam conceitos bíblicos mais claros.' },
  { id: 25, texto: 'Tenho capacidade de iniciar e manter obras ou ministérios que outros não conseguem.' },
  { id: 26, texto: 'Consigo identificar quando alguém está pronto para ouvir e aceitar o evangelho.' },
  { id: 27, texto: 'Tenho facilidade em ajudar pessoas a se reconciliarem com Deus e com outras pessoas.' },
  { id: 28, texto: 'Minhas pregações ou ensinamentos costumam ter poder para transformar vidas.' },
  { id: 29, texto: 'Tenho facilidade em organizar pessoas e recursos para alcançar metas específicas.' },
  { id: 30, texto: 'Consigo perceber quando pessoas ao meu redor estão passando por problemas emocionais.' },
  { id: 31, texto: 'Tenho facilidade em desenvolver materiais educacionais ou programas de formação.' },
  { id: 32, texto: 'Sinto que Deus me dá a capacidade de curar feridas emocionais e espirituais.' },
  { id: 33, texto: 'Tenho facilidade em influenciar pessoas para decisões de fé com gentileza e respeito.' },
  { id: 34, texto: 'Sou capaz de interceder por outros com compaixão genuína.' },
  { id: 35, texto: 'Tenho facilidade em comunicar verdades bíblicas de forma simples e direta.' },
  { id: 36, texto: 'Consigo motivar pessoas para participar de atividades ou projetos missionários.' },
  { id: 37, texto: 'Tenho facilidade em perceber quando alguém está sendo enganado por falsos ensinamentos.' },
  { id: 38, texto: 'Consigo aplicar textos bíblicos em situações práticas do dia a dia.' },
  { id: 39, texto: 'Tenho capacidade de plantar novas congregações ou grupos de oração.' },
  { id: 40, texto: 'Sinto que Deus me usa para ajudar pessoas a encontrar liberdade emocional e espiritual.' },
  { id: 41, texto: 'Tenho facilidade em criar ambientes acolhedores onde todos se sentem bem-vindos.' },
  { id: 42, texto: 'Sou capaz de transmitir ensinamentos bíblicos com autoridade e clareza.' },
  { id: 43, texto: 'Tenho facilidade em guiar grupos de pessoas em atividades ou discussões.' },
  { id: 44, texto: 'Consigo identificar quando alguém precisa de oração especializada ou cura interior.' },
  { id: 45, texto: 'Tenho facilidade em organizar e estruturar informações complexas de forma clara.' },
  { id: 46, texto: 'Sou capaz de ensinar princípios bíblicos de forma que transformem a vida das pessoas.' },
  { id: 47, texto: 'Tenho facilidade em identificar dons e talentos nas pessoas ao meu redor.' },
  { id: 48, texto: 'Consigo perceber quando pessoas estão sendo movidas por espíritos enganadores.' },
  { id: 49, texto: 'Tenho facilidade em criar sistemas e processos para organizar atividades da igreja.' },
  { id: 50, texto: 'Consigo guiar pessoas em decisões importantes com sabedoria e discernimento.' },
  { id: 51, texto: 'Tenho facilidade em falar sobre minha fé de forma natural e corajosa.' },
  { id: 52, texto: 'Sou capaz de aplicar verdades bíblicas em situações de conflito ou tensão.' },
  { id: 53, texto: 'Tenho facilidade em perceber quando alguém está sendo atraído para falsas doutrinas.' },
  { id: 54, texto: 'Consigo explicar o propósito de Deus para a vida das pessoas de forma clara.' },
  { id: 55, texto: 'Tenho facilidade em desenvolver líderes e investir no crescimento espiritual de outros.' },
  { id: 56, texto: 'Consigo perceber quando pessoas estão pedindo ajuda espiritual genuína.' },
];

export const DONS: Don[] = [
  { nome: 'Apóstolo',                       perguntas: [1, 15, 29, 43] },
  { nome: 'Profeta',                         perguntas: [2, 16, 30, 44] },
  { nome: 'Evangelista',                     perguntas: [3, 17, 31, 45] },
  { nome: 'Pastor',                          perguntas: [4, 18, 32, 46] },
  { nome: 'Ensino / Mestre',                perguntas: [5, 19, 33, 47] },
  { nome: 'Conhecimento',                   perguntas: [6, 20, 34, 48] },
  { nome: 'Sabedoria',                      perguntas: [7, 21, 35, 49] },
  { nome: 'Exortação/Aconselhamento',       perguntas: [8, 22, 36, 50] },
  { nome: 'Liderança',                      perguntas: [9, 23, 37, 51] },
  { nome: 'Serviço / Diaconia',             perguntas: [10, 24, 38, 52] },
  { nome: 'Contribuição',                   perguntas: [11, 25, 39, 53] },
  { nome: 'Misericórdia',                   perguntas: [12, 26, 40, 54] },
  { nome: 'Discernimento',                  perguntas: [13, 27, 41, 55] },
  { nome: 'Fé',                             perguntas: [14, 28, 42, 56] },
];

export function getInterpretação(pontuação: number): string {
  if (pontuação <= 3) return 'NÃO';
  if (pontuação <= 6) return 'DIFICILMENTE';
  if (pontuação <= 9) return 'POSSIVELMENTE';
  return 'SIM';
}

export function calcularResultados(respostas: Record<number, number>): ResultadoDon[] {
  return DONS.map(don => {
    const pontuação = don.perguntas.reduce((acc, id) => acc + (respostas[id] || 0), 0);
    return {
      nome: don.nome,
      pontuação,
      interpretação: getInterpretação(pontuação),
    };
  });
}
