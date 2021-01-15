// js创建@keyframes
const runkeyframes =`
.throttle-main {
    animation: shake-main 800ms ease-in-out;
}
@keyframes shake-main {
    10%, 90% { transform: translate3d(-1px, 0, 0); }
    20%, 80% { transform: translate3d(+2px, 0, 0); }
    30%, 70% { transform: translate3d(-4px, 0, 0); }
    40%, 60% { transform: translate3d(+4px, 0, 0); }
    50% { transform: translate3d(-4px, 0, 0); }
}`

document.onkeydown = (event) => {
    // ctrl + i
    if(event.ctrlKey && event.keyCode === 73) {
        // 创建style标签
        const style = document.createElement('style');
        // 设置style属性
        style.type = 'text/css';
        // 将 keyframes样式写入style内
        style.innerHTML = runkeyframes;
        // 将style样式存放到head标签
        document.getElementsByTagName('body')[0].appendChild(style);
        document.getElementsByTagName('body')[0].classList.add('throttle-main')

        // 1秒后清除
        setTimeout( _ => {
            document.getElementsByTagName('body')[0].classList.remove('throttle-main')
        }, 1000)
    }
}
