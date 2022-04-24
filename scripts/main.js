var isPetting = false;
var timeoutId;
var popCount = 0;

var Count = document.querySelector('h2');
  
function changeSrc()
{
    clearTimeout(timeoutId);
    popCount++;
    Count.textContent = popCount.toString();
    document.getElementById("myKanata").src="images/Kanata2.png";
    timeoutId = setTimeout(function() {
        document.getElementById("myKanata").src="images/Kanata1.png" ;
    }, 150); 
}

