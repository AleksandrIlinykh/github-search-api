import headerStyles from "./header.module.css";

function Header() {
  return (
    <div className={headerStyles.header}>
      <div className={headerStyles.logoWrapper}>
        <p className={headerStyles.logo}> GitHub user finder</p>
      </div>
      <div className={headerStyles.buttonWrapper}>
        <button className={headerStyles.button}>Сменить тему</button>
      </div>
    </div>
  );
}

export default Header;
