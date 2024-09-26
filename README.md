# Cue4 Portfolio

## Table of Contents
* Installation
* Usage
* Features
* Screenshots
* Technologies
* Deployed Link
* License
* Contact


## Description

This project is a personal developer portfolio built using React. The portfolio is designed to showcase my web development skills, projects, and contact information, making it easy for potential employers to learn more about me. The application features an About Me, Portfolio, Contact and Resume tags.

## Usage/Examples

Once the application is running, you can navigate through the different sections:

*   About Me: View a bio.
*   Portfolio: Explore various project showcases with links to the deployed applications and their GitHub repositories.
*   Contact: Fill out a form to get in touch 
*   Resume: Download the developer's resume


## Installation

    To run this project locally, follow these steps:
    1.  `npm create vite` (This command will automatically create a sub-folder which will house your React application)
    2.  Enter the desired name of your new project folder
    3.  From the list of options, select `REACT` as the framework
    4.  From the list of options, select `JAVASCRIPT` variant
    5.  npm install
    6.  npm run develop

## Further customization (Recommended)

    1. Navigate to your `package.json` and modify the `scripts` object so that it looks like this example:

```json
  "scripts": {
    "dev": "vite",
    "start": "vite",
    "build": "vite build",
    "lint": "eslint src --ext js,jsx --report-unused-disable-directives --max-warnings 0",
    "preview": "vite preview"
  },
```

* Note the addition of the `"start": "vite"` script.

    2. Navigate to the `vite.config.js` file and edit the export object so that it looks like this example:

    ```js
    export default defineConfig({
    plugins: [react()],
    server: {
        port: 3000,
        open: true
    }
    })
    ```
## Features

* Deployment via Netlify.


## License

This project is licensed under the MIT License.