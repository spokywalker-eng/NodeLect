/*
function run(){
    console.log("3초 후 실행");
    data++;
    console.log(data);
}

data = 0;
console.log("시작");
setTimeout(run,3000);
console.log("끝");
run();
 x = 3;
var y = 5;  
if(y = 5){
    console.log(x);
}


const a = 1;
const b = 2;
const c = 3;
const string1 = a + '더하기' + b +   '\n는' + c ;
console.log(string1);


var sayNode = function(){
    console.log('Node');
};
sayNode();

var es = 'ES';  
var oldObject = {
    sayJS : function(){
        console.log('JS');
    },
    sayNode : sayNode, 
};
oldObject[es + 6] = 'Fantastic';
oldObject.sayNode();
oldObject.sayJS();
console.log(oldObject.ES6);

const  newObject = {
    sayJs(){
        console.log('JS');
    },
    sayNode,
    [es + 6] : 'Fantastic',
};
newObject.sayNode();
newObject.sayJs();
console.log(newObject.ES6);

 function add1 (x,y){
    return x+y;
 }
const add2 = (x,y)=>{ 
    return x+y;
}*/
var relationship1 ={
    name : 'zero',
    friends : ['nero','hero','xero'],
    logFriends : function(){
        var that = this;
        this.friends.forEach(function(friend){
            console.log(that.name, friend);
        });
    }       
} 
relationship1.logFriends();