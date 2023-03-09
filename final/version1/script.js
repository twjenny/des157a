//loads images first before beginning the page
window.addEventListener ('load', function () {
	"use strict";
	console.log("reading js");

	const content = document.getElementsByClassName('sister');
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
}());
