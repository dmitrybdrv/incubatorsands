  Training JS #7: if..else and ternary operator

  function saleHotdogs(n){
        if(n < 5) {
            n = n * 100
            return n
        } else if (n < 10) {
            n = n * 95
            return n
        } else if( n >= 10) {
            n = n * 90
            return n
        }
    }


altERnaTIng cAsE <=> ALTerNAtiNG CaSe

String.prototype.toAlternatingCase = function () {
   let newWord;

               newWord = this.split('')


               for (let i = 0; i < newWord.length; i++) {
                  if(newWord[i].charAt() === newWord[i].toLowerCase()) {
                      newWord[i] = newWord[i].toUpperCase()
                  } else if(newWord[i].charAt() === newWord[i].toUpperCase()) {
                      newWord[i] = newWord[i].toLowerCase()
                  }
               }
               return newWord.join('')
}