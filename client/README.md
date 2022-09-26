# GeoPlanner App

Welcome to `GeoPlanner!` A geolocation based event planning app that uses the Google Places API to find fun and interesting locations in your area for your next adventure!

## Find the app on Heroku:
https://nameless-dawn-04634.herokuapp.com/

## Usage

### `Login`

Existing users can login to the app from the login screen by providing the appropriate credentials and clicking the `Login` button.

### `Signup`

New users can signup via the login screen by clicking the `Sign Up` button and providing their desired username and password.

![Alt text](/client/public/images/readme/readme-login.png?raw=true "Login Page")

**Note: Usernames must be unique.** <br/>
**Note: Password and password confirmation must match.** <br/>

### `Account Management`

User's can click the account icon in the dashboard to view their account page. On this page, a user can update their username and password and upload a profile avatar to the database.

![Alt text](/client/public/images/readme/readme-account.png?raw=true "Account Page")

**Note: Usernames and avatars will show above created event markers on the map to all other friends in the area.**

### `Friends and Users List`

Users of the app can search for a known username using the provided searchbox. If the username exists, the user will show up under the `All Users` tab. Click the add icon to move the user from the `All Users` tab to the `Requested Friends` tab and send the user a friend request. Users who accept will show up under the `My Friends` tab and their events (if any) will pop up on the map.

![Alt text](/client/public/images/readme/readme-friendslist.png?raw=true "Friendslist")

### `Dynamic map powered by` [react-google-maps](https://www.npmjs.com/package/react-google-maps)

The dynamic Google map automatically grabs the user's location via Google's geolocation service. Users can then use the provided searchbox to search the area for places. Click the red marker pin of the desired place to view the address, rating and photos (if provided), then click the `Create Event` button to redirect to the event creation page.

The map shows nearby event markers and overlays for the user as well as for any friend's the user may have with events in the area.

![Alt text](/client/public/images/readme/readme-map.png?raw=true "Map Page")

**Note: Markers and overlays are color coded as follows:**

🟩 Your Events <br/>
🟦 Friends' Events <br/>
🟥 Search Results <br/>

### `Event Creation`

Once a location has been chosen on the map, the provided event form will be auto-filled with the name, address and rating of the desired place. A static Google map with a marker showing the place's location is also provided. To complete the form, simply fill in a title, date, time and a brief description of the event you are hosting. Click the "Create Event" button when finished to post the event to your events list.

![Alt text](/client/public/images/readme/readme-create.png?raw=true "Event Form")

**Note: Your eventslist is private, but any friends can view your events via the App's map if they are nearby**

### `Events List`

The events page shows a user all of their current and past events via event cards. Each card shows a snapshot of the event's title, date and a mini map with a marker over the event's location. A user can enter a date and text value into the searchbar to filter results. Text value searches by event title and/or address. To view more information about the event, click the event card to redirect to the event's page. 

![Alt text](/client/public/images/readme/readme-eventlist-1.png?raw=true "Events List")

To view more information about the event, click the event card to redirect to the event's page. 

![Alt text](/client/public/images/readme/readme-eventlist-2.png?raw=true "Events List")

**Note: All events owned by the user can be deleted. User's can not delete other user's events.**

## Cloudinary

Avatar upload is handled by [Cloudinary Platform](https://cloudinary.com/home-92022).

## Image Credits

All images used in the creation of this app are provided by users of [pixabay](https://pixabay.com/) and are creative commons license CC0 “No Rights Reserved” (free for commercial use).

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).