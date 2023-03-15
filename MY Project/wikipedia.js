const wikipedia = async(searchText) =>{
    const url = `https://en.wikipedia.org/w/api.php?format=json&action=query&origin=*&prop=extracts&exintro&explaintext&redirects=1&titles=${searchText}`
    const res = await fetch(url);
    const data = await res.json();
    console.log(data.query.pages);
    // if(data.Response == "True") DisplayWikipediaData(data.query.pages);
}
// wikipedia("chatGPT");