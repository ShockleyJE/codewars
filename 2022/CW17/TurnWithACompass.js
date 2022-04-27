//You have an 8-wind compass, like this:
//
//You receive the direction you are facing (one of the 8 directions: N, NE, E, SE, S, SW, W, NW) and a certain degree to turn (a multiple of 45, between -1080 and 1080); positive means clockwise, and negative means counter-clockwise.
//
//Return the direction you will face after the turn.

//"S",  180  -->  "N"
//"SE", -45  -->  "E"
//"W",  495  -->  "NE"


// I am quite tired and spent 15 minutes determining a solution 
// The only progress I could make was using % 90 to determine the cardinality of directions

// Solution 1 - genius, create an array of directions clockwisedly and associate them to 45 degree indices
function direction(facing, turn){
    const arr = "N NE E SE S SW W NW".split(" ");
    return arr[(arr.indexOf(facing) + Math.floor(turn / 45) + 1080) % 8];
  }