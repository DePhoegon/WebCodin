var alphaTest = ["a", "b", "c"]/* Test array, Smaller count of characters validating range easier */
 function SeedT() {
    if (document.getElementById("Toggle").innerHTML == "Letter - a") { document.getElementById("Toggle").innerHTML = "Random" };
    var rnp = Math.floor(Math.random() * alphaTest.length);
    document.getElementById("Rando").innerHTML = alpha[rnp];
    document.getElementById("RandoN").innerHTML = rnp;
    if (rnp == 0 ) {document.getElementById("Toggle").innerHTML = "Letter - " + alpha[rnp];};
} Testing Range of Math.floor(math.random * array.length) /* for random selection  */


var t = 0;
function toggleimg() {
    if (t == 0) {
        document.getElementById("demo").innerHTML = "<img src='http://i.ebayimg.com/images/i/350788387020-0-1/s-l1000.jpg'/>";
        /* images/1270599430.kerns_untitled.jpg */
        t = "pic";
    } else {
        document.getElementById("demo").innerHTML = "";
        t = 0;
    }
}/* toggles image, removes & adds the image */