var game={
  first:0,
  second:0,
  third:0,
  fourth:0,
  five:0,
  six:0,
  seven:0,
  eight:0,
  nine:0
 
}
var turn =0;
var totalGame=0;
var x = '<span class="fa fa-times fa-5x" ></span>';
var o = '<span class="fa fa-circle-o fa-5x"></span>';

var player={
player1:'',
player2:''
}

function setPlayer(id){
  if(id==="x"){
    player.player1=x;
    $('#x').attr("disabled", true);
    player.player2=o;
    $('#o').attr("disabled", true);
  }
  else if(id==="o"){
    player.player1=o;
    $('#o').attr("disabled", true);
    player.player2=x;
    $('#x').attr("disabled", true);
  }
  displayPlayer();
}
function displayPlayer(){
  $('#p1').html(player.player1);
  $('#p2').html(player.player2);
}
function icon(id){
  if(id==="first" && game.first==0){
    if(turn%2==0){
    $('#first').attr("disabled", true);
    $('#first').html(player.player1);
    game.first=4;
    turn++;
  }
  else{
    $('#first').attr("disabled", true);
    $('#first').html(player.player2);
    game.first=1;
    turn++;
  }
  }
  else if(id==="second" && game.second==0){
    if(turn%2==0){
    $('#second').attr("disabled", true);
    $('#second').html(player.player1);
    game.second=4;
    turn++;
  }
  else{
    $('#second').attr("disabled", true);
    $('#second').html(player.player2);
    game.second=1;
    turn++;
  }
   
  }
  else if(id==="third" && game.third==0){
    if(turn%2==0){
    $('#third').attr("disabled", true);
    $('#third').html(player.player1);
    game.third=4;
    turn++;
  }
  else{
    $('#third').attr("disabled", true);
    $('#third').html(player.player2);
    game.third=1;
    turn++;
  }
  }
  else if(id==="fourth" && game.fourth==0){
    if(turn%2==0){
    $('#fourth').attr("disabled", true);
    $('#fourth').html(player.player1);
    game.fourth=4;
    turn++;
  }
  else{
    $('#fourth').attr("disabled", true);
    $('#fourth').html(player.player2);
    game.fourth=1;
    turn++;
  }
  }
  else if(id==="five" && game.five==0){
    if(turn%2==0){
    $('#five').attr("disabled", true);
    $('#five').html(player.player1);
    game.five=4;
    turn++;
  }
  else{
    $('#five').attr("disabled", true);
    $('#five').html(player.player2);
    game.five=1;
    turn++;
  }
  }
  else if(id==="sixth" && game.six==0){
    if(turn%2==0){
    $('#sixth').attr("disabled", true);
    $('#sixth').html(player.player1);
    game.six=4;
    turn++;
  }
  else{
    $('#sixth').attr("disabled", true);
    $('#sixth').html(player.player2);
    game.six=1;
    turn++;
  }
  }
  else if(id==="seven" && game.seven==0){
    if(turn%2==0){
    $('#seven').attr("disabled", true);
    $('#seven').html(player.player1);
    game.seven=4;
    turn++;
  }
  else{
    $('#seven').attr("disabled", true);
    $('#seven').html(player.player2);
    game.seven=1;
    turn++;
  }
  }
  else if(id==="eight" && game.eight==0){
   if(turn%2==0){
    $('#eight').attr("disabled", true);
    $('#eight').html(player.player1);
    game.eight=4;
    turn++;
  }
  else{
    $('#eight').attr("disabled", true);
    $('#eight').html(player.player2);
    game.eight=1;
    turn++;
  }
  }
  else if(id==="nine" && game.nine==0){
    if(turn%2==0){
    $('#nine').attr("disabled", true);
    $('#nine').html(player.player1);
    game.nine=4;
    turn++;
  }
  else{
    $('#nine').attr("disabled", true);
    $('#nine').html(player.player2);
    game.nine=1;
    turn++;
  }
}
compute();
}

