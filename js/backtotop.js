(function() {
    var back = document.getElementById("backtotop");
    var timer;
    back.onclick = function() {
        clearInterval(timer)
        timer = setInterval(function() {
            document.documentElement.scrollTop -= 100;
            if (document.documentElement.scrollTop <= 0) {
                clearInterval(timer);
            }
        }, 20);

    }
    window.onscroll = function() {
        var top = document.documentElement.scrollTop || window.scrollY;
        if (top == 0) {
            back.style.display = "none";
        } else {
            back.style.display = "block";
        }
    }

})();