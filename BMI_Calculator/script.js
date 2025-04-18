const form = document.querySelector("form");



// click function
form.addEventListener('submit', function(e){
   
    e.preventDefault();

    const height = parseInt(document.querySelector("#height").value);
    const weight = parseInt(document.querySelector("#weight").value);
    const resultsText = document.querySelector('#results h4')
    const results = document.querySelector('#results')

    

    if((height === '' || height <= 0 || isNaN(height))){

        resultsText.innerHTML = "Please give a valid Height and Weight";
        
    }

    else if((weight === '' || weight <= 0 || isNaN(weight))){

        resultsText.innerHTML = "Please give a valid Height and Weight";
        
    }

    else{
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        
        if(bmi < 18.6){
            results.style.backgroundColor = "yellow";
            results.style.color = "black";
            resultsText.innerHTML = `You are under weight \n ${bmi}`;
        }

        else if((bmi >= 18.6) && (bmi <= 24.9) ){
            results.style.backgroundColor = "green";
            results.style.color = "white";
            resultsText.innerHTML = `You are normal \n ${bmi}`;
        }

        else if((bmi > 24.9) && (bmi <= 40) ){
            results.style.backgroundColor = "orange";
            results.style.color = "white";
            resultsText.innerHTML = `You are overweight \n ${bmi}`;
        }

        else{

            results.innerHTML = `<h4>Sorry, you are experiencing obesity \n ${bmi}</h4>`;
            results.style.color = "white";
            results.style.backgroundColor = "red";
            
        }
    }

});



// reset code
function resetResults() {
    results.innerHTML = "<h4>Try your BMI.</h4>";
    results.style.backgroundColor = "";
}

height.addEventListener("input", resetResults);
weight.addEventListener("input", resetResults);

