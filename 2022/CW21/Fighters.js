/*

Kyu 7 
https://www.codewars.com/kata/577bd8d4ae2807c64b00045b

*/

function Fighter(name, health, damagePerAttack) {
    this.name = name;
    this.health = health;
    this.damagePerAttack = damagePerAttack;
    this.toString = function() { return this.name; }
}

function declareWinner(fighter1, fighter2, firstAttacker) {
    // determine attack order
    let attacker1, attacker2;
    if (fighter1.name === firstAttacker){
        attacker1 = fighter1;
        attacker2 = fighter2;
    } else if (fighter2.name === firstAttacker){
        attacker1 = fighter2;
        attacker2 = fighter1;
    }

    while(fighter1.health > 0 && fighter2.health > 0){
        // attacker1 damages attacker2 
        attacker2.health -= attacker1.damagePerAttack
        // check to see if attacker2 is dead
        if(attacker2.health <= 0){return attacker1.name}

        // attacker2 damages attacker 1 is dead
        attacker1.health -= attacker2.damagePerAttack
        // check will be performed by loop condidtion
    }

    return fighter1.health <= 0 ? fighter2.name : fighter1.name;
  }

  console.log(declareWinner(new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), "Lew"))


  //Solultion 1: 

  function declareWinner(fighter1, fighter2, firstAttacker) {
    // how many attacks will it take each to kill?
    var fac1 = Math.ceil( fighter1.health / fighter2.damagePerAttack );
    var fac2 = Math.ceil( fighter2.health / fighter1.damagePerAttack );
    if(fac1 < fac2) {
      return fighter2.name;
    } else if(fac2 < fac1) {
      return fighter1.name;
    // in the case of a draw in attacks, victory to first attacker
    } else {
      return firstAttacker;
    }
  }