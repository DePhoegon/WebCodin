var alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
/** Test array, Smaller count of characters validating range easier
 var alphaTest = ["a", "b", "c"] */
function Seed() {

}
/** -Testing Range of Math.floor(math.random*array.length)  for random selection
function SeedT() {
    if (document.getElementById("Toggle").innerHTML == "Letter - a") { document.getElementById("Toggle").innerHTML = "Random" };
    var rnp = Math.floor(Math.random() * alphaTest.length);
    document.getElementById("Rando").innerHTML = alpha[rnp];
    document.getElementById("RandoN").innerHTML = rnp;
    if (rnp == 0 ) {document.getElementById("Toggle").innerHTML = "Letter - " + alpha[rnp];};
}  */