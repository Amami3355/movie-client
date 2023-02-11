export async function fetchTopRatedMovies() {
  const results = await fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=41f24e687319483950191eafd27835f1&page=1&language=fr-FR")
    .then(response => response.json())
    .catch(
      error => console.log(error)
    );
  return results;
}

export async function fetchTrendingMovies() {
  try {
    const response = await fetch("https://api.themoviedb.org/3/trending/movie/week?api_key=41f24e687319483950191eafd27835f1&page=2&language=fr-FR")
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function fetchFrenshMovies() {
  const url = "https://api.themoviedb.org/3/movie/popular?api_key=41f24e687319483950191eafd27835f1&language=fr&with_original_language=fr&adulte=false";
  try {
    const response = await fetch(url)
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}


export async function getActionMovies() {
  const url = "https://api.themoviedb.org/3/discover/movie?api_key=41f24e687319483950191eafd27835f1&with_genres=28";
  const results = await fetch(url)
    .then(response => response.json())
    .catch(
      error => console.log(error)
    );
  return results;
}

export async function getAdventureMovies() {
  const url = "https://api.themoviedb.org/3/discover/movie?api_key=41f24e687319483950191eafd27835f1&with_genres=12";
  const results = await fetch(url)
    .then(response => response.json())
    .catch(
      error => console.log(error)
    );
  return results;
}

export async function getPropositions(keyword) {
  const url = "https://api.themoviedb.org/3/search/movie?api_key=41f24e687319483950191eafd27835f1&query=" + keyword + "&language=fr-FR";
  const results = await fetch(url)
    .then(response => response.json())
    .catch(
      error => console.log(error)
    );
  return results;
}

export async function getMovieById(id) {
  const url = "https://api.themoviedb.org/3/movie/" + id + "?api_key=41f24e687319483950191eafd27835f1&language=fr-FR&append_to_response=credits";
  const results = await fetch(url)
    .then(response => response.json())
    .catch(
      error => console.log(error)
    );
  console.log(results)
  return results;
}