let player = "O";

let totalNumberOfTurns = 0;

let gameOver = false;

function performLogic(buttonId, tileId) {
    $(buttonId).hide();
    $(tileId).html(player);
    if (player === "O") {
        player = "X";
    } else {
        player = "O"
    }

    totalNumberOfTurns =  totalNumberOfTurns + 1;

    if (totalNumberOfTurns === 9) {
        gameOver = true;
    }
    checkVerticalWins()
    
};

function win(tileOne, tileTwo, tileThree){
    let tile1 = $('#tile1').text();
    let tile2 = $('#tile2').text();
    let tile3 = $('#tile3').text();
    let tile4 = $('#tile4').text();
    let tile5 = $('#tile5').text();
    let tile6 = $('#tile6').text();
    let tile7 = $('#tile7').text();
    let tile8 = $('#tile8').text();
    let tile9 = $('#tile9').text();
    if ((tileOne && tileTwo && tileThree) === player){
        return player
    }
};

function checkVerticalWins(){
    let tile1 = $('#tile1').text();
    let tile2 = $('#tile2').text();
    let tile3 = $('#tile3').text();
    let tile4 = $('#tile4').text();
    let tile5 = $('#tile5').text();
    let tile6 = $('#tile6').text();
    let tile7 = $('#tile7').text();
    let tile8 = $('#tile8').text();
    let tile9 = $('#tile9').text();    
    
    if (tile1 === tile2 && tile2 === tile3){
        console.log("WOOHOO")
    }
};


$("#button1").click(function() {
    performLogic("#button1","#tile1");
});

$("#button2").click(function() {
    performLogic("#button2","#tile2");
});

$("#button3").click(function() {
    performLogic("#button3","#tile3");
});

$("#button4").click(function() {
    performLogic("#button4","#tile4");
});

$("#button5").click(function() {
    performLogic("#button5","#tile5");
});

$("#button6").click(function() {
    performLogic("#button6","#tile6");
});

$("#button7").click(function() {
    performLogic("#button7","#tile7");
});

$("#button8").click(function() {
    performLogic("#button8","#tile8");
});

$("#button9").click(function() {
    performLogic("#button9","#tile9");
});