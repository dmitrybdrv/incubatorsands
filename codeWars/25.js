Return to Sanity

function mystery() {
  
  let results = {sanity: 'Hello'};
  
  return results;
    
}


Is it a palindrome?

function isPalindrome(x) {
  if (x.split('').reverse().join('').toLowerCase() === x.toLowerCase()) {
            return true
        } else {
            return false
        }

}
