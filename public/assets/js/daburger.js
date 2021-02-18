console.log("i am in the daburger file");

function devourIt (event) { 
    event.preventDefault()
    console.log(event.target.getAttribute('devouredbtn-data'));
    const data = {
        burger_name: event.target.getAttribute('devouredbtn-data'),
        devoured: 1
    };

    fetch('/', {
        method: 'PUT', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            location.reload();
        })
        .catch((error) => {
            console.log('Error:', error);
        });    
}