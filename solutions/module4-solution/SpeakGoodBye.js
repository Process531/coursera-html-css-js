(function (window) {
    let byeSpeaker = {};
    let speakWord = "Good Bye";

    byeSpeaker.speak = (name) => {
        console.log(speakWord + " " + name);
    };

    window.byeSpeaker = byeSpeaker;

})(window);