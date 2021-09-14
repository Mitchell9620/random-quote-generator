
var currentQuote = '',
currentAuthor = '';
var colors = [
    '#16a085',
    '#27ae60',
    '#2c3e50',
    '#f39c12',
    '#e74c3c',
    '#9b59b6',
    '#FB6964',
    '#342224',
    '#472E32',
    '#BDBB99',
    '#77B1A9',
    '#73A857'
];


const request = new XMLHttpRequest();
const url = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';
request.open('GET', url);
request.onload = function(){
    data = JSON.parse(request.responseText);
    let randomQuote = getRandomQuotes(data);
    function getQuote(){
        currentQuote = randomQuote.quote;
        currentAuthor = randomQuote.author;
        $('#text').text(currentQuote)
        $('#author').text(currentAuthor)
        
    }
    getQuote();


    $('#new-quote').on('click', function() {
        let = newQuote = getRandomQuotes(data);
        $('#text').text(newQuote.quote)
        $('#author').text(newQuote.author)
    });
};
request.send();

function getRandomQuotes(data){
    return data.quotes[Math.floor(Math.random()*data.quotes.length)]
};




   
