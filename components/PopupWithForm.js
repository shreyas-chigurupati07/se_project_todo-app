import Popup from "./popup.js";

class PopupWithForm extends Popup {
  constructor({ popupSelector, handleFormSubmit }) {
    super({ popupSelector });
    this._popupForm = this._popupElement.querySelector(".popup__form");
    this._handleFormSubmit = handleFormSubmit;
    this, (_inputList = this), this._popupForm.querySelector(".popup_input");
  }

  _getInputValues(evt) {
    const values = {};
    this._inputList.forEach((input) => {
      // values[input.name] = ;
      // values[input.value] - ;
    });
    return values;
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(evt);
    });
  }
}

export default PopupWithForm;

// addTodoForm.addEventListener("submit", (evt) => {
//   evt.preventDefault();
//   const name = evt.target.name.value;
//   const dateInput = evt.target.date.value;

//   // Create a date object and adjust for timezone
//   const date = new Date(dateInput);
//   date.setMinutes(date.getMinutes() + date.getTimezoneOffset());

//   const id = uuidv4();
//   const values = { name, date, id };
//   const todo = generateTodo(values);
//   section.addItem(todo);

//   formValidty.resetValidation();
//   addTodoPopup.close();
// });
