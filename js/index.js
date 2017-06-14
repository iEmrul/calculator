var previousCalc = 0;
var previousArr = [];
$("#output").text("0");
$("#current").text("0");

$("#ac").click(function(){
  previousCalc = 0;
   $("#current").text("0");
  $("#output").text("0");
});

$("#ce").click(function(){
    $("#output").text("0");
  if($("#current").text().indexOf('+') !== -1){
    $("#current").text($("#current").text().split('+')[0]+'+');}
  if($("#current").text().indexOf('-') !== -1){
    if($("#current").text().indexOf('-') === 0){
      console.log('right case');
    }
    else{
      $("#current").text($("#current").text().split('-')[0]+'-');}
    }
  if($("#current").text().indexOf('x') !== -1){
    $("#current").text($("#current").text().split('x')[0]+'x');}
  if($("#current").text().indexOf('÷') !== -1){
    $("#current").text($("#current").text().split('÷')[0]+'÷');}
  
});
$("#one").click(function(){
  if($("#current").text().length >= 17 || $("#output").text().length >= 8){
   $("#current").text("Max Digit");
    $("#output").text("0");
 }
  else if($("#current").text()=== "Max Digit"){
    $("#ac").click(); 
 }
  else{
     if($("#current").text() === "0"){
    $("#current").text('');
  }
     $("#current").append("1");
    if($("#output").text() === "0"){
    $("#output").text('');
    }
   else if(isNaN($("#output").text())){
    $("#output").text('');
    }
  
  $("#output").append("1");
  }
 
});
$("#two").click(function(){
  if($("#current").text().length >= 17 || $("#output").text().length >= 8){
   $("#current").text("Max Digit");
    $("#output").text("0");
 }
  else if($("#current").text()=== "Max Digit"){
    $("#ac").click(); 
 }
  else{
     if($("#current").text() === "0"){
    $("#current").text('');
  }
     $("#current").append("2");
    if($("#output").text() === "0"){
    $("#output").text('');
    }
   else if(isNaN($("#output").text())){
    $("#output").text('');
    }
  
  $("#output").append("2");
  }
});
$("#three").click(function(){
  if($("#current").text().length >= 17 || $("#output").text().length >= 8){
   $("#current").text("Max Digit");
    $("#output").text("0");
 }
  else if($("#current").text()=== "Max Digit"){
    $("#ac").click(); 
 }
  else{
     if($("#current").text() === "0"){
    $("#current").text('');
  }
     $("#current").append("3");
    if($("#output").text() === "0"){
    $("#output").text('');
    }
   else if(isNaN($("#output").text())){
    $("#output").text('');
    }
  
  $("#output").append("3");
  }
});
$("#four").click(function(){
  if($("#current").text().length >= 17 || $("#output").text().length >= 8){
   $("#current").text("Max Digit");
    $("#output").text("0");
 }
  else if($("#current").text()=== "Max Digit"){
    $("#ac").click(); 
 }
  else{
     if($("#current").text() === "0"){
    $("#current").text('');
  }
     $("#current").append("4");
    if($("#output").text() === "0"){
    $("#output").text('');
    }
   else if(isNaN($("#output").text())){
    $("#output").text('');
    }
  
  $("#output").append("4");
  }
});
$("#five").click(function(){
  if($("#current").text().length >= 17 || $("#output").text().length >= 8){
   $("#current").text("Max Digit");
    $("#output").text("0");
 }
  else if($("#current").text()=== "Max Digit"){
    $("#ac").click(); 
 }
  else{
     if($("#current").text() === "0"){
    $("#current").text('');
  }
     $("#current").append("5");
    if($("#output").text() === "0"){
    $("#output").text('');
    }
   else if(isNaN($("#output").text())){
    $("#output").text('');
    }
  
  $("#output").append("5");
  }
});
$("#six").click(function(){
  if($("#current").text().length >= 17 || $("#output").text().length >= 8){
   $("#current").text("Max Digit");
    $("#output").text("0");
 }
  else if($("#current").text()=== "Max Digit"){
    $("#ac").click(); 
 }
  else{
     if($("#current").text() === "0"){
    $("#current").text('');
  }
     $("#current").append("6");
    if($("#output").text() === "0"){
    $("#output").text('');
    }
   else if(isNaN($("#output").text())){
    $("#output").text('');
    }
  
  $("#output").append("6");
  }
});
$("#seven").click(function(){
  if($("#current").text().length >= 17 || $("#output").text().length >= 8){
   $("#current").text("Max Digit");
    $("#output").text("0");
 }
  else if($("#current").text()=== "Max Digit"){
    $("#ac").click(); 
 }
  else{
     if($("#current").text() === "0"){
    $("#current").text('');
  }
     $("#current").append("7");
    if($("#output").text() === "0"){
    $("#output").text('');
    }
   else if(isNaN($("#output").text())){
    $("#output").text('');
    }
  
  $("#output").append("7");
  }
});
$("#eight").click(function(){
  if($("#current").text().length >= 17 || $("#output").text().length >= 8){
   $("#current").text("Max Digit");
    $("#output").text("0");
 }
  else if($("#current").text()=== "Max Digit"){
    $("#ac").click(); 
 }
  else{
     if($("#current").text() === "0"){
    $("#current").text('');
  }
     $("#current").append("8");
    if($("#output").text() === "0"){
    $("#output").text('');
    }
   else if(isNaN($("#output").text())){
    $("#output").text('');
    }
  
  $("#output").append("8");
  }
});
$("#nine").click(function(){
  if($("#current").text().length >= 17 || $("#output").text().length >= 8){
   $("#current").text("Max Digit");
    $("#output").text("0");
 }
  else if($("#current").text()=== "Max Digit"){
    $("#ac").click(); 
 }
  else{
     if($("#current").text() === "0"){
    $("#current").text('');
  }
     $("#current").append("9");
    if($("#output").text() === "0"){
    $("#output").text('');
    }
   else if(isNaN($("#output").text())){
    $("#output").text('');
    }
  
  $("#output").append("9");
  }
});
$("#zero").click(function(){
  if($("#current").text().length >= 17 || $("#output").text().length >= 8){
   $("#current").text("Max Digit");
    $("#output").text("0");
 }
  else if($("#current").text()=== "Max Digit"){
    $("#ac").click(); 
 }
  else{
     if($("#current").text() === "0"){
    $("#current").text('');
  }
     $("#current").append("0");
    if($("#output").text() === "0"){
    $("#output").text('');
    }
   else if(isNaN($("#output").text())){
    $("#output").text('');
    }
  
  $("#output").append("0");
  }
});
$("#dot").click(function(){
   if($("#current").text() === "0"){
        $("#current").append('.');
        $("#output").append('.');
     }
  else if($("#current").text().charAt($("#current").text().length-1) === "."){
    
        $("#current").append('');
     }
    
    else{
      $("#current").append(".");
      $("#output").append(".");
    }
});
$("#div").click(function(){
      if($("#current").text() === "0"){
        $("#current").text('0');
     }
  else if($("#current").text().charAt($("#current").text().length-1) === "+" ||
         $("#current").text().charAt($("#current").text().length-1) === "-" ||
          $("#current").text().charAt($("#current").text().length-1) === "x" ||
          $("#current").text().charAt($("#current").text().length-1) === "÷"
         ){
    
        $("#current").append('');
     }
    
    else{
      if(previousCalc !== 0){
        $("#current").text(previousCalc);
        previousCalc = 0;
      }
      $("#current").append("÷");
      $("#output").text('÷');
    }
  
 
});
$("#multiply").click(function(){
     if($("#current").text() === "0"){
        $("#current").text('0');
     }
  else if($("#current").text().charAt($("#current").text().length-1) === "+" ||
         $("#current").text().charAt($("#current").text().length-1) === "-" ||
          $("#current").text().charAt($("#current").text().length-1) === "x" ||
          $("#current").text().charAt($("#current").text().length-1) === "÷"
         ){
    
        $("#current").append('');
     }
    
    else{
      if(previousCalc !== 0){
        $("#current").text(previousCalc);
        previousCalc = 0;
      }
      $("#current").append("x");
      $("#output").text('x');
    }
  
});
$("#minus").click(function(){
    if($("#current").text() === "0"){
        $("#current").text('0');
     }
  else if($("#current").text().charAt($("#current").text().length-1) === "+" ||
         $("#current").text().charAt($("#current").text().length-1) === "-" ||
          $("#current").text().charAt($("#current").text().length-1) === "x" ||
          $("#current").text().charAt($("#current").text().length-1) === "÷"
         ){
    
        $("#current").append('');
     }
    
    else{
      if(previousCalc !== 0){
        $("#current").text(previousCalc);
        previousCalc = 0;
      }
      $("#current").append("-");
      $("#output").text('-');
    }
  
});
$("#plus").click(function(){
   if($("#current").text() === "0"){
        $("#current").text('0');
     }
  else if($("#current").text().charAt($("#current").text().length-1) === "+" ||
         $("#current").text().charAt($("#current").text().length-1) === "-" ||
          $("#current").text().charAt($("#current").text().length-1) === "x" ||
          $("#current").text().charAt($("#current").text().length-1) === "÷"
         ){
    
        $("#current").append('');
     }
    
    else{
    //  $("$current").append($("$current").text().split('=')[1]);
    //  console.log($("$current").text().split('='));
      if(previousCalc !== 0){
        $("#current").text(previousCalc);
        previousCalc = 0;
      }
      
      $("#current").append("+");
      $("#output").text('+');
    }
  
   
        
     
   
});
$("#equal").click(function(){
    var currentText = $("#current").text();
    currentText= currentText.replace(/x/,'*');
    currentText= currentText.replace(/÷/,'/');
  
    var result = calculate(currentText);
    $("#output").text(result);
    $("#current").text(currentText + " = " + result);
    previousCalc = result;
  console.log(previousCalc);
});



function calculate(num){
var input = num + '`';
var operator = '';
var number='';
var total = 0;
var arr = [];
var increment = '';
for (var x = 0; x <input.length; x++){
  if(!isNaN(input.charAt(x)) || input.charAt(x) === '.'){
    number += input.charAt(x);
    if( x !== 0){
      number = operator+number;
      operator='';
    }
     }
  else{

    operator = input.charAt(x);
    arr.push(number);
    number = '';
  }
  
}
    if(arr[0] === ""){
    arr.shift();
  }
var b = '';
for(var y = 0; y <arr.length; y ++){
  increment = math.eval(b + arr[y]) ;
  b = increment;
}
  return increment.toFixed(2);
}