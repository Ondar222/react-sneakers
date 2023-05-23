import Header from "./components/Header";
import Card from "./components/Card";
import Driwer from "./components/Driwer";

const arr = [
  {
    name: 'Мужские Кроссовки Nike Blazer Mid Suede', price: '12 999 руб', imageUrl: "/img/sneakers/1.jpg"
  },
  {
    name: 'Мужские Кроссовки Nike Air Max 270', price: '15 999 руб', imageUrl: "/img/sneakers/2.jpg"
  },
  {
    name: 'Мужские Кроссовки Nike Blazer Mid Suede', price: '8 499 руб. руб',imageUrl: "/img/sneakers/3.jpg"
  },
  {
    name: 'Кроссовки Puma X Aka Boku Future Rider', price: '8 999 руб. руб', imageUrl: "/img/sneakers/4.jpg"
  }
]

function App() {
  return (
    <div className="wrapper" >

      <Driwer />
      <Header />
      <div className="content">
        <div className="content__search__container">
          <h1 className="heading__first__sneakers">Все кроссовки</h1>
          <div className="search-block">
            <input className="placeholder__search" placeholder="Поиск..." />
          </div>
        </div>
        <div className="sneakers">
          {arr.map((obj) => (

          <Card
           title={obj.name}
           price={obj.price}
           imageUrl={obj.imageUrl}
          />
          ))}


          {/* <Card
             title="Мужские Кроссовки Nike Air Max 270 "
             price="8 499 руб.Р"
             imageUrl="/img/sneakers/2.jpg"
             />
          <Card 
            title="Кроссовки Puma X Aka Boku Future Rider"
            price="8 999 руб.Р"
            imageUrl="/img/sneakers/3.jpg"
            /> */}
        {/* {
          arr.map((obj) => 
        <Card />
          )
        } */}

        </div>

      </div>

    </div>
  );
}

export default App;
