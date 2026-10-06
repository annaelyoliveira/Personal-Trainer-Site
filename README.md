# Site — Patrick Lira | Preparador Físico

Site institucional feito em **React + Vite + React Router**. É um site 100%
estático (sem backend, sem banco de dados), então não existe nenhuma chave
secreta real para configurar — só dados públicos de contato.

## Estrutura do projeto

```
patrick-lira-site/
├─ public/
│  ├─ favicon.png
│  ├─ images/
│  │  ├─ logo-light.png      # logo em PNG transparente (fundo escuro)
│  │  ├─ logo-dark.png       # logo em PNG transparente (fundo claro)
│  │  └─ resultados/         # ⬅ coloque aqui as fotos de resultados
├─ src/
│  ├─ data/site.js           # ⬅ EDITE AQUI: textos, preços, WhatsApp, e-mail, Instagram
│  ├─ components/            # Navbar, Footer, botão do WhatsApp, tabela de preços
│  ├─ pages/                 # Início, Consultoria Online, Presencial, Nutrição, Contato
│  ├─ App.jsx                # rotas do site
│  └─ index.css              # paleta de cores, tipografia, estilos globais
└─ index.html
```

## 1. O que você precisa editar antes de publicar

Abra o arquivo **`src/data/site.js`** e troque:

- `whatsappNumero`: seu número real, só números, com DDI+DDD (ex: `"5583912345678"`)
- `email`: seu e-mail de contato
- `instagram`: seu @ do Instagram
- `cref`: quando sair o registro, troque `"CREF em processo de emissão"` por `"CREF 000000-G/PB"`

Depois, adicione suas fotos de resultado em `public/images/resultados/` com os
nomes `cliente-01.jpg`, `cliente-02.jpg`, `patrick-01.jpg` (ou edite os nomes
dentro de `src/pages/Home.jsx`, na seção "RESULTADOS").

## 2. Rodando o site no seu computador

Pré-requisito: ter o [Node.js](https://nodejs.org/) instalado (versão 18 ou
superior). Depois, no terminal, dentro da pasta do projeto:

```bash
npm install
npm run dev
```

Isso abre o site em `http://localhost:5173`. Toda alteração salva atualiza a
página automaticamente.

Para gerar a versão de produção (arquivos otimizados prontos para publicar):

```bash
npm run build
```

Isso cria uma pasta `dist/` — é ela que vai para o ar.

## 3. Publicando de graça (passo a passo)

A forma mais simples e 100% gratuita é usando a **Vercel**, conectada ao seu
**GitHub**. Assim, toda vez que você editar o site e enviar a alteração pro
GitHub, ele atualiza sozinho no ar (deploy automático).

### Passo 1 — Criar uma conta no GitHub
1. Acesse [github.com](https://github.com) e crie uma conta gratuita.

### Passo 2 — Subir o projeto para o GitHub
1. Crie um repositório novo (botão **New repository**), com o nome, por
   exemplo, `patrick-lira-site`. Deixe como **Public** ou **Private**, tanto
   faz.
2. No seu computador, dentro da pasta do projeto, rode:

```bash
git init
git add .
git commit -m "Primeira versão do site"
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/patrick-lira-site.git
git push -u origin main
```

> Troque `SEU_USUARIO` pelo seu usuário do GitHub. O `.gitignore` já está
> configurado para nunca subir `node_modules/`, `dist/` ou arquivos `.env`.

### Passo 3 — Criar conta na Vercel e importar o projeto
1. Acesse [vercel.com](https://vercel.com) e crie uma conta gratuita usando
   "Continue with GitHub" (login direto com o GitHub).
2. Clique em **Add New → Project**.
3. Selecione o repositório `patrick-lira-site` que você acabou de subir.
4. A Vercel detecta automaticamente que é um projeto **Vite** — não precisa
   mudar nada nas configurações de build (`npm run build`, pasta `dist`).
5. Clique em **Deploy**. Em cerca de 1 minuto o site estará no ar, com uma
   URL gratuita do tipo `patrick-lira-site.vercel.app`.

### Passo 4 — Atualizações futuras
Sempre que quiser mudar algo (preço, texto, foto):
1. Edite o arquivo localmente.
2. Rode:
```bash
git add .
git commit -m "Atualiza preços"
git push
```
3. A Vercel publica a nova versão sozinha, em segundos.

### Alternativa: domínio próprio (opcional, também sem custo de plataforma)
Na Vercel, em **Project → Settings → Domains**, você pode apontar um domínio
próprio (ex: `patricklira.com.br`) que você comprou em um registrador (isso
tem custo do domínio em si, mas a hospedagem na Vercel continua gratuita).

### Alternativa ao GitHub + Vercel: Netlify
O processo é praticamente idêntico: crie conta em
[netlify.com](https://www.netlify.com), conecte o mesmo repositório do
GitHub, comando de build `npm run build`, pasta de publicação `dist`. O
arquivo `public/_redirects` já está pronto para isso.

## 4. Segurança e boas práticas já aplicadas

- **Sem segredos no código**: o site não tem backend, então não existem
  chaves de API privadas para vazar. O arquivo `.env.example` documenta como
  proceder com segurança **caso** você adicione um formulário de contato no
  futuro (ex: EmailJS, Web3Forms).
- **`.gitignore` configurado** para nunca versionar `node_modules/`, `dist/`
  nem arquivos `.env`.
- **Headers de segurança** configurados em `vercel.json`
  (`X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`,
  `Permissions-Policy`).
- **HTTPS automático** e gratuito, oferecido pela própria Vercel/Netlify.
- **Sourcemaps desativados** no build de produção (`vite.config.js`), para
  não expor o código-fonte facilmente.
- Componentes organizados por responsabilidade (`components/` genéricos,
  `pages/` por rota, `data/` para conteúdo), facilitando manutenção.

## 5. Paleta e tipografia (para referência)

- Fundo escuro: `#0E0F13` · Cartões: `#16181F` · Superfície clara: `#F5F3EE`
- Cor de destaque (CTA, links ativos): `#E8452C`
- Tipografia de título: **Oswald** · Texto: **Inter** · Dados/preços: **IBM Plex Mono**
