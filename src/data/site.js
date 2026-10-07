// ============================================================
// CONFIGURAÇÃO CENTRAL DO SITE
// Edite só este arquivo para trocar textos, preços e contatos.
// Nada aqui é "secreto" - são só dados públicos do site.
// ============================================================

export const site = {
  nome: "Patrick Lira",
  cargo: "Preparador Físico",
  cref: "CREF em processo de emissão", // troque por "CREF 000000-G/PB" quando sair
  cidade: "Monteiro (PB)",

  contato: {
    // Troque pelo número real, formato internacional sem espaços/símbolos:
    // Ex: 55 83 9XXXX-XXXX -> "5583900000000"
    whatsappNumero: "5583998134796",
    whatsappMensagemPadrao:
      "Olá, Patrick! Vim pelo site e gostaria de saber mais sobre a consultoria.",
    email: "contato@patricklira.com.br", // troque pelo e-mail real
    instagram: "@patricklira", // troque pelo @ real
  },
};

export const whatsappLink = (mensagem, numero) => {
  const msg = encodeURIComponent(mensagem || site.contato.whatsappMensagemPadrao);
  const alvo = numero || site.contato.whatsappNumero;
  return `https://wa.me/${alvo}?text=${msg}`;
};

export const nutricionistaParceiro = {
  nome: "Jefferson",
  formacao: "Nutricionista",
  crn: "", // <-- coloque aqui o número do CRN, ex: "CRN-6 12345"
  descontoTexto: "20% de desconto para alunos do Patrick Lira",
  // Foto opcional: use a imagem salva em public/images
  // Se não existir, o site mostra um ícone no lugar automaticamente.
  foto: "/images/nutri-profile.jpg",
  contato: {
    instagram: "@jefferson_aniz",
    whatsappNumero: "5583996430878",
  },
};

export const parceriaSuplementos = {
  nome: "GA Suplementos",
  descontoTexto: "Loja parceira, com desconto exclusivo para alunos do Patrick Lira",
  // Logo da loja: coloque a imagem em public/images/GA_logo.png
  // Se não existir, o site mostra um ícone no lugar automaticamente.
  foto: "/images/GA_logo.jpeg",
  contato: {
    instagram: "@gasuplementospb",
    whatsappNumero: "558398964410", 
  },
};

export const servicos = [
  {
    id: "consultoria-online",
    slug: "/consultoria-online",
    titulo: "Consultoria Online",
    resumo:
      "Treino individualizado, ajustado semanalmente, com acompanhamento 100% remoto e suporte direto no WhatsApp.",
  },
  {
    id: "acompanhamento-presencial",
    slug: "/acompanhamento-presencial",
    titulo: "Acompanhamento Presencial",
    resumo: `Personal training presencial em ${"Monteiro (PB)"}, com avaliação de composição corporal.`,
  },
  {
    id: "parceria-nutricionista",
    slug: "/parceria-nutricionista",
    titulo: "Parceria com Nutricionista Esportivo",
    resumo:
      "Treino e nutrição alinhados por profissionais parceiros, para resultado completo dentro e fora da academia.",
  },
  {
    id: "parceria-suplementos",
    slug: "/parceria-suplementos",
    titulo: "Desconto em Suplementos",
    resumo: "Parceria com a GA Suplementos para quem é aluno do Patrick Lira.",
  },
];

export const planosConsultoriaOnline = [
  { plano: "Mensal", total: 150, mensal: 150 },
  { plano: "Bimestral", total: 285, mensal: 142.5 },
  { plano: "Trimestral", total: 405, mensal: 135 },
  { plano: "Semestral", total: 765, mensal: 127.5 },
  { plano: "Anual", total: 1350, mensal: 112.5 },
];

export const beneficiosConsultoriaOnline = [
  "Anamnese completa",
  "Treinamento individualizado de força, potência e resistência (endurance)",
  "Aplicativo de treino liberado",
  "WhatsApp liberado para consultas",
  "Monitoramento semanal do treinamento",
  "Ajustes de acordo com a rotina do cliente",
  "Participação em projetos promocionais",
];

export const formatBRL = (valor) =>
  valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });