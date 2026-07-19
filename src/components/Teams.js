import brazil from "../images/brazil.jpg";
import argentina from "../images/argentina.jpg";
import france from "../images/france.jpg";
import england from "../images/england.jpg";

function Teams() {
  return (
    <section id="teams" className="teams">

      <h2>Featured National Teams</h2>

      <div className="team-cards">

        <div className="team-card">

          <img src={brazil} alt="Brazil" />

          <h3>🇧🇷 Brazil</h3>

          <p>Five-time FIFA World Cup champions.</p>

        </div>

        <div className="team-card">

          <img src={argentina} alt="Argentina" />

          <h3>🇦🇷 Argentina</h3>

          <p>Defending champions with world-class talent.</p>

        </div>

        <div className="team-card">

          <img src={france} alt="France" />

          <h3>🇫🇷 France</h3>

          <p>One of Europe's strongest football nations.</p>

        </div>

        <div className="team-card">

          <img src={england} alt="England" />

          <h3>🏴 England</h3>

          <p>A football powerhouse with a rich history.</p>

        </div>

      </div>

    </section>
  );
}

export default Teams;