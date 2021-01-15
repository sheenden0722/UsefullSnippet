function getCookie1(cookies) {
    let cookieList = cookies.split(';');
    let cookieObj = cookieList.reduce((pre,cur) => {
        let temp = cur.split("=");
        let key = temp.shift();
        let value = temp.join("=");
        pre[key] = value;
        return pre;
    },{});
    //alert("cookie:" + JSON.stringify(cookieObj,null,4));
    console.table(cookieObj);
    displayDataToPage(cookieObj);
}

function creatTable(data, idName){
    let popTable = document.getElementById(idName);
    let tableData = "<tbody id='tbody1' style='width: 100%;'>";
    for (let item in data) {
        tableData += "<tr>";
        tableData += "<td>" + item + "</td>";
        tableData += "<td>" + data[item] + "</td>";
        tableData += "</tr>";
    }
    tableData += "</tbody>";
    popTable.innerHTML = tableData;
}

function displayDataToPage(cookieObj) {
    let head = document.getElementsByTagName('head')[0];
    let body = document.getElementsByTagName('body')[0];
    let style = document.createElement('style');
    style.append(
        "/*背景层*/" +
        "#popLayer { " +
            "display: none;" +
            "background-color: #B3B3B3;" +
            "position: absolute;" +
            "top: 0;right: 0;bottom: 0;left: 0;" +
            "z-index: 10;" +
            "-moz-opacity: 0.8;" +
            "opacity:.80;" +
            "filter: alpha(opacity=80);/* 只支持IE6、7、8、9 */" +
        "}" +

        "/*弹出层*/" +
        "#popBox {" +
            "display: none;" +
            "background-color: #FFFFFF;" +
            "z-index: 11;" +
            "width: 500px;height: 500px;" +
            "position:fixed;" +
            "top:0;right:0;left:0;bottom:0;" +
            "margin:auto;" +
        "}" +

        "#popBox .close{" +
            "text-align: right;" +
            "margin-right: 5px;" +
            "background-color: #F8F8F8;" +
        "}" +

        "/*关闭按钮*/" +
        "#popBox .close a {" +
            "text-decoration: none;" +
            "color: #2D2C3B;" +
        "}" +
        "table td {" +
            "border: 1px solid gainsboro;" +
            "width: 50%;" +
            "word-break: break-all;" +
        "}"
    );
    head.appendChild(style);
    //debugger;
    let div1 = document.createElement('div');
    div1.id = "popLayer";
    body.appendChild(div1);
    let div2 = document.createElement('div');
    div2.id = "popBox";
    div2.innerHTML =
        '<div class="close">' +
            '<a href="javascript:void(0)" onclick="closeBox()">关闭</a>' +
        '</div>' +
        '<div style="height: 90%; overflow-y: scroll;"> ' +
            '<table id="popTable"></table> ' +
        '</div>'
    ;
    body.appendChild(div2);

    let popBox = document.getElementById("popBox");
    let popLayer = document.getElementById("popLayer");
    popBox.style.display = "block";
    popLayer.style.display = "block";

    // 用表格显示
    creatTable(cookieObj, 'popTable');
}

/*点击关闭按钮*/
function closeBox() {
    let popBox = document.getElementById("popBox");
    let popLayer = document.getElementById("popLayer");
    //popBox.style.display = "none";
    //popLayer.style.display = "none";
    // 删除节点
    popBox.parentNode.removeChild(popBox);
    popLayer.parentNode.removeChild(popLayer);

}
let cookies = document.cookie;

if (cookies === "") {
    alert("cookie is empty");
} else {
    getCookie1(cookies);
}
