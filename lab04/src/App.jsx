import "./App.css";
import Filter from "./components/Filter";
import Header from "./components/Header";
import Recipe from "./components/Recipe";

function App() {
  return (
    <>
      <Header />
      <div className="flex mx-[50px]">
        <div className="w-[1000px] mt-[10px]">
          <Filter />
        </div>
        <div className="flex flex-wrap">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((recipe) => (
            <Recipe key={recipe} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
