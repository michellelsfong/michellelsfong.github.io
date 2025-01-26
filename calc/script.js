function calculate() {
        
    const { format } = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 0,
    });

    let income = takeHomePay.value;
    let needs = income*0.5;
    let wants = income*0.3;
    let savings = income*0.2;

    budgetNeeds.innerHTML = `Needs ${format(needs)}`;
    budgetWants.innerHTML = `Wants ${format(wants)}`;
    budgetSavings.innerHTML = `Savings ${format(savings)}`;

    let income25= income*0.25;
    let income30= income*0.30;

    housingLow.innerHTML = `25% is ${format(income25)}`;
    housingLowPoint1.innerHTML = `${format(needs-income25)} is left for the rest of your needs (utilities, groceries, transportation, etc.)`;
    housingLowPoint2.innerHTML = `${format(wants)} is left for your wants (restaurant, entertainment, vacations, etc.)`;
    housingLowPoint3.innerHTML = `${format(savings)} is left for your savings (unexpected loss, debts, retirement)`;

    housingHigh.innerHTML = `30% is ${format(income30)}`;
    housingHighPoint1.innerHTML = `${format(needs-income30)} is left for the rest of your needs (utilities, groceries, transportation, etc.)`;
    housingHighPoint2.innerHTML = `${format(wants)} is left for your wants (restaurant, entertainment, vacations, etc.)`;
    housingHighPoint3.innerHTML = `${format(savings)} is left for your savings (unexpected loss, debts, retirement)`;

    let savingsNeedsUnit = income*0.5;

    savings3.innerHTML = `For 3 months of needs, save ${format(savingsNeedsUnit*3)}`;
    savings3Time1.innerHTML = `This will take ${savingsNeedsUnit*3/(income*0.2)} months with your savings budget`;
    savings3Time2.innerHTML = `Or ${savingsNeedsUnit*3/(income*0.5)} months with your wants and savings budget`;
    savings3Time3.innerHTML = `Or ${savingsNeedsUnit*3/income} months if you are able to spend $0 a month`;

    savings6.innerHTML = `For 6 months of needs, save ${format(savingsNeedsUnit*6)}`;
    savings6Time1.innerHTML = `This will take ${savingsNeedsUnit*6/(income*0.2)} months with your savings budget`;
    savings6Time2.innerHTML = `Or ${savingsNeedsUnit*6/(income*0.5)} months with your wants and savings budget`;
    savings6Time3.innerHTML = `Or ${savingsNeedsUnit*6/income} months if you are able to spend $0 a month`;

    savings9.innerHTML = `For 9 months of needs, save ${format(savingsNeedsUnit*9)}`;
    savings9Time1.innerHTML = `This will take ${savingsNeedsUnit*9/(income*0.2)} months with your savings budget`;
    savings9Time2.innerHTML = `Or ${savingsNeedsUnit*9/(income*0.5)} months with your wants and savings budget`;
    savings9Time3.innerHTML = `Or ${savingsNeedsUnit*9/income} months if you are able to spend $0 a month`;

    // retireSavings.innerHTML = `The average savings account has an interest rate of 0.07%, one year of savings will grow into ${format(savings*12*12*0.0007*10)} in 10 years.`;
    // retire401k.innerHTML = `The average 401k account has an interest rate of 6%, one year of savings will grow into ${format(savings*12*12*0.06*10)} in 10 years.`;
    // retireGoal.innerHTML = `Aim to have ${format(income*12*10)} by the age of 65.`;
    
    console.log(savings6Time1.innerHTML);

}

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}