
/*
1.JavaScript是Unicode编码的，length,charCodeAt，charAt都是针对Unicode的
2.URI中的querystring必须按照UTF8的编码进行传输,但是只针对非英文字符进行编码
*/
var writeUTF2 = function (str) {
    var back = [];
    for (var i = 0; i < str.length; i++) {
        let code = str.charCodeAt(i);
        if (0x00 <= code && code <= 0x7f) {//英文字符encodeURI没有转义
            back.push(code &= 0xff);
        } else{
            let temp = encodeURI(str.charAt(i)).split('%').slice(1).map(item => parseInt(item,16));
            back = back.concat([...temp]);
        }
    }
    return back;
}


console.log('writeUTF2',writeUTF2('ab'))//[ 97, 98 ]
console.log('writeUTF2',writeUTF2('中国'))//[ 228, 184, 173, 229, 155, 189 ]

