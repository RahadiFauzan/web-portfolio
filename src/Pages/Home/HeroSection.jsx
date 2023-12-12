export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Rahadi Fauzan Ramadhan</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Full Stack</span>{" "}
            <br />
            Developer
          </h1>
          <p className="hero--section-description">
            Aspiring Full Stack Developer with a passion for technology
            <br /> and a strong foundation in software development principles.
          </p>
        </div>
      </div>
      <div className="hero--section--img">
        <img src="./web-portfolio/img/hero_img.png" alt="Hero Section" />
      </div>
    </section>
  );
}
