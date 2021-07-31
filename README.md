# contacts-app

## Steps to run the project:

1. Make sure you have nodeJS installed.
2. Clone the project to your local repository.
3. Open a terminal in the local repository.
4. Type the following in the terminal and press enter:
   ```
   npm install
   ```
   It'll take some time to install all the libraries and dependencies.
5. Once the dependencies are installed, type the following and press enter:
   ```
   ng serve --open
   ```
   This will compile the code and open up the project on localhost:4200 in your default browser.
   
## Screenshots from the project
**The project, once run, should look like this:**

   ![image](https://user-images.githubusercontent.com/22445332/127722829-e13113a5-43b5-4b01-a71e-1e0b5bad4042.png)

**Click on a contact to view its details:**

   ![image](https://user-images.githubusercontent.com/22445332/127722889-28a9862d-d7b7-4888-99ba-20535f7d3829.png)

## Where is the data coming from?
Since there wasn't a service to use for fetching the data, stubs are used, which can be found in the `contacts-service.service.ts` file.

## Search functionality
Contacts can be searched on the basis of name.

![image](https://user-images.githubusercontent.com/22445332/127723036-c8a4b5a5-9b1c-44bf-869f-e525c1abb51e.png)
