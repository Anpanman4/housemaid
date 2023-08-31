import style from "./benefits.module.scss";
import Image from "next/image";
import benefits from "/public/benefits.jpg";

const Benefits = () => {
  return (
    <section className={style.benefits}>
      <Image className={style.benefits__image} alt="Homemaid" src={benefits}></Image>
      <div className={style.benefits__container}>
        <h2 className={style.benefits__title}>BENEFITS</h2>
        <p className={style.benefits__service}>SAVING YOU TIME</p>
        <p className={style.benefits__service}>INDIVIDUAL SERVICE</p>
        <p className={style.benefits__service}>BENEFIT FRO HEALTH</p>
        <p className={style.benefits__service}>PROFESSIONAL SERVICE</p>
      </div>
    </section>
  );
};

export default Benefits;
