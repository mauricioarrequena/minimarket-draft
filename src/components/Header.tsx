

const Header: React.FC = () => {
  return (
    <div id="header">
      <div id="header__leftSide">
        <div id="title">
          <span>icon</span>
          <h4>MiniMarket</h4>
        </div>
        <nav id="nav">
          <ul>
            <li>Home</li>
            <li>Admin</li>
          </ul>
        </nav>
      </div>
      <div id="header__rightSide">
        <div id="cardSection">
          <span>icon</span>
          <span>Cart 0</span>
        </div>
        <div id="userSection">
          <span>icon</span>
          <span>Pedro Perez</span>
        </div>
      </div>
    </div>
  );
}

export default Header;