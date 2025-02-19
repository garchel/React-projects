# React Projects

Bem-vindo ao meu repositório de projetos em React! Aqui, você encontrará uma coleção de projetos que desenvolvi para demonstrar minhas habilidades em front-end, utilizando React.js. Cada projeto está em uma pasta separada e tem um foco específico em funcionalidade, design ou aprendizado de novas tecnologias.

## 📂 Estrutura do Repositório

- [📁 Projeto 1: Chef Claude](#projeto-1-chef-claude)
- [📁 Projeto 2: Tenzies](#projeto-2-tenzies)
- [📁 Projeto 3: Assembly Endgame](#projeto-3-assembly-endgame)
- [📁 Projeto 4: Geminator](#projeto-4-geminator)

<br>

## Projeto 1: Chef Claude
<details>
  <summary><strong>Descrição:</strong></summary>

  ChefClaude é uma aplicação frontend desenvolvida em React que permite aos usuários criar receitas personalizadas com base em ingredientes disponíveis. O projeto utiliza a API do Google Gemini para gerar receitas em tempo real, oferecendo sugestões culinárias tanto em inglês quanto em português. O foco principal foi a implementação de React Hooks (`useState` e `useEffect`) para gerenciamento de estado e a integração com APIs externas para obter dados dinâmicos.
</details>

<details>
  <summary><strong>Destaques Técnicos:</strong></summary>

  - **Gerenciamento de Estado:** Utilização de `useState` para controlar a lista de ingredientes e a receita gerada, e `useEffect` para garantir a sincronização com a API.  
  - **Integração com API:** Comunicação com a API do Google Gemini para gerar receitas personalizadas com base nos ingredientes fornecidos pelo usuário.  
  - **Formulário Interativo:** Implementação de um formulário para adicionar ingredientes, com validação para evitar duplicações e feedback visual para o usuário.  
  - **Markdown Dinâmico:** Renderização de receitas formatadas em markdown, permitindo uma exibição clara e organizada das instruções.  
  - **Boas Práticas:** Código modular e reutilizável, com componentização clara e estilização encapsulada usando CSS Modules.  
  - **Ferramentas Modernas:** Uso do Vite para desenvolvimento rápido e eficiente, garantindo uma experiência de desenvolvimento fluida.  
</details>

<details>
  <summary><strong>Funcionalidades Principais:</strong></summary>

  - Adição e gerenciamento de ingredientes.  
  - Geração de receitas personalizadas com base nos ingredientes fornecidos.  
  - Exibição de receitas formatadas em markdown, com instruções em inglês e português.  
  - Integração contínua com a API do Google Gemini para sugestões culinárias dinâmicas.  
</details>

<details>
  <summary><strong>Aprendizados:</strong></summary>

  - Aprimoramento no uso de React Hooks para gerenciamento de estado e efeitos colaterais.  
  - Experiência prática em integração com APIs externas e manipulação de respostas assíncronas.  
  - Aplicação de boas práticas de desenvolvimento, como componentização modular.  
  - Utilização de ferramentas modernas como Vite para otimizar o fluxo de desenvolvimento.  
</details>
<br>

## Projeto 2: Tenzies
<details>
  <summary><strong>Descrição:</strong></summary>

  Tenzies é um jogo de dados desenvolvido em React, onde o objetivo é rolar os dados até que todos mostrem o mesmo valor. O jogador pode "segurar" os dados que deseja manter entre as jogadas, enquanto os outros são rolados novamente. O projeto utiliza uma API de imagens (Unsplash) para gerar um plano de fundo dinâmico relacionado ao tema do jogo. O foco principal foi a implementação de **React Hooks** (`useState`, `useEffect`, `useRef`) para gerenciamento de estado e efeitos colaterais, além de boas práticas de acessibilidade.
</details>

<details>
  <summary><strong>Destaques Técnicos:</strong></summary>

  - **Gerenciamento de Estado:** Utilização de `useState` para controlar o estado dos dados e `useEffect` para sincronizar ações, como a verificação de vitória e a busca de imagens de fundo.  
  - **Acessibilidade:** Implementação de atributos ARIA (`aria-pressed`, `aria-label`) e um leitor de tela (`aria-live="polite"`) para garantir que o jogo seja acessível a todos os usuários.  
  - **Integração com API:** Comunicação com a API do Unsplash para buscar imagens aleatórias relacionadas ao tema do jogo, que são usadas como plano de fundo dinâmico.  
  - **Efeitos Visuais:** Uso da biblioteca `react-confetti` para exibir uma animação de confete quando o jogador vence o jogo.  
  - **Componentização:** Divisão do jogo em componentes reutilizáveis, como o componente `Die`, que representa um dado individual.  
  - **Boas Práticas:** Código modular, limpo e organizado, com foco em semântica e reutilização.  
</details>

<details>
  <summary><strong>Funcionalidades Principais:</strong></summary>

  - Rolagem de dados com a possibilidade de "segurar" dados específicos entre as jogadas.  
  - Verificação automática de vitória quando todos os dados mostram o mesmo valor.  
  - Plano de fundo dinâmico gerado a partir de imagens relacionadas ao tema do jogo, obtidas da API do Unsplash.  
  - Animação de confete e feedback visual ao vencer o jogo.  
  - Botão que alterna entre "Roll" e "New Game" dependendo do estado do jogo.  
</details>

<details>
  <summary><strong>Aprendizados:</strong></summary>

  - Aprimoramento no uso de React Hooks (`useState`, `useEffect`, `useRef`) para gerenciamento de estado e efeitos colaterais.  
  - Experiência prática em integração com APIs externas (Unsplash) para obter dados dinâmicos.  
  - Aplicação de boas práticas de acessibilidade, como o uso de atributos ARIA e feedback para leitores de tela.  
  - Utilização de bibliotecas externas (`react-confetti`) para adicionar efeitos visuais ao projeto.  
  - Desenvolvimento de componentes reutilizáveis e modularização do código.  
</details>
<br>

## Projeto 3: Assembly Endgame

<details>
  <summary><strong>Descrição:</strong></summary>

  **Assembly: Endgame** é um jogo de adivinhação de palavras desenvolvido em React, onde o objetivo é descobrir a palavra oculta antes que as tentativas se esgotem. O jogo tem um tema de programação, com referências a linguagens de programação e uma narrativa que envolve salvar o mundo da programação do temido **Assembly**. O projeto utiliza **React Hooks** (`useState`, `useEffect`) para gerenciamento de estado e efeitos colaterais, além de bibliotecas como `framer-motion` para animações e `react-confetti` para celebrar vitórias.
</details>

<details>
  <summary><strong>Destaques Técnicos:</strong></summary>

  - **Gerenciamento de Estado:** Uso de `useState` para controlar a palavra atual, as letras adivinhadas e o número de tentativas restantes, e `useEffect` para sincronizar ações como a inicialização do jogo e a atualização do estado.  
  - **Acessibilidade:** Implementação de atributos ARIA (`aria-live`, `role="status"`) e feedback para leitores de tela, garantindo que o jogo seja acessível a todos os usuários.  
  - **Animações:** Utilização da biblioteca `framer-motion` para animações suaves no título e na descrição do jogo.  
  - **Efeitos Visuais:** Uso de `react-confetti` para exibir uma animação de confete ao vencer o jogo.  
  - **Dificuldade Personalizável:** O jogador pode escolher entre três níveis de dificuldade (fácil, médio, difícil), que afetam o número máximo de tentativas permitidas.  
  - **Componentização:** Divisão do jogo em componentes reutilizáveis e modularização do código para facilitar a manutenção e escalabilidade.  
</details>

<details>
  <summary><strong>Funcionalidades Principais:</strong></summary>

  - Adivinhação de letras para descobrir a palavra oculta.  
  - Feedback visual e textual sobre letras corretas e incorretas.  
  - Contagem de tentativas restantes e exibição de linguagens de programação "perdidas" conforme o jogador erra.  
  - Animações de confete ao vencer o jogo e mensagens de despedida ao perder.  
  - Seleção de dificuldade (fácil, médio, difícil) que ajusta o número máximo de tentativas.  
  - Botão "New Game" para reiniciar o jogo com uma nova palavra.  
</details>

<details>
  <summary><strong>Aprendizados:</strong></summary>

  - Aprimoramento no uso de React Hooks (`useState`, `useEffect`) para gerenciamento de estado e efeitos colaterais.  
  - Experiência prática em animações com a biblioteca `framer-motion`.  
  - Aplicação de boas práticas de acessibilidade, como o uso de atributos ARIA e feedback para leitores de tela.  
  - Desenvolvimento de lógica de jogo, incluindo verificação de vitória/derrota e gerenciamento de tentativas.  
  - Utilização de bibliotecas externas (`react-confetti`) para adicionar efeitos visuais ao projeto.  
  - Componentização e modularização do código para facilitar a manutenção e escalabilidade.  
</details>


## Projeto 4: Geminator

<details>
  <summary><strong>Descrição:</strong></summary>

  **Geminator** é um jogo de adivinhação inteligente desenvolvido em React que utiliza a API do Google Gemini para tentar descobrir qual personagem famoso o jogador está pensando. Inspirado no clássico Akinator, o projeto combina técnicas modernas de desenvolvimento web com inteligência artificial, implementando um sistema de proxy backend para proteção de credenciais. O jogo funciona através de um chat interativo onde o jogador responde às perguntas da IA até que ela consiga adivinhar o personagem correto. O projeto faz uso intensivo de React Hooks (`useState`, `useEffect`, `useCallback`, `useRef`) e integração com APIs externas.
</details>

<details>
  <summary><strong>Destaques Técnicos:</strong></summary>

  - **Integração com IA:** Conexão com a API do Google Gemini para geração dinâmica de perguntas  
  - **Arquitetura Segura:** Implementação de proxy backend (Node.js/Express) para proteger chaves de API  
  - **Gerenciamento de Estado:** Uso de hooks como `useState` para controle do chat e `useCallback` para otimização de funções  
  - **Componentização:** Separação em componentes reutilizáveis (ChatInterface, ChatMessage)  
  - **Acessibilidade:** Implementação de scroll automático e foco gerenciado para melhor UX  
  - **Tratamento de Erros:** Sistema robusto de captura e exibição de erros de comunicação  
  - **Estilização Avançada:** Uso da biblioteca `clsx` para condicionais de classes CSS  
</details>

<details>
  <summary><strong>Funcionalidades Principais:</strong></summary>

  - Início do jogo com tela de boas-vindas interativa  
  - Chat em tempo real com formatação diferenciada para usuário e IA  
  - Sistema de perguntas adaptativas geradas por inteligência artificial  
  - Interface responsiva com scroll automático para novas mensagens  
  - Feedback visual de carregamento durante requisições à API  
  - Proteção de chaves sensíveis através de servidor proxy dedicado  
  - Mensagens de erro contextualizadas para falhas de comunicação  
</details>

<details>
  <summary><strong>Aprendizados:</strong></strong></summary>

  - Integração prática com APIs de inteligência artificial (Gemini)  
  - Implementação de padrões de segurança para proteção de credenciais  
  - Otimização de performance com React Hooks (`useCallback`, `useRef`)  
  - Desenvolvimento full-stack com separação clara entre frontend e backend  
  - Técnicas avançadas de manipulação de formulários em React  
  - Gerenciamento de estado complexo em aplicações conversacionais  
  - Implementação de padrões de UX para interfaces de chat  
  - Configuração de ambiente com variáveis de ambiente e scripts combinados  
</details>