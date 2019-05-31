$(function() {
    $.ajax({
        type: "get",
        url: "../php/getproduct",
        dataType: "json",
        success: function(response) {
            response.forEach(function(elm, i) {
                var productiphone = $("#product-iphone");
                var title = JSON.parse(elm.title);
                var pic = JSON.parse(elm.pic);
                var isNew = JSON.parse(elm.isNew);
                var temp = `
                 <div class="col-xs-6 col-md-2">
                     <a href="product.html?id=${elm.id}" class="thumbnail">
                         <div class="${isNew[0].flag}">${isNew[0].text}</div>
                         <img src="../${pic[0].src}" alt="${pic[0].title}">
                         <p>${title[0].p1}</p>
                         <p>${title[0].p2}</p>
                         <p class="price"> <span class="num">${elm.price}</span>元 </p>
                     </a>
                 </div> 
                     `
                productiphone.append(temp);
            })
        }
    });

});