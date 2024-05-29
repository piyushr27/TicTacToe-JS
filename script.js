let linkBox = document.querySelectorAll(".box");

let turn = "cross";
let count = 0;
let win = "none";

let addSymbol = (e) => {
    console.log("target div=",e.target);
    if (turn == "cross") {
        if (e.target.classList[1]) {
            e.target.classList.remove("circle");
        }
        e.target.classList.add("cross");
        console.log(e.target.classList[1]);
        e.target.innerHTML = '<i class="fa-solid fa-xmark fa-2xl"></i>'
        turn = "circle";
    }
    else {
        if (e.target.classList[1]) {
            e.target.classList.remove("cross");
        }
        e.target.classList.add("circle");
        console.log(e.target.classList[1]);
        e.target.innerHTML = '<i class="fa-regular fa-circle fa-2xl"></i>'
        turn = "cross";
    }
}

let turnCount = () => {
    count++;
    console.log("count =",count);
}

let winCheck = () => {
    console.log("initial win status =",win);
    if (count > 4) {

        //cond 1 for win
        if (linkBox[0].classList[1] == linkBox[1].classList[1] && linkBox[1].classList[1] == linkBox[2].classList[1]) {
            win = linkBox[0].classList[1];
            console.log("cond 1 for win -",win);
        }
        //cond 2 for win
        else if (linkBox[3].classList[1] == linkBox[4].classList[1] && linkBox[4].classList[1] == linkBox[5].classList[1]) {
            win = linkBox[3].classList[1];
            console.log("cond 2 for win -",win);
        }
        //cond 3 for win
        else if (linkBox[6].classList[1] == linkBox[7].classList[1] && linkBox[7].classList[1] == linkBox[8].classList[1]) {
            win = linkBox[6].classList[1];
            console.log("cond 3 for win -",win);
        }
        //cond 4 for win
        else if (linkBox[0].classList[1] == linkBox[3].classList[1] && linkBox[3].classList[1] == linkBox[6].classList[1]) {
            win = linkBox[0].classList[1];
            console.log("cond 4 for win -",win);
        }
        //cond 5 for win
        else if (linkBox[1].classList[1] == linkBox[4].classList[1] && linkBox[4].classList[1] == linkBox[7].classList[1]) {
            win = linkBox[1].classList[1];
            console.log("cond 5 for win -",win);
        }
        //cond 6 for win
        else if (linkBox[2].classList[1] == linkBox[5].classList[1] && linkBox[5].classList[1] == linkBox[8].classList[1]) {
            win = linkBox[2].classList[1];
            console.log("cond 6 for win -",win);
        }
        //cond 7 for win
        else if (linkBox[0].classList[1] == linkBox[4].classList[1] && linkBox[4].classList[1] == linkBox[8].classList[1]) {
            win = linkBox[0].classList[1];
            console.log("cond 7 for win -",win);
        }
        //cond 8 for win
        else if (linkBox[2].classList[1] == linkBox[4].classList[1] && linkBox[4].classList[1] == linkBox[6].classList[1]) {
            win = linkBox[2].classList[1];
            console.log("cond 8 for win -",win);
        }

        console.log("win status after all ifs =", win);

        if (win != "none" && win != undefined) {
            alert(`${win} has won the game!`);
        }
    }

    if (count === 9 && win == "none") {
        alert("Draw");
    }
}


linkBox[0].addEventListener("click", addSymbol);
linkBox[0].addEventListener("click", turnCount);
linkBox[0].addEventListener("click", winCheck);

linkBox[1].addEventListener("click", addSymbol);
linkBox[1].addEventListener("click", turnCount);
linkBox[1].addEventListener("click", winCheck);



linkBox[2].addEventListener("click", addSymbol);
linkBox[2].addEventListener("click", turnCount);
linkBox[2].addEventListener("click", winCheck);


linkBox[3].addEventListener("click", addSymbol);
linkBox[3].addEventListener("click", turnCount);
linkBox[3].addEventListener("click", winCheck);


linkBox[4].addEventListener("click", addSymbol);
linkBox[4].addEventListener("click", turnCount);
linkBox[4].addEventListener("click", winCheck);


linkBox[5].addEventListener("click", addSymbol);
linkBox[5].addEventListener("click", turnCount);
linkBox[5].addEventListener("click", winCheck);


linkBox[6].addEventListener("click", addSymbol);
linkBox[6].addEventListener("click", turnCount);
linkBox[6].addEventListener("click", winCheck);


linkBox[7].addEventListener("click", addSymbol);
linkBox[7].addEventListener("click", turnCount);
linkBox[7].addEventListener("click", winCheck);


linkBox[8].addEventListener("click", addSymbol);
linkBox[8].addEventListener("click", turnCount);
linkBox[8].addEventListener("click", winCheck);

