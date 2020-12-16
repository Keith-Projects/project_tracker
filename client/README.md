# Project Tracker
##Author: Keith Blackwelder

#Description
The Project Tracker Application, is to help a person or company keep track of new or on going projects. This will be mainly for personal use and will be designed more towards programming projects.

# App Work Flow
The work flow of the app starts with a user creating an account.
Once the account is created, the user will then be given the option to either go to the sign in page, or create another user.
Once the user has signed in, he or she will be presented with a dashboard.
Here the user will have a navigation panel, a header where the title of the user is located, a main area where the user will see the current projects, and a footer to hold informational links and the copy right.

# Components
all forms will be placed in a class component in order to handle there own state.
The main app will hold the navigation component, the header component, the mainarea component, and the footer component.
Each of these components will hold there own set of sub set components.
## Navigation
For the navigation, we will have a modern navigation bar, with the brand, icon to open and close the nav whenever the screen is smaller on the device being used, and the navigation links will be placed to the right of the screen.
The link for the brand name, and the button for the open and close of the nav, will be apart of the navigation component.
The div that holds the ul list will also be apart of the navigation component.
The ul that will house the nav links, will be in its own component, making it easy to add and remove links.

## Header Component
The header component, will hold the name of the page, and a link to create a new project.
For now, the header component will be its own and will not hold any child components.

## Main Component
The main component, will hold the selected component that was called by the user.
Possible components include: MainProjects, SubProjects, ProjectInformation, Issues, Todos, Documentation, DailyNotes.
For now, this is a start and will be added to as the project grows.

## Footer
The footer component, will hold the informational links as well as the copy right for the application.
this component will have an ul list that will hold the informational links.
The copy right will be apart of the footer component.
The links will be brought in as a child component making it easier to add or remove the links as nessisary.

For now this will be where I start and as the project grows I will update this readme file.