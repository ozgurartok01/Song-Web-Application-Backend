
# Web Application Backend

This repository contains the backend code for our web application, designed to handle music-related functionalities. Below is an overview of the features and endpoints available.

# Features

This section provides an overview of the key features available in the web application.

## User Authentication
- **Sign Up & Log In**: Users can sign up and log in to access personalized features.

## Song Management
- **Add Song**: Users can add new songs to the website.
- **View Songs**: All users can view and access the list of songs available on the website.
- **Edit Song**: Authorized users can edit details of existing songs.
- **Delete Song**: Songs, albums, and performers can be removed from the website by authorized users in a cascading manner.

## Song Interaction
- **Like a Song**: Users can like a song, adding it to their personalized list of liked songs.
- **Rate a Song**: Users can rate songs, albums, and performers, influencing recommendations and analytics.
- **User List**: Each user has a list of liked songs, visible after authentication.
- **Song Recommendations**: Personalized song recommendations based on user ratings and preferences.

## Album and Performer Interaction
- **Rate Albums and Performers**: Users can rate albums and performers, contributing to the platform's recommendation system.

## User Relationships
- **Add Friend**: Users can add other users as friends, allowing for shared experiences and interactions.
- **View Friend List**: Users can view their friend list to manage and interact with added friends.

## Administrative Functions
- **Upload CSV File**: Admins can upload a CSV file to batch-add songs to the database.
- **Connect to External Database**: Admins can connect to external MongoDB databases for data migration or integration.

## User-Friendly Interface
- **Interactive Dashboard**: A user-friendly dashboard for easy navigation and access to various features.
- **Analytics and Statistics**: Users can view statistics and analytics based on their music preferences and interactions.

## Security and Privacy
- **Data Protection**: Strong security measures to protect user data and privacy.

Note: These features are subject to change based on ongoing development and updates to the application. Ensure to keep this section updated with the latest functionalities and improvements.


## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

- Ensure you have [Node.js](https://nodejs.org/) installed on your system.

### Installation

1. Clone the repository:
   ```sh
   git clone https://your-repo-link.git
   ```
2. Navigate to the cloned directory and install NPM packages:
   ```sh
   npm install
   ```

### Usage

Start the server:
```sh
npm start
```


## NEWLY ADDED API'S


Add a New Song
URL: /add-song
Method: POST
Authentication Required: Yes
Description: This endpoint is used to add a new song to the system. It handles the creation of performers and albums if they do not already exist, and associates them with the new song.

Rate a Song
URL: /rate-song/:songId
Method: PUT
Authentication Required: Yes
Description: This endpoint allows users to rate a song. It updates the song's rating in the system.

Delete Performer, Song, Album in cascading way.

## Recommendation System

### `recommendSongs`
- **Description**: This function generates song recommendations for a user based on their and other users' ratings.
- **Logic**: It first identifies songs highly rated by the current user, then finds other users with similar tastes, and finally recommends songs highly rated by these users which the current user hasn't rated yet.
- **Endpoint**: `GET /api/recommendations`

## Musical Analysis

### `analyzeUserPreferences`
- **Description**: Analyzes and presents user's musical preferences in various formats like statistics, charts, etc.
- **Functionality**:
  - Users can filter and view their liked songs, albums, and performers based on different criteria such as genre, era, etc.
  - Example filters include listing favorite albums from the 90s or top songs added in the last six months.

## CSV File Uploading

### `postAddFile`
- **Description**: Allows batch uploading of song data via a CSV file.
- **Implementation**: The function reads a CSV file, extracts song information, and adds each song to the database using the `postAddSong` function.
- **Endpoint**: `POST /api/upload`
- **CSV Format**: The expected CSV format is `title;album;rating;performer;genre`.

## Enhanced Rating System

### Rating Enhancements
- **Description**: Enhanced the rating system to allow users to rate songs, albums, and performers.
- **Details**:
  - Users can provide ratings for each song individually.
  - Songs, albums, and performers have their own rating fields, which reflect user preferences.

### `RateSong`, `RateAlbum`, `RatePerformer`
- **Description**: These functions allow users to rate songs, albums, and performers respectively.
- **Endpoints**:
  - Rate a Song: `PUT /api/songs/rate/:songId`
  - Rate an Album: `PUT /api/albums/rate/:albumId`
  - Rate a Performer: `PUT /api/performers/rate/:performerId`
 
    ## User Friend System

### `addFriend`
- **Description**: Allows a logged-in user to add another user as a friend using the friend's email address.
- **Functionality**:
  - Users can add friends to their friend list by submitting the friend's email.
  - The system checks if the friend exists and if they are not already in the user's friend list before adding.
- **Endpoint**: `POST /api/user/add-friend`
- **Request Body**: Expected to contain `friendEmail`, which is the email of the user to be added as a friend.

### `listUserFriends`
- **Description**: Retrieves and lists all friends of the currently logged-in user.
- **Functionality**:
  - Fetches the friends list of the user based on their unique user ID.
  - Populates friend details like name and email from the User model.
- **Endpoint**: `GET /api/user/friends`

### `listAllUsers`
- **Description**: Lists all users in the database with friend status for the logged-in user.
- **Functionality**:
  - Fetches all users and marks whether each one is a friend of the current user.
  - Displays an 'Add Friend' button for users who are not yet friends with the current user.
- **Endpoint**: `GET /api/users`

Remember to replace these endpoint paths with the actual ones used in your application. Additionally, adjust the descriptions and functionalities according to the exact implementation and features of your system.


# Project API EndPoints

This section documents the API routes available in our web application.

## Song Routes

### General Song Operations
- `GET /`: Fetch all songs. Requires authentication.
- `GET /songs/:songId`: Get details of a specific song.
- `GET /recommendation`: Get song recommendations for the logged-in user. Requires authentication.
- `GET /rated-songs`: Get songs rated by the logged-in user. Requires authentication.
- `GET /getalbums`: Fetch all albums. Requires authentication.
- `GET /getperformers`: Fetch all performers. Requires authentication.
- `GET /getusers`: Fetch all users. Requires authentication.
- `GET /getusersfriends`: Fetch friends of the logged-in user. Requires authentication.

### Song Interaction
- `POST /like-song/:songId`: Like a song. Requires authentication.
- `PUT /rate-song/:songId`: Rate a song. Requires authentication.
- `POST /favorite-song-genre`: Get favorite songs by genre. Requires authentication.

### Album and Performer Interaction
- `PUT /rate-album/:albumId`: Rate an album. Requires authentication.
- `PUT /rate-performer/:performerId`: Rate a performer. Requires authentication.

### User Relationships
- `POST /addfriend`: Add a friend. Requires authentication.

## Admin Routes

### Song Management
- `POST /add-song`: Add a new song. Requires authentication.
- `DELETE /delete-song/:songId`: Delete a song. Requires authentication.
- `DELETE /delete-album/:albumId`: Delete an album. Requires authentication.
- `DELETE /delete-performer/:performerId`: Delete a performer. Requires authentication.

### File Upload and Database Connection
- `POST /add-file`: Upload a CSV file to add songs. Requires authentication.
- `POST /connect-database`: Connect to a user's external MongoDB for data transfer.

## Authentication Routes

### User Account Operations
- `PUT /signup`: Sign up a new user.
- `POST /login`: Log in a user.
- `GET /getusers`: Fetch all users. Used for administrative purposes.

Note: The above route paths are placeholders and should be replaced with actual paths as per your application's implementation. Adjust the descriptions and details to match your specific functionality.



