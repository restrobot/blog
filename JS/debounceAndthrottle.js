//防抖
function debounce(fn, delay) {
  let timeoutId;
  return function () {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() = > {
        fn.apply(this, arguments)
  },delay);
  }
}
//节流
function throttle(fn,delay){
  let start = new Date().getTime();
  return function(){
    let end = new Date().getTime();
    if(end-start>=delay){
      fn.apply(this,arguments);
      start = end;
    }
  }
}