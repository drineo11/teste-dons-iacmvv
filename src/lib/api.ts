export async function enviarResultado(dados: {
  nome: string;
  email: string;
  telefone: string;
  resultados: Array<{ nome: string; pontuação: number; interpretação: string }>;
}) {
  const response = await fetch('/api/enviar', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(dados)
  });
  return response.json();
}
