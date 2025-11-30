import Popup from "./popup.js";

class PopupWithForm extends Popup {
  constructor({ popupSelector, handleFormSubmit }) {
    super({ popupSelector });
  }
  _getInputValues() {
    const name = evt.target.name.value;
    const dateInput = evt.target.date.value;
  }
}

export default PopupWithForm;
