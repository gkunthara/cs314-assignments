$( document ).ready(function() {
    getData();
  });


function getData() {

    fetch('https://api.coinmarketcap.com/v2/ticker/?limit=10')
    .then(
      function(response) {
        if (response.status !== 200) {
          console.log('Looks like there was a problem. Status Code: ' +
            response.status);
          return;
        }
  
        // Examine the text in the response
        response.json().then(function(data) {
          $.each(data, function(idx, el){
            $.each(el, function(idx, item){
                displayCurrency(item)
              })
          })
        });
      }
    )
    .catch(function(err) {
      console.log('Fetch Error :-S', err);
    });
    }

let displayCurrency = (coin) => {

    $('#prices').append($(`
    <div class="price-container space">
        <h1 class="coin-style">${coin.name}</h1>
        <h1 class="coin-style">${coin.symbol}</h1>
        <h1 class="coin-style">${coin.quotes.USD.price}</h1>
        <h1 class="coin-style">${coin.quotes.USD.market_cap}</h1>
        <br>
    </div>
`));
}

function globalRequest(){

    fetch('https://api.coinmarketcap.com/v2/global/')
    .then(
      function(response) {
        if (response.status !== 200) {
          console.log('Looks like there was a problem. Status Code: ' +
            response.status);
          return;
        }
  
        // Examine the text in the response
        response.json().then(function(data) {
          console.log(data)
          displayGlobal(data)
        });
      }
    )
    .catch(function(err) {
      console.log('Fetch Error :-S', err);
    });
}


let displayGlobal = (data) => {

    $('#global').append($(`
    <div class="price-container space coin-style">
                <h1 class="bold"># of currencies</h1>
                <h1 class="bold"># of Markets</h1>
                <h1 class="bold">Total Marketcap (USD)</h1>
                <h1 class="bold">BTC Dominance (%)</h1>
    </div>
    <div class="price-container space">
        <h1 class="coin-style">${data.data.active_cryptocurrencies}</h1>
        <h1 class="coin-style">${data.data.active_markets}</h1>
        <h1 class="coin-style">${data.data.quotes.USD.total_market_cap}</h1>
        <h1 class="coin-style">${data.data.bitcoin_percentage_of_market_cap}</h1>
        <br>
    </div>
`));
}