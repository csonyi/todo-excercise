# ToDo Excercise

A small ToDo app.

You can use the first card on the screen to add new ToDo cards.
It also has a button to conviniently clear both input fields.

Each ToDo card has 3 buttons:
* Edit/Save     - Switches between "read" and "edit" mode
* Delete        - Deletes the card
* Mark done  - Marks the card as "Done"

After a card is marked as done, the "Edit/Save" and "Mark done" buttons disappear, and the card can only be deleted.

The app saves the ToDo items to localstorage each time a new card is added, a card is deleted or is gets marked as "Done".

The AppBar on the top of the page has a search field, that can be used to filter the cards. It searches in both the titles and descriptions of the cards.

Next to the search bar there is a small "Armageddon" button. This deletes all the cards, and wipes the localstorage. Very convinient.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## AC
Create a simple todo list! UI shall contain a list of todo items and controls to modify the list:
  - [x] You can add an item with title + description to the todo list
  - [x] You can remove an item
  - [x] You can edit the description and title
  - [x] You can mark it done, when done its not editable

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

