  /*----- constants -----*/
const shapes = ['T', 'L', 'J', 'S', 'Z', 'O', 'I']
const colors = {
    'p' : '#F283A0',
    'q' : '#8888FC',
    'r' : '#93E6C6',
    's' : '#FFFD6E',
    't' : '#FAAA70',
    'u' : '#F2D0B1',
    'v' : '#DBB8FC',
    'b' : '#000000'
}


  /*----- state variables -----*/
let isGameOver = false;
let board;

  /*----- cached elements  -----*/
const cellEls = [...document.querySelectorAll(".cell")]
const boardEl = document.querySelector("#board")
const messageEl = document.querySelector("#message")
const playAgainEl = document.querySelector("#playAgain")


  /*----- event listeners -----*/
  
 cellEls.forEach(cellEl => cellEl.addEventListener("click", init))
playAgainEl.addEventListener('click', init)

  /*----- functions -----*/
function init(){
    board = [
        ['b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b'],
        ['b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b'],
        ['b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b'],
        ['b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b'],
        ['b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b'],
        ['b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b'],
        ['b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b'],
        ['b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b'],
        ['b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b'],
        ['b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b']
    ]
    isGameOver = false
    let piece = [0]
    
    render()
    // while(isGameOver===false){
        dropPiece(piece)
    // }
    
}
function render(){
    renderBoard()
    renderMessage()
    renderControls()
}
function renderBoard(){
    board.forEach((colArr, colIdx) => {
        colArr.forEach((cellVal, rowIdx) => {
                let cellId = `r${rowIdx}c${colIdx}`
                let cellEl = document.getElementById(cellId)
                cellEl.style.backgroundColor = colors[cellVal]
        })
    })
}
function renderMessage(){
    if(isGameOver === true){
        messageEl.innerText = "GAME OVER!!!"
    }
}
function renderControls(){
    playAgainEl.style.visibility
     = isGameOver? 'visible' : 'hidden'
}
function dropPiece(piece){
    board[4][0] = 'p'
    board[4].forEach((eachRow,rowIdx )=> {
            setTimeout(() => {
                if(board[4][rowIdx]!=='b'){
                    return
                }
                board[4][rowIdx] = 'p'
                board[4][rowIdx-1] ='b'
                if(rowIdx-1 === -1){
                    isGameOver = true
                }
                renderBoard()
           }, 500*rowIdx)
            
        })
}
function movePiece(){
    
}
init()

// function startGame(evt){
//     let currentSpot = evt.target
//     // console.log(currentSpot)
//     if(isGameOver === false){
//         if(currentSpot.tagName !== "DIV"){
//             console.log(currentSpot.getAttribute("class"))
//             return
//         }else{
//             currentSpot.style.backgroundColor = colors.tShape
//         }
//         // isRowFilled(currentSpot)
//         if(isRowFilled(currentSpot)){
//             clearRow(boardEl)
//         }
//     }
//     else{
//         resultEl.textContent = "GAME OVER!"
//     }
   
// } 

// function isRowFilled(evt){
//     let state = false
//     let currentRow = evt.parentElement
//     let currentRowCells = [...currentRow.children]
//     // console.log(state)
//     currentRowCells.forEach(eachCell => {
//         // console.log(eachCell.style.backgroundColor)
//         if(eachCell.style.backgroundColor === "rgb(242, 131, 160)"){
//             state = true            
//         }
//         else{
//             state = false
//             return           
//         }        
//     })
//     return state
// }
// function clearRow(board){
//     let rows = [...board.children]
//     // console.log(rows)
//     for(let i=19; i>=0; i--){
//         let childrn = [...rows[i].children]
//         // console.log(childrn)
//         if(i===0){
//             childrn.forEach(kid =>{
//                 kid.style.backgroundColor === "black"
//                 // console.log(kid)
//             } )
            
//         }
//         else{
//             let nextChildrn = [...rows[i-1].children]
//                 for(let j=0; j<childrn.length; j++){
//                     childrn[j].style.backgroundColor = nextChildrn[j].style.backgroundColor
//                 }
            
            
//         }
//         //if there are more than one row filled then the code should be adjusted to get the multiple filled rows deleted and move the other rows down.
//     }

// }
// function isGameOver(){
//     //check if last piece is in the row1, if yes then return true and 
// }