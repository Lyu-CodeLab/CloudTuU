(function() {
    var bannerNavUl = document.getElementById('banner-nav-ul');
    var bannerNav = document.getElementById('banner-nav');
    var menus = document.querySelectorAll('.menus-box .menu');
    var bannerLis = document.querySelectorAll('#banner-nav-ul li');
    console.log(bannerNav);
    console.log(bannerNavUl);
    console.log(menus);
    console.log(bannerLis);
    bannerNavUl.onmouseover = function(e) {
        if (e.target.tagName.toLowerCase() == 'li') {
            var t = e.target.getAttribute('data-t');
            for (var i = 0; i < bannerLis.length; i++) {
                bannerLis[i].className = bannerLis[i].getAttribute('data-t');
            }
            e.target.className += ' current';
            // 寻找匹配的menu
            var themenu = document.querySelector('.menus-box .menu[data-t=' + t + ']');
            // 排他操作，让所有的盒子都去掉current类名
            for (var i = 0; i < menus.length; i++) {
                menus[i].className = 'menu';
            }
            themenu.className = 'menu current';
        }
    }
    bannerNav.onmouseleave = function() {
        for (var i = 0; i < bannerLis.length; i++) {
            bannerLis[i].className = bannerLis[i].getAttribute('data-t');
            menus[i].className = 'menu';
        }
    }
})();