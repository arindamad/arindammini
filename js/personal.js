


//login function


//show hide function
function logCalc() {   
      var x = document.getElementById("logIn");
      var y = document.getElementById("chatSection");
        if (x.style.display === "none") {
            x.style.display = "block";
            y.style.display = "none";
            document.getElementById("username").value="";
            password =document.getElementById("password").value=""; 
            
        } else {
            x.style.display = "none";
            y.style.display = "block";
        }
    }

  


//main login funtion
function login(){
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;  
  if(username=="arindam" && password=="123456"){      
    document.getElementById("errorTxt").innerHTML = "";
    logCalc();    
  }
  else{
   document.getElementById("errorTxt").innerHTML = "Please enter a valid @username or Password"; 
    document.getElementById("username").value="";
    password =document.getElementById("password").value="";
  }
}

//some small function
function welcomeFun() {
  var datefun = new Date();
  var day = datefun.getDay();
  var hrs = datefun.getHours();       
  var greet="";
    if (hrs < 12 && hrs <= 3){
      greet = 'Good Morning';
    }  else if (hrs >= 12 && hrs <= 17){
      greet = 'Good Afternoon';
    } else if (hrs >= 17 && hrs <= 24){
      greet = 'Good Evening';
    }else{
      greet ="good night"
    }
    ans = "Hello ! " + greet;
 }

//Printing in a div input value
var printTxt = '';
function printEvent(){
  question=document.getElementById("inputTxt").value; 
    switch(question){
    case "Hi":
    welcomeFun();
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
    ans = "Yes. I thing you know it very well. I miss you every time.";
    break;
    case "Do you think you are crazy":
    ans = "Mabe, I think";
    break;
    case "will you marry me":
    ans = "Yes. of course";
    break;
    case "Will you marry me?":
    ans = "Yes. of course";
    break;
    case "Will you marry me":
    ans = "Yes. of course";
    break;
    case "When will you marry me":
    ans = "When will you say";
    break;
    case "When will you marry me?":
    ans = "When will you say";
    break;
    case "when will you marry me?":
    ans = "When will you say";
    break;
    case "when will you marry me":
    ans = "When will you say";
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