# Friends Quiz - A JavaScript with HTML & CSS Project for Code Institute

## General information
---

This is a quiz with questions to test the users knowledge on the tv series Friends.
The website can be found here: [Friends Quiz](https://hujanen91.github.io/Friends_quiz_project_2/)

The purpose of this website is to promote myself and my skills in Html, CSS & JavaScript. The website is a simple quiz focused on testing how much the user knows about the tv series Friends.

The game is built in one HTML file where each section within this file that needs to be hidden or not have the class of "hide". This is decided through JavaScript with eventlisteners depending on what the user click on. 

Mockup:
![Mockup](docs/mockup.png)



## Project Goals
- Create a website that showcases my skills in HTML, CSS and JavaScript.
- Create a website that is responsive on all devices.
- Create a website that is easy to understand.
- Create a website that shows the rules for the game.
- Create a website that contains a game for the user to interact with.
- Create a game that shows no errors.
- Create a game with multiple choices for the user to choose between.
- Create a game that displays the users score.
- Create a game that displays custom messages depending on the score.
---

## Colors
- Root Colors:
    - Background color of main container: #7e6892
    - Border and answer button colors: #5d4079
    - Button color: #9b6500
    - Background color if background image does not load: #ffe8bd

- Correct answer button color = #488d48 Green
- Correct answer text color = #ffffff White
- Wrong answer background color = #753333 Red
- Wrong answer text color = #ffffff White 
- Text Color = #ffffff White
--- 

## Typography
- Font
    - The main font used in the project is Arial.
    - The fallback font is sans-serif. 
---

## Wireframes (Balsamiq)
I created the wireframes for this site with Balsamiq. All wireframes can be found in the folder called [Wireframes](https://github.com/gStarhigh/pro2/tree/main/documentation/wireframes).
The wireframes should not be considered finished product, but as a tool I used as inspiration when creating the Quiz.

<details>
<summary>Wireframes for desktop</summary>
<summary>Index</summary>
<img src="docs/wireframes/Index-quiz.png">
<summary>Questions</summary>
<img src="docs/wireframes/Questions-quiz.png">
</details>
<details>
<summary>Wireframes for tablet</summary>
<summary>Index</summary>
<img src="docs/wireframes/Index-quiz-tablet.png">
<summary>Questions</summary>
<img src="docs/wireframes/Questions-tablet.png">
</details>
<details>
<summary>Wireframes for mobile device</summary>
<summary>Index</summary>
<img src="docs/wireframes/Index-quiz-phone.png">
<summary>Questions</summary>
<img src="docs/wireframes/Questions-phone.png">
</details>
</details>
---

## General features
- The website was created with the idea of making a quiz game to test the users knowledge of the tv series Friends.
- The game provides 15 questions that is randomly picked from an array of 50 questions in total.
- The game keeps track of the questions that has been asked so it wont give the user the same question twice.
- The answer buttons are disabled as soon as the user clicks on one of the answers so that the user can't change their mind and click multiple times on different answers.
- If the user answered correctly, the score is increased in the bottom left container and the buttons will turn red and green to display if the user picked the right or wrong answer.
- When either the user has chosen an answer the next question button will appear that will load the next question for the user when clicked, resets the answer buttons and lets the user answer the next question.
- The website is responsive on all devices.

### Home Section
- When you enter the site you are greeted with the main content of the website. 
A clear header that shows the user what the website is all about and some text to tell you about the game itself.
- If the user clicks on the Rules button a modal window will pop up to give the user a funny description of the rules. Clicking anywhere outside the window will close it. The code for this modal was found here: https://www.w3schools.com/howto/howto_css_modals.asp
- When the user clicks on "Let's go!" the game will start. The content of the main page will be hidden with "hide" classes and the questions, answers, score counter and the next button will be collected with eventListeners and hidden objects will have class "hide" removed to be visible for the user.

<details>
<summary>Screenshot of Home page</summary>
<img src="docs/friends_homepage.png">
</details>

### Rules Section
- The rules are displayed in a modal window when clicking on Game Rules. 
- The rules window will tell the user that there are no rules, in a funny way hinting to the series and their main characters.
- Clicking on the X or anywhere outside of the modal window will make the window close itself. 
<details>
<summary>Screenshot of Rules page</summary>
<img src="docs/game_rules_modal.png">
</details>

### Game Section
- Clicking on "Let's go!" on the starting page will start the game. It will hide the description, rules button and let's go button for the user and instead display the first question, 4 buttons with possible answers and below the answers a score window and a "back to start" button has now been disabled from "hide" to show in the new window. 
- When the user clicks on one of the answers the button will turn either green or red. 
-If the answer is correct the clicked button will turn green and the other 3 buttons will turn red to clearly show that the other answers where incorrect.
- If the answer is incorrect the clicked button and the other 2 buttons with incorrect answers will turn red and the correct answer will turn green to clearly show the user wich one of the answers was correct.
- When all the 15 questions has been answered the user will be directed to the finished section.
<details>
<summary>Screenshot of Questions page</summary>
<img src="docs/questions_answers_page.png">
</details>
<details>
<summary>Screenshot of answers being clicked</summary>
<img src="docs/answer_clicked.png">
</details>

### Finished Section
- When the user arrives at the last page after answering 15 questions the total score vs total number of questions will be displayed.
- Depending on the score that the user got, different messages are displayed telling the user how great of a job they did. 
- Below that is the score shown for the user,""x" out of 10".
- Below that is the "Back to start" button that will send the user back to start giving them the opportunity to play again.
<details>
<summary>Screenshot of Finished page with 14 out of 15 correct answers</summary>
<img src="docs/end_score.png">
</details>
--- 

## Testing
### Links, Images, Icons and Buttons:
#### Buttons:
- All the buttons are working and will take you to the correct page.
- All buttons do what they are supposed to do by the users interaction.
### Game logic:
- All questions displays randomly each time.
- The score increments by 1 if the user has clicked the correct answer.
- The score does not increment if the user has clicked the wrong answer. 
- The buttons gets disabled when the user has clicked an answer.
- The buttons gets enabled when the user clicks the next question button.
- The correct message gets displayed when the game is finished according to the amount of correct answers the user got. 
- The Back to start button resets the questions and the score and takes the user back to the start page where they can choose to play again. 
--- 
## Code validation
- All code on the site has been validated, HTML,CSS & JavaScript, by use of the W3C validator and Jshint. 
### HTML
- W3C - HTML validator: (https://validator.w3.org/)
    - W3C Validator for HTML shows no errors or warnings on the index.html file.
    - The W3C validator for HTML did give 2 errors before I corrected them. A stray div was found and an a linking to them index.html to reset the game was coded inside a button wich wasnt allowed. I removed the div and I removed the a attribute and created a small function in javascript to reset my quiz and send the user to the first page as soon as they pressed the "Back to start" button no matter where in the quiz they are.
<details>
<summary>Image of the HTML validation error</summary>
<img src="docs/error_w3_html.png">
</details>
<details>
<summary>Image of the HTML validation after fixing the errors</summary>
<img src="docs/w3_cleared.png">
</details>

### CSS
- W3C - CSS Validator: (https://jigsaw.w3.org/css-validator/)
    - W3C Validator for CSS shows no errors or warnings in the style.css file.
<details>
<summary>Image of the CSS validation</summary>
<img src="docs/w3c_cleared.png">
</details>

### JavaScript
- Jshint: (https://jshint.com/)
    - Jshint validator shows no errors in any Javascript file.
- Questions.js:
    - The Jshint validator shows when questions.js are tested that there are 2 undefined variables. This refers to the Lines 14 and 473 in the questions.js file. These variables are defined in another js file, the script.js. This is why this information is presented by jshint.com.
<details>
<summary>Image of Jshint validation of the questions.js file</summary>
<img src="docs/jshint_questions_cleared.png">
</details>

- Script.js:
    -  The Jshint validator shows when script.js are tested that there are 2 undefined variables. This refers to the lines: 54, 55, 84, 85 and 87 in the script.js file. These variables are defined in another js file, the question.js. This is why this information is presented by jshint.com. The variables can be found on lines 1, 83 and 165 in the question.js file.
<details>
<summary>Image of Jshint validation of the script.js file</summary>
<img src="docs/jshint_cleared.png">
</details>

---

## Testing on different browsers
- The website is tested on different devices. The website is responsive on all tested devices. 
- The website is tested on different browsers. The website is working on all tested browsers.
- Tested browsers: 
    - Google Chrome
    - Firefox
    - Safari
    - Microsoft Edge

## Device testing on different devices
- The site has been tested through Chrome Dev tools for responsivness. The site is responsive on all sizes.
- Simulation test with devices: (the site is responsive and works on all simulated devices)
    - iPhone XR
    - iPhone 12 Pro
    - iPad Air (Rotate)
    - iPad Mini (Rotate)
    - Galaxy fold
    - Samsung Galaxy S21 Ultra
    - Samsung Galaxy Z fold
- Tested on real devices:
    - Apple ipad air
    - Laptop
    - PC
    - Google pixel 8 pro

## Testing tools used
- I have tested the site in Chrome Dev tools. 
- I have tested the site using Lighthouse in Chrome Dev Tools, for both Mobile and Desktop with a 100 in score on everything on both mobile and desktop. Results can be found below on the mobile testing:
<details>
<summary>Lighthouse report:</summary>
<img src="docs/lighthouse_testing.png">
</details>

---

## Testing User Stories
1. Welcome Section

| **Feature** | **Action** | **Expected result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Welcome section | Enter a username and click the button | Move to the Rules section | Moved to the Rules section |
| Welcome section | Click the button without a username | Error message should appear to tell the user to enter a username | Error message appeared and told the user to enter a username |
| Welcome section | Click the Home icon | The site should take you to the home page | The site took me to the home page |

2. Rules Section

| **Feature** | **Action** | **Expected result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Rules Section | Click the button to proceed | The Difficulty section should appear | The Difficulty section did appear |
| Rules section | Click the Home icon | The site should take you to the home page | The site took me to the home page |

3. Choose a Difficulty Section

| **Feature** | **Action** | **Expected result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Difficulty Section | Click the Easy button | Display the Easy questions | Displayed the Easy questions |
| Difficulty Section | Click the Medium button | Display the Medium questions | Displayed the Medium questions |
| Difficulty Section | Click the Hard button | Display the Hard questions | Displayed the Hard questions |
| Difficulty section | Click the Home icon | The site should take you to the home page | The site took me to the home page |

4. Game Section

| **Feature** | **Action** | **Expected result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Game Section | Click the wrong answer | Timer should stop | Timer stopped |
| Game Section | Click the wrong answer | The timer should stop at the time that was left | The timer stopped at the time that was left |
| Game Section | Click the wrong answer | The wrong answers should turn Red | The wrong answers  turned Red |
| Game Section | Click the wrong answer | The correct answer should turn Green | The correct answer turned Green |
| Game Section | Click the wrong answer | The score should NOT increment by 1 | The score did NOT incremented by 1 |
| Game Section | Click the correct answer | The correct answer should turn Green | The correct answer turned Green |
| Game Section | Click the correct answer | The wrong answers should turn Red | The wrong answers turned Red |
| Game Section | Click the correct answer | The score should increment by 1 | The score incremented by 1 |
| Game Section | Click the correct answer | The timer should stop at the time that was left | The timer stopped at the time that was left |
| Game Section | When the timer reaches 5s | The hourglass and the time left should turn Red | The hourglass and the time left turned Red |
| Game Section | When the timer reaches 0s | The answer buttons should not be clickable and the next question arrow should appear | The answer buttons were not clickable and the next question arrow did appear |
| Game Section | Click the next question arrow | The timer should reset to 15s | The timer did reset to 15s |
| Game Section | Click the next question arrow | The color of the countdown should not be Red | The color of the countdown was not Red |
| Game Section | Click the next question arrow | The buttons should not be disabled anymore | The buttons were not disabled |
| Game Section | 10 questions have been answered | The finished section should appear | The finished section appeared. |
| Game section | Click the Home icon | The site should take you to the home page | The site took me to the home page |

5. Finished Section

| **Feature** | **Action** | **Expected result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Finished Section | Finished the game | The users username should appear | The users username did appear |
| Finished Section | Finished the game | The users score should appear | The users score did appear |
| Finished Section | Finished the game | If the user got 0 correct answer a custom message should appear | The custom message did appear |
| Finished Section | Finished the game | If the user got 1-4 correct answer a custom message should appear | The custom message did appear |
| Finished Section | Finished the game | If the user got 5-9 correct answer a custom message should appear | The custom message did appear |
| Finished Section | Finished the game | If the user got 10 correct answer a custom message should appear | The custom message did appear |
| Finished Section | Click the Play Again button | The difficulty page should appear | The difficulty page appeared |
| Finished Section | Playing again | The username should be saved and appear again | The username was saved and appeared again |
| Finished section | Click the Home icon | The site should take you to the home page | The site took me to the home page |

---

## Possible future implementations
- Possibility to compete both against myself and other players.
- A highscore scoreboard depending on how fast the user answered all questions.
- A highscore scoreboard showing the amount of correct answers.
- A highscore scoreboard combining both how fast and how many correct answers the user got.
    - For the above to make sense the following should be required to change:
        - The correct and wrong answers should not appear for the user when they answer a question. 
        - There should also be more questions for each difficulty.
        - The answers should be random as to in which answer button they appeared each time.

---

## Bugs and fixes
- Had a bug where the second last entered username would appear when the user had finished the game. This happened when I tried to save the username to the localstorage with a time and date stamp and then get that when the user had finished the game. I could not get it to work and reverted to a simpler way and saved the username to the localstorage without the time and date stamp. This solved the bug and it now works as expected.
- When the user had finished a game and clicked the "play again" button, the score was not reset and would appear on the next playthrough. I solved this by resetting the score to 0 when the "play again" button was clicked.
---

## Final Result

### Below is captured screenshots of the website on Desktop:
<details>
<summary>Screenshot of Home page</summary>
<img src="documentation/screenshots/index-ps-desktop.png">
</details>
<details>
<summary>Screenshot of Home page with no username</summary>
<img src="documentation/screenshots/index-ps-nousername-desktop.png">
</details>
<details>
<summary>Screenshot of Rules page</summary>
<img src="documentation/screenshots/rules-ps-desktop.png">
</details>
<details>
<summary>Screenshot of Difficulty page</summary>
<img src="documentation/screenshots/difficulties-ps-desktop.png">
</details>
<details>
<summary>Screenshot of Questions page</summary>
<img src="documentation/screenshots/questions-ps-desktop.png">
</details>
<details>
<summary>Screenshot of Questions timedout</summary>
<img src="documentation/screenshots/questions-timeout-ps-desktop.png">
</details>
<details>
<summary>Screenshot of Finished page with 0 correct answers</summary>
<img src="documentation/screenshots/0-correct-answers.png">
</details>
<details>
<summary>Screenshot of Finished page with 1-4 correct answers</summary>
<img src="documentation/screenshots/1-4-correct-answers.png">
</details>
<details>
<summary>Screenshot of Finished page with 5-9 correct answers</summary>
<img src="documentation/screenshots/5-9-correct-answers.png">
</details>
<details>
<summary>Screenshot of Finished page with 10 correct answers</summary>
<img src="documentation/screenshots/10-correct-answers.png">
</details>


### Below is captured screenshots of the website on a phone sized screen:
<details>
<summary>Screenshot of Home page</summary>
<img src="documentation/screenshots/index-ps-phone.png">
</details>
<details>
<summary>Screenshot of Home page with no username</summary>
<img src="documentation/screenshots/index-ps-nousername-phone.png">
</details>
<details>
<summary>Screenshot of Rules page</summary>
<img src="documentation/screenshots/rules-ps-phone.png">
</details>
<details>
<summary>Screenshot of Difficulty page</summary>
<img src="documentation/screenshots/difficulties-ps-phone.png">
</details>
<details>
<summary>Screenshot of Questions page</summary>
<img src="documentation/screenshots/questions-ps-phone.png">
</details>
<details>
<summary>Screenshot of Questions timedout</summary>
<img src="documentation/screenshots/questions-timeout-ps-phone.png">
</details>
<details>
<summary>Screenshot of Finished page with 0 correct answers</summary>
<img src="documentation/screenshots/0-correct-answers-phone.png">
</details>
<details>
<summary>Screenshot of Finished page with 1-4 correct answers</summary>
<img src="documentation/screenshots/1-4-correct-answers-phone.png">
</details>
<details>
<summary>Screenshot of Finished page with 5-9 correct answers</summary>
<img src="documentation/screenshots/5-9-correct-answers-phone.png">
</details>
<details>
<summary>Screenshot of Finished page with 10 correct answers</summary>
<img src="documentation/screenshots/10-correct-answers-phone.png">
</details>

## Captured screenshots of the Error 404 page:
<details>
<summary>Screenshot of the Error 404 page on a desktop</summary>
<img src="documentation/screenshots/error-page-desktop.png">
</details>
<details>
<summary>Screenshot of the Error 404 page on a phone</summary>
<img src="documentation/screenshots/error-page-phone.png">
</details>

---
## Deployment
- This website was developed using Gitpod which I used to commit and push to GitHub using the terminal in GitPod. 
### Here are the steps to deploy this website to GitHub Pages from its GitHub repository:
- Log in to GitHub and locate the GitHub Repository.
- At the top of the Repository, locate the Settings button on the menu.
- Under Source, click the dropdown called None and select Main Branch.
- The page will refresh automatically and generate a link to your website.
---
### Forking the GitHub Repository
By forking the GitHub Repository we make a copy of the original repository on our GitHub account to view and/or make changes without affecting the original repository by using the following steps...

- Log in to GitHub and locate the GitHub Repository
- At the top of the Repository (not top of page) just above the "Settings" Button on the menu, locate the "Fork" Button.
- You should now have a copy of the original repository in your GitHub account.
### Making a Local Clone
- Log in to GitHub and locate the GitHub Repository
- Under the repository name, click "Clone or download".
- To clone the repository using HTTPS, under "Clone with HTTPS", copy the link.
- Open Git Bash
- Change the current working directory to the location where you want the cloned directory to be made.
- Type git clone, and then paste the URL you copied in Step 3.
$ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
- Press Enter. Your local clone will be created.
---
## Credits

### Images:
- The  background images is from: https://www.wallpaperflare.com/
    - Link (https://www.wallpaperflare.com/brown-and-green-floral-wall-decor-slytherin-sonserina-harry-potter-wallpaper-phfmf)

### Title Icon:
- Icon credit, Favicon.
    - Link: (https://www.favicon.cc/?action=icon&file_id=78400) 

### Fonts:
- I used google fonts "Roboto" as my main font:
    - Link (https://fonts.google.com/)

### Readme.md file:
- I used the markdown cheat-sheet to help me with the readme.md file.
    - Link: (https://www.markdownguide.org/cheat-sheet/)

- I got help with the readme file from CodeInstitutes samplereadme.
    - Link : (https://github.com/code-institute-solutions/samplereadme)