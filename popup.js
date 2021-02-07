async function getToken() {
  const url = `https://api.cryptorank.io/v0/coins/the-graph/tickers`;
  const response = await fetch(url);
  const result = await response.json();

  const arr__USD_BTC_ETH = result.data.filter((el) => {
    if (el.id === 98147 || el.id === 98515 || el.id === 98136) {
      return el;
    }
  });

  const container = document.querySelector('.flex-container');

  arr__USD_BTC_ETH.reverse().forEach((el) => {
    const blockPrice = document.createElement('div');
    blockPrice.classList.add('flex');
    blockPrice.innerHTML = `<div class="price">${el.to} ${el.ask}</div>`;
    container.append(blockPrice);
  });
  console.log(arr__USD_BTC_ETH);
}

getToken();
