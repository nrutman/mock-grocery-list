# mock-grocery-list
A mock Angular application that mimics a grocery list. This project is intended as an assessment tool and exercise when talking with other developers, and is not a legitimate application.

## Tasks to Complete
The following tasks should be completed to augment the application and progress through various development tasks.

### 1. Setup the Application
Clone the repository and run the following command:
```
npm start
```

This will download all the node dependencies and start the simple HTTP server that will serve files from the project. Once the server has launched, it will display output something like:

```
Starting up http-server, serving ./public
Available on:
  http:127.0.0.1:8080
  http:192.168.1.4:8080
Hit CTRL-C to stop the server
```

Access the project in a browser by going to http://127.0.0.1:8080.

To actively compile HTML/JS/SASS files as you develop, open a second terminal and run the following command:

```
npm run build watch
```

### 2. Hook Up a Dynamic List
Upon installation, the grocery list is completely static. Enable a dynamic list that stores multiple items and their associated data. This should include:

1. Dynamic data entry for a row in the list.
2. The ability to add as many rows as the user desires.
3. The ability to delete a row.
4. (Bonus!) The ability to rearrange rows via drag-and-drop.

### 3. Allow Custom List Title
Give the user some control to update the list title (which currently now displays as `My List`). It should be easy and intuitive.

### 4. Write Test Coverage
*** NOTE: Karma needs to be included in the package ***
Write unit tests for controllers and services to verify that they are working properly.

### 5. Hook Up New States
Create the state and basic scaffolding for the `Past Lists` link in the navigation bar.

### 6. Discuss Backend Model
This project has no backend or database to drive data, sessions/authentication, etc. Discuss how such an API could exist: what endpoints and data tables would be needed, etc.
