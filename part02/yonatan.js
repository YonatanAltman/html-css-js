window.addEventListener("keyup", (e) => {
    console.log(e);

    if (e.key === 'f') {
        alert('סתם משהו')
    }
});


console.group('YONATAN');
console.log('.....');
console.groupEnd()

var result = someNumber(2, 3);
console.log(result); // error || 6

result = 'Liran';
console.log(result); // error || 6


function someNumber(a, b) {
    return a * b;
}

function printNumbers() {


    var ul = document.createElement('ul');
    document.body.appendChild(ul);
    for (let i = 0; i < 100; i++) {
        var li = document.createElement('div');
        li.innerText = 'num: ' + i;
        ul.appendChild(li);
    }


}

document.getElementById('print')
    .addEventListener('click', printNumbers);

// add button with id
// add event listener click
// print numbers 1-100;
