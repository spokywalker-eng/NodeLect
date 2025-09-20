console.log("Hello World");
function first(){
    second();
    console.log("First");
}
function second(){
    third();
    console.log("Second");
}
function third(){
    console.log("Third");
}
function run(){
    console.log("3초");
}

setTimeout(run, 3000);
first();
