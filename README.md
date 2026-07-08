# Dev Portfolio

Uma plataforma de portfólio de alto impacto que combina engenharia frontend moderna com design generativo e experiências
interativas 3D. O projeto foca em performance, fluidez de interface e entrega de conteúdo dinâmico.

## Stack Tecnológica

### Core Framework & Linguagem

* **SvelteKit (v2):** Framework meta-framework para Svelte que gerencia roteamento, renderização no servidor (SSR) e
  otimização de assets, garantindo uma experiência de usuário rápida e reativa.
* **TypeScript:** Utilizado em todo o projeto para garantir robustez técnica, tipagem estática e facilitar a manutenção
  do código através de contratos de dados claros.

### Renderização 3D & Animação

* **Threlte (Three.js para Svelte):** Integração declarativa do Three.js no ecossistema Svelte. Responsável pela
  renderização de cenas 3D interativas, utilizando iluminação baseada em ambiente (HDR) e sombras de contato para alto
  realismo.
* **GSAP (GreenSock Animation Platform):** Motor de animação principal, utilizado para orquestrar sequências complexas e
  interações refinadas que exigem precisão matemática e alta performance.
* **GSAP ScrollTrigger:** Extensão para criação de experiências baseadas no scroll do usuário, permitindo o controle
  granular do progresso de animações e transições de estado da interface.

### Content Management & Styling

* **Prismic (Headless CMS):** Gerenciamento de conteúdo via API, permitindo atualizações dinâmicas sem necessidade de
  novos deploys. Utiliza Slice Machine para desenvolvimento modular de componentes.
* **Tailwind CSS:** Framework utilitário para estilização rápida e consistente, permitindo uma arquitetura de CSS
  escalável e otimizada via PostCSS.

## Funcionalidades Principais

* **Experiência Interativa 3D:** Cenas imersivas com geometrias procedurais e interações em tempo real baseadas no
  movimento do cursor.
* **Motion Design Avançado:** Animações fluidas integradas ao ciclo de vida dos componentes e disparadas por eventos de
  scroll.
* **Texturas Dinâmicas:** Uso de elementos visuais avançados e processamento de imagens para criar profundidade e
  texturização moderna.
* **Gerenciamento de Estado Reativo:** Aproveitamento das *Runes* do Svelte 5 para um fluxo de dados eficiente e
  previsível.
* **Arquitetura Baseada em Slices:** Desenvolvimento modular que permite a composição flexível de páginas através do
  CMS.

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

Este projeto foi desenvolvido com foco em *Creative Development*, explorando os limites do que é possível realizar em
navegadores modernos com foco em performance e estética minimalista.

---
Desenvolvido por [Thyago Euclides](https://www.linkedin.com/in/thyagovz/)
