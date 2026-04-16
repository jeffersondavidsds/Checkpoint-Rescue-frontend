import axios from 'axios';

// Configuração base da API
const api = axios.create({
  baseURL: 'http://localhost:3000/api',
  headers: {
    'Content-Type': 'application/json'
  }
});

// Interceptor para adicionar token em todas as requisições
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Interceptor para tratar erros de autenticação
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Token inválido ou expirado
      localStorage.removeItem('token');
      localStorage.removeItem('usuario');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// ==========================================
// AUTENTICAÇÃO
// ==========================================

export const auth = {
  registro: (dados) => api.post('/auth/registro', dados),
  login: (dados) => api.post('/auth/login', dados),
  verificar: () => api.get('/auth/verificar')
};

// ==========================================
// SOLICITAÇÕES
// ==========================================

export const solicitacoes = {
  listar: (filtros = {}) => {
    const params = new URLSearchParams(filtros).toString();
    return api.get(`/solicitacoes${params ? `?${params}` : ''}`);
  },
  buscarPorId: (id) => api.get(`/solicitacoes/${id}`),
  criar: (dados) => api.post('/solicitacoes', dados),
  atualizar: (id, dados) => api.put(`/solicitacoes/${id}`, dados),
  deletar: (id) => api.delete(`/solicitacoes/${id}`),
  minhas: () => api.get('/solicitacoes/minhas'),
  atribuir: (id) => api.post(`/solicitacoes/${id}/atribuir`),
  estatisticas: () => api.get('/solicitacoes/estatisticas')
};

// ==========================================
// VOLUNTÁRIOS
// ==========================================

export const voluntarios = {
  listar: (filtros = {}) => {
    const params = new URLSearchParams(filtros).toString();
    return api.get(`/voluntarios${params ? `?${params}` : ''}`);
  },
  buscarPorId: (id) => api.get(`/voluntarios/${id}`),
  meuPerfil: () => api.get('/voluntarios/meu-perfil'),
  atualizar: (id, dados) => api.put(`/voluntarios/${id}`, dados)
};

// ==========================================
// ABRIGOS
// ==========================================

export const abrigos = {
  listar: (filtros = {}) => {
    const params = new URLSearchParams(filtros).toString();
    return api.get(`/abrigos${params ? `?${params}` : ''}`);
  },
  buscarPorId: (id) => api.get(`/abrigos/${id}`),
  meuPerfil: () => api.get('/abrigos/meu-perfil'),
  atualizar: (id, dados) => api.put(`/abrigos/${id}`, dados),
  estatisticas: () => api.get('/abrigos/estatisticas')
};

// ==========================================
// MAPA
// ==========================================

export const mapa = {
  obterLocalizacoes: () => api.get('/mapa'),
  obterProximos: (lat, lng, raio = 10) => 
    api.get(`/mapa/proximos?lat=${lat}&lng=${lng}&raio=${raio}`)
};

export default api;
