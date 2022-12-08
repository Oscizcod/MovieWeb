const APILINK = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=2288cab1d38dcda7ca563d47a3d69697&page=1";
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=2288cab1d38dcda7ca563d47a3d69697&query=";

const main = document.querySelector("#section");
const form = document.querySelector("#form");
const search = document.querySelector("#query");

returnMovies(APILINK);
 
function returnMovies(url) {
    fetch(url).then(res => res.json())
    .then(function(data){
        console.log(data.results);
        data.results.forEach(element => {
            const div_card = document.createElement('div');
            div_card.setAttribute('class', 'card');

            const div_row = document.createElement('div');
            div_row.setAttribute('class', 'row')

            const div_column = document.createElement('div');
            div_column.setAttribute('class', 'column');

            const image = document.createElement('img');
            image.setAttribute('class', 'thumbnail');
            image.setAttribute('id', 'image');

            const title = document.createElement('h3');
            title.setAttribute('id', 'title');

            const center = document.createElement('center');
            
            const div_caption = document.createElement('div');
            div_caption.setAttribute('class', 'caption');

            const anchor = document.createElement('a');
            anchor.setAttribute('href', '"https://www.freepik.com/free-psd/creative-film-poster-template_33417395.htm#query=movie%20poster&position=2&from_view=keyword"');

            title.innerHTML = `${element.title}`;
            image.src = IMG_PATH + element.poster_path;

            center.appendChild(image);
            div_caption.appendChild(anchor);
            div_card.appendChild(center);
            div_card.appendChild(title);
            div_card.appendChild(div_caption);
            div_column.appendChild(div_card);
            div_row.appendChild(div_column);
            
            main.appendChild(div_row);
        });
    });
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    main.innerHTML = ''

    const searchItem = search.value;

    if (searchItem) {
        returnMovies(SEARCHAPI + searchItem);
        search.value = '';
    }
});