var alphaTest = ["a", "b", "c"]/* Test array, Smaller count of characters validating range easier */
 function SeedT() {
    if (document.getElementById("Toggle").innerHTML == "Letter - a") { document.getElementById("Toggle").innerHTML = "Random" };
    var rnp = Math.floor(Math.random() * alphaTest.length);
    document.getElementById("Rando").innerHTML = alpha[rnp];
    document.getElementById("RandoN").innerHTML = rnp;
    if (rnp == 0 ) {document.getElementById("Toggle").innerHTML = "Letter - " + alpha[rnp];};
} Testing Range of Math.floor(math.random*array.length) /* for random selection  */