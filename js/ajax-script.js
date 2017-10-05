document.addEventListener('DOMContentLoaded',
    function (event) {

        //Unobtrusive event binding
        document.querySelector('#ajax-btn')
            .addEventListener('click', function () {
                console.log("click");


                $ajaxUtils.sendGetRequest('data/name.txt',
                    function (request) {
                        let name = request.responseText;

                        document.querySelector('#content')
                            .innerHTML = `<h2>Hello ${name} !`;
                    });
            });
    }
);