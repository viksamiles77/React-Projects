## usePopcorn App

usePopcorn is a React application that allows users to search for movies, view details, and manage a list of watched movies. The app fetches data from the OMDB API and provides an intuitive interface for movie enthusiasts to keep track of their watched movies and ratings.

## Features

- Search Movies: Users can search for movies by title, and the app displays a list of matching results from the OMDB database.
- View Movie Details: Users can click on a movie to view detailed information, including the title, year, runtime, genre, director, and a brief plot summary.
- Rate and Add to Watched List: Users can rate movies and add them to their watched list, where the app tracks the IMDb rating, user rating, and runtime.
- Manage Watched Movies: Users can view a summary of all watched movies, including average IMDb ratings, user ratings, and total runtime. Users can also remove movies from the watched list.

## Technologies Used

- React
- JavaScript
- CSS
- OMDB API
  > You need to generate an API key for your self [here](https://omdbapi.com/apikey.aspx) and put it in the code (KEY variable).

## Custom Hooks

- useMovies: Fetches movie data from the OMDB API based on the user's search query.
- useLocalStorageState: Manages the watched movies list using the browser's local storage.
- useKey: Handles keyboard events, such as closing the movie details view with the Escape key or focusing the search input with the Enter key.
