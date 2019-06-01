$(function() {


    var c = document.cookie;
    var a = c.split("; ");
    if (a[0].split("=")[0] == "username") {
        $('#login').html("欢迎 " + a[0].split("=")[1]).css('margin-right', '20px');
    } else {
        $('#login').html("欢迎 , 请登录").css('margin-right', '20px');
    }


    var id = location.search.split("=")[1];
    $.ajax({
        type: "get",
        url: "../php/getItem.php",
        data: {
            id: id
        },
        dataType: "json",
        success: function(response) {
            var title = JSON.parse(response.title);
            var pic = JSON.parse(response.pic);
            var temp = `
            <div class="container">
                <h2>${title[0].p1}</h2>
            </div>
            <div class="pic">
                <img src="../${pic[0].src1}" style="display:block;float:left; width:560px;height:560px">    
            </div> 

            <div class="main-details" style="width:500px;height:560px;float:left;margin-left:100px;">
                <div class="p-details">
                    <h1 style="font-size:24px;margin-bottom:20px">${title[0].p2}</h1>
                    <div style="font-size:14px;line-height:20px;color:#b0b0b0;margin-bottom:40px"> ${response.details}</div>
                </div>
                <div class="p-price">
                    <span class="yuan" style="color:orange;font-size:36px;">￥${response.price}</span>
                </div>
                <div class="num" style="font-size:16px;margin-top:60px">库存${response.num}</div>
                选择加入购物车的数量： <input type="number" value="1" min="1" max="${response.num}" id="num"> 件</br>
                <input type="button" class="add" value="加入购物车" style="width:300px;height:54px;text-align:center;line-height:54px;background-color:orange;border:0px;margin-top:60px" >
            </div>   
            `
            $('#detail').append(temp).find('.add').on('click', function() {
                addShopCar(response.id, response.price, $('#num').val());
                alert('加入购物车成功');
            });
        }
    });


})

function addShopCar(id, price, num) {
    var shop = cookie.get('shop'); //从cookie获取shop
    var product = {
        "id": id,
        "price": price,
        "num": num
    };

    if (shop) {
        shop = JSON.parse(shop); // cookie中如果有数据 这个数据是json字符串 转成对象

        if (shop.some(elm => elm.id == id)) {
            shop.forEach(function(elm, i) {
                elm.id == id ? elm.num = num : null;
            });
        } else {
            shop.push(product);
        }
        cookie.set('shop', JSON.stringify(shop), 1);
    } else {
        shop = [];
        shop.push(product);
        cookie.set('shop', JSON.stringify(shop), 1);
    }
}