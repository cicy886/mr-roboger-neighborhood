function rangeNumber(num){
  let arr = [];
  let arr1 =[];
  for(let i = 0 ; i <= num ; i++) {
    arr.push(i);
  }
  arr.forEach(function(number){
    let newStrNum=number.toString();
    if (newStrNum.charAt(0)==3 || newStrNum.charAt(1)==3 || newStrNum.charAt(2)==3 || newStrNum.charAt(3)==3) {
      arr1.push("Won't you be my neighbor?");
    }else {
      arr1.push(number);
    }
  });
  return arr1.join();
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