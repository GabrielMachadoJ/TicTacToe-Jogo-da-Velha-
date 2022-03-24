//selecting all recuired elements
const selectBox = document.querySelector(".select-box"),
selectXBtn = selectBox.querySelector(".playerX"),
selectOBtn = selectBox.querySelector(".playerO"),
playBoard = document.querySelector(".play-board"),
allBox = document.querySelectorAll("section span")

window.onload = () => { //Once window loaded
    for(let i = 0; i < allBox.length; i++) {
        allBox[i].setAttribute("onclick", "clickedBox(this)")
    }



    selectXBtn.onclick = () => {
        selectBox.classList.add("hide") //hide the select box on playerX button clicked
        playBoard.classList.add("show") //show the playboard section on playerX button clicked
    }
    selectOBtn.onclick = () => {
        selectBox.classList.add("hide") //hide the select box on playerO button clicked
        playBoard.classList.add("show") //show the playboard section on playerO button clicked
    }
}