function triangulo(a, b, c){
    if((a == b && a == c) && b == c){
        console.log('equilatero');
    }else if(a == b || a == c){
        console.log('isoceles');
    }else{
        console.log('escaleno');
    }
    
}
triangulo(1,2,3)
triangulo(1,1,3)
triangulo(3,3,3)