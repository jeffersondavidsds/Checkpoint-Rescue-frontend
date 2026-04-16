# 🌊 Frontend - Checkpoint Rescue

Frontend do Sistema de Gerenciamento de Enchentes desenvolvido em React + Vite.

---

## 📋 Pré-requisitos

- **Node.js** (versão 16 ou superior)
- **npm** ou **yarn**
- **Backend rodando** na porta 3000

---

## ⚡ Início Rápido

### 1️⃣ Instalar dependências
```bash
npm install
```

### 2️⃣ Executar em modo desenvolvimento
```bash
npm run dev
```

### 3️⃣ Acessar
Abra o navegador em: **http://localhost:3001**

---

## 🛠️ Scripts Disponíveis

```bash
# Modo desenvolvimento (com hot reload)
npm run dev

# Build para produção
npm run build

# Preview do build de produção
npm run preview
```

---

## 📁 Estrutura do Projeto

```
frontend/
├── public/                 # Arquivos estáticos
│   ├── logo.png           # Logo do Checkpoint Rescue
│   ├── abrigo-hero.jpg    # Imagem hero do abrigo
│   ├── voluntario-resgate.jpg
│   └── doacoes.jpg
│
├── src/
│   ├── components/        # Componentes reutilizáveis
│   │   ├── Header.jsx
│   │   └── Header.css
│   │
│   ├── pages/             # Páginas da aplicação
│   │   ├── Home.jsx       # Página inicial
│   │   ├── Login.jsx      # Página de login
│   │   ├── Registro.jsx   # Cadastro de usuários
│   │   ├── Dashboard.jsx  # Dashboard personalizado
│   │   ├── Mapa.jsx       # Mapa de recursos
│   │   └── Sobre.jsx      # Sobre o projeto
│   │
│   ├── services/          # Integração com API
│   │   └── api.js         # Axios + endpoints
│   │
│   ├── context/           # Contexts do React
│   │   └── AuthContext.jsx # Contexto de autenticação
│   │
│   ├── styles/            # Estilos globais
│   │   └── global.css     # CSS global e variáveis
│   │
│   ├── App.jsx            # Componente principal
│   └── main.jsx           # Entry point
│
├── index.html             # HTML base
├── vite.config.js         # Configuração do Vite
└── package.json           # Dependências
```

---

## 🎨 Design e Responsividade

### ✅ Totalmente Responsivo
- ✅ **Desktop** (1200px+)
- ✅ **Tablet** (768px - 1199px)
- ✅ **Mobile** (até 767px)
- ✅ Testado em:
  - iPhone 13-17
  - Moto Edge 50 Fusion
  - Android devices

### 🎨 Paleta de Cores

```css
/* Cores Principais */
--primary: #2563eb;        /* Azul água */
--secondary: #10b981;      /* Verde segurança */
--warning: #f59e0b;        /* Amarelo alerta */
--danger: #ef4444;         /* Vermelho urgente */

/* Status de Lotação */
--verde: #22c55e;          /* Livre */
--azul: #3b82f6;           /* Disponível */
--amarelo: #f59e0b;        /* Enchendo */
--vermelho: #ef4444;       /* Lotado */
```

---

## 🔗 Integração com Backend

O frontend consome a API REST do backend através do Axios.

### Configuração da API

Arquivo: `src/services/api.js`

```javascript
baseURL: 'http://localhost:3000/api'
```

### Endpoints Utilizados

#### Autenticação
- `POST /auth/registro` - Cadastro
- `POST /auth/login` - Login
- `GET /auth/verificar` - Verificar token

#### Solicitações
- `GET /solicitacoes` - Listar
- `POST /solicitacoes` - Criar
- `GET /solicitacoes/minhas` - Minhas solicitações

#### Voluntários
- `GET /voluntarios` - Listar
- `GET /voluntarios/meu-perfil` - Meu perfil

#### Abrigos
- `GET /abrigos` - Listar
- `GET /abrigos/meu-perfil` - Meu perfil
- `GET /abrigos/estatisticas` - Estatísticas

#### Mapa
- `GET /mapa` - Todas as localizações
- `GET /mapa/proximos` - Localizações próximas

---

## 🔐 Autenticação

O sistema usa **JWT (JSON Web Tokens)** para autenticação.

### Fluxo de Autenticação

1. Usuário faz login
2. Backend retorna token JWT
3. Token é armazenado em `localStorage`
4. Token é enviado em todas as requisições via header `Authorization`

### Context de Autenticação

```jsx
import { useAuth } from './context/AuthContext';

function Component() {
  const { usuario, login, logout, isAuthenticated } = useAuth();
  
  // Usar as funções...
}
```

---

## 📱 Páginas e Funcionalidades

