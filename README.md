# Checkpoint Rescue - Frontend

Frontend da plataforma **Checkpoint Rescue**: Um sistema de gerenciamento integrado para emergências por enchentes, conectando voluntários, abrigos e pessoas em situação de risco.

## 🚀 Características

- ✨ Interface moderna e responsiva
- 📱 Totalmente mobile-friendly
- 🗺️ Mapa interativo de recursos
- 🔐 Sistema de autenticação seguro
- 👥 Três tipos de usuários (Voluntário, Abrigo, Usuário Final)
- 🎨 Design moderno com Tailwind CSS
- ⚡ Construído com React + Vite

## 📋 Stack Tecnológico

- **Frontend**: React 18
- **Build**: Vite 5
- **Roteamento**: React Router v6
- **HTTP Client**: Axios
- **Ícones**: Lucide React
- **Mapas**: Google Maps API
- **Autenticação**: JWT

## 🔧 Configuração

### Requisitos
- Node.js 16+
- npm ou yarn

### Instalação

```bash
# Clonar repositório
git clone https://github.com/checkpoint-rescue/frontend.git
cd frontend

# Instalar dependências
npm install
```

### Variáveis de Ambiente

Crie um arquivo `.env.local` na raiz do projeto:

```env
VITE_API_URL=http://localhost:3000/api
```

Para produção (`.env`):
```env
VITE_API_URL=https://checkpoint-rescue.onrender.com/api
```

## 📦 Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev      # Inicia servidor de desenvolvimento (http://localhost:3001)

# Build
npm run build    # Cria build de produção

# Preview
npm run preview  # Visualiza o build localmente
```

## 📁 Estrutura do Projeto

```
src/
├── components/
│   ├── Header.jsx          # Navegação principal
│   └── Header.css
│
├── pages/
│   ├── Home.jsx            # Página inicial com hero + 3 cards
│   ├── Home.css
│   ├── Login.jsx           # Formulário de login
│   ├── Registro.jsx        # Cadastro de usuários
│   ├── Dashboard.jsx       # Painel personalizado por tipo
│   ├── Dashboard.css
│   ├── Mapa.jsx           # Mapa de recursos
│   ├── Mapa.css
│   ├── Sobre.jsx          # Página sobre
│   ├── Sobre.css
│   └── Auth.css           # Estilos de autenticação
│
├── services/
│   └── api.js             # Configuração da API e endpoints
│
├── context/
│   └── AuthContext.jsx    # Context de autenticação
│
├── styles/
│   └── global.css         # Estilos globais e variáveis CSS
│
├── App.jsx               # Componente raiz
└── main.jsx              # Ponto de entrada
```

## 🔌 Integração com API

A API está configurada em: **https://checkpoint-rescue.onrender.com/api**

Endpoints disponíveis:
- **Auth**: `/auth/login`, `/auth/registro`, `/auth/verificar`
- **Solicitações**: `/solicitacoes` (CRUD)
- **Voluntários**: `/voluntarios` (listar, perfil)
- **Abrigos**: `/abrigos` (listar, perfil)
- **Mapa**: `/mapa/localizacoes`
- **Doações**: `/doacoes` (CRUD)

## 🎯 Rotas da Aplicação

| Rota | Descrição | Público |
|------|-----------|---------|
| `/` | Página inicial | ✅ |
| `/login` | Login | ✅ |
| `/registro` | Cadastro | ✅ |
| `/mapa` | Mapa de recursos | ✅ |
| `/sobre` | Sobre o projeto | ✅ |
| `/dashboard` | Painel do usuário | ❌ Protegida |

## 🔐 Autenticação

O sistema usa JWT (JSON Web Token) para autenticação:

1. Token armazenado em `localStorage`
2. Enviado em todas as requisições via header `Authorization`
3. Redireciona para login se token expirar (401)

## 📱 Responsividade

- Desktop: 1280px+
- Tablet: 768px - 1279px
- Mobile: < 768px

Todos os componentes são mobile-first e fully responsive.

## 🎨 Design System

Cores principais:
- **Primária**: #2563eb (Azul água)
- **Secundária**: #10b981 (Verde segurança)
- **Alerta**: #f59e0b (Amarelo)
- **Perigo**: #ef4444 (Vermelho)

## 🚀 Deploy

### Render.com (Recomendado)

1. Push para GitHub
2. Conecte no Render.com
3. Configure ambiente:
   - Build: `npm run build`
   - Start: `npm run preview`

### Vercel

```bash
npm install -g vercel
vercel deploy
```

## 📞 Suporte

Para questões ou bugs, abra uma issue no GitHub.

## 📄 Licença

MIT License - veja LICENSE para detalhes.

---

**Checkpoint Rescue** - Juntos nas Enchentes 💙
