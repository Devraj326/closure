// Progression 1: create a consant "NEG_INF" with -1000000 value, and a function createPop


  // Progression 2: add 3 variables: title, currIndex, check

  // Progression 3: create a function "searchForElement" 

  // Progression 4: In `createPop()`, return a function - which uses the updated values of `currIndex` and `check`
                    // to return the desired output.


const arrayOfNumbers = [1,2,3,4,5,6];
const itemToSearch = 4;

const NEG_INF = -1000000;

function createPop(arrayOfNumbers,itemToSearch){
  let currIndex = NEG_INF;
  let check = true;
  
  function searchForElement(){
    for(let i =0; i<arrayOfNumbers.length; i++){
      if(arrayOfNumbers[i]===itemToSearch){
        currIndex = i;
        check = false;
        break;
      }
    }
  }
    searchForElement();
      if(check === false){
        return `The item is present and is at index ${currIndex}`;
      } else{
        return `The item is not present and is at index -1000000`;
      }
    }


createPop(arrayOfNumbers,itemToSearch);