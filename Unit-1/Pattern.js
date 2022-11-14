/* Square pattern */
function sqStart(n){
    let string = ""
    for(i=0;i<n;i++){
        for(j=0;j<n;j++){
            string+="*";
        }
        string+="\n";
    }
    console.log(string);
}
//sqStart(4);

/* Hollow Square pattern */
function hollowSqPattern(n){
    let string = "";
    for(let i=0;i<n;i++){
        for(let j=0;j<n;j++){
            if (i===0 || i===n-1) {
                string+="*";
            } else if(j===0 || j===n-1) {
                string+="*";
            } else {
                string+=" ";
            }
        }
        string+="\n";
    }
    console.log(string);
}
//hollowSqPattern(4);

/* Right Triangle Patter */
function rightAnTriPattern(n){
    let string = "";
    for(let i=1;i<=n;i++){
        for(j=0;j<i;j++){
            string+="*";
        }
        string+="\n";
    }
    console.log(string);
}

//rightAnTriPattern(4)

/* Left Triangle Pattern */
function leftAnTriPattern(n){
    let string = "";
    for(let i=1;i<=n;i++){
        debugger;
        for(let j=0;j<n-i;j++){
            string+= " ";
        }
        for(let k=0;k<i;k++){
            string+="*";
        }
        string+="\n";
    }
    console.log(string);
}

//leftAnTriPattern(4);


/* Downward star triangle pattern */
function downTriAnPattern(n){
    let string = "";
    for(let i=0;i<n;i++){
        for(let j=0;j<n-i;j++){
          string+="*";
        }
        string+="\n";
    }
    console.log(string);
}
//downTriAnPattern(4)

/*   ***Hollow Triangle Star Pattern */
function hollowrightTriangleStarPattern(n){
    let string = "";
    for(let i=1;i<=n;i++){
        for(let j=0;j<n;j++){
            if(i === n){
                string+="*"
            }else{
                if(j === 0 || j == i-1){
                    string+="*"
                }else{
                    string+=" "
                }
            }

        }
        string+="\n";
    }
    console.log(string)
}

//hollowrightTriangleStarPattern(4);
/* Pyramid pattern */
function pyramid(n){
    let string = "";
    for(let i=1;i<=n;i++){
        for(let k=0;k<n-i;k++){
            string+=" ";
        }
        for(let j=0;j<2*i-1;j++){
            string+="*";
        }
        string+="\n"
    }
    console.log(string)
}
//pyramid(4)

/* ***Reversed Pyramid Star Pattern*/
function reversedPyramid(n){
    let string = "";
    for(let i=0;i<n;i++){
        for(let k=0;k<i;k++){
            string+=" ";
        }
        for(let j=0;j<2 * (n-i) - 1;j++){
            string+="*";
        }
        string+="\n"
    }
    console.log(string);
}

//reversedPyramid(4)

/* ***Hollow Pyramid Star Pattern*/
function hollowPyramidStarPattern(n){
    for (let i = 1; i <= n; i++) {
  // printing spaces
  for (let j = 1; j <= n - i; j++) {
    string += " ";
  }
  // printing star
  for (let k = 0; k < 2 * i - 1; k++) {
    if(i === 1 || i === n) {
      string += "*";
    }
    else {
      if(k === 0 || k === 2 * i - 2) {
        string += "*";
      }
      else {
        string += " ";
      }
    }
  }
  string += "\n";
}
console.log(string);

}

//hollowPyramidStarPattern(4)

/* Diamond Pattern*/

function diamondPattern(){
    let n = 5;
let string = "";
// Upside pyramid
for (let i = 1; i <= n; i++) {
  // printing spaces
  for (let j = n; j > i; j--) {
    string += " ";
  }
  // printing star
  for (let k = 0; k < i * 2 - 1; k++) {
    string += "*";
  }
  string += "\n";
}
// downside pyramid
for (let i = 1; i <= n - 1; i++) {
  // printing spaces
  for (let j = 0; j < i; j++) {
    string += " ";
  }
  // printing star
  for (let k = (n - i) * 2 - 1; k > 0; k--) {
    string += "*";
  }
  string += "\n";
}
console.log(string);

}