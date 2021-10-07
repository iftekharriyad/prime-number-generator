//Generate prime numbers
let num = 9999; //A very large number
let primeArr=[];
for(let i=2;i<=num;i++){
    if(i==2) primeArr.push(2)
    else{
        for(let j=0;j<primeArr.length;j++){
            if(j===primeArr.length-1){
                if(i%primeArr[j]!==0) primeArr.push(i)
            }else{
                if(i%primeArr[j]==0){
                    break;
                }
            }
            
        }
    }

}
console.log(primeArr);

