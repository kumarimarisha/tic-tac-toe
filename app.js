let btnref=document.querySelectorAll(".btn-box");
let popupref=document.querySelector(".popup");
let resref=document.querySelector(".restart");
let msgref=document.getElementById("message");
let newgame=document.getElementById("btn");

let winningPattern=[
    [0,1,2],[2,5,8],[6,7,8],[0,3,6],[1,4,7],[3,4,5,],[0,4,8],[2,4,6]
];

let xturn=true;
let cnt=0;

const disablebuttons=()=>{
    btnref.forEach((element)=>(element.disabled=true));
    popupref.classList.remove("hide");
}

const enablebuttons=()=>{
    btnref.forEach((element)=>{
        element.innerText="";
        element.disabled=false;
    });
    popupref.classList.add("hide");
}



btn.addEventListener("click",()=>{
    cnt=0;
    enablebuttons();
});

resref.addEventListener("click",()=>{
    cnt=0;
    enablebuttons();
});

const winfunction = (letter)=>{
    disablebuttons();
    if(letter=="X"){
        msgref.innerHTML= "&#x1F389; <br> 'X' wins";
    }else{
        msgref.innerHTML= "&#x1F389; <br> 'O' wins";
    }
};

const drawfunction=()=>{
    disablebuttons();
    msgref.innerHTML= "&#x1F60E; <br> It's a draw";
}

window.onload = enablebuttons;

const winchecker=()=>{
    for(let i of winningPattern){
        let [element1,element2,element3]=[
            btnref[i[0]].innerText,
            btnref[i[1]].innerText,
            btnref[i[2]].innerText
        ];

        if(element1!=""&&element2!=""&&element3!=""){
            if(element1==element2&&element2==element3){
                winfunction(element1);
            }
        }
    }
};



btnref.forEach((element) => {
element.addEventListener("click",() => {
if(xturn){
    xturn=false;
    element.innerText="X";
    element.disabled=true;
}else{
    xturn=true;
    element.innerText="O";
    element.disabled=true;
}
cnt++;
if(cnt==9){
drawfunction();
}
winchecker();
});
});