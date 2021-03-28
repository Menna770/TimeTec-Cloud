//Ecosystem Section:
var article = document.getElementById("ecosystemHiddenLayer");
article.style.display = "none";

document.getElementById("ecosystemMain").onclick = function ()
{
if(article.style.display == "none")
{
    article.style.display = "block";
}
else
{
    article.style.display = "none";
} 
}