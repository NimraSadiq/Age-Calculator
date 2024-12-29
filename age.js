const dateInput = document.getElementById('dateInput');
let text=document.getElementById('text');

dateInput.addEventListener('input', () => {
  const userInputDate = new Date(dateInput.value);
  const year=userInputDate.getFullYear();
  const month=userInputDate.getMonth();
  const date=userInputDate.getDate();

  const currentDate=new Date();
  const cyear=currentDate.getFullYear();
  const cmonth=currentDate.getMonth();
  const cdate=currentDate.getDate();
  
  
  let age_year = cyear-year;
  let age_month = cmonth-month;
  let age_date = cdate-date;
  let s=" You are "+age_year+" years "+age_month+" months and "+age_date+" days old";
  text.textContent=s;
  text.style.display='block';
});


