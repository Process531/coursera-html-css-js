document.addEventListener('DOMContentLoaded',
    function (event) {

        //Unobtrusive event binding
        document.querySelector('#ajax-btn')
            .addEventListener('click', function () {
                console.log("click");

                $ajaxUtils.sendGetRequest('data/name.txt',
                    function (res) {
                        let message = res.firstName + ' ' + res.lastName
                        if (res.likesChineseFood) {
                            message += ' likes Chinese food';
                        } else {
                           message += " doesn't like Chinese food"
                        }
                        message += ' and uses ';
                        message += res.nubberOfDisplays + 1;
                        message += ' displays for coding.'


                        document.querySelector('#content')
                            .innerHTML = `<h2>Hello ${message} !`;
                    });
            });
    }
);