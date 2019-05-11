var getQuote = function(){
        $.getJSON("https://sslapi.hitokoto.cn/?encode=json",function(json){
                content = json["hitokoto"];   //获取格言内容
            author = json["from"];            //获取格言作者


            $(".quote-content").html(content);
            $(".quote-author").html("——"+author);
        });
    }