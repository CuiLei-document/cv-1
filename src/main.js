let html = document.querySelector('#html');
let style = document.querySelector("#style");
// 用来给用户展示内容的信息
let string = `
/**你好,我叫崔磊
*一名前端新人,
*我要在我的简历中
*加上一段样式
**/
#div1{
    
    width: 200px;
    height: 200px;
}
/**接下来制作八卦图 首先把div变成一个圆圈**/
#div1 {
    border-radius: 50%;
    box-shadow: 0 0 3px rgba(0,0,0,.5);
    border: none;
}
/* 八卦是阴阳形成的
 * 一黑一白
 **/
#div1{
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/*接下来让八卦上黑下白*/
#div1::before {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: #000;
    bottom:0;
    left: 50%;
    transform: translateX(-50%);
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
#div1::after {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: #fff;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(245,245,245,1) 25%, rgba(255,255,255,1) 100%);

}
`;
// 用来缓存新的东西
let string2 = ''
// string = string.replace(/\n/g, '<br />')
let n = 0;
// dome.innerHTML = string.substring(0,n )
let stop = ()=> {
    console.log('一秒后执行n+1')
    
    setTimeout(()=>{
        // 如果 string里面是回车 就显示 br 不是就把string颁给string2
        // string2 += string[n] === '\n'? '<br />': string[n];
        if(string[n] === '\n'){
            // 如果 string 里面有回车，就br换行
            string2  += '<br >'
        }else if(string[n] === ' '){
            // string里面有空格 用 &nbsp
            string2 += '&nbsp'
        }else {
            // 没有回车 就 照搬
            string2 +=string[n]
        }
        //
        html.innerHTML =  string2;
        style.innerHTML = string.substring(0,n);
        window.scrollTo(0,99999);
        html.scrollTo(0,99999);
        if( n < string.length -1){ 
            n += 1
            stop() 
        }       
    },40)
}
stop()




