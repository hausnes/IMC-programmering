function myFunction(a, b){
    console.log(typeof(a) + " " + typeof(b));
    
    let fant = false;
    
    for (const iterator in a) {
        console.log(iterator);
        if(iterator == b){
            fant = true;
        }
    }
    return fant;
}

console.log(myFunction({a:1,b:2,c:3},'b'));