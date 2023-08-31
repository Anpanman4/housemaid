import style from "./place.module.scss";
import Image from "next/image";

interface IPlace {
  title: string;
  text: string;
  imageSrc: any;
}

const Place = (props: IPlace) => {
  return (
    <div className={style.place}>
      <Image alt={props.title} src={props.imageSrc} width={500} height={600}></Image>
      <div className={style.place_container}>
        <h2 className={style.place__title}>{props.title}</h2>
        <p className={style.place_text}>{props.text}</p>
      </div>
    </div>
  );
};

export default Place;
