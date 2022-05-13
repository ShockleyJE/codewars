//Kyu 7
//https://www.codewars.com/kata/59c0b9d4cb7fb4dd41000962

//Move through a maze which inverts its traversibility characteristics each iteration
//Input: map represented as a string containing either 'x,o, ' representing the following
//"x" traversible, continue
//"o" not traversible, return false
//" " traversible, continue
//Output: true if fully traversible, otherwise false

function bulbMaze(maze){
    // invert traversible & non-traversible 
    function invertMaze(maze){
        return maze.map(ch => {
            if(ch === 'x'){
                return 'o'
            } else if (ch === 'o'){
                return 'x'
            } else if (ch === ' '){
                return ' '
            }
        })
    }
    console.log(maze)
    // split the string maze into character array 
    let splitmaze = maze.split('');
    // iterate over the array
    for (let i = 0; i < splitmaze.length; i++){
        console.log(splitmaze[i] === 'x' || splitmaze[i] === ' ')
        // is current section traversible? 
        if(splitmaze[i] === 'x' || splitmaze[i] === ' '){
            // Yes: inverse maze and continue iteration
            splitmaze = invertMaze(splitmaze);    
        }
        // No: return false
        else {
            console.log('false')
            return false;
        }
    }
    console.log('tru')
    return true;
}

bulbMaze("xo  oxox") //True

