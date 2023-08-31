"use client";
import Image from "next/image";
import Card from "./card/card";
import style from "./reviews.module.scss";
import peoples from "./utils";
import arrow from "/public/arrow.svg";
import { useState } from "react";

const Reviews = () => {
  const [currentCards, setCurrentCards] = useState({ first: 0, second: 1 });

  const moveReview = () => {
    if (currentCards.first === peoples.length) return setCurrentCards({ first: 0, second: peoples.length });
    if (currentCards.second === peoples.length) return setCurrentCards({ first: 1, second: 0 });
    return setCurrentCards({ first: currentCards.first + 1, second: currentCards.second + 1 });
  };

  return (
    <section className={style.reviews}>
      <h2 className={style.reviews__title}>Reviews</h2>
      <div className={style.reviews__container}>
        <Card people={peoples[currentCards.first]}></Card>
        <Card people={peoples[currentCards.second]}></Card>
        <Image className={style.reviews__arrow} onClick={moveReview} src={arrow} alt="Next" priority={true}></Image>
      </div>
    </section>
  );
};

export default Reviews;
