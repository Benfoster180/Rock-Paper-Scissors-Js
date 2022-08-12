
Player = "N/A"
Bot = "N/A"


//Function that is linked to the papper button
function Papper_Button_Clicked_Event() {
    Generate_Bots_Move()
    return Player = "Papper"
}

//Function that is linked to the Scissors button
function Scissors_Button_Clicked_Event() {
    Generate_Bots_Move()
    return Player = "Scissors";;
}

//Function that is linked to the Rock button
function Rock_Button_Clicked_Event() {
    Generate_Bots_Move()
    return Player = "Rock";
}

function Generate_Bots_Move() {
    //Assigns the Bot a random move!
        var Possible_Moves = [ "Rock","Papper","Scissors"];
        var index = Math.floor(Math.random() * Possible_Moves.length);
        Bot=Possible_Moves[index]
        Calculate_Winner()
        return;
}



function Calculate_Winner() {
    
    // Used to Detect any Draw
    if (Player==Bot){
        //Used to Display who won the game!
        Game_Result = "Draw"
        //Updates the Scoreboad, Used to control Draw event!
        document.getElementById('Number_of_Draws').innerHTML = Number(document.getElementById('Number_of_Draws').innerHTML) + 1;
        Update_Game_Data()
        return;
       
    }
    
    //Player Win by Rock
    if (Player=="Rock" && Bot=="Scissors"){
        //Used to Display who won the game!
        Game_Result = "Player"
        //Updates the Scoreboad, Used to control Win event!
        document.getElementById('Number_of_Wins').innerHTML = Number(document.getElementById('Number_of_Wins').innerHTML) + 1;
        Update_Game_Data()
        return;
       
    }

    if (Player=="Scissors" && Bot=="Papper"){
        Game_Result = "Player"
        //Updates the Scoreboad, Used to control Win event!
        document.getElementById('Number_of_Wins').innerHTML = Number(document.getElementById('Number_of_Wins').innerHTML) + 1;
        Update_Game_Data()
        return;
       
    }

    if (Player=="Papper" && Bot=="Rock"){
        Game_Result = "Player"
        //Updates the Scoreboad, Used to control Win event!
        document.getElementById('Number_of_Wins').innerHTML = Number(document.getElementById('Number_of_Wins').innerHTML) + 1;
        Update_Game_Data()
        return;
        
    }
    

    else{
        Game_Result = "Bot"
        //Updates the Scoreboad, Used to control lose event!
        document.getElementById('Number_of_Loses').innerHTML = Number(document.getElementById('Number_of_Loses').innerHTML) + 1;
        Update_Game_Data()
        return;
    }

}

function Update_Game_Data(){
    //The Move the player made
    document.getElementById('What_did_the_player_use').innerHTML = Player;
    //The Move the Bot made
    document.getElementById('What_did_the_Bot_Use').innerHTML = Bot;
    //Who One the game
    document.getElementById('game_result').innerHTML = Game_Result ;
    //Updates The Ammount of gamesplayed
    document.getElementById('Number_of_Games_Played').innerHTML =  Number(document.getElementById('Number_of_Games_Played').innerHTML)+1;
    //WorksOut the KD
    document.getElementById('Win_to_loss_ratio').innerHTML = ((Number(document.getElementById('Number_of_Wins').innerHTML) / Number(document.getElementById('Number_of_Games_Played').innerHTML)) * 100).toFixed(2) +"%";
      
}
