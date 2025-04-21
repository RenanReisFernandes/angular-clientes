# Clientes App

Clientes App é uma aplicação web desenvolvida em Angular para gerenciar clientes. A aplicação permite criar, listar, editar e excluir clientes, além de possuir páginas informativas como "Sobre nós".

## Funcionalidades

- **Gerenciamento de Clientes**:
  - Listagem de clientes.
  - Cadastro de novos clientes.
  - Edição de clientes existentes.
  - Exclusão de clientes.

- **Páginas Informativas**:
  - Página inicial.
  - Página "Sobre nós".

- **Formulário de Contato**:
  - Formulário funcional para envio de mensagens.

## Tecnologias Utilizadas

- **Frontend**:
  - Angular
  - Bootstrap 5

- **Backend**:
  - Simulado com JSON Server (`db.json`).

- **Outras Dependências**:
  - RxJS
  - Angular Router
  - HttpClientModule

## Estrutura do Projeto

```plaintext
clientes-app/
├── src/
│   ├── app/
│   │   ├── clientes/          # Módulo de clientes
│   │   ├── pages/             # Páginas como Home e About
│   │   ├── template/          # Componentes de layout (Navbar, Sidebar, Footer)
│   │   ├── app-routing.module.ts
│   │   ├── app.module.ts
│   └── assets/                # Recursos estáticos
├── angular.json               # Configuração do Angular CLI
├── package.json               # Dependências do projeto
├── db.json                    # Simulação de backend com JSON Server
└── README.md                  # Documentação do projeto