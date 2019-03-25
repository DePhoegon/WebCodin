Base = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var Out = ".";
function base(Numb) {
    Nu = Numb; /* Controlling Input, Starting number */
    while (Nu > Base.length) {
        Out = Base[Bwork(Nu)] + Out;
        Nu = Math.floor(Nu / Base.length);
    } /* while loop for numbers greater than the base */
    if (Nu == Base.length) {
        Out = Base[(Nu - (Base.length))] + Out;
        Out = Base[(Nu - (Base.length - 1))] + Out;
    } /* Condition of the number matching the Base count */
    if (Nu == 0) { return } /* Condition of the number being Zero */
    if (Nu > 0 && NU < Base.length) { Out = Base[Nu] + Out; }
} /*  launching point to take in one number & the number in the Base value, using an array provided for the slots  */
function Bwork(WNur) {
    PNur = WNur / Base.length;
    if (PNur == Math.floor(PNur)) {
        DS = 0;
    } else {
        Nur = PNur - Math.floor(PNur); /* Remainder, use to get digit spot */
        DS = Nur * Base.length; /* Digital spot of the base */
    } /* Checks for no remainder, uses slot 0 as 0 */
    return DS;
} /* Re turns the Spot of the last number in the base, use with array or strings with charat()  */