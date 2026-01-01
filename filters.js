//Create filters for movies from 
//      -newest release to oldest
//      -oldest to newest

//Filter by rating 
//      -IMDB best to worst
//      -Rotten Tomatoes best to worst

function filter() {

       if (filter === 'IMDB_High_To_Low') {
           movies.sort((a, b) => b.imdbRating - a.imdbRating)
        }
        else if (filter === 'IMDB_Low_To_High') {
            movies.sort((a, b) => a.imdbRating - b.imdbRating)
        }
        else if (filter === "RT_High_To_Low") {
            movies.sort((a, b) => b.rottenTomatoesRating - a.rottenTomatoesRating)
        }
        else if (filter === "RT_Low_To_High") {
            movies.sort((a, b) => a.rottenTomatoesRating - b.rottenTomatoesRating)
        }
        else if (filter === "Release_Newest") {
            movies.sort((a, b) => a.release - b.release)
        }
        else if (filter === "Release_Oldest") {
            movies.sort((a, b) => b.release - a.release)
        }