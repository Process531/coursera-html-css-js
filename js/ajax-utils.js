(function (global) {
    console.log("utils");
    let ajaxUtils = {};

// Returns an HTTP request object
    function getRequestObject() {
        if (window.XMLHttpRequest) {
            return (new XMLHttpRequest());
        } else if (window.ActiveXObject) {
            return (new ActiveXObject('Microsoft.XMLHTTP'));
        } else  {
            global.alert('Ajax is not supported!');
            return (null);
        }
    }

    ajaxUtils.sendGetRequest = function (requestUrl, responseHandler) {
        let request = getRequestObject();
        request.onreadystatechange = function () {
            handleResponse(request, responseHandler);
        };
        request.open('GET', requestUrl, true);
        request.send(null);
    };

})(window);