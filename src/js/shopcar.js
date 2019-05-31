$(function() {
    var shop = cookie.get('shop');
    if (shop) {

        $('.main').empty();

        shop = JSON.parse(shop);
        // console.log(shop)
        var idList = shop.map(elm => elm.id).join();
        $.ajax({
            type: "get",
            url: "../php/shop.php",
            data: {
                "idList": idList
            },
            dataType: "json",
            success: function(response) {
                var template = "";
                response.forEach(function(elm) {

                    var pic = JSON.parse(elm.pic);
                    var title = JSON.parse(elm.title);
                    var arr = shop.filter((val, i) => {
                        return val.id === elm.id;
                    });
                    template = `
                    <li class="item">
                        <div class="c-box">
                            <input type="checkbox" id="p-${elm.id}">
                        </div>
                        <div class="p-img">
                            <img src="../${pic[0].src}" alt="${pic[0].title}">
                        </div>
                        <div class="p-title">
                            ${title[0].p1}
                        </div>
                        
                        <div class="p-price">
                            单价:${elm.price}
                        </div>
                        <div class="p-num">
                            数量：<input type="number" value="${arr[0].num}" min="1" max="${elm.num}">
                        </div>
                        <div class="p-sum">
                            总价:${(arr[0].num*elm.price).toFixed(2)}
                        </div>
                        <div class="del"><a class="del1" href="#">删除</a></div>
                    </li>`;
                    $('.main').append(template);
                });
            }
        });
    }
});

// 用户登录后取到cookie
$(function() {
    var c = document.cookie;
    var a = c.split("; ");
    if (a[0].split("=")[0] == "username") {
        $('.login>a').html("欢迎 " + a[0].split("=")[1]);
    } else {
        $('.login>a').html("欢迎 , 请登录");
    }
    if (a[0].split("=")[0]) {
        $(".go-login").remove();
        $(".register").remove();
        $(".login>span").remove();
    }
})

//购物车删除
$(function() {
    var a = cookie.get("shop");
    $('.main').on('click', function(e) {
        e = e || event;
        if (e.target.className == "del1") {

        }
    })
})