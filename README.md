# Casa Verde - E-commerce de Plantas

**Casa Verde** é um site fictício de e-commerce dedicado a vender plantas, onde os usuários podem explorar as ofertas, aprender sobre cuidados com as plantas, e assinar uma newsletter para receber novidades da loja.

## Funcionalidades

- **Menu de Navegação**: Contém links para as seções do site, como Newsletter, Como Fazer, Ofertas e Carrinho.
- **Newsletter**: Permite que os usuários se cadastrem para receber novidades sobre as plantas da loja.
- **Ofertas**: Exibe as ofertas de plantas disponíveis na loja.
- **Como Fazer**: Fornece dicas sobre como cuidar das plantas compradas.
- **Carrinho de Compras**: Permite aos usuários visualizar os itens que estão prestes a comprar.

## Tecnologias Utilizadas

- **Frontend**:
  - React
  - Vite (como bundler de desenvolvimento)
  - CSS (para estilização)
  - Axios (para requisições HTTP)
  - React Router (para navegação entre as seções)

- **Backend**:
  - Node.js
  - Express (para API RESTful)
  - SendGrid (para envio de e-mails de confirmação de inscrição)

## Como Rodar o Projeto

### Requisitos

- Node.js e npm instalados em sua máquina.

### Rodando o Backend (Servidor Node.js)

1. Navegue até o diretório do **backend**:
   ```bash
   cd server

2. Instale as dependências:
   ```bash
    npm install

3. Inicie o servidor:
   ```bash
    npm start

O servidor estará rodando na porta 5000.


### Rodando o Frontend (Aplicação React)

1. Navegue até o diretório do frontend:
   ```bash
    cd src

2. Instale as dependências:
   ```bash
    npm install

3. Inicie o servidor de desenvolvimento:
   ```bash
    npm run dev

O frontend estará disponível em http://localhost:5173.


### Funcionalidades em Detalhes

**Menu de Navegação**
O menu contém links para navegar entre as seções do site. A navegação entre as seções é feita sem recarregar a página usando o React Router.

**Newsletter**
Os usuários podem se inscrever na newsletter para receber novidades sobre plantas. Ao se inscrever, um e-mail de confirmação é enviado para o usuário através da API do SendGrid.

**Como Fazer**
A seção Como Fazer contém dicas e instruções para cuidar das plantas, abordando cuidados básicos e informações úteis para manter as plantas saudáveis.

**Ofertas**
Exibe as ofertas da loja, onde os usuários podem visualizar as plantas em promoção ou com descontos especiais.

**Carrinho de Compras**
Os usuários podem adicionar itens ao carrinho, visualizar os itens selecionados e verificar o total da compra antes de finalizar.

### Estrutura de Pastas

├── server/
│   ├── server.js        # Arquivo de configuração do backend
│   └── .env            # Arquivo de variáveis de ambiente
├── src/
│   ├── components/
│   │   ├── Header.jsx   # Componente de cabeçalho com o menu
│   │   ├── Newsletter.jsx  # Componente da newsletter
│   │   ├── Offers.jsx   # Componente das ofertas
│   │   └── Cart.jsx     # Componente do carrinho
│   ├── App.jsx          # Componente principal do frontend
│   ├── main.jsx         # Ponto de entrada do frontend
│   └── assets/          # Imagens, ícones, etc.
└── public/ 
    └── index.html       # Arquivo HTML principal



