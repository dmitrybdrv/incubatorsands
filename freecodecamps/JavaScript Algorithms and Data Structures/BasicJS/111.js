function checkEqual(a, b) {
  return a > b || b > a ? 'Not Equal' : 'Equal'
}

checkEqual(1, 2);