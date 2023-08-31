import style from "./about.module.scss";
import Place from "./place/place";
import { places } from "./utils";

const About = () => {
  return (
    <section className={style.about}>
      <p className={style.about__text}>
        As a professional maid, I can significantly change your daily routine.<br></br> You will be able to save your
        time, get professional service with an individual approach and be calm about your home.
      </p>
      <div className={style.about__container}>
        {places.map(place => (
          <Place key={place.id} title={place.title} text={place.text} imageSrc={place.src}></Place>
        ))}
      </div>
    </section>
  );
};

export default About;
