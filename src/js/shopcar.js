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
                            数量：<input type="input" style="width:60px" value="${arr[0].num}" disabled="true">
                        </div>
                        <div class="p-sum">
                            总价:${(arr[0].num*elm.price).toFixed(2)}
                        </div>
                        <div class="del"><a class="del1" id="${elm.id}" href="javascript:;">删除</a></div>
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

//当购物车是空的时候给main设个高度放入提示
$(function() {
    var a = cookie.get('shop');
    if (a == '[]' || a == '') {
        $(".main").css('height', '600px');

        var temp = `
        <div class="img"></div>
        <h2>您的购物车还是空的 !</h2>
        <p>登录后将显示您之前加入的商品</p>
        <div class="go-index">
            <a href="index.html">马上购物</a>
        </div>
    `

        $('.main').append(temp);

    } else {
        $(".main").css('height', 'xx');
    }
})




//删除功能
$(function() {
    $(".main").on('click', function(e) {
        e = e || event;
        if (e.target.className == "del1") {
            var a = cookie.get("shop");
            var p = JSON.parse(a);
            console.log(p);
            p.forEach(function(elm, i) {
                if (elm.id == e.target.id) {
                    p.splice($.inArray(elm, p), 1);
                }
            })
            var qweqwe = JSON.stringify(p);
            cookie.set("shop", qweqwe);
            location.reload();
        }
    })
})

//全选功能
$(function() {
    $(".all>input").on('click', function() {

        if (this.checked) {
            $(".main").find(".c-box>input").attr('checked', 'checked');
        } else {
            $(".main").find(".c-box>input").removeAttr('checked');
        }
    })
})