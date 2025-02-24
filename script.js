let boxes=document.querySelectorAll(".box");
let reset=document.querySelector(".reset");
let newgame=document.querySelector("#newbtn");
let msgcontainer=document.querySelector(".msgcontainer");
let msg=document.querySelector("#msg");

let turnO=true;

const winpatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetgame = ()=>{
    turnO=true;
    enableboxes();
    msgcontainer.classList.add("hide");
};
const disableboxes = ()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};
const enableboxes = ()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO){
            //playerO
            box.innerText="O";
            turnO=false;
        }else{
            //playerX
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        checkwinner();
    });
});

const checkwinner=()=>{
    for(let pattern of winpatterns){
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;
        if(pos1!=""&&pos2!=""&&pos3!=""){
            if(pos1===pos2&&pos2===pos3){
                showwinner(pos1);
            }
        }
    }
};
const showwinner=(winner)=>{
    msg.innerText=`congratulations winner is :${winner}`;
    msgcontainer.classList.remove("hide");
    disableboxes();
};

newgame.addEventListener("click",resetgame);
reset.addEventListener("click",resetgame);