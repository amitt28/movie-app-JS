

const api = 'http://www.omdbapi.com/?i=tt3896198&apikey=e932253&t=';
let notFound = document.getElementById('notFound');
let Found = document.getElementById('Found');


function searchMovie(){

let movieName = document.getElementById('movieName');
let query = api + movieName.value;
fetch(query).then((data)=>{
    return data.json()
}).then((data)=>{
    console.log(data);
    if(data.Error){
        notFound.classList.remove('d-none');
        Found.classList.add('d-none')
        document.getElementById('nf-name').innerText = movieName.value;
    }
    else{
        notFound.classList.add('d-none');
        Found.classList.remove('d-none');
        document.getElementById('Title').innerText = data.Title;
        document.getElementById('Poster').src = data.Poster;
        document.getElementById('Released').innerText = data.Released;
        document.getElementById('Rated').innerText = data.Rated;
        document.getElementById('Actors').innerText = data.Actors;
        document.getElementById('Awards').innerText = data.Awards;
        document.getElementById('Ratings').innerText = data.imdbRating;
        document.getElementById('Language').innerText = data.Language;
        document.getElementById('desc').innerText = data.Plot;

        
    }
})


}