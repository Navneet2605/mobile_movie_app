export const TMDB_CONFIG ={
    BASE_URL: 'https://api.themoviedb.org/3',
    API_KEY : process.env.EXPO_PUBLIC_MOVIE_API_KEY,
    headers:{
        accept:'application/json',
        Authorization: `Bearer ${process.env.EXPO_PUBLIC_MOVIE_API_KEY}`

    }
}


export const fetchMovies = async({query}:{query:string}) =>{
    const endpoint =query
    ?`${TMDB_CONFIG.BASE_URL}/search/movie?query=${encodeURIComponent(query)}`
    : `${TMDB_CONFIG.BASE_URL}/discover/movie?sort_bypopularity.desc`;
    const response = await fetch(endpoint, {
        method:'GET', 
        headers:TMDB_CONFIG.headers,

    });
    if(!response.ok){
        throw new Error("Failed to fetch movie");
    }

    const data = await response.json();
    return data.results;
}


// const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNjFlNDM1YWUxYzJlNDRlM2Y2NTdjYmYzOWIzZmY2YSIsIm5iZiI6MTc0OTA3MzYwMi4xNjMsInN1YiI6IjY4NDBiZWMyOTVlZDlkMTE3NzdiYjg5YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cRXIXX3YnngStOw8G4Lh9SkmEph1I0m8QNPHcJInOYw'
//   }
// };

// fetch(url, options)
//   .then(res => res.json())
//   .then(json => console.log(json))
//   .catch(err => console.error(err));

