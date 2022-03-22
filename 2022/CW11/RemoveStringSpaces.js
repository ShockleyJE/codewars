// Simple, remove the spaces from the string, then return the resultant string.

// Attempt 1: string replace
// Unfortunately the solution does not work due to codewars using Node 14, and the function is only available in 15+
function noSpace(x){
    return x.replaceAll(' ', '')
  }


function noSpace(x){
    return x.replace(/\s+/g, '');
<<<<<<< HEAD
}
=======
}
>>>>>>> aceea033a00bafb3c05b38879af259ee3c3c07c8
