import { useLoaderData } from "react-router-dom";
import "./App.css";

function App() {
  /** useEffect(() => {
    console.log("Effect");
  }, []); */
  const burgers = useLoaderData();
  console.info(burgers);

  return (
    <main className="container">
      <h1>My Burger Palace</h1>
    </main>
  );
}

export default App;
