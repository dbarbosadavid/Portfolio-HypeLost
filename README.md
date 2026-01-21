# 🎵 HypeLost – Portfolio (React + Vite)

Portfólio pessoal desenvolvido com **React** e **Vite**, unindo identidade artística como produtor musical com desenvolvimento frontend.

O projeto tem como objetivo apresentar meus trabalhos musicais e, ao mesmo tempo, estudar o uso de tecnologias modernas de frontend, organização de código, responsividade e experiência do usuário.

---

[![Vercel Deploy](https://img.shields.io/badge/Deployed%20on-Vercel-000?style=flat&logo=vercel)](https://portfolio-hypelost.vercel.app/)
[![React](https://img.shields.io/badge/React-19-blue?style=flat&logo=react)](https://react.dev/)  
[![Vite](https://img.shields.io/badge/Vite-7-purple?style=flat&logo=vite)](https://vitejs.dev/)  
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat&logo=typescript)](https://www.typescriptlang.org/)

## Hosted  
👉 [**Portfolio - HypeLost**](https://portfolio-hypelost.vercel.app/)  

---

## ✨ Funcionalidades

- Hero Section com animações
- Navbar sticky
- Scroll reveal nos cards utilizando IntersectionObserver
- Layout totalmente responsivo
- Background com gradiente animado
- Lazy loading em iframes
- Estrutura de projeto organizada e escalável
---

## 🧠 Decisões Técnicas

- O layout foi construído com CSS Grid, garantindo responsividade sem excesso de media queries.
- Componentização de elementos reutilizáveis para facilitar a escalabilidade.
- As animações foram implementadas de forma leve, priorizando performance e UX.
- O efeito de scroll reveal utiliza IntersectionObserver para automatizar scrolls.
- Dados separados da UI, facilitando manutenção e evolução do projeto.
---

## 📂 Estrutura do Projeto

```txt
src/
├── assets/        # Imagens e ícones
├── components/    # Componentes reutilizáveis
│   ├── layout/
│   ├── cards/
├── hooks/         # Hooks customizados
├── pages/         # Páginas da aplicação
├── data/          # Dados dos trabalhos
├── styles/        # Estilos globais e por seção
├── routes/        # Define pagina a ser mostrada de acordo com a rota
├── App.tsx
└── main.tsx
```

## 👨‍💻 Autor

David Barbosa

Produtor Musical & Desenvolvedor Frontend

Projeto desenvolvido com objetivo de estudo, exposição de trabalhos pessoais e evolução contínua no desenvolvimento.
