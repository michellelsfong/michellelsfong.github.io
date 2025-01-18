function calculate() {
        
    let income = takeHomePay.value;

    budgetNeeds.innerHTML = `Needs: $${income*0.5}`;
    budgetWants.innerHTML = `Wants: $${income*0.3}`;
    budgetSavings.innerHTML = `Savings: $${income*0.2}`;

    housingLow.innerHTML = `25% is $${income*0.25}, with $${(income*0.5)-(income*0.25)} left for the rest of your needs`;
    housingHigh.innerHTML = `30% is $${income*0.30}, with $${(income*0.5)-(income*0.30)} left for the rest of your needs`;

    let savingsNeedsUnit = income*0.5;

    savings3.innerHTML = `For 3 months of needs, you'll want $${savingsNeedsUnit*3} saved.`;
    savings6.innerHTML = `For 6 months of needs, you'll want $${savingsNeedsUnit*6} saved.`;
    savings12.innerHTML = `For 12 months of needs, you'll want $${savingsNeedsUnit*12} saved.`;
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