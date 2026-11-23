# 🏎️ Ferrari E-commerce

Loja virtual de carros Ferrari desenvolvida em React. O projeto lista modelos obtidos de uma API de veículos, permite montar um carrinho de compras e simular o fechamento do pedido com cálculo de frete a partir do CEP.

> Projeto final do curso de desenvolvimento frontend com React do **Projeto Tomorrow**, do Instituto de Computação da **UFBA**.

🔗 **Demo:** https://thiagoo-franca.github.io/ecomerceReact

## ✨ Funcionalidades

- Listagem de modelos Ferrari consumindo uma API de veículos (dados da tabela FIPE)
- Botão "Mostrar mais" para carregar mais modelos (começa com 9 e carrega de 3 em 3)
- Carrinho de compras com quantidade de itens e valor total, além do botão "Limpar carrinho"
- Tela de checkout com formulário de CEP validado (8 dígitos)
- Consulta de endereço pela API do ViaCEP (cidade, estado, bairro, rua e região)
- Simulação de frete de acordo com a região do endereço
- Tela de confirmação do pedido, que esvazia o carrinho
- Rotas com React Router

> ⚠️ Os preços exibidos e o valor do frete são **gerados aleatoriamente** apenas para fins de demonstração. Não representam valores reais.

## 🛠️ Tecnologias

- [React 18](https://react.dev/)
- [Vite](https://vite.dev/)
- [React Router DOM](https://reactrouter.com/)
- [Formik](https://formik.org/) e [Yup](https://github.com/jquense/yup) (formulário e validação)
- CSS Modules
- ESLint
- gh-pages (deploy)

## 🔌 APIs utilizadas

- **Brazilian Vehicle Pricing** (via All Things Dev): lista os modelos de carros da marca
- **[ViaCEP](https://viacep.com.br/)**: consulta de endereço a partir do CEP

## 📁 Estrutura do projeto

```
src/
├── components/dashbord/   # Post: card de cada carro
├── header/                # cabeçalho e navegação
├── footer/                # rodapé
├── pages/                 # Confirmar (checkout) e pedidoFeito
├── App.jsx                # estado do carrinho, chamada à API e rotas
└── main.jsx
```

## 🚀 Como rodar localmente

Pré-requisitos: [Node.js](https://nodejs.org/) instalado e uma chave de acesso à API de veículos (All Things Dev).

```bash
# clonar o repositório
git clone https://github.com/Thiagoo-Franca/ecomerceReact.git
cd ecomerceReact

# instalar as dependências
npm install

# iniciar o servidor de desenvolvimento
npm run dev
```

A chave da API é enviada no cabeçalho `x-apihub-key`, dentro do `useEffect` de `src/App.jsx`. Use a sua própria chave.

## 📜 Scripts disponíveis

| Comando           | Descrição                                   |
| ----------------- | ------------------------------------------- |
| `npm run dev`     | Inicia o ambiente de desenvolvimento        |
| `npm run build`   | Gera a build de produção na pasta `dist`    |
| `npm run preview` | Visualiza a build de produção localmente    |
| `npm run lint`    | Executa o ESLint                            |
| `npm run deploy`  | Faz build e publica no GitHub Pages         |

## 📚 Sobre o projeto

Este foi um dos meus primeiros projetos com React. Nele pratiquei componentização, estado com hooks (`useState`, `useEffect`, `useCallback`), roteamento, consumo de APIs, formulários com validação e estilização com CSS Modules.

## 👨‍💻 Autor

Desenvolvido por [Thiago França](https://github.com/Thiagoo-Franca).
