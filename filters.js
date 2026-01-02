//Create filters for movies from 
//      -newest release to oldest
//      -oldest to newest

//Filter by rating 
//      -IMDB best to worst
//      -Rotten Tomatoes best to worst

// parse the ratings from imdb rotten tomatoes and the release date to make them sortable as numbers when defining filterMovies(event)

// Keep and render state-- store the movies in currentMovies then use renderMovies(list) to update .movie__list

function getIMDB(m) {
    const v = m.Ratings?.find(r => r.Source === "Internet Movie Database")?.value || "0";
    const num = parseFloat(String(v).split("/")[0]);
    return isNaN(num) ? 0 : num;
}

