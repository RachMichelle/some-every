function hasOddNumber(arr){
    return arr.some(function(val){
        return val % 2 !== 0;
    })
    
}

function hasAZero(num){
    let digits = num.toString().split('');
    return digits.some(function(val){
        return val === '0';
    })
}

function hasOnlyOddNumbers(arr){
    return arr.every(function(val){
        return val %2 !== 0;
    })
}

function hasNoDuplicates (arr){
    return arr.every(function(val){
        return arr.indexOf(val) === arr.lastIndexOf(val);
    })
}

function hasCertainKey(arr, key){
    return arr.every(function(obj){
        return obj[key];
    })
}

function hasCertainValue(arr, key, value){
    return arr.every(function(el){
        return el[key] === value;
    })
}