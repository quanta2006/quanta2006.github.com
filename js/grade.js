$(init)

function init() {

    $.getJSON("data.json", function(data) {

        var dataHtml = $.templates("#gradeTmpl").render(data);
        $(".g-box").append(dataHtml);
    })

}


