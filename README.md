# Ionic USA!
*Ionic and Angular front-end app with a separate Node, Express, Mongo back-end app.*

<h2>Ionic Exploring</h2>
<p>Ionic is a powerful devkit utilizing HTML5, CSS3, SASS, JavaScript, and Angular.js to build native-feeling mobile applications. It is more concerned with the look, feel, and interaction of the front-end over anything else.</p>
<p>The real power in Ionic comes from utilizing Cordova to run iOS and Android builds and deployments that allow for users to literally download from the App Store or Google Play straight to their phones. This greatly enhances the power of an otherwise basic web developer, allowing him or her to extend production reach.</p>
<p>The mobile app and native experience is supported via UIWebView. The main difference between Ionic and Angular.js is that Ionic is simply a UI toolkit and Angular.js is an application framework which Ionic utilizes.</p>

<h2>Start a Project</h2>
<p>If ionic hasn't been installed, yet you have npm, you're in luck! *npm install -g ionic* will get you set up.</p>
<p>A typical Ionic project starts with the command *ionic start myApp template* where myApp is the name of your app, and template is the tpye of setup you would like (various options include 'blank', 'tabs', and 'sidemenu'). Ionic will then populate all necessary build files and dependencies including cordova plugins.</p>
<h2>Add a Platform</h2>
<p>Ionic curently supports two main platforms for mobile development: iOS, and Android. To begin, for example, with iOS, tpye *ionic add platform ios* in the command line.
<h2>Build and view a Project</h2>
<p>To set up a build before running your application, *ionic build iOS* is the perfect command. Afterwards, you can perform *ionic serve* to display your application to the browser. To see it in a native view (with iOS & Android side-by-side) run *ionic serve --lab*</p>
<h2>Sharing your Project</h2>
<p>Want to see what your project looks like (say, on an iOS device) but don't want to pay the $99 for an Apple developer account? No problem, use *ionic upload* to send your project straight to Ionic and you can see it live on your phone through the ionic view app (downloaded from the app store). Friends, family, or maybe collabroators who want to also check it out will need to sign up for an ionic account and also download the ionic view app in order to view it (in addition they will need the app id associated with the project).
<h2>Reflections</h2>
<p>Ionic is a great resource, with a couple catches:</p>
* It does not play that nice with Angular ($scope issues).
* Getting a fully-functional iOS emulate requires a hooks dir workaround.
* Not as smooth when running as a true mobile app.



<p>Overall, though, it is a very beneficial tool for web developers who want to showcase the possibilities of a mobile experience either with pre-existing content (their own website) or a standalone functioning app.</p>
