document.title = "Ariful Islam";
var profile = document.getElementById("navbar-brand");
console.log(profile);
profile.textContent = " Facebook";
var ul = document.getElementsByClassName("nav-link");
var ul_array = ["Home","Gallery","Contact us","About us"];
for(i=0;i<ul_array.length;i++)
{
	ul[i].textContent = ul_array[i];
}

var ul_li = document.getElementsByClassName("dropdown-item");
var ul_li_array = ["Action", "Another action","Something else here"];
for(i=0;i<ul_li_array.length;i++)
{
	ul_li[i].textContent = ul_li_array[i];
}

//Text-area...
var postBtn = document.getElementById("post-button");
var textArea = document.getElementById("textarea-value");
var postText = document.getElementById("post");
var storedInput = localStorage.getItem("textinput")

if(textArea)
{
  postText.textContent = storedInput;
}
textArea.addEventListener("input", function(e){
  postText.textContent = e.target.value
})
var saveLocalStorage = () =>{
  localStorage.setItem("textinput", postText.textContent)
}
postBtn.addEventListener("click", saveLocalStorage)

//Like Button function....
var likeBtn = document.getElementById("like-btn");
likeBtn.addEventListener("click", function(){
  document.getElementById("like-count").innerHTML = 1;
  document.getElementById("like-btn").style.backgroundColor = "lightslategrey"
})

function commentFunction(id, commentValue){
  var commentBtn = document.getElementById(id);
commentBtn.addEventListener("click", function(){
  document.getElementById(commentValue).focus()
})
}
commentFunction("comment-btn", "comment-input")
commentFunction("comment-btn1", "comment-input1")
commentFunction("comment-btn2", "comment-input2")
commentFunction("comment-btn3", "comment-input3")
commentFunction("comment-btn4", "comment-input4")

//My profile area....
var profileContent = [" Developer, React"," London, UK", " April 1, 1988"];
var profileIcon = ["fa fa-pencil","fa fa-home","fa fa-birthday-cake"]
for(i=0;i<3;i++)
{
  var developerContent = document.createElement("li");
  var pencilIcon = document.createElement("i");
  var profile = document.getElementById("profile-area");
  profile.appendChild(developerContent);
  developerContent.appendChild(pencilIcon);
  developerContent.setAttribute("class", "list-group-item border-0 bg-dark text-white")
  pencilIcon.setAttribute("class", profileIcon[i]);
  developerContent.textContent = profileContent[i];
}

//List Area...
var listItem = [" My Groups"," My Events", " My Photos"];
var listIcon = ["fa fa-circle-o-notch", "fa fa-calendar-check-o", "fa fa-users"]
for(i=0;i<3;i++)
{
  var newLi = document.createElement("li");
  var newI = document.createElement("i");
  var newA = document.createElement("a");
  var listGroup = document.getElementById("list-group");
  listGroup.appendChild(newLi);
  newLi.appendChild(newI)
  newLi.appendChild(newA);
  newLi.setAttribute("class", "list-group-item bg-dark text-white");
  newI.setAttribute("class", listIcon[i]);
  newA.setAttribute("href", "www.google.com");
  newA.setAttribute("class", "text-white")
  newA.textContent = listItem[i];
}

//Interest Area........
var link = ["#","#", "#"]
var arr = ["Entertainment","Food","Level","Games","Pen","Level","Games","Pen","Pen","Level","Games","Pen"];

for(i=0;i<12;i++)
{
  var newSpan = document.createElement("span");
  var newA = document.createElement("a");
  var test = document.getElementById("span-area");
  test.appendChild(newSpan);
  newSpan.appendChild(newA);
  newA.setAttribute("href", "www.google.com");
  newA.setAttribute("class","text-white");
  newSpan.setAttribute("class", "bg-dark text-white");
  newSpan.style.padding = "5px";
  newSpan.style.display = "inline-block"
  newA.textContent = arr[i];  
}

