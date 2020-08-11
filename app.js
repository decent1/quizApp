
//maine is ko delete kardia hai ab is ka koi kaam nai tha main yahan oik variable bana raha hun question number k naam se 


var alquestions = [{
    Question: "What does HTML stand for?",
    Answer: ["Hyper Text Markup Language", " Hyperlinks and Text Markup Language", "Home Tool Markup Language", "SarHyper TCP Markup Languageah"],
    CorrectAnswer: "Hyper Text Markup Language"
}, {
    Question: "Who is the Founder of pakistan ?",
    Answer: ["Quaid-e-Azam Muhammad Ali Jinnah", " Allama Iqbal", "Hafeez Jalandhari", "Ibn-e-Insha"],
    CorrectAnswer: "Quaid-e-Azam Muhammad Ali Jinnah"
}, {
    Question: "Who is making the Web standards?",
    Answer: ["Mozila", " Google", "Microsoft", "The World Wide Web Consortium"],
    CorrectAnswer: "The World Wide Web Consortium"
}, {
    Question: "How can you make a numbered list?",
    Answer: ["ol", " li", "ul", "dl"],
    CorrectAnswer: "ol"
}, {
    Question: "Who is the Founder of pakistan ?",
    Answer: ["Quaid-e-Azam Muhammad Ali Jinnah", " Allama Iqbal", "Hafeez Jalandhari", "Ibn-e-Insha"],
    CorrectAnswer: "Quaid-e-Azam Muhammad Ali Jinnah"
}]



var totalQuestion = alquestions.length
console.log(totalQuestion)

var questionNo = 0;



var para = document.getElementById("paragraph");
para.innerHTML = alquestions[questionNo].Question


var newOption = document.getElementById("newOption");



for (var i = 0; i < alquestions[questionNo].Answer.length; i++) {

    var div = document.createElement("div");
    div.setAttribute("class", "col-md-6 p-2")
    var btn = document.createElement("button");
    btn.setAttribute("class", "options");
    var btnText = document.createTextNode(alquestions[questionNo].Answer[i])
    btn.appendChild(btnText);
    div.appendChild(btn);

    newOption.appendChild(div)



}



function nextQuestion(){
    questionNo++ 
    var para = document.getElementById("paragraph");
    para.innerHTML = alquestions[questionNo].Question


var newOption = document.getElementById("newOption");
newOption.innerHTML = ""


for (var i = 0; i < alquestions[questionNo].Answer.length; i++) {

    var div = document.createElement("div");
    div.setAttribute("class", "col-md-6 p-2")
    var btn = document.createElement("button");
    btn.setAttribute("class", "options");
    
    var btnText = document.createTextNode(alquestions[questionNo].Answer[i])
    btn.appendChild(btnText);
    div.appendChild(btn);


    newOption.appendChild(div)




}

}


function check(){



}




// newOption.innerHTML =  `<div class="col-md-6 p-2"><button class="options">${alquestions[questionNo].Answer[i]}</button></div>` 






