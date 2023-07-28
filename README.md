# React project template with autodeploy to GH-pages.

https://www.figma.com/file/xB0IWaLFhlUsnS48jMOGci/Freebies%3A-Web-for-Smart-Home-Installation-Agency-(Community)?node-id=0%3A1&mode=dev

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). To familiarize yourself with and configure additional features [refer to documentation](https://create-react-app.dev/docs/getting-started/).

## Creating a repository from a template

Use this repository as a template for creating your project. To do this, click on the **"Use this template"** button and select the **"Create a new repository"** option.

The next step will open the page for creating a new repository. Fill in the name field, make sure that the repository is public, then click the **"Create repository from template"** button.

After the repository is created, go to the settings of the created repository on the **Settings > Actions > General** tab.

After scrolling to the very bottom of the page, in the **"Workflow permissions"** section, select the **"Read and write permissions"** option and check the checkbox. This is necessary to automate the project deployment process.

You now have a personal project repository, with the file and folder structure of the template repository. Then work with it like any other personal repository, clone it on your computer, write code, make commits and send them to GitHub.

## Getting ready: installing and launching the app

1. Make sure you have the LTS version of Node.js installed on your computer. [Download and install here](https://nodejs.org/en) if necessary.
2. Install the basic dependencies of the project with the `npm install` command.
3. Start development mode by executing `npm start` command.
4. Go to the browser at http://localhost:3000. This page will automatically reload after saving changes to project files.

## Deploy

The production version of the project will automatically be linted, compiled and deployed to GitHub Pages, in the gh-pages branch, whenever the main branch is updated. For example, after a direct push or an accepted pull request.

To do this, you need to edit the homepage field in the `package.json` file, replacing **your_username** and **your_repo_name** with your own, and submit the changes to GitHub.

```json
"homepage": "https://your_username.github.io/your_repo_name/"
```
Next, you need to go to the settings of the GitHub repository (**Settings > Pages**) and set the distribution of the production version of files from the `/root` folder of the `gh-pages` branch, if this was not done automatically.

### Deploy status

The deployment status of the last commit is displayed by an icon next to its identifier.

- **Yellow color** - the project is being compiled and deployed.
- **Green color** - deployment completed successfully.
- **Red color** - an error occurred during linting, compilation or deployment.

More detailed information about the status can be viewed by clicking on the icon, then in in the drop-down window go to the Details link.

### Live page

After some time, usually a couple of minutes, the live page can be viewed at the address specified in the edited homepage property. For example, here is a link to the live version for this repository:
https://supermacchan.github.io/react-project-template/

If a blank page opens, make sure that there are no errors in the Console tab related to incorrect paths to the CSS and JS files of the project (404). Most likely you have the wrong value for the homepage property in the `package.json` file.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.