import React from "react";



function Typescript(){

    class Fruits {
    constructor(fruit) {
        this.fruit = fruit;
    }
    myFruit() {
        return (  this.fruit + " is my favorite fruit!" );
    }
        

}

let yellowFruit = new Fruits("Pineapple");
console.log(yellowFruit.myFruit());   
let yellow = yellowFruit.myFruit();
    


 let myVar: [string, number, boolean]
 myVar = ["pinapples", 11, true]
   console.log(myVar);
       
    
   let myQ = " True or False:" + " Would I eat " +  myVar[1] + " " +  myVar[0] + " in one sitting? ";
    
   let myA =  myVar[2] + ".";
    
    
   
     return (
         <>
      <div className="yellow">
       <h1>{yellow}</h1> 
      </div>
      
      <div>
       <h1>{myQ}</h1>
      </div> 
      <div>
       <h1> &darr; </h1>
      </div>
      <div>
       <h1>{myA}</h1>
      </div> 
         
         </>
         
    )
 
}
    
export default Typescript;
   