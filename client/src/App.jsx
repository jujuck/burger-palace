import { useLoaderData } from "react-router-dom";

import BurgerCard from "./components/BurgerCard";

import "./App.css";

function App() {
  /** useEffect(() => {
    console.log("Effect");
  }, []); */
  const burgers = useLoaderData();

  return (
    <main className="container">
      <h1>My Burger Palace</h1>
      <section>
        {burgers.map((burger) => (
          <div key={burger.id}>
            <h2>{burger.name}</h2>
            <BurgerCard />
          </div>
        ))}
      </section>
    </main>
  );
}

export default App;
