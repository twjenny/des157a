(function(){
    'use strict';
    console.log('reading js');

// form inputs
const myForm = document.querySelector('#inputForm');
const madLibs = document.querySelector('#madLib');

    myForm.addEventListener('submit', function(event){
        event.preventDefault();
        document.querySelector('#output').className='show';
        document.querySelector('#input').className='hide';

        const name = document.querySelector('#name').value;
        const place = document.querySelector('#place').value;
        const action = document.querySelector('#action').value;
        const object = document.querySelector('#object').value;
        const plural = document.querySelector('#plural').value;
        const friend = document.querySelector('#friend').value;

        let myText;
        if(name && place && action && object && plural && friend) {
            myText = `Hello <b>${name}</b>,<br><br> This is a note to help you escape this miserable <b>${place}</b>! Before I help you, you have to <b>${action}</b> for 400 hours or else this note will be useless. Once you have done that, walk out the door and you will see a jumping <b>${object}</b>. Keep walking until you see <b>${plural}</b> and make sure to smile at them to look friendly. If you don't smile, they will run after you. After that, you will see me at the end with a bell. Good luck!
            <br>
            <br>
            From <b>${friend}</b>`;

            // resetting form
            document.querySelector('#name').value='';
            document.querySelector('#place').value='';
            document.querySelector('#action').value='';
            document.querySelector('#object').value='';
            document.querySelector('#plural').value='';
            document.querySelector('#friend').value='';
        } else {
            myText = 'Please fill out all the blanks!';
        }
        madLibs.innerHTML = myText;

    });


// changing pages on buttons
    document.querySelector('#intro button').addEventListener('click', function(event){
        event.preventDefault();
        document.querySelector('#input').className='show';
        document.querySelector('#intro').className='hide';
    });

    document.querySelector('#output button').addEventListener('click', function(event){
        event.preventDefault();
        document.querySelector('#intro').className='show';
        document.querySelector('#output').className='hide';
        
    });
}());