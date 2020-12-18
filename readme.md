#Read Me
#Project Tracker
##Author: Keith Blackwelder
##Description
Project Tracker, is a app to help with productivity on any project. Mainly focused around tracking development projects like building web apps and websites.
There will be two sections of this app that pertain to the user.
The front-end and the back-end. The front-end is a main overview of the master and sub-master projects that have been created inside the project tracker. A user not being signed in means that this view is all they will see.
On the back-end, we will have an admin panel, where the manager/admin will be able to create new users and assign them permissions.
Once the admin creates and assigns permissions to a user, that user will then beable to go to the front-end of the project tracker and click sign in.
Now the user will be presented with a sign in form and will be able to pass to the back-end of there dashboard in the Project Tracker.
User Permission
manager: A manager will have full permissions, and will be able to create users, create master projects, create sub-projects and perform all of the smaller actions inside of these two master and sub-master projects.
Developer: A developer will be able to create, read, update and delete any project they are assigned to.
All master and sub-master projects will have the options listed below.
Inside of each project will be actions you can take like creating new issues, writing your todo's, uploading documentation, and writing daily project notes to help keep track of the small things.
You will also be able to see things like time spent on that project, who is the creator, requestor, watchers, and the person or persons who are in charge of the project.

## Development and Build
I will be using React to build the front-end of the app.
I will be using XMLHttpRequest in js to call on the api.
I will be using a PHP rest api connect to the project tracker MySQL database to query data.


# Installation
Running npm install will install all the dependcies.
Running npm start will start the development server.
The current build will be located in the root of the project tracker client directory.
Running npm build will provide you will a build version update that you create if you decide to edit and run build.

