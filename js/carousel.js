// 轮播图
(function() {
    var lbtn = document.getElementById("lbtn");
    var rbtn = document.getElementById("rbtn");
    var blist = document.getElementById("blist");
    var circles = document.getElementById("circlesol");
    var olis = circles.getElementsByTagName("li");
    var clone_li = blist.firstElementChild.cloneNode(true);
    var banner = document.getElementById("banner");
    var idx = 0; //右边移动的次数
    blist.appendChild(clone_li);


    rbtn.onclick = crbtn;
    var lock = true;

    function crbtn() {
        if (!lock)
            return;
        lock = false;
        blist.style.transition = "transform .5s ease 0s"
        idx++;
        blist.style.transform = "translateX(" + -16.66 * idx + "%)";
        if (idx > 4) {

            setTimeout(function() {
                blist.style.transition = "none";

                blist.style.transform = "none";
                idx = 0;
            }, 500);
        }
        setTimeout(function() { lock = true; }, 500);
        setcircles()
    }


    lbtn.onclick = clbtn;

    function clbtn() {
        if (!lock)
            return;
        lock = false;
        if (idx == 0) {
            blist.style.transition = "none";
            blist.style.transform = "translateX(" + -16.66 * 5 + "%)";
            setTimeout(function() {
                blist.style.transition = "transform .5s ease 0s";
                blist.style.transform = "translateX(" + -16.66 * 4 + "%)";
            }, 0)
            idx = 4;
        } else {
            idx--;
            blist.style.transform = "translateX(" + -16.66 * idx + "%)";
        }
        setcircles();
        setTimeout(function() { lock = true; }, 500);
    }

    function setcircles() {
        for (var i = 0; i < 5; i++) {
            if (i == idx || i == idx % 5) {
                olis[i].className = "current";

            } else {
                olis[i].className = "";
            }
        }
    }

    circles.onclick = function(e) {
        if (e.target.tagName.toLowerCase() == "li") {
            n = Number(e.target.getAttribute("data-n"));
            idx = n;
            blist.style.transform = "translateX(" + -16.66 * idx + "%)";
            setcircles();
        }
    }

    var timer = setInterval(crbtn, 2000);
    banner.onmouseenter = function() {
        clearInterval(timer);
    }
    banner.onmouseleave = function() {
        clearInterval(timer);
        timer = setInterval(crbtn, 2000);
    }
})();