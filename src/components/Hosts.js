import usa from "../images/usa.jpg";
import canada from "../images/canada.jpg";
import mexico from "../images/mexico.jpg";

function Hosts() {
  return (
    <section id="hosts" className="hosts">

      <h2>Host Countries</h2>

      <div className="host-cards">

        <div className="host-card">

          <img src={usa} alt="United States" />

          <h3>🇺🇸 United States</h3>

          <p>
            Host of the Final and most matches.
          </p>

        </div>

        <div className="host-card">

          <img src={canada} alt="Canada" />

          <h3>🇨🇦 Canada</h3>

          <p>
            Modern stadiums and passionate supporters.
          </p>

        </div>

        <div className="host-card">

          <img src={mexico} alt="Mexico" />

          <h3>🇲🇽 Mexico</h3>

          <p>
            First country to host three World Cups.
          </p>

        </div>

      </div>

    </section>
  );
}

export default Hosts;