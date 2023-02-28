(function () {
	"use strict";
	console.log("reading js");

//beginning of the letters page
	//variables defined
	const posts = document.querySelectorAll("section");
	let postTops = [];
	let pageTop;
	let counter = 1;
	let prevCounter = 1;
	const figure = document.querySelector("figure");

	//see below for what this function does
	resetPagePosition();

	/* Everything in this event handler runs everytime the window 
	is scrolled just a little bit. Be careful about preformance */
	window.addEventListener("scroll", function () {
		pageTop = window.pageYOffset + 250;
		console.log(counter);

		// if scrolling down
		if (pageTop > postTops[counter]) {
			counter++;
			console.log(`scrolling down ${counter}`);
		}

		// if scrolling up
		else if (counter > 1 && pageTop < postTops[counter - 1]) {
			counter--;
			console.log(`scrolling up ${counter}`);
		}

		// class name changes when the section change
		if (counter != prevCounter) {
			figure.className = `sect${prevCounter} out`;

			figure.addEventListener("animationend", function () {
				figure.className = `sect${counter} in`;
			});

			prevCounter = counter;
		}
	}); // end window scroll function

	// resets pagePosition when moving on to the next section
	function resetPagePosition() {
		postTops = [];
		posts.forEach(function (post) {
			postTops.push(
				Math.floor(post.getBoundingClientRect().top) + window.pageYOffset
			);
		});

		const pagePosition = window.pageYOffset;
		counter = 0;

		postTops.forEach(function (post) {
			if (pagePosition > post) {
				counter++;
			}
		});
	}

	// // changing pages on buttons
    // document.querySelector('#landing button').addEventListener('click', function(event){
    //     event.preventDefault();
    //     document.querySelector('#letters').className='show';
    //     document.querySelector('#landing').className='hide';
    // });

	// document.querySelector('#home').addEventListener('click', function(event){
    //     event.preventDefault();
    //     document.querySelector('#landing').className='show';
    //     document.querySelector('#letters').className='hide';
    // });

})();
