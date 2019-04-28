const output2 = document.querySelector('.output2');

const reverse = str => str.split('').reverse().join('');

const reverseParentheses = (s) => {
  while (s.includes('(')) {
    const left = s.lastIndexOf('(');
    const right = s.indexOf(')', s.lastIndexOf('('));

    s = s.slice(0, left) + reverse(s.slice(left + 1, right))
    + (right + 1 === s.length ? s.slice(right, -1) : s.slice(right + 1));
  }
  return s;
};
output2.innerHTML = reverseParentheses('foo(foo(bar))blim');
