// console.log(window);
// console.log(window.document);
// console.log(document instanceof HTMLDocument);
// console.dir(HTMLDocument);

function sayHello() {

    let name = document.getElementById('name').value;
    let message = `<h2>Hello ${name}</h2>`;
    if (name) {
        this.textContent = 'Said it!';
        document.getElementById('content').innerHTML = message;
    }

    if(name === 'student') {

        let title = document.querySelector('h1').textContent;
        title += '  & Lovin it!';
        document.querySelector('h1').textContent = title;
    }
}

document.querySelector('button').addEventListener('click', sayHello);
