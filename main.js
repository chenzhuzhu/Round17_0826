/**
 * Created by cyz on 2017/8/26.
 */
"use strict";

main(15)
function main(num){
    let numArr = [];
    for(let  i =1;i<=num;i++) {
        let thisNum = ''
        if((i%3==0)&&(i%5==0)){
            thisNum='fizz buzz'
        }else if(i%3==0){
            thisNum='fizz'
        }else if(i%5==0){
            thisNum='buzz'
        }

        if(thisNum!=''){
            numArr.push(thisNum)
        }else{
            numArr.push(i)
        }
    }
    console.log(numArr)


}
