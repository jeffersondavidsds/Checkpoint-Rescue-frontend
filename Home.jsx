import { Link } from 'react-router-dom';
import { Heart, Users, Home as HomeIcon, ArrowRight } from 'lucide-react';
import './Home.css';

export default function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay">
          <div className="container">
            <div className="hero-content">
              <div className="hero-logo-container">
                <img src="/logo.png" alt="Checkpoint Rescue" className="hero-logo" />
              </div>
              
              <h1 className="hero-title">
                Juntos nas Enchentes
              </h1>
              
              <p className="hero-subtitle">
                Conectamos voluntários, abrigos e pessoas que precisam de ajuda durante emergências de enchentes
              </p>
              
              <div className="hero-buttons">
                <Link to="/mapa" className="btn btn-primary btn-large">
                  <HomeIcon size={20} />
                  Ver Abrigos no Mapa
                </Link>
                <Link to="/registro" className="btn btn-secondary btn-large">
                  <Heart size={20} />
                  Quero Ajudar
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cards Section */}
      <section className="cards-section">
        <div className="container">
          <h2 className="section-title">Como Funciona?</h2>
          <p className="section-subtitle">
            Escolha como você quer participar e fazer a diferença
          </p>

          <div className="cards-grid">
            {/* Card 1 - Voluntário Resgate */}
            <div className="info-card fade-in">
              <div className="card-image-container">
                <img 
                  src="/voluntario-resgate.jpg" 
                  alt="Voluntária realizando resgate" 
                  className="card-image"
                />
                <div className="card-badge badge-success">
                  <Heart size={16} />
                  Voluntário
                </div>
              </div>
              
              <div className="card-content">
                <h3 className="card-title">Voluntário de Resgate</h3>
                <p className="card-description">
                  Ajude pessoas em situação de risco. Se você tem barco, carro, jetski ou pode ajudar a pé, cadastre-se como voluntário de resgate e salve vidas.
                </p>
                
                <ul className="card-features">
                  <li>✓ Resgates de emergência</li>
                  <li>✓ Transporte de pessoas</li>
                  <li>✓ Ajuda imediata</li>
                </ul>
                
                <Link to="/registro?tipo=voluntario&acao=resgate" className="card-button">
                  Quero Resgatar
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>

            {/* Card 2 - Doações */}
            <div className="info-card fade-in">
              <div className="card-image-container">
                <img 
                  src="/doacoes.jpg" 
                  alt="Voluntários organizando doações" 
                  className="card-image"
                />
                <div className="card-badge badge-warning">
                  <Users size={16} />
                  Doações
                </div>
              </div>
              
              <div className="card-content">
                <h3 className="card-title">Doar ou Ceder Espaço</h3>
                <p className="card-description">
                  Doe alimentos, roupas, cobertores ou abra sua casa para abrigar famílias temporariamente. Sua generosidade faz a diferença.
                </p>
                
                <ul className="card-features">
                  <li>✓ Doação de mantimentos</li>
                  <li>✓ Abrigo temporário</li>
                  <li>✓ Apoio humanitário</li>
                </ul>
                
                <Link to="/registro?tipo=voluntario&acao=doacao" className="card-button">
                  Quero Doar
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>

            {/* Card 3 - Abrigos */}
            <div className="info-card fade-in">
              <div className="card-image-container">
                <img 
                  src="/abrigo-hero.jpg" 
                  alt="Abrigo com voluntários e pessoas" 
                  className="card-image"
                />
                <div className="card-badge badge-info">
                  <HomeIcon size={16} />
                  Abrigo
                </div>
              </div>
              
              <div className="card-content">
                <h3 className="card-title">Cadastrar Abrigo</h3>
                <p className="card-description">
                  Se você representa uma instituição ou organização com espaço para abrigar pessoas, cadastre seu abrigo e ajude centenas de famílias.
                </p>
                
                <ul className="card-features">
                  <li>✓ Registro de capacidade</li>
                  <li>✓ Recursos disponíveis</li>
                  <li>✓ Localização no mapa</li>
                </ul>
                
                <Link to="/registro?tipo=abrigo" className="card-button">
                  Cadastrar Abrigo
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Precisa de Ajuda?</h2>
            <p className="cta-text">
              Se você está em situação de risco ou precisa de abrigo, clique abaixo para criar uma solicitação de ajuda
            </p>
            <Link to="/registro?tipo=usuario_final" className="btn btn-primary btn-large">
              Solicitar Ajuda
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
