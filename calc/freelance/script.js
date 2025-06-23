const { format } = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  });

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

  function calculate() {
    taxRate = 1-(taxRateInput.value*0.01);

    confirmation.innerHTML = "Your breakdown";

    salaryYearlyTakehome.innerHTML = Math.round(salaryInput.value*taxRate);
    salaryMonthlyTakehome.innerHTML = Math.round(salaryInput.value*taxRate/12);
    salaryWeeklyTakehome.innerHTML = Math.round(salaryInput.value*taxRate/48);
    salaryDailyTakehome.innerHTML = Math.round(salaryInput.value*taxRate/240);
    salaryHourlyTakehome.innerHTML = Math.round(salaryInput.value*taxRate/1920);

    selfemYearlyProfit.innerHTML = Math.round(salaryYearlyTakehome.innerHTML/0.85);
      selfemYearlyProfitTable.innerHTML = Math.round(salaryYearlyTakehome.innerHTML/0.85);
      selfemYearlyProfitTable15.innerHTML = Math.round(salaryYearlyTakehome.innerHTML/0.85*0.85);
    selfemMonthlyProfit.innerHTML = Math.round(selfemYearlyProfit.innerHTML/12);
      selfemMonthlyProfit15.innerHTML = Math.round(selfemYearlyProfit.innerHTML/12*0.85);
    selfemWeeklyProfit.innerHTML = Math.round(selfemYearlyProfit.innerHTML/48);
      selfemWeeklyProfit15.innerHTML = Math.round(selfemYearlyProfit.innerHTML/48*0.85); 
    selfemDailyProfit.innerHTML = Math.round(selfemYearlyProfit.innerHTML/240);
      selfemDailyProfit15.innerHTML = Math.round(selfemYearlyProfit.innerHTML/240*0.85);
    selfemHourlyRate.innerHTML = Math.round(selfemDailyProfit.innerHTML/8);
      selfemHourlyRate15.innerHTML = Math.round(selfemDailyProfit.innerHTML/8*0.85);
    
   selfemHourlyRateMin.innerHTML = Math.round(selfemDailyProfit.innerHTML/8);
    selfemDailyProfitDouble.innerHTML = Math.round(selfemHourlyRate.innerHTML*2);
    selfemWork4Days.innerHTML = Math.round(selfemWeeklyProfit.innerHTML/4/8*2);
    selfemWork3Days.innerHTML = Math.round(selfemWeeklyProfit.innerHTML/3/8*2);
    
    salaryYearlyTakehomeEmployer.innerHTML = Math.round(salaryInput.value*1.15);
  }