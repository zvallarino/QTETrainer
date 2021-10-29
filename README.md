# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)



## QTE README
### Title: QTE 
### Description: 
Our motivation in building this project is to help improve typing speed/allow user to assess their typing comprehension by playing a typing game. 
### How It Works: 
Once the user clicks "start", they are able to choose from two different modes of gameplay: Arcade (timed) and Endless (untimed). Each mode of gameplay has three versions: Alphabetic, Numeric, and Leet. In each of these versions, a series of randomized characters is presented one by one, in which the user must type the matching character in the input field. 
Alphabetic: Gameplay in A-Z mode only
Numeric: Gameplay in 0-9 mode only
Leet: Both Alphabetic and Numeric characters are presented 
**Screenshots*
### Arcade Mode: Each version of Arcade mode gameplay has 5 levels with varying speeds. 
Level 1: 20 seconds to complete the round; if user can achieve a score equal to or greater than 100, they move on to Level 2
Level 2: 10 seconds to complete the round; if user can achieve a score equal to or greater than 200, they move on to Level 3
Level 3: 10 seconds to complete the round; if user can achieve a score equal to or greater than 300, they move on to Level 4
Level 4: 5 seconds to complete the round; if user can achieve a score equal to or greater than 400, they move on to Level 3
Level 5: 10 seconds to complete the round; if user can achieve a score equal to or greater than 500, they win the game; otherwise, they are brought to a Losing Page and have the option to try again. 
**Screenshots**
Every version renders the user's counts for score, misses, and streak on the page. The user is also able to post their name and final score to the Leaderboard once completed. 
### Challenges:
Implementing multiple levels with different timers in place 
Figuring out whether to use an OnKeyDown or OnChange event listener to capture the user's input and have it reflect properly in state 
Setting and clearing state intervals 
Redirecting user to the appropriate page (i.e. if they lose, bring them to Losing Page and allow them to try again)  
Routes: User was unable to navigate back to Start while in game due to the way our routes were set up 
Killing timers 
Figuring out how to kill the game 
