import appStyles from "./app.module.css";
import Header from "../header/header";

function App() {
  return (
    <div className={appStyles.app}>
      <div className={appStyles.content}>
        <Header />
      </div>
    </div>
  );
}

export default App;
