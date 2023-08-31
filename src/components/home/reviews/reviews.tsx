"use client";
import Image from "next/image";
import Card from "./card/card";
import style from "./reviews.module.scss";
import peoples from "./utils";
import arrow from "/public/arrow.svg";
import { useState } from "react";

const Reviews = () => {
  const [currentCards, setCurrentCards] = useState({ first: 0, second: 1 });
  const [isVisibleLeftArrow, setIsVisibleLeftArrow] = useState(false);
  const [isVisibleRightArrow, setIsVisibleRightArrow] = useState(true);

  const checkArrowVisible = (mark: string) => {
    if (mark === "+") {
      setIsVisibleLeftArrow(true);
      if (currentCards.second === peoples.length - 2) setIsVisibleRightArrow(false);
    } else {
      setIsVisibleRightArrow(true);
      if (currentCards.first === 1) setIsVisibleLeftArrow(false);
    }
  };

  const moveReview = (mark: string) => {
    if (mark === "+") {
      setCurrentCards({ first: currentCards.first + 1, second: currentCards.second + 1 });
      checkArrowVisible("+");
    } else {
      setCurrentCards({ first: currentCards.first - 1, second: currentCards.second - 1 });
      checkArrowVisible("-");
    }
  };

  return (
    <section className={style.reviews}>
      <h2 className={style.reviews__title}>Reviews</h2>
      <div className={style.reviews__container}>
        {isVisibleLeftArrow ? (
          <Image
            className={`${style.reviews__arrow} ${style.reviews__arrow_left}`}
            onClick={() => moveReview("-")}
            src={arrow}
            alt="Next"
            priority={true}
            width="0"
            height="0"
          ></Image>
        ) : (
          ""
        )}
        <Card people={peoples[currentCards.first]}></Card>
        <Card people={peoples[currentCards.second]}></Card>
        {isVisibleRightArrow ? (
          <Image
            className={`${style.reviews__arrow} ${style.reviews__arrow_right}`}
            onClick={() => moveReview("+")}
            src={arrow}
            alt="Next"
            priority={true}
            width="0"
            height="0"
          ></Image>
        ) : (
          ""
        )}
      </div>
    </section>
  );
};

export default Reviews;
