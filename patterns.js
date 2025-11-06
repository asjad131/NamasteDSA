//print square stars pattern
function printSquareStars(n){

    for(let i=0;i<n;i++){
        let row = '';
        for(let j=0; j<n;j++){
            row = row+'*';
        }
        console.log(row)
    }   
}
console.log('square Stars Pattern:');
printSquareStars(5);

//print triangle stars pattern
function printTriangleStars(n){

    for(let i=0;i<n;i++){
        let row = '';
        for(let j=0; j<=i;j++){
            row = row+'*';
        }
        console.log(row)
    }   
}
console.log('triangle Stars Pattern:');
printTriangleStars(5);

//print inverted triangle stars pattern
function printInvTriangleStars(n){

    for(let i=0;i<n;i++){
        let row = '';
        for(let j=n; j>i;j--){
            row = row+'*';
        }
        console.log(row)
    }   
}
console.log('Inverted triangle Stars Pattern:');
printInvTriangleStars(5);

//print pyramid stars pattern
function printPyramidStars(n){

    for(let i=0;i<n;i++){
        let row = '';
        for(let j=n; j>i;j--){
            row = row+' ';
        }
        for(let k=0;k<=i;k++){
            row = row+'* ';
        }
        console.log(row)
    }   
}
console.log('Pyramid Stars Pattern:');
printPyramidStars(5);

//print pyramid stars pattern
function printRightTriangleStars(n){

    for(let i=0;i<n;i++){
        let row = '';
        for(let j=0; j< n-(i+1);j++){
            row = row+' ';
        }
        for(let k=0;k<i+1;k++){
            row = row+'*';
        }
        console.log(row)
    }   
}
console.log('Pyramid Stars Pattern:');
printRightTriangleStars(5);