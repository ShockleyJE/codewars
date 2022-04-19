//You are a barista at a big cafeteria. Normally there are a lot of baristas, but your boss runs a contest and he told you that, if you could handle all the orders with only one coffee machine in such a way that the sum of all the waiting times of the customers is the smallest possible, he will give you a substantial raise.
//
//So you are the only barista today, and you only have one coffee machine that can brew one coffee at a time.
//People start giving you their orders.
//Let's not think about the time you need to write down their orders, but you need 2 additional minutes to clean the coffee machine after each coffee you make.
//
//Now you have a list coffees of the orders and you write down next to each of the orders the time you need to brew each one of those cups of coffee.

//Task:
//
//Given a list of the times you need to brew each coffee, return the minimum total waiting time.
//If you get it right, you will get that raise your boss promised you!



//Solution 1:
function barista(coffees){
    //TODO: Maths are cool!
    
    // 0 + 2 + 4 + 6 + 8
    // 0 + 2(1) + 2(2) + 2(3) + 2(4)
    
    var sum = 0;
    var coffees = coffees.sort(function(a, b) {return a - b;});
    console.log(coffees);
    coffees.reduce(
      (previousValue, currentValue, currentIndex) => {
        var waitTime = currentIndex < 1 ? currentValue : previousValue + currentValue + 2;
        console.log(waitTime);
        sum += waitTime;
        return waitTime;
      }, 0);
    return sum;
  }