const anagrammes = (stringA, stringB) => {
      var y = stringA.split("").sort().join(""),
        z = stringB.split("").sort().join("");
       
        y = y.replace(/[^\w\s]/gi, '');
        z = z.replace(/[^\w\s]/gi, '');

        y = y.toLowerCase();
        z = z.toLowerCase();

// y.sourceString.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '');
// z.sourceString.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '');
if (y === z){
  return true;
}
else{
  return false;
}



// var outString = sourceString.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '');

  /**
   * stringA est égale à stringB si et seulement s'ils partagent les mêmes
   * caractères alphabétiques dans la même quantité.
   * La case n'est pas pris en compte
   *
   * Exemples :
   *
   * anagrams('rail safety', 'fairy tales') === true
   * anagrams('RAIL! SAFETY!', 'fairy tales') === true
   * anagrams('Hi there', 'Bye there') === false
   */
    //anagrams('rail safety', 'fairy tales') === true


    // anagrams('RAIL! SAFETY!', 'fairy tales') === true
    // anagrams('Hi there', 'Bye there') === false
};


class Stack {
  
  constructor(){
    this.pile = [];
  }
  push(newNumb){
    //this.pile.push(newNumb);
    var i = this.pile.length;
    this.pile[i] = newNumb;
  }
  pop(){
    //console.log(this.pile[this.pile.length() + 1]);
    //return this.pile.pop();
    //this.pile.pop();
    

    var a = this.pile[this.pile.length-1];
    this.tab.splice(this.tab.length-1, 1);
    return a;

  }
  peek(){
    return this.pile[0];

  }
  
/**
 * Créer une structure d'empilement. La structure doit être
 * une classe contenant les méthodes :
 *  - `push`: pour ajouter un élément au bout de l'empilement,
 *  - `pop` pour retirer le dernier élément et le retourner;
 *  - et `peek` pour récupérer le premeier élément.
 *
 * Exemples :
 *
 * const s = new Stack();
 * s.push(1);
 * s.push(2);
 * s.push(3);
 * s.pop(); // returns 3
 * s.pop(); // returns 2
 * s.peek(); // returns 1
 */

};
 // const s = new Stack();
 //  s.push(1);
 //  s.push(2);
 //  s.push(3);
  // s.pop(); // returns 3
  // s.pop(); // returns 2
  // s.peek(); // returns 1

const fizzBuzz = (n) => {

const x = [];
x.length = n;
var y = 0;
for (var i = 0; i < x.length; i++){
  x[i] = y + 1;
  y = y + 1;
  console.log(x)

  testFizz = x[i] % 3;
  testBuzz = x[i] % 5;

  if (testFizz == 0 && testBuzz == 0){
    x[i] = "fizzBuzz";
  }
  else if (testFizz == 0){
    x[i] = "Fizz";
  }
  else if (testBuzz == 0){
    x[i] = "Buzz";
  }
}
return x;




/**
 * Affiche les nombres de 1 à n, en remplaçant les multiples de 3 par fizz et 
 * les multiples de 5 par buzz
 *
 * Exemple :
 *
 * fizzBuzz(5);
 * console.log(1)
 * console.log(2)
 * console.log('fizz')
 * console.log(4)
 * console.log('buzz')
 */

};

const spirale = (n) => {

var matrix = [];
for(var i=0; i<n; i++) {
    matrix[n] = new Array(9);
}


/**
 * Retourne une matrice spirale de taille n x n.
 *
 * Exemples :
 *
 * matrix(2) = [[1, 2],
 *              [4, 3]]
 *
 * matrix(3) = [[1, 2, 3],
 *              [8, 9, 4],
 *              [7, 6, 5]]
 *
 * matrix(4) = [[1,   2,  3, 4],
 *              [12, 13, 14, 5],
 *              [11, 16, 15, 6],
 *              [10,  9,  8, 7]]
 */

};


const puissance4 = (grid) => {
/**
 * Vérifie si un joueur a gagné au puissance 4,
 * c'est-à-dire s'il a 4 jetons contigus en diagonales, lignes ou colonnes.
 *
 * Exemples :
 *
 * puissance4(
 *  [[ 1, 0, 0, 0 ],
 *   [ 2, 1, 0, 0 ],
 *   [ 2, 1, 1, 2 ],
 *   [ 2, 1, 1, 2 ]]
 *   ) = 1
 * )
 *
 * puissance4(
 *  [[ 1, 1, 0, 0, 0 ],
 *   [ 2, 2, 2, 0, 0 ],
 *   [ 2, 2, 1, 1, 2 ],
 *   [ 2, 2, 1, 1, 2 ]]
 *   ) = 0
 *
 * puissance4(
 *  [[ 1, 2, 0, 0, 0 ],
 *   [ 1, 2, 2, 0, 0 ],
 *   [ 2, 2, 1, 1, 2 ],
 *   [ 2, 2, 1, 1, 2 ]]
 *   ) = 0
 */
}

module.exports = {
  fizzBuzz,
  puissance4,
  spirale,
  anagrammes,
  Stack
}
