class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements
      questiom.hide();
    //write code to change the background color here

    //write code to show a heading for showing the result of Quiz
    var title = createElement('h2')
    title.html("Quiz Game");
    title.position(130, 0);

    //call getContestantInfo( ) here
    
    allcontestants.getContestantInfo();


    //write condition to check if contestantInfor is not undefined
    if(allcontestants!== undefined){
      fill("black");
      textSize(20);
      text("NOTE:player given the correct answer is highlighted in green colour",130,230)
    }
    //write code to add a note here

    //write code to highlight contest who answered correctly
    for(var plr in allContestants){
      var correctAns = "2";
     if (correctAns === allContestants[plr].answer)
     fill("Green")
      else
    fill("red");
  }

  }}
