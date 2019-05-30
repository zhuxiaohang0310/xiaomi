$(function() {
    $.ajax({
        type: "get",
        url: "../php/getproduct",
        dataType: "json",
        success: function(response) {
            var prolist = $(".product-iphone");
            var template = " ";
            console.log(response);
            response.forEach(function(elm, i) {
                template = `
                <a href="#" class="thumbnail">
                        <div class="flag-new">新品</div>
                        <img src="../imgs/iphone0-1.jpg" alt="...">
                        <p>小米9 6GB+128GB</p>
                        <p>骁龙855，索尼4800万超广角微距三摄</p>
                        <p class="price"> <span class="num">2999</span>元 </p>
                    </a>
                    <a href="#" class="thumbnail">
                        <div class="flag-new">新品</div>
                        <img src="../imgs/iphone0-1.jpg" alt="...">
                        <p>小米9 6GB+128GB</p>
                        <p>骁龙855，索尼4800万超广角微距三摄</p>
                        <p class="price"> <span class="num">2999</span>元 </p>
                    </a>
                `
            })
        }
    });

});