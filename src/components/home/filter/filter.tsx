import style from "./filter.module.scss";

const Filter = () => {
  return (
    <section className={style.filter}>
      <h2 className={style.filter__title}>Filter</h2>
      <h3 className={style.filter__subtitle}>FREQUENCY</h3>
      <div className={style.filter__container}>
        <button className={style.filter__button}>ONE-TIME CLEANING</button>
        <button className={style.filter__button}>TWICE A WEEK</button>
        <button className={style.filter__button}>EVERY WEEK</button>
      </div>
      <h3 className={style.filter__subtitle}>ALLERGY</h3>
      <div className={`${style.filter__container} ${style.filter__container_horizontal}`}>
        <button className={style.filter__button}>NONE</button>
        <button className={style.filter__button}>CAT</button>
        <button className={style.filter__button}>DOG</button>
      </div>
      <input className={style.filter__input} placeholder="ADDRESS" type="text" />
      <button className={style.filter__send}>SEARCH</button>
    </section>
  );
};

export default Filter;
