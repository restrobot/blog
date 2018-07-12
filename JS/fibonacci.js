//未优化
function fibonacci(index) {
  return index < 2 ? 1 : arguments.callee(index - 2) + arguments.callee(index - 1)
}
//尾递归优化
function fibonacci_adv_1(index, arg1=1, arg2=1) {
  return index < 2 ? arg2 : fibonacci_adv_1(index - 1, arg2, arg1 + arg2)
}
//循环实现
function fibnacci_adv_2(index) {
  if (index < 2) {
    return 1
  } else {
    let i = 0,
      a = 1,
      b = 1;
    while (i < index - 1) {
      [a, b] = [b, a + b];
      i++;
    }
    return b
  }
}

console.log(fibonacci(100), fibnacci_adv_1(100), fibnacci_adv_2(100))
