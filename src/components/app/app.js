import appStyles from "./app.module.css";
import Header from "../header/header";
import Search from "../search/search";
function App() {
  return (
    <div className={appStyles.app}>
      <div className={appStyles.content}>
        <Header />
        <Search />
      </div>
    </div>
  );
}

export default App;
