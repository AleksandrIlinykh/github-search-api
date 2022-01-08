import cardStyles from "./card.module.css";

function Card() {
  return (
    <section className={cardStyles.cardContainer}>
      <div className={cardStyles.mainInfo}>
        <div className={cardStyles.avatarContainer}></div>
        <div className={cardStyles.mainTextContainer}>
          <p className={cardStyles.mainText}>Псевдоним</p>
          <p className={cardStyles.mainText}>Имя</p>
          <p className={cardStyles.mainText}>Дата</p>
          <p className={cardStyles.mainText}>Страна</p>{" "}
        </div>
      </div>
      <div className={cardStyles.addInfo}>
        <p className={cardStyles.addText}>Место работы</p>
        <p className={cardStyles.addText}>Страна, город</p>
      </div>
    </section>
  );
}

export default Card;
