# EasySite - Template Vue.js

EasySite is a versatile Vue.js and Quasar template designed for creating sleek and intuitive facade websites. It's engineered for simplicity, making it effortless to customize and enhance according to your specific needs.

Watch [this site realized with this template](https://itlpuliziegenova.it)


[![Video Presentation](readme_images/facade.png)](https://clipchamp.com/watch/rGfTaHwric3)


## Table of Contents

- [EasySite - Template Vue.js](#easysite---template-vuejs)
  - [Table of Contents](#table-of-contents)
- [Requisites](#requisites)
  - [Ensure Node.js and Vue CLI are Installed:](#ensure-nodejs-and-vue-cli-are-installed)
  - [Quasar Framework](#quasar-framework)
- [How to use this Template?](#how-to-use-this-template)
  - [Clone this Repository:](#clone-this-repository)
  - [Navigate to the Project Directory:](#navigate-to-the-project-directory)
  - [Install Dependencies:](#install-dependencies)
    - [Install Function Dependencies](#install-function-dependencies)
      - [Navigate inside "functions" folder](#navigate-inside-functions-folder)
      - [Install functions dependencies](#install-functions-dependencies)
      - [Navigate back to the EasySite folder](#navigate-back-to-the-easysite-folder)
  - [Run the Quasar Project:](#run-the-quasar-project)
- [Make it Personal](#make-it-personal)
  - [Adapt Packages \& Configuration with your Project Name](#adapt-packages--configuration-with-your-project-name)
    - [Configuration](#configuration)
    - [Pakages](#pakages)
      - [Change Title and MetaData](#change-title-and-metadata)
    - [Create a brand icon utilizing quasar icongenie](#create-a-brand-icon-utilizing-quasar-icongenie)
    - [Use trustmary plugin](#use-trustmary-plugin)
  - [Adapt Firebase Configuration](#adapt-firebase-configuration)
    - [Change Firebase Project Name](#change-firebase-project-name)
    - [Use the Firestore Database](#use-the-firestore-database)
  - [Adapt Google API's usage:](#adapt-google-apis-usage)
  - [Use SendGrid API](#use-sendgrid-api)
- [Build the app for production](#build-the-app-for-production)
- [Extras](#extras)
  - [Animations and Transitions](#animations-and-transitions)
- [Contributing](#contributing)

# Requisites

## Ensure Node.js and Vue CLI are Installed:

Make sure that you have **Node.js** installed. If not, you can download it from [nodejs.org](https://nodejs.org).

After installing Node.js, you can install Vue CLI globally using the following command:

```bash
npm install -g @vue/cli
```

## Quasar Framework

Make sure you have Quasar CLI installed globally. If not, you can install it using npm:

```bash
npm install -g @quasar/cli
```

Refers always to the official documentation of Quasar that you will find [on their official website](https://quasar.dev/docs).

# How to use this Template?

## Clone this Repository:
Clone this repository to your local machine:
```bash
git clone https://github.com/PedemonteGiacomo/EasySite
```

## Navigate to the Project Directory:

Now you should navigate to the project directory:

```bash
cd EasySite
```

## Install Dependencies:

Inside the project directory, you should install the project dependencies:

```bash
npm install
```

### Install Function Dependencies

Since we are using Firebase I've created a personal usage of the SendGrid Trigger a simple function calling via API hosted by Firebase functions as discussed later in this guide.

When you run ```firebase deploy``` will instantiate those functions declared in the [function/index.js](https://github.com/PedemonteGiacomo/EasySite/blob/main/functions/index.js) so install the dependencies that those functions need following these steps.

#### Navigate inside "functions" folder
```bash
cd functions
```

#### Install functions dependencies
```bash
npm install
```

#### Navigate back to the EasySite folder
```bash
cd ..
```

## Run the Quasar Project:

To run the Quasar project in development mode, as suggested, users can use the following command:

```bash
quasar dev
```
This will start the development server, and Quasar will automatically open the development server page. If you can see the main page your installation was successful.

# Make it Personal

## Adapt Packages & Configuration with your Project Name
### Configuration

Explore the [config](https://github.com/PedemonteGiacomo/EasySite/blob/main/quasar.config.js#L189) file to adapt it to fit your needs.

For the moment, I suggest only to change the project name to your one:
```js
builder: {
    // https://www.electron.build/configuration/configuration
    appId: "quasar-itl", //change with your personal appID
},
```

### Pakages
To adapt the site to your usage, go change inside the [package-lock.json](https://github.com/PedemonteGiacomo/EasySite/blob/main/package-lock.json#L1-L8) the name of the project:

```js
{
  "name": "quasar-itl", // Adapt this to you personal name
  "version": "0.0.1",
  "lockfileVersion": 3,
  "requires": true,
  "packages": {
    "": {
      "name": "quasar-itl", // Change package managing
      ...
      }
    ...
  }
}
```

You need to do the same in the [package.json](https://github.com/PedemonteGiacomo/EasySite/blob/main/package.json#L1C1-L14C5) file, in the following code:

```js
{
  "name": "quasar-itl",
  "version": "0.0.1",
  "description": "ITL impresa di pulizie web",
  "productName": "ITL app",
  "author": "Giacomo Pedemonte <giacomopedemonte@libero.it>",
  "private": true,
  "scripts": {
    "lint": "eslint --ext .js,.vue ./",
    "format": "prettier --write \"**/*.{js,vue,scss,html,md,json}\"--ignore-path .gitignore",
    "test": "echo \"No test specified\" && exit 0",
    "dev": "quasar dev",
    "build": "quasar build"
  },
  ...
}
```

#### Change Title and MetaData
Inside the script tag of [IndexPage](https://github.com/PedemonteGiacomo/EasySite/blob/main/src/pages/IndexPage.vue#L165-L177) adapt your web app metadata to your needs:
```js
// all the MetaData that application needs to have like API handlers for G-Analytics and SEO
const metaData = {
  // sets document title
  title: 'ITL srl impresa di pulizie',
  // optional; sets final title as "Index Page - My Website", useful for multiple level meta
  titleTemplate: title => `${title} - Genova`,

  // meta tags
  meta: {
    //title: { name: "title", content: 'ITL sas Impresa di pulizie'},
    description: { name: 'description', content: 'ITL impresa di pulizie genova, servizi di pulizie' },
    keywords: { name: 'keywords', content: 'ITL impresa di pulizi Genova' },
    equiv: { 'http-equiv': 'Content-Type', content: 'text/html; charset=UTF-8' },
  },
  //... other metadata if needed
}
```

### Create a brand icon utilizing quasar icongenie

To easily adapt the the icon to you needs just follow the [icongenie configuration and setup](https://quasar.dev/quasar-cli-webpack/convert-to-quasar-cli-with-webpack).

This will generate a brand new icon from a picture that you insert in the path argument.
```bash
icongenie generate -m spa -i .\path\to\your\image
```
ANd then put the code that the command generat and insert it in the index.html file.
```html
<link rel="icon" type="image/png" sizes="128x128" href="icons/favicon-128x128.png">
<link rel="icon" type="image/png" sizes="96x96" href="icons/favicon-96x96.png">
<link rel="icon" type="image/png" sizes="32x32" href="icons/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="icons/favicon-16x16.png">
<link rel="icon" type="image/ico" href="favicon.ico">
```

###  Use trustmary plugin
[Trustmary](https://app.trustmary.com/) is the plugin that is simply used to get Google reviews inside the AboutUsPage by using the following code which is already implemented, you will follow the instruction on [Trustmary plugin site](https://app.trustmary.com/widget) to get the correct setup and you need to organize it like the following inside the ```<script>``` tag of the component GoogleReview:

```js
<template>
  <div id="trustmary"></div>
</template>

<script>
export default {
  mounted() {
    // Dynamically add Trustmary script tag to the document
    this.addTrustmaryScript();
  },
  methods: {
    addTrustmaryScript() {
      // Create script element for Trustmary widget
      const script = document.createElement('script');
      script.src = 'https://widget.trustmary.com/X6xhp1Y1h';

      // Append the script to the document's body or head
      //document.body.appendChild(script); // or document.head.appendChild(script);
      document.getElementById('trustmary').appendChild(script);

      // Initialize Trustmary widget after the script is loaded (might need some delay)
      script.onload = () => {
        this.initTrustmaryWidget();
      };
    },
    initTrustmaryWidget() {
      // Trigger the Trustmary widget creation
      // This assumes Trustmary widget has a specific method to initialize it, replace with correct code if needed
      window.TrustmaryWidget?.initWidget({
        target: '#trustmary-widget', // The element to attach the widget to
        // Other configuration options as needed for Trustmary widget initialization
      });
    },
  },
}
</script>
```

So, to remain simple, the only thing you should take care is to change the code in the following code inside the ```<script>``` tag:
```js
      ...
      // Create script element for Trustmary widget
      const script = document.createElement('script');
      script.src = 'https://widget.trustmary.com/X6xhp1Y1h';
      // CHANGE THIS YOUR OWN CODE OF THE SCRIPT THAT YOU GET FROM TRUSTMARY
      ...
```

Than you should simple use the components as usual in the page that you want to insert it without repeating code like the following:
```html
...
<GoogleReviews/>
...
<script>
import AboutUsCarousel from 'src/components/AboutUsCarousel.vue';
import MapComponent from 'src/components/MapComponent.vue';
import CallToActionButton from 'src/components/CallToActionButton.vue';
import GoogleReviews from 'src/components/GoogleReviews.vue';

export default {
  components: {
    AboutUsCarousel,
    MapComponent,
    CallToActionButton,
    GoogleReviews
  },
...
<script/>
```

## Adapt Firebase Configuration
Go to [Firebase](https://firebase.google.com/) official site and follow the instructions to create a new project and link this project to Firebase. I suggest having a hosting based on Firebase that makes you obtain a development server that is reachable also for possible users.

Change the content of [/firebase/index.js](https://github.com/PedemonteGiacomo/EasySite/blob/main/src/firebase/index.js#L10-L20) with the configuration provided in Firebase after setting your project.

```js
// Your web app's Firebase configuration:
//  - follow firebase documentation when you setup your firebase project
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "YOUR_API_KEY", // this is the key relevant to your project
  authDomain: "YOUR_AUTH_DOMAIN", // relevant to your application of your project
  databaseURL: "YOUR_DATABASE_URL", // firebase db url (depends on Timezones)
  projectId: "YOUR_PROJECT_ID", // project ID
  storageBucket: "YOUR_STORAGE_BUCKET", // bucket of your application
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
  measurementId: "yOUR_MEASUREMENT_ID" // google analytics tag (if needed)
};
```

### Change Firebase Project Name

Change the name of the project to your own that you configured in Firebase in inside [firebaserc](https://github.com/PedemonteGiacomo/EasySite/blob/main/.firebaserc#L1-L5):

```js
{
  "projects": {
    "default": "PUT_YOUR_PROJECT_NAME_THAT_APPEARS_ON_FIREBASE"
  }
}
```

### Use the Firestore Database

To make available the form usage by the user and your visualization you will need to insert also Firestore Database connection directly in the Firebase console (as done for the hosting and/or for the analytics).

When setting up the Firestore database make sure to modify the content of [firestore.[rules](https://github.com/PedemonteGiacomo/EasySite/blob/main/firestore.rules#L1-L9) that reflect the rules that you can find in the Firebase Firestore dashboard. In the following, we are assuming that all the users can read and write in the db to make people add without auth. permissions to obtain all the appointment requests without limitation.

```rules
rules_version = '2';

service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if true;
    }
  }
}
```

So, the Firestore database is used to store the emails received by the users that compile the contact form inside almost all the pages.

So the declaration of the database is made once and is in [firebase/index.js](https://github.com/PedemonteGiacomo/EasySite/blob/main/src/firebase/index.js):

```js
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const analytics = firebase.analytics();

analytics.setAnalyticsCollectionEnabled; // set the analytics collection on that tag
//P.S. don't deserve google tag manager if you copy the ga(google-analytics) tag that firebase provide you directly from the dashboard of your project

// Initialize Cloud Firestore and get a reference to the service
const db = firebase.firestore();

export { db }; // extract the db to easily recover it
```

So, when you need to use the DB you can call it easily in the following way:

```js
import { db } from "../firebase";
```

In this template site, we use the DB to store the mail received by users in one place with easy access. So, this db is used in the [catchingClientComponent](https://github.com/PedemonteGiacomo/EasySite/blob/main/src/components/CatchingClientComponent.vue#L37), more precisely in [this part](https://github.com/PedemonteGiacomo/EasySite/blob/main/src/components/CatchingClientComponent.vue#L55-L69) of the code:

```js
// Your form data
const formData = {
  firstName: firstName.value,
  lastName: lastName.value,
  email: email.value,
  phoneNumber: phoneNumber.value,
  text: text.value,
};
// Add a new document with a generated id to store the message on firestore
var newMexRef = db.collection("formData").doc
newMexRef.set(formData)
console.log("Document written with ID: ", newMexRef.id);
```

You can then manage the requests received directly inside your console in Firebase.

![Firestore Firebase Usage](readme_images/firestore.png)


## Adapt Google API's usage:

This template uses a Google Map template and requesting positions need a simple API key generated by Google. Follow the instructions at this [link to the official page](https://developers.google.com/maps/documentation/javascript/get-api-key?hl=it).

MapComponent contains Google Maps API usage so change it with your personal API_KEY obtained by Google. Otherwise, without specifying it, the result will be the following:

![Invalid_API_KEY](readme_images/image.png)

Insert your Google Maps API in [MapComponent.vue](https://github.com/PedemonteGiacomo/EasySite/blob/main/src/components/MapComponent.vue#L21) in the following code:

```js
<script>
export default {
  props: {
    // You can pass the address as a prop to dynamically generatethe map URL
    address: {
      type: String,
      required: true
    }
  },
  computed: {
    // Computed property to generate the dynamic map URL based onthe passed address prop
    mapUrl() {
      const apiKey = 'YOUR_GOOGLE_API_KEY'; // Replace with yourGoogle Maps API Key
      const formattedAddress = encodeURIComponent(this.address);
      return `https://www.google.com/maps/embed/v1/place?key={apiKey}&q=${formattedAddress}`;
    }
  }
};
</script>
```

And then to utilize this component simply modify the string that refers to the place that want to visualize.

Example of usage in [AboutUs.vue Page](https://github.com/PedemonteGiacomo/EasySite/blob/main/src/pages/AboutUsPage.vue#L144):

```js
<MapComponent address="ITL Srl IMPRESA PULIZIA, Genova Italy"/>
```

This can be used by simply including the Map as a component in the following way in the ```<script>```:

```js
import MapComponent from 'src/components/MapComponent.vue';

export default {
  components: {
    MapComponent,
    // ... insert other components if needed
  },
  ...
}
```

This will help you obtain as result the following map rendering:

![Valid_API_KEY](readme_images/image-1.png)

## Use SendGrid API

SenGrid API is used to trigger mail(s) when the user completes the contact form.
In this template, there is a [simple contact form](https://github.com/PedemonteGiacomo/EasySite/blob/main/src/components/CatchingClientComponent.vue#L3-L31) that can be used by the user and make the owner of the site receive the content of the message sent by the user.

The mail trigger is handled by [Sendgrid](https://app.sendgrid.com/) so follow the instructions in the guide to get the API KEY to send mails automatically and put you API KEY directly [here](https://github.com/PedemonteGiacomo/EasySite/blob/main/functions/index.js#L15) or in your env.

```js
// Initialize SendGrid API key
sgMail.setApiKey("YOUR_SENDGRID_API_KEY");
```

Then you will change all the configuration of your response email in the following code (SendGrid will provide you all the code):

``` js
exports.SendMail = functions.https.onRequest((request, response) => {
  cors(request, response, () => {
    // Your function logic here
    // Send email to user
    const userMsg = {
      to: email, // Email of the user obtained by the contact form
      from: {
        email: "noreply@itlpuliziegenova.it", // Use your authenticated domain to not get email goes into SPAM
        name: "Giacomo Pedemonte", // Replace with your sender name
      },
      // if you don't have an AUTHORIZED DOMAIN you need to replace this with a Verified Sender as Sengrid asks, example:
      // from: "giacomopedemonte@libero.it", // Replace with your verified sender email
      templateId: "d-c4825a7d9322498ebc92c784d0e5ff62", // Replace with your SendGrid template ID
      asm: {
        groupId: "YOUR_UNSUBSCRIBE_GROUP_ID" // Replace YOUR_UNSUBSCRIBE_GROUP_ID with the actual ID of your unsubscribe group
      },

      sgMail
        .send(userMsg)
        .then(() => {
          // Email sent successfully, you can handle the response if needed
        })
        .catch((error) => {
          console.error("Error sending email to user:", error);
        });
      ...
    // Send email to owner in the same way to have the confirmation on both sides
    };
  })
  }
)
```

This function will be deployed and hosted by Firebase and you can access and check the state of this function in the panel in the Firebase console.

You will obtain your personal function link by performing the command:

```bash
firebase deploy --only functions
```

Once you have obtained your *function URL*, you can use this as an API hosted by Firebase which the endpoints are your exported functions declared in the [functions/index.js](https://github.com/PedemonteGiacomo/EasySite/blob/main/functions/index.js#L15) file, **VERY COOL!**

In this template, the only function implemented is the integration with Twilio Sendgrid. You can use this as a starting point for your needs.

An example of usage of this endpoint is the following inside the [CatchingClientComponent](https://github.com/PedemonteGiacomo/EasySite/blob/main/src/components/CatchingClientComponent.vue#L72):

```js
// Make a POST request to your Firebase Function endpoint
await axios.post(
  // this url needs to be replaced
  'https://us-central1-itl-impresadipulizie-genova.cloudfunctions.net/SendMail',
  formData);
```

This also will bypass all possible Cross-Origin errors because all the mail requests performed to the SendGrid API pass through the same address which is your *function URL*.


Finally, after you have followed all the instructions in [Sendgrid](https://app.sendgrid.com/), this system can make you obtain a template mail like the following:

![Confirmation Mail](readme_images/content_name.png)

The owner(or you), on the other hand, will receive a simple content-based email with a simple visualization of the message of the user.

![Owner Mail](readme_images/owner_mail.png)

You can adapt this mail system with every kind of usage, starting from confirmation mail until the verification of user payments...

# Build the app for production

When the site is ready to be launched you will no longer need the development server that Quasar provides you with ```quasar dev```, you can simply type in the command prompt:

```bash
quasar build
```

This will make you "compile" your quasar project and setup the SPA (Single Page Application) that can be easily hosted on Firebase as reported in [firebase.json](https://github.com/PedemonteGiacomo/EasySite/blob/main/firebase.json).

If you are hosting the site with Firebase then to make the changes visible also in the deployment server (obtained by Firebase in the Firebase Hosting console web page related to your project connected to the site you are realizing) you need to perform the following command:

```bash
firebase deploy
```
**The site should run even without all the API KEY updates.**

If your ```firebase deploy``` isn't working try to check if all the API KEYs are set, but a first possible solution could be to check the endpoint URL of the firebase functions that are not accessible to you, for further assistance [check this](#use-sendgrid-api-to-trigger-mail-when-user-complete-contact-form).

If more problems are discovered, please, contact me directly by mail at giacomopedemonte@libero.it.



# Extras
## Animations and Transitions

Animation are based on [animation.style](https://animate.style/).

[Animations](https://quasar.dev/options/animations)  in quasar are triggered by [Transitions](https://quasar.dev/options/transitions) that are managed by [Intersection](https://quasar.dev/vue-components/intersection) within the page.

If interested follow [quasar docs](https://quasar.dev/options/transitions) to know more about animation, transitions and intersections.

# Contributing

Contributions are welcome! For further assistance write directly to  giacomopedemonte@libero.it.
