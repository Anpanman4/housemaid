import style from "./about.module.scss";
import Place from "./place/place";

const places = [
  {
    id: 1,
    title: "Cleaning a studio apartment",
    text: "Involves thoroughly cleaning all areas of the apartment to create a hygienic and visually appealing environment. This typically includes tasks such as dusting surfaces, vacuuming or sweeping the floor, cleaning the kitchen and bathroom, and doing laundry. The goal is to remove dirt, grime, and debris from all areas of the apartment to create a clean and tidy living space.",
    src: "http://localhost:3000/image/upload/room_1.jpg",
  },
  {
    id: 2,
    title: "Office cleaning",
    text: "Involves cleaning and maintaining all areas of a commercial office space. This typically includes tasks such as dusting surfaces, vacuuming or sweeping the floor, cleaning bathrooms, wiping down surfaces, and organizing common areas. Regular office cleaning helps to prevent the spread of germs and bacteria, which can improve the health and well-being of those who use the space.",
    src: "http://localhost:3000/image/upload/room_2.jpg",
  },
  {
    id: 3,
    title: "Kitchen cleaning",
    text: "Includes wiping countertops, cabinets and household appliances to remove dirt, cleaning the sink, including the faucet, handles and drain hole, cleaning the stove, oven and microwave. Washing the refrigerator and freezer, including internal and external surfaces and handles. Sweeping and mopping floors. Garbage removal and replacement of garbage bags.",
    src: "http://localhost:3000/image/upload/room_3.jpg",
  },
];

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
