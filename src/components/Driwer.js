function Driwer () {
    return(
      <div className="overlay" style={{ display: "none" }}>
    
        <div className="driwer">
        <h2>Корзина     <img
          className="btnRemove"
          src="/img/sneakers/btn-remove.svg" alt="Remove" />
        </h2>
        <div className="cartItem">
          <img
            className="img__sneakers__first"
            src="/img/sneakers/1.jpg" alt="Sneakers" width={70} height={70} />
          <div style={{ backgroundImage: "url(/img/sneakers/1.png)" }} className="cartItemImg">

          </div>
          <div className="cartItemInfo">
            <p className="paragraph__cartItem">Мужские Кроссовки Nike Air Max 270</p>
            <b>12 999 руб.</b>
          </div>
          <img
            className="btnRemove"
            src="/img/sneakers/btn-remove.svg" alt="Remove" />
        </div>
        <div className="cartItem">
          <img
            className="img__sneakers__first"
            src="/img/sneakers/2.jpg" alt="Sneakers" width={70} height={70} />
          <div style={{ backgroundImage: "url(/img/sneakers/1.png)" }} className="cartItemImg">

          </div>
          <div className="cartItemInfo">
            <p className="paragraph__cartItem">Мужские Кроссовки Nike Air Max 270</p>
            <b>12 999 руб.</b>
          </div>
          <img
            className="btnRemove"
            src="/img/sneakers/btn-remove.svg" alt="Remove" />
        </div>
        <div className="items">
          <div className="cartTotalBlock">
            <ul style={{ paddingRight: "50px" }}>
              <li>
                <span>Итого:</span>
                <div></div>
                <b>21 498 руб. </b>
              </li>
              <li>
                <span>Налог 5%:</span>
                <div></div>
                <b>1074 руб. </b>
              </li>
            </ul>
            <button className="greenButton">
              Оформить заказ <img src="/img/sneakers/arrow.svg" alt="arrow" />
            </button>
          </div>
        </div>
      </div>
      </div>
  
  
   
    )
}

export default Driwer