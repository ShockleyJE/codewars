//My roommate and I occasionally make wagers on if we can beat each other in Super Smash Bros. Being the competitor I am, I can't take a loss without getting a chance at redemption. Often times, this manifests in the form of a "Double or nothing" bet. Rather than paying up, the wager will instead be doubled, and an additional round will be played.

//...This consistently results in me losing more money than I initially wagered.

//Given the amount of cash on hand, the initial wager, and the number of rounds played, return the amount of money that I'll have left after our gam(bl)ing session has concluded.

//If I can't afford to pay up, return "I'll pay you back later" instead ;)


//----------------------------------------------------------------


// helper function for 50:50, as we are not given odds this function makes a nice plug for an actual process input

function fiftyFifty(){
    return Math.random() > 0.5 ? true : false;
}

// on failure, call function again with one less round
// on victory return the amount won
// otherwise, returns 0 
function doubleOrNothing(wager, rounds){

    // consider true to be a win
    let res = fiftyFifty();
    console.log(`res: ${res} wager: ${wager} rounds: ${rounds}`)

    if (rounds === 0){
        return -wager;
    }

    if(res) {
        return ( wager * 2 )
    } else {
        return doubleOrNothing(wager * 2, rounds -1)
    }
}

function doubleOrNothing(cash, wager, losses){
    cash -= wager * Math.pow(2, losses - 1);
    
    if (cash < 0)
      {
        return "I'll pay you back later";
      }
    
    return cash;
  }

doubleOrNothing=(a,b,c)=>(a=>a<0?"I'll pay you back later":a)(a-b*2**(c-1))

// most similar solution to my idea
function doubleOrNothing(cash, wager, losses){
    var w = wager * 2 ** (losses - 1), money = cash - w
    return money < 0 ? 'I\'ll pay you back later' : money  
  }

function doubleOrNothing(cash, wager, losses) {
const left = cash - (wager << losses-1);
if ( left>=0 )
    return left;
else
    return "I'll pay you back later";
}