document.addEventListener('DOMContentLoaded',function() {
    fetch('http://127.0.0.1:5000/data')
    .then(response=>response.json())
    .then(data=>{
        let tableBody=document.getElementById("table").getElementsByTagName('tbody')[0];
        tableBody.innerHTML=''; // Clear the existing data
        // Filter and preprocess data
        const gdpData=data.filter(item=>item.Category==='GDP'); // GDP storing variable
        const popData=data.filter(item=>item.Category==='Population'); // Population storing variable
        // Create set (unique list) of countries, similarly to Python
        const countries=[...new Set([...gdpData.map(item=>item.Country),...popData.map(item=>item.Country)])];
        // Iterate through each country
        countries.forEach(country => {
            // Find GDP data for the country
            const gdpItem=gdpData.find(item=>item.Country===country);
            // Find population data for the country
            const popItem=popData.find(item=>item.Country===country);
            // Create rows for each table
            const row=tableBody.insertRow();
            // Insert cells for each row
            const countryCell=row.insertCell(0);
            const gdpLatestValueCell=row.insertCell(1);
            const popLatestValueCell=row.insertCell(2);
            const gdpYearEnd1Cell=row.insertCell(3);
            const popYearEnd1Cell=row.insertCell(4);
            const gdpYearEnd2Cell=row.insertCell(5); 
            const popYearEnd2Cell=row.insertCell(6);
            const gdpYearEnd3Cell=row.insertCell(7);
            const popYearEnd3Cell=row.insertCell(8);
            // Insert data into cells
            countryCell.textContent=country;
            countryCell.style.fontWeight='bold'; // Bold the country name
            gdpLatestValueCell.textContent=gdpItem?gdpItem.LatestValue:'N/A';
            popLatestValueCell.textContent=popItem?popItem.LatestValue:'N/A';   
            gdpYearEnd1Cell.textContent=gdpItem?gdpItem.YearEnd:'N/A';
            popYearEnd1Cell.textContent=popItem?popItem.YearEnd:'N/A';
            gdpYearEnd2Cell.textContent=gdpItem?gdpItem.YearEnd2:'N/A';
            popYearEnd2Cell.textContent=popItem?popItem.YearEnd2:'N/A';
            gdpYearEnd3Cell.textContent=gdpItem?gdpItem.YearEnd3:'N/A';
            popYearEnd3Cell.textContent=popItem?popItem.YearEnd3:'N/A';
        });
    })
    // Catch errors with grace
    .catch(error=>console.error('Error fetching data:',error));
});
