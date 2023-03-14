import closeIcon from '../images/cross.svg';

function PopupWithForm(props) {
  return(
    <div className={`popup popup_type_${props.name}`+ (props.isOpen && " popup_opened")}> 
      <div className="popup__conteiner">
        <button className="popup__close" type="button" onClick={props.onClose}>
          <img className="popup__close-cross" src={closeIcon} alt="" />
        </button>
        <form className="form" name="{props.name}">
          <h2 className="form__title">{props.title}</h2>
          {props.children}
          <button className="form__save" type="submit">Сохранить</button>
        </form>
      </div>
    </div>
  )
}

export default PopupWithForm;