function compute(){

  if(turn>=5){
    var row= rowChecked();
    var col = colChecked();
    var diag = diagChecked();
    if(row ==true|| col==true || diag==true){
      resultPopUp(turn);
      gameStat();
      setTimeout(reset, 1000);
    }
}
if(turn==9){
  totalGame +=1;
  setTimeout(reset, 1000);
  gameStat();
}
}

function rowChecked(){
  
  if(((game.first==game.second) && (game.second==game.third)) ||((game.first==game.second) && (game.second==game.third))){
    if(((game.first+game.second+game.third)==12) ||((game.first+game.second+game.third)==3)){
      return true;
    }
  }
  else if(((game.fourth==game.five) && (game.five==game.six))|| ((game.fourth==game.five)&& (game.five==game.six))){
    if(((game.fourth+game.five+game.six)==12) ||((game.fourth+game.five+game.six)==3)){
      return true;
    }
  }
  else if(((game.seven==game.eight) && (game.eight==game.nine))|| ((game.seven==game.eight)&&(game.eight==game.nine))){
    if(((game.seven+game.eight+game.nine)==12) ||((game.seven+game.eight+game.nine)==3)){
     return true;
    }
  }
  
}
function colChecked(){
  
  if(((game.first==game.fourth)&&(game.fourth==game.seven))|| ((game.first==game.fourth)&&(game.fourth==game.seven))){
    if(((game.first+game.fourth+game.seven)==12) ||((game.first+game.fourth+game.seven)==3)){
     return true;
    }
  }
  else if(((game.second==game.five)&&(game.five==game.eight))  || ((game.second==game.five)&&(game.five==game.eight))){
    if(((game.second+game.five+game.eight)==12) ||((game.second+game.five+game.eight)==3)){
      return true;   
    }
  }
  else if(((game.third==game.six)&&(game.six==game.nine)) || ((game.third==game.six)&&(game.six==game.nine))){
    if(((game.third+game.six+game.nine)==12) ||((game.third+game.six+game.nine)==3)){
    return true;
  }
  }
  
}
function diagChecked(){
  if(((game.first==game.five)&&(game.five==game.nine)) || ((game.first==game.five)&&(game.five==game.nine))){
   if(((game.first+game.five+game.nine)==12) ||((game.first+game.five+game.nine)==3)) {
    return true;
  }
  }
  else if(((game.third==game.five)&&(game.five==game.seven)) || ((game.third==game.five)&&(game.five==game.seven))){
    if(((game.third+game.five+game.seven)==12) ||((game.third+game.five+game.seven)==3)){
    return true;
  }
  }
}
function reset(){
  $('#first').html("");
  $('#second').html("");
  $('#third').html("");
  $('#fourth').html("");
  $('#five').html("");
  $('#sixth').html("");
  $('#seven').html("");
  $('#eight').html("");
  $('#nine').html("");
  game={
  first:0,
  second:0,
  third:0,
  fourth:0,
  five:0,
  six:0,
  seven:0,
  eight:0,
  nine:0
 
}
turn =0;
$('#result').html(" ");
}

function resultPopUp(id){
  if((id%2)==1){
    stat.player1.Win +=1;
    stat.player2.Lose +=1;
    totalGame = stat.player1.Win+stat.player1.Lose;
   $('#result').html("Player 1"+ " Won ");
  }
  else{
    stat.player2.Win +=1;
    stat.player1.Lose +=1;
    totalGame = stat.player2.Win+stat.player2.Lose;
    $('#result').html("Player 2"+ " Won ");
  }
}
var stat={
  player1:{
    Win:0,
    Lose:0

  },
  player2:{
    Win:0,
    Lose:0
  }
}
var totalGame=0;
function gameStat(){
  $('#totalGame').html(totalGame);
  $('#Win1').html(stat.player1.Win);
  $('#Lose1').html(stat.player1.Lose);
  $('#Win2').html(stat.player2.Win);
  $('#Lose2').html(stat.player2.Lose);
}

function play(){
  $( document ).ready(function() {
      $('.gameControls').hide();
      $("#gamePoint").show();
      $('.gameReset').show();
      $('.gameReset').css('text-align', 'center');
  });
}