### 🏠 Home (`/`)
- Hero section com logo sobreposta
- 3 cards principais (Voluntário, Doações, Abrigo)
- CTA para solicitação de ajuda
- **Público** (não requer login)

### 🔐 Login (`/login`)
- Formulário de login
- Validação de campos
- Mensagens de erro
- Redirecionamento para dashboard

### 📝 Registro (`/registro`)
- Cadastro de 3 tipos de usuários:
  - Usuário Final
  - Voluntário (resgate, ceder espaço, doação)
  - Abrigo/Instituição
- Formulário dinâmico baseado no tipo

### 📊 Dashboard (`/dashboard`) 🔒
Dashboard personalizado por tipo de usuário:

**Abrigo:**
- Estatísticas (capacidade, ocupação, vagas)
- Status de lotação visual
- Informações do abrigo

**Voluntário:**
- Tipo de voluntário
- Status de disponibilidade
- Dados de contato

**Usuário Final:**
- Lista de solicitações criadas
- Status de cada solicitação
- Prioridade e data

### 🗺️ Mapa (`/mapa`)
- Visualização de abrigos
- Visualização de voluntários
- Solicitações pendentes
- Filtros por tipo
- Cards com informações detalhadas
- **Público** (não requer login)

### ℹ️ Sobre (`/sobre`)
- Missão do projeto
- Como funciona
- Tecnologias utilizadas
- Call to action
- **Público**

---

## 🎯 Hooks do React Utilizados

### useState
```jsx
const [dados, setDados] = useState(null);
const [carregando, setCarregando] = useState(true);
```

### useEffect
```jsx
useEffect(() => {
  carregarDados();
}, []);
```

### useContext (AuthContext)
```jsx
const { usuario, login, logout } = useAuth();
```

### useNavigate (React Router)
```jsx
const navigate = useNavigate();
navigate('/dashboard');
```

---

## 🚀 Build para Produção

### 1️⃣ Criar build
```bash
npm run build
```

### 2️⃣ Preview do build
```bash
npm run preview
```

### 3️⃣ Deploy

O build gera uma pasta `dist/` com arquivos otimizados.

**Plataformas recomendadas:**
- **Vercel** (recomendado para React)
- **Netlify**
- **GitHub Pages**
- **Firebase Hosting**

---

## ⚙️ Configurações Importantes

### Vite Config (`vite.config.js`)

```javascript
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3001,
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true
      }
    }
  }
})
```

### Proxy de API

O Vite está configurado para fazer proxy de `/api` para `http://localhost:3000`.

Isso significa que você pode fazer requisições para `/api/auth/login` e o Vite 
automaticamente encaminha para `http://localhost:3000/api/auth/login`.

---

## 🐛 Troubleshooting

### Erro: "Cannot connect to backend"
```bash
# Certifique-se de que o backend está rodando
cd backend
npm run dev
```

### Erro: "Module not found"
```bash
# Reinstale as dependências
rm -rf node_modules package-lock.json
npm install
```

### Erro: Port 3001 already in use
```bash
# Mate o processo na porta 3001
# Windows
netstat -ano | findstr :3001
taskkill /PID <PID> /F

# Linux/Mac
lsof -ti:3001 | xargs kill -9
```

### Página em branco após build
```bash
# Verifique se o build foi gerado corretamente
npm run build
npm run preview
```

---

## 📚 Bibliotecas Utilizadas

- **React** ^18.2.0 - Biblioteca UI
- **React Router DOM** ^6.20.0 - Roteamento
- **Axios** ^1.6.2 - Cliente HTTP
- **Lucide React** ^0.294.0 - Ícones
- **Vite** ^5.0.8 - Build tool

---

## ✅ Checklist de Funcionalidades

- ✅ Sistema de autenticação completo
- ✅ Cadastro de 3 tipos de usuários
- ✅ Dashboard personalizado por tipo
- ✅ Visualização de mapa de recursos
- ✅ Lista de solicitações
- ✅ Responsive design (mobile-first)
- ✅ Integração completa com backend
- ✅ Rotas protegidas
- ✅ Gestão de estado global (Context API)
- ✅ Validação de formulários
- ✅ Feedback visual de loading
- ✅ Mensagens de erro/sucesso

---

## 🔜 Melhorias Futuras

- [ ] Integração real com Google Maps API
- [ ] Sistema de notificações em tempo real
- [ ] Chat entre voluntários e solicitantes
- [ ] Upload de fotos
- [ ] Sistema de avaliação
- [ ] Dark mode
- [ ] PWA (Progressive Web App)
- [ ] Testes automatizados

---

## 📞 Suporte

Se encontrar problemas:

1. Verifique se o backend está rodando
2. Limpe o cache do navegador
3. Reinstale as dependências
4. Verifique o console do navegador para erros

---

**🌊 Frontend pronto para uso! 🆘**

Desenvolvido com ❤️ para ajudar em situações de enchente.
