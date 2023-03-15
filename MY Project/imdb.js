const imdb = async(searchText) =>{
    const url = `https://omdbapi.com/?s=${searchText}&page=1&apikey=fc1fef96`;
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    // if(data.Response == "True") displayMovieList(data.Search);
}
imdb("rrr")