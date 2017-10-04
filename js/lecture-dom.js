// console.log(window);
// console.log(window.document);
// console.log(document instanceof HTMLDocument);
// console.dir(HTMLDocument);
document.addEventListener('DOMContentLoaded',
    function (event) {


        function sayHello(event) {
            let name = document.getElementById('name').value;
            let message = `<h2>Hello ${name}</h2>`;
            if (name) {
                this.textContent = 'Said it!';
                document.getElementById('content').innerHTML = message;
            }

            if (name === 'student') {

                let title = document.querySelector('h1').textContent;
                title += '  & Lovin it!';
                document.querySelector('h1').textContent = title;
            }
        }

        document.querySelector('button').addEventListener('click', sayHello);

        document.querySelector('body').addEventListener('mousemove', (event) => {
            if (event.shiftKey) {
                console.log('x: ' + event.clientX);
                console.log('y: ' + event.clientY);
            }
        });


    }
);



