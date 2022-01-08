import {
  FaArrowAltCircleLeft,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";
import controlsStyles from "./controls.module.css";

function Controls() {
  return (
    <section className={controlsStyles.controls}>
      <button className={controlsStyles.button}>
        <FaArrowLeft />
      </button>
      <p className={controlsStyles.text}>Страница 1 из N</p>
      <button className={controlsStyles.button}>
        <FaArrowRight />
      </button>
    </section>
  );
}

export default Controls;
