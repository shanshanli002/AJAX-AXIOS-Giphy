async function newGIF(q){
    const api_key = 'w1E8yLlyhGem83FCND7e0Px9VIPJJgaJ';
    const result = await axios.get('http://api.giphy.com/v1/gifs/search', {params:{q, api_key}});
    let randomGif = Math.floor(Math.random() * result.data.data.length);
    if(result.data.data.length < 1){
        alert("no gif with that search");
    }else{
        return (result.data.data[randomGif].images.downsized.url);
    }
}

async function getGIF(){
    const userInput = $('#userinput');
    let result = await newGIF(userInput.val());
    let gifList = $('#gifs');
    let gifListLi = $('<li>').html(`<img src=${result} id='gif-size'></img>`);
    gifList.append(gifListLi);
    userInput.val("");
}

$('#search').on('click', function(event){
    event.preventDefault();
    getGIF();
});

$('#delete').on('click', function(event){
    event.preventDefault();
    $('li').remove();
});

