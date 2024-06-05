const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <a href="#">Mi Portafolio</a>
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
      <section className="about">
        <div className="about-content">
          <h2>Juan José Sánchez Orozco</h2>
          <p> llege al mundo el 28 de julio de 2004, en una pequeña ciudad donde la tecnología comenzaba a despertar. Desde niño, su mente inquieta se sintió atraída por la informática y la creación digital, sembrando las semillas de un futuro lleno de innovación.</p>
          <a href="#" className="btn">Conoce Más</a>
        </div>
      </section>
    </main>
  );
};



ReactDOM.render(<Header/>, document.getElementById('header'));

ReactDOM.render(<Main/>, document.getElementById('main1'));

