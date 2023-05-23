function Card (props)  {
    return (
        <div className="card">
        <div className="favourite">
          <img src="/img/sneakers/heart-unliked.svg" alt="unliked" />
        </div>
        <img src={props.imageUrl} alt="Sneakers" width={133} height={112} />
        <h5>{props.title}</h5>
        <div className="card__sneakers">
          <div className="card__sneakers__price">
            <span>
              Цена:
            </span>
            <b>{props.price}</b>
          </div>
          <button className="button">
            <img src="/img/plus.svg" alt="Plus" width={11} height={11} />
          </button>
        </div>
      </div>
    )
}

export default Card

