import Header from "./components/Header";
import Card from "./components/Card";
import Driwer from "./components/Driwer";

function App() {
  return (
    <div className="wrapper" >
      <div className="overlay" style={{ display: "none" }}>
      <Driwer />
      </div>
      <Header />
      <div className="content">
        <div className="content__search__container">
          <h1 className="heading__first__sneakers">Все кроссовки</h1>
          <div className="search-block">
            <input className="placeholder__search" placeholder="Поиск..." />
          </div>
        </div>
        <div className="sneakers">
          <Card />
      gitb

        </div>

      </div>

    </div>
  );
}

export default App;
