const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <a href="#">Juan Sanchez</a>
        </div>
        <nav className="nav-menu">
          <ul>
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Sobre Mí</a></li>
            <li><a href="#">Contacto</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};



const Main = () => {
  return (
    <main className="main1">
      <section className="hero">
        <div className="hero-content">
          <h1>Bienvenido a mi Portafolio</h1>
          <p>Aquí encontrarás algunos de mis mejores trabajos.</p>
          <a href="#" className="btn">Ver mas</a>
        </div>
      </section>

    </main>
  );
};


const SkillsSection = () => {
    return (
      <section className="skills-section">
              <section className="about">
        <div className="about-content">
          <h2>Juan José Sánchez Orozco</h2>
          <p> llege al mundo el 28 de julio de 2004, en una pequeña ciudad donde la tecnología comenzaba a despertar. Desde niño, su mente inquieta se sintió atraída por la informática y la creación digital, sembrando las semillas de un futuro lleno de innovación.</p>
        </div>
      </section>
        <div className="skills-content">
          <h2>Áreas de Especialización</h2>
          <div className="skills-grid">
            <div className="skill-item">
              <h3>Desarrollo Front-end</h3>
              <p>Dominio de HTML, CSS, JavaScript y frameworks como React.</p>
            </div>
            <div className="skill-item">
              <h3>Desarrollo Móvil</h3>
              <p>Conocimiento de plataformas móviles y habilidades en el desarrollo de aplicaciones para iOS y Android.</p>
            </div>
          </div>
        </div>
        <div className="skills-content">
          <h2>Habilidades de un Desarrollador Junior</h2>
          <div className="skills-grid">
            <div className="skill-item">
              <h3>Fundamentos de Programación</h3>
              <p>Sólidos conocimientos en algoritmia, estructuras de datos y paradigmas de programación.</p>
            </div>
            <div className="skill-item">
              <h3>Resolución de Problemas</h3>
              <p>Capacidad para analizar problemas, descomponerlos y encontrar soluciones efectivas.</p>
            </div>
            <div className="skill-item">
              <h3>Trabajo en Equipo</h3>
              <p>Habilidades de comunicación, colaboración y adaptación al trabajo en equipo.</p>
            </div>
            <div className="skill-item">
              <h3>Aprendizaje Continuo</h3>
              <p>Curiosidad y motivación para aprender nuevas tecnologías y metodologías de desarrollo.</p>
            </div>
          </div>
        </div>
      </section>
      
    );
  };



ReactDOM.render(<Header/>, document.getElementById('header'));
ReactDOM.render(<SkillsSection/>, document.getElementById('skillsSection'));
ReactDOM.render(<Main/>, document.getElementById('main'));


