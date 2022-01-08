import searchStyles from "./search.module.css";
import { FaSearch } from "react-icons/fa";
function Search() {
  return (
    <>
      <form className={searchStyles.form}>
        <div className={searchStyles.inputContainer}>
          <FaSearch />
          <input
            type="text"
            name="search_text"
            placeholder="Введите данные поиска"
            className={searchStyles.input}
          />
        </div>

        <button type="submit" className={searchStyles.button}>
          Поиск
        </button>
      </form>
    </>
  );
}

export default Search;
