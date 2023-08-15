var countrySelect = document.getElementById('countrySelect');
var option;
let arr = [];
var cid;


countrySelect.addEventListener('change', function handleChange(event) {
    console.log(event.target.value); 
    cid = event.target.value;
    updateCases();
  });

let data;
fetch('https://corona.lmao.ninja/v2/countries')
    .then(response => response.json())
    .then(apiData => {

        data = apiData;
        const countries = data.country;
        
        for(let i=0; i<data.length; i++) {
            var country = data[i].country;
            option = document.createElement('option');
            option.value = country;
            option.textContent = country;
            countrySelect.appendChild(option);
            arr.push(data[i].country);
        }
        console.log(arr);

    })
    .catch(error => console.error('Error fetching data:', error));


    function updateCases() {

        let idx = arr.indexOf(cid);
        console.log(idx);

        let Api = "https://corona.lmao.ninja/v2/countries";
        fetch(Api)
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            console.log(data[idx]);
            console.log(data[idx].country + ' ' + data[idx].cases + ' ' + data[idx].deaths + ' ' + data[idx].active + ' '+ data[idx].recovered)
            document.getElementById("country_name").innerHTML = data[idx].country;
            document.getElementById("Total_Cases").innerHTML = data[idx].cases;
            document.getElementById("Total_Deaths").innerHTML = data[idx].deaths;
            document.getElementById("Active_Cases").innerHTML = data[idx].active;
            document.getElementById("Recovered_Cases").innerHTML = data[idx].recovered;
          });
        console.log(Api);
    }
    
    