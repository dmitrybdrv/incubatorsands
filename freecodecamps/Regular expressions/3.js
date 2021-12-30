let petString = "James has a pet cat.";
let petRegex = /John has a pet dog.|Emma has a pet bird.|Liz has a pet cat.|Alice has a pet fish./; // Change this line
let result = petRegex.test(petString);