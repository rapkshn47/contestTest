const api = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false';

fetch(api)
.then((response) => response.json())
.then((data) => {
    renderTable(data);
})
.catch((error)=>{
    console.error("Error fetching data using .then");
});

async function fetchData(){
    try{
        const response = await fetch(api);
        const data = await response.json();
        renderTable(data);
    }catch(error){
        console.log("Error fetching data using async/await:",error);
    }
}
fetchData();

function renderTable(data){
    const myTable = document.getElementById('myTable');

    data.forEach((rowData)=>{
        const {name, id, image, symbol, current_price, total_volume } = rowData;

        const row = document.createElement('tr');
        const nameCell = document.createElement('td');
        nameCell.textContent = name;
        row.appendChild(nameCell);

        const idCell = document.createElement('td');
        nameCell.textContent = id;
        row.appendChild(idCell);

        const imageCell = document.createElement('td');
        const imageElement = document.createElement('img');
        imageElement.src = image;
        imageElement.alt = name;
        imageCell.appendChild(imageElement);
        row.appendChild(imageCell);

        const symbolCell = document.createElement('td');
        symbolCell.textContent = symbol;
        row.appendChild(symbolCell);

        const currretCell = document.createElement('td');
        currretCell.textContent = current_price;
        row.appendChild(currretCell);

        const totalCell = document.createElement('td');
        totalCell.textContent = total_volume;
        row.appendChild(totalCell);

        rowData.appendChild(row);
    })
}