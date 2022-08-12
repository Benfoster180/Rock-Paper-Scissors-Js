
Player = "N/A"
Bot = "N/A"
Game_end = false
function Papper() {
    Game_end = false
    Bot_move()
    return Player = "Papper"
}

function Scissors() {
    Bot_move()
    return Player = "Scissors"
}

function Rock() {
    Bot_move()
    return Player = "Rock"
}

function Bot_move() {
        var answers = [ "Rock",
    "Papper",
    "Scissors"];

    var index = Math.floor(Math.random() * answers.length);
    

    Bot=answers[index]
    Result()
    return Bot
}



function Result() {
    
    //If Draw
    if (Player==Bot && Game_end == false){
        Who_won = "Draw"
        Current_draw_score = document.getElementById('Draw').innerHTML;
        New_Draw = Number(Current_draw_score) + 1;
        document.getElementById('Draw').innerHTML = New_Draw;
        last_game()
        Game_end = true
    
    }
    
    //Player Win by Rock
    if (Player=="Rock" && Bot=="Scissors"){
        Who_won = "Player"
        Current_win_score = document.getElementById('Win').innerHTML;
        New_Win = Number(Current_win_score) + 1;
        document.getElementById('Win').innerHTML = New_Win;
        last_game()
       
    }

    if (Player=="Scissors" && Bot=="Papper"){
        Who_won = "Player"
        Current_win_score = document.getElementById('Win').innerHTML;
        New_Win = Number(Current_win_score) + 1;
        document.getElementById('Win').innerHTML = New_Win;
        last_game()
       
    }

    if (Player=="Papper" && Bot=="Rock"){
        Who_won = "Player"
        Current_win_score = document.getElementById('Win').innerHTML;
        New_Win = Number(Current_win_score) + 1;
        document.getElementById('Win').innerHTML = New_Win;
        last_game()
        
    }

    if (Bot=="Papper" && Player=="Rock"){
        Who_won = "Bot"
        Current_Lose_score = document.getElementById('Lose').innerHTML;
        New_Lose = Number(Current_Lose_score) + 1;
        document.getElementById('Lose').innerHTML = New_Lose;
        last_game()   
    }

    if (Bot=="Scissors" && Player=="Papper"){
        Who_won = "Bot"
        Current_Lose_score = document.getElementById('Lose').innerHTML;
        New_Lose = Number(Current_Lose_score) + 1;
        document.getElementById('Lose').innerHTML = New_Lose;
        last_game()   
    }

    if (Bot=="Rock" && Player=="Scissors"){
        Who_won = "Bot"
        Current_Lose_score = document.getElementById('Lose').innerHTML;
        New_Lose = Number(Current_Lose_score) + 1;
        document.getElementById('Lose').innerHTML = New_Lose;
        last_game()   
    }

}

function last_game(){
    document.getElementById('You_Played').innerHTML = Player;
    document.getElementById('Bot_move').innerHTML = Bot;
    document.getElementById('game_result').innerHTML = Who_won ;

    //Used to display the numbers of games that have been played
    Play_game_counter = document.getElementById('play').innerHTML;
    Played_games = Number(Play_game_counter) + 1;
    document.getElementById('play').innerHTML = Played_games;

    wins = document.getElementById('Win').innerHTML;
    loses =document.getElementById('Lose').innerHTML;

    Sum_all_games = Number(wins + loses);
    Perctange = Number((wins / Sum_all_games) * 100) + "%" ;
    console.log(Perctange);
    document.getElementById('kd').innerHTML = Perctange;
}

