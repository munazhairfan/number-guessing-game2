document.addEventListener('DOMContentLoaded',()=>{

    const num = document.getElementById("number");
    let right = document.getElementById("yes");
    let wrong = document.getElementById("no");
    let tryagain = document.getElementById("try");
    let refresh = document.getElementById("tryagainbtn");
    right.style.display='none';
    wrong.style.display='none';
    tryagain.style.display = 'none';
    num.style.display='block';
    let tries = 5;
        function initialize(){
        let randomNum = Math.floor((Math.random() * 10))
        console.log(randomNum)
        right.style.display='none';
        wrong.style.display='none';
        tryagain.style.display = 'none';
        num.style.display='block'
        let tries = 5;
        num.value='';

    num.addEventListener('input',()=>{
        right.style.display='none';
        wrong.style.display='none';
        tryagain.style.display='none';
        num.style.display='block'
        if(tries > 0 && parseInt(num.value)){
            if(num.value == randomNum){
                right.style.display='block';
                num.style.display='none';
                setTimeout(()=>{
                    num.value=''
            },500)
            }else{
                wrong.style.display='block';
                setTimeout(()=>{
                    num.value=''
            },500)
                tries--;
                if(tries==0){
                    tryagain.style.display = 'block'
                    num.style.display='none'
                    setTimeout(()=>{
                        num.value=''
                },500)
                }
            }
        }
    })
        }
    refresh.addEventListener('click',()=>{
        initialize();
    })
    initialize();
})
