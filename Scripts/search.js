
    $(document).ready(function ()
    {
        $("#bata").click(function ()
        {
            var keyw = "bata";
            
            $("#contents1").empty();
            $.getJSON("/Product/searchedItems?key=" + keyw, function (data)
            {
                
                $.each(data, function (i, item)
                {
                    $('#main1').append('<tr><td><a><img  src=' + item.imgLink + ' alt="Img" style="width:250px; height:250px ></img></a> <a href="#header" class="button">Add to cart</a></td></tr><tr><td style="color:Yellow" > ' + item.brandName + ' <br> <span>Rs. '+item.price+' </span></td></tr>');
                });
            });
        });
    });


    $(document).ready(function () {
        $("#doncarlos").click(function () {
            var keyw = "Don Carlos";
           
            $("#contents1").empty();
            $.getJSON("/Product/searchedItems?key=" + keyw, function (data) {
               
                $.each(data, function (i, item) {
                    $('#main1').append('<tr><td><a><img  src=' + item.imgLink + ' alt="Img" style="width:250px; height:250px ></img></a> <a href="#header" class="button">Add to cart</a></td></tr><tr><td style="color:Yellow" > ' + item.brandName + ' <br> <span>Rs. ' + item.price + ' </span></td></tr>');
                });
            });
        });
    });


    $(document).ready(function () {
        $("#service").click(function () {
            var keyw = "Service";
            
            $("#contents1").empty();
            $.getJSON("/Product/searchedItems?key=" + keyw, function (data) {
               
                $.each(data, function (i, item) {
                    $('#main1').append('<tr><td><a><img  src=' + item.imgLink + ' alt="Img" style="width:250px; height:250px ></img></a> <a href="#header" class="button">Add to cart</a></td></tr><tr><td style="color:Yellow" > ' + item.brandName + ' <br> <span>Rs. ' + item.price + ' </span></td></tr>');
                });
            });
        });
    });


    $(document).ready(function () {
        $("#calza").click(function () {
            var keyw = "Calza";
            
            $("#contents1").empty();
            $.getJSON("/Product/searchedItems?key=" + keyw, function (data) {
               
                $.each(data, function (i, item) {
                    $('#main1').append('<tr><td><a><img  src=' + item.imgLink + ' alt="Img" style="width:250px; height:250px ></img></a> <a href="#header" class="button">Add to cart</a></td></tr><tr><td style="color:Yellow" > ' + item.brandName + ' <br> <span>Rs. ' + item.price + ' </span></td></tr>');
                });
            });
        });
    });

    $(document).ready(function () {
        $("#cheetah").click(function () {
            var keyw = "Cheetah";
            
            $("#contents1").empty();
            $.getJSON("/Product/searchedItems?key=" + keyw, function (data) {
                
                $.each(data, function (i, item) {
                    $('#main1').append('<tr><td><a><img  src=' + item.imgLink + ' alt="Img" style="width:250px; height:250px ></img></a> <a href="#header" class="button">Add to cart</a></td></tr><tr><td style="color:Yellow" > ' + item.brandName + ' <br> <span>Rs. ' + item.price + ' </span></td></tr>');
                });
            });
        });
    });




   