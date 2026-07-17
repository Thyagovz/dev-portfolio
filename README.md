# Dev Portfolio

Uma plataforma de portfólio de alto impacto que combina engenharia frontend moderna com design generativo e experiências interativas 3D. O projeto foca em performance, fluidez de interface, otimização de renderização gráfica e entrega de conteúdo dinâmico de forma totalmente assíncrona. Ele foi concebido para desafiar os limites tradicionais de portfólios estáticos e aplicar conceitos profundos de arquitetura de software aplicados à computação visual na web.

## Stack Tecnológica

### Core Framework & Linguagem

* **SvelteKit (v2):** Framework meta-framework para Svelte que gerencia roteamento baseado em arquivos, renderização no servidor (SSR) para indexação SEO e otimização automatizada de assets, garantindo uma experiência de usuário rápida, reativa e sem a sobrecarga de um DOM virtual.
* **TypeScript:** Utilizado em todo o projeto para garantir robustez técnica, tipagem estática rigorosa de dados e facilitar a manutenção do código através de contratos de dados claros, mitigando erros em tempo de compilação durante a manipulação de objetos e respostas de APIs.

### Renderização 3D & Animação

* **Threlte (Three.js para Svelte):** Integração declarativa do Three.js no ecossistema Svelte. Responsável pela renderização de cenas 3D interativas diretamente na GPU via WebGL, utilizando iluminação baseada em ambiente (HDR) e sombras de contato para entregar alto realismo com baixo consumo de memória.
* **GSAP (GreenSock Animation Platform):** Motor de animação principal, utilizado para orquestrar sequências complexas e interações refinadas que exigem precisão matemática, interpolações suaves de propriedades e alta performance em frames por segundo (FPS).
* **GSAP ScrollTrigger:** Extensão para criação de experiências baseadas no scroll do usuário, permitindo o controle granular do progresso de animações complexas tridimensionais e transições de estado da interface à medida que a página é percorrida.

### Content Management & Styling

* **Prismic (Headless CMS):** Gerenciamento de conteúdo estruturado via API, permitindo atualizações dinâmicas de textos e mídias sem a necessidade de realizar novos deploys de infraestrutura. Utiliza o ecossistema Slice Machine para o desenvolvimento isolado e modular de componentes.
* **Tailwind CSS:** Framework utilitário para estilização rápida e consistente, permitindo uma arquitetura de CSS altamente escalável e otimizada via PostCSS, removendo estilos não utilizados no bundle final de produção.

## Funcionalidades Principais

* **Experiência Interativa 3D:** Cenas imersivas construídas com geometrias procedurais que sofrem distorções matemáticas e geram interações em tempo real baseadas nas coordenadas do movimento do cursor do mouse.
* **Motion Design Avançado:** Animações fluidas integradas diretamente ao ciclo de vida de montagem dos componentes frontend e disparadas por eventos de rolagem controlados por gatilhos lógicos.
* **Texturas Dinâmicas:** Uso de elementos visuais avançados, shaders personalizados e processamento de imagens na GPU para criar profundidade de campo e texturização moderna com estética minimalista.
* **Gerenciamento de Estado Reativo:** Aproveitamento das *Runes* do Svelte 5 (como `$state` e `$derived`) para garantir um fluxo de dados eficiente, síncrono e previsível, alterando cirurgicamente apenas os nós necessários da tela.
* **Arquitetura Baseada em Slices:** Desenvolvimento modular que permite a composição flexível de páginas através do CMS, onde cada seção visual funciona como uma fatia independente de código e lógica de dados.

## Estrutura de Arquivos e Componentes

A organização do código foi estruturada para garantir a separação de responsabilidades e modularidade do sistema:
* **`src/app.html`:** O ponto de entrada HTML global da aplicação, contendo os metadados de otimização e o nó de montagem do framework.
* **`src/routes/+layout.svelte`:** Componente de layout global que gerencia os estados de transição entre páginas e os elementos visuais persistentes da interface.
* **`src/routes/+page.svelte`:** A rota principal que atua como o orquestrador das seções dinâmicas de conteúdo vindas da API do Prismic.
* **`src/lib/components/Scene3D.svelte`:** Arquivo responsável por inicializar o canvas WebGL, configurar as câmeras do Threlte, renderizar as geometrias tridimensionais e capturar os eventos do ponteiro.
* **`src/lib/components/ProjectCard.svelte`:** Componente isolado que exibe as informações técnicas de cada projeto do portfólio, aplicando micro-interações animadas via GSAP no evento de hover.
* **`src/lib/slices/`:** Diretório contendo os blocos de componentes modulares integrados ao Headless CMS, permitindo que cada seção da página seja editada de forma independente.
* **`src/lib/utils/gsapHelpers.ts`:** Arquivo utilitário escrito em TypeScript que encapsula funções de configuração e limpeza do ScrollTrigger, evitando vazamentos de memória na troca de rotas.

## Decisões de Design e Engenharia

Durante o desenvolvimento deste projeto, uma decisão de engenharia crítica foi priorizar a performance de renderização (Time to Interactive). Elementos gráficos em 3D costumam sobrecarregar o processador principal durante o carregamento inicial. Para mitigar esse gargalo, o componente `Scene3D.svelte` foi configurado para ser carregado sob demanda (lazy loading) e de forma assíncrona, sendo instanciado apenas após a estrutura essencial em HTML e texto ser completamente exibida para o usuário.

Outro desafio técnico superado foi o gerenciamento do ciclo de vida das animações do GSAP ScrollTrigger em uma aplicação de página única (SPA). Como o framework altera as rotas dinamicamente, instâncias antigas de scroll poderiam continuar ativas na memória RAM, causando vazamentos de desempenho (memory leaks). A solução adotada consistiu no uso rigoroso da função `onDestroy` do Svelte para invocar o método `.kill()` em todas as timelines ativas sempre que o usuário navega para fora de uma tela, destruindo os listeners antigos e limpando os recursos do sistema.

## Instalação e Execução

Certifique-se de ter o [Node.js](https://nodejs.org/) instalado.

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev

# Gerar build de produção
npm run build
```

## Observações

Este projeto foi desenvolvido com foco em *Creative Development*, explorando os limites do que é possível realizar em navegadores modernos com foco em performance, algoritmos de renderização eficientes e estética minimalista. Ele serve como o projeto final de conclusão do curso CS50x.

---
Desenvolvido por [Thyago Euclides](https://www.linkedin.com/in/thyagovz/)

