import appStyles from "./app.module.css";
import Header from "../header/header";
import Search from "../search/search";
import Cards from "../cards/cards";
function App() {
  return (
    <div className={appStyles.app}>
      <div className={appStyles.content}>
        <div className={appStyles.headerContainer}>
          <Header />
        </div>
        <div className={appStyles.searchContainer}>
          <Search />
        </div>
        <div className={appStyles.cardsContainer}>
          <Cards />
        </div>
      </div>
    </div>
  );
}

export default App;
