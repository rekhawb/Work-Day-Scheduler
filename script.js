
var dayWorkHours = '';
var dayHours = ['9AM','10AM','11AM','12PM','1PM','2PM','3PM','4PM','5PM'];


/* store current day <p> tag into a variable
assign current date. current date fetched  from the moment.js date tie library utility
*/ 
var label_curDate = document.querySelector("#currentDay");
label_curDate.textContent = moment().format('dddd, MMMM Do YYYY');
parentContainer = document.querySelector(".container");

dayHours.forEach((ele,index) => {
    dayWorkHours = `
    <div class="row">            
            <div class="col col-1 border-top hour" >`+ele+`</div>          
          <textarea  rows="3" cols="100"  style="padding-bottom:1px"></textarea>
           <button class="btn btn-primary saveBtn" ><i class="fas fa-save"></i></button>
           
          </div>
    `;
    $(parentContainer).append(dayWorkHours);
  // end of creating dynamic html elements

  /*
  set past present future based on current hour.
  first check if the current hour exists in the  dayHours array --- curHourIndex
  if exists, then set attribute class as 
  past -- if index is non negitive or index is less than curHourIndex
  present -- if index equals curHourIndex
  future -- if index is greater than curHourIndex and is non negitive
  finally, assign button id with the divHour text content
  */
var curHourIndex =  dayHours.indexOf(moment().format('hA'));
var divHour = document.querySelectorAll(".hour");
divHour.forEach((ele,index) => {
   
    var divHourText = ele.textContent;
   // alert(divHourText);
   ele.nextElementSibling.innerHTML = function(){if( localStorage.getItem(divHourText) === '') {return ''}else {return  localStorage.getItem(divHourText) }}();

    if(index === curHourIndex){
        ele.nextElementSibling.setAttribute("class", "present");
        ele.nextElementSibling.nextElementSibling.setAttribute("id",divHourText);
               
    }
    if(index < curHourIndex || curHourIndex < 0){
        ele.nextElementSibling.setAttribute("class", "past");
        ele.nextElementSibling.nextElementSibling.setAttribute("id",divHourText);
        //ele.nextElementSibling.innerHTML ="hello";
    }
    if(index > curHourIndex && curHourIndex > 0){
        ele.nextElementSibling.setAttribute("class", "future");
        ele.nextElementSibling.nextElementSibling.setAttribute("id",divHourText);
    }

});

});

// store calendar events

document.addEventListener("click",function(e){
   // alert(dayHours.indexOf(e.target.id));
if(dayHours.indexOf(e.target.id) >= 0){
   // alert(e.target.id);
var btnSave = e.target.id;

e.stopPropagation();
var textareaText = (e.target.previousElementSibling.value);
//alert(textareaText);
/*
if( localStorage.getItem(btnSave) === null) {var localStorageVal = ''}
else {
    var localStorageVal = localStorage.getItem(btnSave)
 };*/
//localStorage.setItem(btnSave,localStorageVal+" "+textareaText);
localStorage.setItem(btnSave,textareaText);
};

});

////style="width:8%; border-radius:0px 12px 12px 0px"
//<div class="col col-1 border-top" style="text-align:right; padding-top:5px ">`+ele+`</div>
////  <textarea rows="4" cols="100" style="background-color:gray;border:solid 1px black;padding-bottom:1px"></textarea>
// identify index of the current  hour so that the text area can be color coded accordingly past/present/future
//<div class="w-100"  ></div>
//alert(curHourIndex);