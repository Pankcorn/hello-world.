const header = document.getElementsByClassName("header")[0];

let angle = 0;
header.onclick=()=>{
    setInterval(()=>{
        console.log(`rotate(${angle++}deg)`)
        text.style.transform=`rotate(${angle++}deg)`;
    },10);
};