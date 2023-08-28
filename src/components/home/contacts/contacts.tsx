import style from "./contacts.module.scss";

const Contacts = () => {
  return (
    <section className={style.contacts}>
      <h2 className={style.contacts__title}>Contacts</h2>
      <div className={style.contacts__container}>
        <button className={style.contacts__button}>TELEGRAM</button>
        <button className={style.contacts__button}>VIBER</button>
        <button className={style.contacts__button}>WHATSAPP</button>
      </div>
    </section>
  );
};

export default Contacts;
