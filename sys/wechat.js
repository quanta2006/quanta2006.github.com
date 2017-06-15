$(init)

data = [];
_img = []

function init() {

    // for(i=3; i<arr.length; i++) {
    //     month = arr[i].elements.header_date;
    //     html = arr[i].page_content;
    //     $("body").html(html);

    //     day = $(".ubook_content div div span:eq(0)").text()
    //     time = $(".ubook_content div div span:eq(1)").text();
    //     if (time === "") continue;

    //     time = day + '日 ' + time;

    //     cnt = $(".ubook_content_text_area .content_line").text();
    //     img = [];
    //     imgSrc = $(".ubook_img div");
    //     for(j=0; j<imgSrc.length; j++) {
    //         imgUrl = $(imgSrc[j]).children("img:eq(1)").attr("img-src");
    //         _img.push(imgUrl)

    //         imgUrl = 'img/' + imgUrl.replace("http://mmsns.qpic.cn/mmsns/","").replace("http://shmmsns.qpic.cn/mmsns/","").replace("/0","") + '.jpg'
    //         img.push(imgUrl)
            
    //     }

    //     item = { "date": month, "time":time, "img":img, "cnt":cnt}
    //     data.push(item)
    // }

    $("body").empty()
    $("body").html($("#wechatTmpl").render(ret));
}


