import burgerImage from "../assets/images/burger.jpg";

import "./BurgerCard.css";

function BurgerCard({ burger }) {
  return (
    <div className="burger-card">
      <img src={burgerImage} alt={burger.name} />
      <h2>{burger.name}</h2>
      <p>{burger.description}</p>
    </div>
  );
}

export default BurgerCard;
