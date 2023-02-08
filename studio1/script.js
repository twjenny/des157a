(function(){
    'use strict';
    console.log('reading js');

// form inputs
const myForm = document.querySelector('#inputForm');
const madLibs = document.querySelector('#madLib');

    myForm.addEventListener('submit', function(event){
        event.preventDefault();
        const name = document.querySelector('#name').value;
        const place = document.querySelector('#place').value;
        const action = document.querySelector('#action').value;
        const object = document.querySelector('#noun').value;
        const plural = document.querySelector('#noun').value;
        const living = document.querySelector('#noun').value;

        let myText;
        if(name && place && action && object && plural && living) {
            myText = `Hello ${name}, this is a note to help you escape this ${place}! Before I help you, you have to ${action} for 400 hours or else this note will be useless. Once you have done that, you will walk out this door, and you will see a jumping ${object}. Once you pass that area, you will see glowing ${plural} and you should smile at them to look friendly. If you don't smile, they will run after you. After that, you will arrive at the end and you will know that you have reached the end when you see me. <br>Good luck!
            <br>
            <br>
            From ${living}`;
        } else {
            myText = 'Please fill out all the blanks!'
        }
        madLibs.innerHTML = myText;
    });


// changing pages on buttons
    document.querySelector('#begin').addEventListener('click', function(event){
        event.preventDefault();
        document.querySelector('#input').className='show';
        document.querySelector('#intro').className='hide';
    });

    document.querySelector('#submitButton').addEventListener('click', function(event){
        event.preventDefault();
        document.querySelector('#output').className='show';
        document.querySelector('#input').className='hide';
    });

    document.querySelector('#again').addEventListener('click', function(event){
        event.preventDefault();
        document.querySelector('#input').className='show';
        document.querySelector('#output').className='hide';
    });
}())