import style from "./card.module.scss";
import Image from "next/image";
import like from "/public/like.svg";

interface ICard {
  people: {
    name: string;
    stars: number;
    src: any;
    text: string;
  };
}

const Card = ({ people }: ICard) => {
  return (
    <div className={style.card}>
      <div className={style.card__container}>
        <Image src={people.src} alt={people.name} width={100} height={100}></Image>
        <div className={style.card__info}>
          <h3 className={style.card__name}>{people.name}</h3>
          <div>
            {"A"
              .repeat(people.stars)
              .split("")
              .map((item, index) => (
                <Image key={index} className={style.card__stars} src={like} alt="like"></Image>
              ))}
          </div>
        </div>
      </div>
      <p className={style.card__text}>{people.text}</p>
    </div>
  );
};

export default Card;
