const questions=[
    {
        question:"What is a black hole?",
    answers:[
        {text:"A region of space with no stars or galaxies",correct:false},
        {text:"A region of space where gravity is so strong that nothing can escape",correct:true}, 
        {text:"A dense cloud of gas and dust in space",correct:false},
        {text:"An invisible object in space that emits light",correct:false},
    ]
},
{
    question:"Black holes formed from the remnants of",
    answers:[
        {text:"Small asteroids",correct:false},
        {text:"White dwrafs",correct:false}, 
        {text:"Massive stars",correct:true},
        {text:"Planetary nebulae",correct:false},
    ]
},
{
    question:"What happens to time near a black hole?",
    answers:[
        {text:"Time stands still",correct:false},
        {text:"Time slows down",correct:true}, 
        {text:"Time reverses",correct:false},
        {text:"Time speeds up",correct:false},
    ]
},

{
    question:"Who proposed the concepts of Hawking radiation, suggesting that black holes can emit radiation due to quantum effects?",
    answers:[
        {text:"Albert Einstein",correct:false},
        {text:"Stephen Hawking",correct:true}, 
        {text:"Carl Sagan",correct:false},
        {text:"Isaac Newton",correct:false},
    ]
},
{
question:"What is the name of one of the theorems related to black holes?",
answers:[
    {text:"White hair theorem",correct:false},
    {text:"Black-hair theorem",correct:false}, 
    {text:"Hair theorem",correct:false},
    {text:"No-hair theorem",correct:true},
]
},



];
const questionElement=document.getElementById("question");
const answerButton=document.getElementById("answer-Button");
const nextButton=document.getElementById("bt1");
let currentQuestionIndex=0;
let score=0;
function startquiz(){
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML="Next";
    showQuestions();
}
function showQuestions(){
    resetState();
    let currentQuestion=questions[currentQuestionIndex];
    let questionNo=currentQuestionIndex+1;
    questionElement.innerHTML=questionNo+"."+currentQuestion.question;

    currentQuestion.answers.forEach(answer=>{
        const button=document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("bt");
        answerButton.appendChild(button);
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    });
}
var count = 15;
var timer = setInterval(function() {
  console.log(count);
  count--;
  if(count === 0) {
    stopInterval()
  }
}, 1000);

var stopInterval = function() {
  console.log('time is up!');
  clearInterval(timer);
}
function resetState(){
   nextButton.style.display="none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
}
function selectAnswer(e){
    const selectBtn=e.target;
    const isCorrect=selectBtn.dataset.correct==="true";
    if(isCorrect){
        selectBtn.classList.add("correct");
        score++;
    }
    else{
        selectBtn.classList.add("incorrect");
    }

Array.from(answerButton.children).forEach(button=>{
if(button.dataset.correct==="true"){
button.classList.add("correct");}
button.disabled=true;

});
nextButton.style.display="block";
}

function showscore(){
    resetState();
    questionElement.innerHTML=`Your score is ${score} out of ${questions.length}!`;
    nextButton.innerHTML="Try again?";
    nextButton.style.display="block";
}
 function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex<questions.length){
        showQuestions();
    }else{
        showscore();
    }
 }
nextButton.addEventListener("click",()=>{
      if(currentQuestionIndex<questions.length){
        handleNextButton();
      }
      else{
        startquiz();
      }

});
startquiz();
