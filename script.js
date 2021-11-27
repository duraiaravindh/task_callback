let initialCount = 10;

const countDownEle = document.getElementById("demo");

const callbackFunc=()=>{
    setTimeout(()=>{
        if(initialCount !==0){
            countDownEle.innerHTML = initialCount;
            initialCount -= 1;
            initialFunc();
        }
    }, 1000);
};

const initialFunc = async()=>{
    if(initialCount !==0){
        callbackFunc();
    } else{
        setTimeout(()=>{
            countDownEle.innerHTML = "Happy Independence Day"
        }, 1000);
    }
};

initialFunc();