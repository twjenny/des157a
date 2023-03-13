//loads images first before beginning the page
('load', function () {
	"use strict";
	console.log("reading js");

    const content = document.getElementById('sister');
    const theImg = document.getElementsByClassName('sisterLetter');
    const percent = content.offsetWidth / 100;
    let prevLoc = 0;
    
    content.addEventListener('mousemove',reportPos);
    function reportPos(event) {
        const mousePosX = Math.ceil((event.clientX - (content.getBoundingClientRect().left))/percent);

        if (prevLoc !== mousePosX) {
            let addedPx = mousePosX * 30;
            theImg.style.width = (800 + addedPx) + 'px';
            prevLoc = mousePosX;
            console.log(prevLoc);
        }
    }

// user test alert message
    alert(`
    Welcome to my Final Project iteration and thank you for your time to take this user test. 
    This test will take approximately 10 minutes and you will complete the three following goals:

    1. Try to move to next section without scrolling.
    2. When you reach the end of the webiste, move back to the top page with just one click.
    3. Try to figure out the meaning of the project.

    Feel free to say any thoughts that come to your mind, and just remember that there is no right or wrong answers here. Anything you say will be a great feedback for my final project!
    
    If you forget the goals, go ahead and refresh the page by pressing refresh button or shift+command+R to reload the page to see the alert.
    
    Once again, thank you for your participation!`);


}());