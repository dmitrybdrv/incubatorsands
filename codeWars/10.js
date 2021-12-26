//DNA to RNA Conversion

function DNAtoRNA(dna) {
    let newDna;
    if (dna.charAt("T")) {
       newDna = dna.replace(/T/g, "U")
        return newDna
    } else if (dna == "") {
      newDna = ""
      return newDna
    }
}