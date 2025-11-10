# Simple Todo App

A simple, modern, and responsive Todo application built with vanilla JavaScript, HTML, and CSS. This app allows users to add, complete, and delete tasks, with a clean UI and smooth user experience.

## Functionality

- **Add Todos:** Click the "+ Add Todo" button to open a popup and add a new task with an optional due date.
- **Mark as Completed:** Check off tasks as you complete them.
- **Delete Todos:** Remove tasks you no longer need.
- **Live Counter:** See how many tasks are completed out of the total.
- **Form Validation:** Ensures todos have a valid name before adding.

## Technology

- **JavaScript (ES6 modules):** Handles all app logic, DOM manipulation, and event handling.
- **HTML5:** Semantic markup for accessibility and structure.
- **CSS3 (BEM methodology):** Modular, maintainable styles with custom fonts and responsive design.
- **No frameworks:** Lightweight and fast, no dependencies except for [uuid](https://jspm.dev/uuid) for unique IDs.

**Key files and folders:**

- `pages/index.js` — Main app logic and event handling.
- `components/Todo.js` — Todo item class.
- `components/FormValidator.js` — Form validation logic.
- `blocks/` — Modular CSS for each UI component.
- `utils/constants.js` — Initial data and config.

## Deployment

This project is deployed on GitHub Pages:

[Todo App](https://shreyas-chigurupati07.github.io/se_project_todo-app/)
