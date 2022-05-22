//function that retrieves a random GIF based on user input
async function newGIF(q){
    //api key from creating new user
    const api_key = 'w1E8yLlyhGem83FCND7e0Px9VIPJJgaJ';
    //q = term, api_key = key
    const result = await axios.get('http://api.giphy.com/v1/gifs/search', {params:{q, api_key}});
    //get a random number that represents an index for the returned array of GIFs
    let randomGif = Math.floor(Math.random() * result.data.data.length);
    //if the data array is less than 1, there were no GIFs found
    if(result.data.data.length < 1){
        alert("no gif with that search");
    }else{
        //returns a string with url info
        return (result.data.data[randomGif].images.downsized.url);
    }
}
//function to create a new GIF based on user input
async function getGIF(){
    const userInput = $('#userinput');
    let result = await newGIF(userInput.val());
    //retrieve using id
    let gifList = $('#gifs');
    //creating a new li component 
    let gifListLi = $('<li>').html(`<img src=${result} id='gif-size'></img>`);
    //gifList ul gets a new child gifListLi
    gifList.append(gifListLi);
    //reset form input to empty string
    userInput.val("");
}
//event listener to populate gifs
$('#search').on('click', function(event){
    event.preventDefault();
    getGIF();
});
//evente listener to remove all gifs
$('#delete').on('click', function(event){
    event.preventDefault();
    $('li').remove();
});

