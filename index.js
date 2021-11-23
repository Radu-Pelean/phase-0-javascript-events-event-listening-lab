function addingEventListener() {const input = document.getElementById('input');
input.addEventListener('click', function() {
  alert('I was clicked!');
});
}

addingEventListener(input);


const divThree = document.querySelectorAll('div')[5];

function newEvent() {
    alert('you ran over me!')
};

divThree.addEventListener('mouseover', colorEvent);


function colorEvent () {
    const oldBack = divThree.style.backgroundColor = 'black';
};

