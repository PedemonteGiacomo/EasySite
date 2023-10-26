# EasySite - Template Vue.js

Template for facade sites, easy to manipulate and easy to improve.

Watch [this site realized with this template](https://itlpuliziegenova.it)

## Table of Contents

- [EasySite - Template Vue.js](#easysite---template-vuejs)
  - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Features](#features)
  - [Prerequisites](#prerequisites)
  - [Getting Started](#getting-started)
    - [Installation](#installation)
    - [Configuration](#configuration)
    - [Deployment](#deployment)
      - [Install the dependencies](#install-the-dependencies)
      - [Start the app in development mode (hot-code reloading, error reporting, etc.)](#start-the-app-in-development-mode-hot-code-reloading-error-reporting-etc)
      - [Lint the files](#lint-the-files)
      - [Format the files](#format-the-files)
      - [Build the app for production](#build-the-app-for-production)
      - [Customize the configuration](#customize-the-configuration)
      - [Relevant notes for the project EasySite](#relevant-notes-for-the-project-easysite)
    - [Animations and Transitions](#animations-and-transitions)
    - [Contributing](#contributing)
    - [License](#license)

## Introduction

Explain briefly what your project does and what problem it solves. Mention that it's a template for creating facade sites using Vue.js and Quasar framework, connected to Firebase.

## Features

- List key features of your project.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed.
- Firebase account and Firebase CLI installed (for connecting to Firebase).

## Getting Started

### Installation

```bash
# Clone the repository
git clone <repository-url>

# Navigate to the project directory
cd project-directory

# Install dependencies
npm install
```

### Configuration

Explain any configuration steps users need to follow. This might include environment variables, API keys, or Firebase configuration.
Usage

Describe how to use your project. Include important code snippets and demonstrate typical use cases.
Firebase Setup

    Create a Firebase Project:
        Go to the Firebase Console.
        Click on "Add Project" and follow the prompts to create a new project.

    Firebase Configuration:
        In your Firebase project settings, find your Firebase configuration object.
          Search for the correct path to your firebase project connected to the usage of this template.
          Change the name inside the ".firebaserc" file
        Replace the placeholder values in your Vue.js project with the actual Firebase configuration.

    Firestore Database:
        Set up your Firestore database collections and documents as per your project requirements.

### Deployment

Explain how to deploy your project. This might include instructions on deploying to platforms like Firebase Hosting, Vercel, or Netlify.
Built With

    Vue.js - The progressive JavaScript framework.
    Quasar Framework - The high-performance Vue.js framework.
    Firebase - The comprehensive app development platform.

#### Install the dependencies
```bash
yarn
# or
npm install
```

#### Start the app in development mode (hot-code reloading, error reporting, etc.)
```bash
quasar dev
```


#### Lint the files
```bash
yarn lint
# or
npm run lint
```


#### Format the files
```bash
yarn format
# or
npm run format
```



#### Build the app for production
```bash
quasar build
```

#### Customize the configuration
See [Configuring quasar.config.js](https://v2.quasar.dev/quasar-cli-vite/quasar-config-js).


#### Relevant notes for the project EasySite

If you want to host with Firebase (suggested since all the services used here are from Firebase), I suggest to setup the site as SPA(SinglePageApplication) to easily manage ga(google-analytics) tag and other features from Firebase.

This is not the best choice if you deserve to analyze the access on different pages but for a first impact site can be useful to have the site as a single-page application.

Make always:
  ```bash
  quasar dev
  ```
to prove all the functionality you want to test on a local development server.
After this, you can do:

  ```bash
  quasar build
  ```

And then if all works fine, the SPA (in my case) is generated and hosted correctly when performing the last command:

  ```bash
  firebase deploy
  ```

If setting up the Firestore database make sure to modify the content of "firestore.rules" that reflects the rules that you can find in the Firebase Firestore dashboard.

### Animations and Transitions

Since there is a mess performing good animation in quasar in this site there are intersections to resume the user attention and make it more interactive with the pages.
Play as you like with those to obtain the desired effect.

### Contributing

Contributions are welcome! See the Contributing Guidelines for more details.

### License
This project is licensed under the MIT License.

<!-- Acknowledgements

    Mention any libraries, tools, or people you'd like to thank or acknowledge. -->
