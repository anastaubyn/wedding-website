import "./Home.css";

export default function Home() {
  return (
    <section id="home" className="home">
      <div className="home-inner">
        {/* Left: image card */}
        <figure className="home-card">
          <img src="/home-card.jpg" alt="Ana & Tomas" />
        </figure>

        {/* Right: text */}
        <div className="home-copy">
          <h1 className="home-quote">
            "Um casamento bem sucedido<br />
            exige que se apaixonem muitas vezes,<br />
            sempre pela mesma pessoa."
          </h1>

          <p className="home-intro">
            Depois de nos apaixonarmos, desapaixonarmos e nos reapaixonarmos<br />
            ciclicamente durante 10 anos, nós, Ana e Tiago,<br />
            queremos convidar-te para a nossa festa de casamento!.
          </p>

          <div className="home-details">
            <p>Sábado</p>
            <p>12 de Setembro de 2026</p>
            <p>Aparece às 15h30</p>
          </div>
        </div>
      </div>
    </section>
  );
}
