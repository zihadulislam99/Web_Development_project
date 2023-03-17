const imdb = async(searchText) =>{
    const url = `https://omdbapi.com/?s=${searchText}&page=1&apikey=fc1fef96`;
    const res = await fetch(url);
    const data = await res.json();
    console.log(data.Search[0]);
    // if(data.Response == "True") DisplayMovieList(data.Search);
}
// imdb("rrr")

const imdbid = async(imdbid) =>{
    const url = `http://www.omdbapi.com/?i=${imdbid}&apikey=fc1fef96`;
    const res = await fetch(url);
    const data = await res.json();
    paragraph(data)
    // if(data.Response == "True") paragraph(data);
}
const paragraph = (paragraphdata) =>{
    // console.log(`
    // ${paragraphdata.Title} This is a ${paragraphdata.Type}. 
    // This ${paragraphdata.Type} was released on ${paragraphdata.Released}. 
    // This ${paragraphdata.Type}'s runtime is ${paragraphdata.Runtime}. 
    // This ${paragraphdata.Type} genre is ${paragraphdata.Genre}.
    // This ${paragraphdata.Type}'s IMDB rating is ${paragraphdata.imdbRating}/10. 
    // This ${paragraphdata.Type} Votes ${paragraphdata.imdbVotes} people.
    // This ${paragraphdata.Type}'s language is ${paragraphdata.Language}. 
    // This ${paragraphdata.Type}'s Box Office collection is ${paragraphdata.BoxOffice}. 
    // `)

    const Movie = (`
    ${paragraphdata.Poster}
    "${paragraphdata.Title}" is an ${paragraphdata.Genre}-packed ${paragraphdata.Type} that was released on ${paragraphdata.Released}. 
    The ${paragraphdata.Type} has a runtime of ${paragraphdata.Runtime}utes and falls under the genre of ${paragraphdata.Genre}. 
    The ${paragraphdata.Type} has been well-received by viewers and has a decent IMDb rating of ${paragraphdata.Ratings[0].Value}, based on votes from ${paragraphdata.imdbVotes} people.

    The ${paragraphdata.Type} has been released in a dual language format, with ${paragraphdata.Language} being the available language options. 
    Despite being a recent release, "RRR" has managed to do well at the Box Office, having collected ${paragraphdata.BoxOffice} so far.

    To summarize, "${paragraphdata.Title}" is an engaging ${paragraphdata.Type} that has captured the attention of viewers across languages. 
    With its blend of ${paragraphdata.Genre}, the ${paragraphdata.Type} has managed to create a niche for itself in the entertainment industry.
    `)
    console.log(Movie)
};
imdbid("tt8178634")