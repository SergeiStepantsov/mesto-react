function Card(props) {

  function handleClick() {
      props.onCardClick(props.card.link, props.card.name);
  }
  
  return(
      <article className="element">
            <button className="element__delete" type="button"></button>
            <img src={props.card.link}  className="element__photo" onClick={handleClick} alt={props.card.name}/> 
            <div className="element__description">  
              <h2 className="element__title">{props.card.name}</h2>
                <div className="element__like-conteiner">
                  <button className="element__like" type="button"></button>
                    <span className="element__like-count">{props.card.likes.length}</span>
                </div>  
            </div>  
      </article>
  )
}

export default Card;