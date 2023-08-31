import Link from "next/link";
import style from "./preview.module.scss";
import Image from "next/image";
import welcomeImage from "../../../../public/welcome.jpg";

const Preview = () => {
  return (
    <section className={style.preview}>
      <nav className={style.preview__navbar}>
        <Link className={style.preview__link} href={"/"}>
          Services
        </Link>
        <Link className={style.preview__link} href={"/"}>
          Contacts
        </Link>
      </nav>
      <div className={style.preview__info}>
        <h1 className={style.preview__title}>LET ME DO THE CLEANING: DISCOVER THE BENEFITS OF MY SERVICES</h1>
        <button className={style.preview__button}>SCHEDULE</button>
      </div>
      <Image className={style.preview__image} alt="Homemade" src={welcomeImage} priority={true}></Image>
    </section>
  );
};

export default Preview;
