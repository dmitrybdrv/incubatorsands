//Fake Binary

function fakeBin(x){

var y = '';

for (var i = 0; i < x.length; i++) {
    if (x[i] < "5") {
    y += 0
    } else {
        y += 1
    }
} return y
}