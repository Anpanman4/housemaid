import style from "./time.module.scss";

interface ITime {
  time: { time: string; isOrder: boolean };
}

const Time = (props: ITime) => {
  return props.time.time.slice(-2) == "30" ? (
    <div className={style.time}>
      <h3 className={`${style.time__text} ${style.time__text_small}`}>{props.time.time}</h3>
      <div className={style.time__stickLarge}></div>
      <div className={`${style.time__reserved} ${props.time.isOrder ? style.time__reserved_active : ""}`}></div>
    </div>
  ) : (
    <div className={style.time}>
      <h3 className={`${style.time__text} ${style.time__text_big}`}>{props.time.time}</h3>
      <div className={style.time__stickSmall}></div>
      <div className={`${style.time__reserved} ${props.time.isOrder ? style.time__reserved_active : ""}`}></div>
    </div>
  );
};

export default Time;
