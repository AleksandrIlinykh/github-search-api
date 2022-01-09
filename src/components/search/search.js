import { createRef } from "react";
import axios from "axios";
import { FaSearch } from "react-icons/fa";

import searchStyles from "./search.module.css";

function Search() {
  const input = createRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.current.value) {
      const searchUsers = async (query, page = 0, per_page = 12) => {
        await axios.get("https://api.github.com/search/users", {
          params: {
            q: query,
            per_page: per_page,
            page: page,
          },
        });
      };

      searchUsers(input.current.value);
    }
  };

  return (
    <>
      <form className={searchStyles.form} onSubmit={handleSubmit}>
        <div className={searchStyles.inputContainer}>
          <FaSearch />
          <input
            type="text"
            name="search_text"
            placeholder="Введите данные поиска"
            className={searchStyles.input}
            ref={input}
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
