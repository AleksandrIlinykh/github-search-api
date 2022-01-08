import cardsStyles from "./cards.module.css";
import Card from "../card/card";
function Cards() {
  return (
    <>
      <p className={cardsStyles.resultsCounter}>Найдёно результатов: </p>
      <div className={cardsStyles.cardsContainer}>
        {[...Array(12)].map((e, i) => (
          <Card />
        ))}
      </div>
      ;
    </>
  );
}

export default Cards;
