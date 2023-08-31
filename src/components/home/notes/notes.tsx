import style from "./notes.module.scss";
import notesBackground from "/public/notes.jpg";
import Image from "next/image";

const Notes = () => {
  return (
    <section className={style.notes}>
      <Image className={style.notes__image} src={notesBackground} alt="Чистая комната" priority={true}></Image>
      <h2 className={style.notes__title}>What you need to prepare for me</h2>
      <ul className={style.notes__container}>
        <li className={style.notes__info}>
          <p className={style.notes__number}>1</p>
          <p className={style.notes__text}>
            The importance of selecting an appropriate material for cleaning the floor to prevent slipping.
          </p>
        </li>
        <li className={style.notes__info}>
          <p className={style.notes__number}>2</p>
          <p className={style.notes__text}>
            The significance of using a suitable cleaning product for bathrooms to ensure effective removal of dirt and
            mold. It is recommended to use a special cleaner, such as "silit," for cleaning tiles.
          </p>
        </li>
        <li className={style.notes__info}>
          <p className={style.notes__number}>3</p>
          <p className={style.notes__text}>
            The necessity of using an appropriate cleaning product for washing windows when cleaning glass and mirrors.
            The appropriate product will make windows, mirrors, cabinet doors, light switches, and walls shiny, remove
            handprints, stains and dirt.
          </p>
        </li>
      </ul>
    </section>
  );
};

export default Notes;
