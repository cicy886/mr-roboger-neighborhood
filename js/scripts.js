function rangeNumber(num){
  let arr = [];
  for(let i = 0 ; i <= num ; i++) {
    arr.push(i);
  }
  for (let index=0; index<arr.length; index++) {
  }
  return arr.join().replace(/1/ig,"beep!");
}

//UI Logic
$(document).ready(function(event){
  $("form#range-number").submit(function(event){
    event.preventDefault();
    const num = $("#number").val();
    const outputNumber = rangeNumber(num);
    $("#display-range-number").html(outputNumber);
  });
});