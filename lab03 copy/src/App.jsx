import { useEffect, useState } from "react";
import "./App.css";
import Item from "./components/Item";

function App() {
  const [arr, setArr] = useState([]);

  useEffect(() => {
    fetch("https://67c820950acf98d0708500a4.mockapi.io/api/save-recipes")
      .then((response) => response.json())
      .then((data) => setArr(data));
  }, []);

  return arr.map((item) => (
    <Item
      key={item.id}
      image={item.image}
      title={item.title}
      time={item.time}
    />
  ));
}

export default App;
