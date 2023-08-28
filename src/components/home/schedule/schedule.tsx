import { time } from "console";
import style from "./schedule.module.scss";
import Time from "./time/time";
import { time1, time2 } from "./utils";

const Schedule = () => {
  return (
    <section className={style.schedule}>
      <h2 className={style.schedule__title}>Schedule</h2>
      <div className={style.schedule__container}>
        <div className={style.schedule__time}>
          {time1.map(time => (
            <Time time={time}></Time>
          ))}
        </div>
        <div className={style.schedule__time}>
          {time2.map(time => (
            <Time time={time}></Time>
          ))}
        </div>
      </div>
      <button className={style.schedule__find}>ORDER</button>
    </section>
  );
};

export default Schedule;
