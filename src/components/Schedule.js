import stadium from "../images/stadium.jpg";

function Schedule() {
  return (
    <section id="schedule" className="schedule">

      <h2>Match Schedule</h2>

      <p className="schedule-intro">
        Sample FIFA World Cup 2026 Match Schedule
      </p>

      {/* Stadium Image */}
      <img
        src={stadium}
        alt="World Cup Stadium"
        className="stadium-image"
      />

      <div className="schedule-cards">

        <div className="schedule-card">
          <h3>Opening Match</h3>

          <p><strong>Date:</strong> June 11, 2026</p>

          <p><strong>Venue:</strong> Estadio Azteca</p>

          <p><strong>City:</strong> Mexico City</p>
        </div>

        <div className="schedule-card">
          <h3>Group Stage</h3>

          <p><strong>Date:</strong> June 12–27, 2026</p>

          <p><strong>Venue:</strong> Multiple Stadiums</p>

          <p><strong>Countries:</strong> USA, Canada & Mexico</p>
        </div>

        <div className="schedule-card">
          <h3>Final Match</h3>

          <p><strong>Date:</strong> July 19, 2026</p>

          <p><strong>Venue:</strong> MetLife Stadium</p>

          <p><strong>City:</strong> New Jersey, USA</p>
        </div>

      </div>

    </section>
  );
}

export default Schedule;