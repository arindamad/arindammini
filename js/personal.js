//login function
document.getElementById("chatSection").style.display = "none";

//show hide function
function logCalc() {   
      var x = document.getElementById("logIn");
      var y = document.getElementById("chatSection");
        if (x.style.display === "none") {
            x.style.display = "block";
            y.style.display = "none";
            
        } else {
            x.style.display = "none";
            y.style.display = "block";                      
            document.getElementById("username").value="";
            password =document.getElementById("password").value="";            
        }
    }

//main login funtion
function login(){
  var username = document.getElementById("username").value;
  var password =document.getElementById("password").value;  
  if((username=="arindam" && password=="123456") || (username=="moumita" && password=="moumita1994")){      
    document.getElementById("errorTxt").innerHTML = "";
    logCalc();    
  }
  else{
   document.getElementById("errorTxt").innerHTML = "Please enter a valid @username or Password"; 
    document.getElementById("username").value="";
            password =document.getElementById("password").value="";
  }
}



//Printing in a div input value
var printTxt = '';
function printEvent(){
  question=document.getElementById("inputTxt").value; 
    switch(question){
    case "Hi":
    ans = "Hello !";
    break;
    case "hi":
    ans = "Hello !";
    break;
    case "How are you?":
    ans = "I'm fine. Thank You.";
    break;
    case "I love you":
    ans = "I love you too";
    break;
    case "When will you meat me":
    ans = "When you remember me.";
    break;
    case "i love you":
    ans = "I love you too";
    break;
    case "Do you love me?":
    ans = "Yes. and you know it .";
    break;
    case "do you love me?":
    ans = "Yes. and you know it .";
    break;
    case "do you love me":
    ans = "Yes. and you know it.";
    break;
    case "Good morning":
    ans = "Morning";
    break;
    case "good morning":
    ans = "Morning";
    break;
    case "Good evening":
    ans = "evening";
    break;
    case "good evening":
    ans = "evening";
    break;
    case "Do you miss me":
    ans = "Yes. I thing you know it very well";
    break;
    case "Do you think you are crazy":
    ans = "Mabe, I think";
    break;
    default:
    ans = "Please enter a valid Question"; 
  }
  printTxt= printTxt +"<div class='sendTxt'><span>"+ question +"</span></div>"+"<div class='ansTxt'><span>"+ ans +"</span></div>";  
 // printTxt= printTxt 
   //console.log(printTxt);   
  document.getElementById("print").innerHTML=printTxt;
 // document.getElementById("print").scrollTop=100;
  var messageBody = document.querySelector('#print');
  messageBody.scrollTop = messageBody.scrollHeight - messageBody.clientHeight;
}
