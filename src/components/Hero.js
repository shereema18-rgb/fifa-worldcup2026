import heroImage from "../images/hero.jpg";

function Hero() {
  return (
    <section
      className="hero"
      style={{
        backgroundImage: `url(${heroImage})`
      }}
    >
      <div className="overlay">
        <h2>Welcome to the FIFA World Cup 2026</h2>

        <p>
          Experience the world's biggest football tournament,
          hosted by Canada, Mexico and the United States.
        </p>

        <button
          onClick={() =>
            alert("Welcome! Get ready for FIFA World Cup 2026!")
          }
        >
          Learn More
        </button>
      </div>
    </section>
  );
}

export default Hero;