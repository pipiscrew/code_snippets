/* add csv header */
console.log('Datetime Saved~Team1~~Team2~~SUM~P~TIME~ODD1~ODD2');

setInterval(function(){
    var divs = document.querySelectorAll('.ipo-TeamPoints_TeamScoresWrapper');

    var point_one = null;
    var point_two = null;
    var pipiscrew = null;

    [].forEach.call(divs, function(div) {
      point_one = null;
      point_two = null;
      pipiscrew = null;

      point_one = div.getElementsByClassName('ipo-TeamPoints_TeamScore-teamone');
      point_two = div.getElementsByClassName('ipo-TeamPoints_TeamScore-teamtwo');
      pipiscrew = div.getElementsByTagName('pipiscrew');

      var point_one_val = 0;
      var point_two_val = 0;

      if (point_one)
        point_one_val = parseInt(point_one[0].outerText);

      if (point_two)
        point_two_val = parseInt(point_two[0].outerText);

      if (pipiscrew) {
        if (pipiscrew.length==0)
        {
           /* used for the new entries (inject our element) */
          div.appendChild(document.createElement('pipiscrew')).textContent='pipiscrew init2';
           /* console.log('new entry added by server'); */
        }

        var sumup = point_two_val + point_one_val;
        var previous_value = parseInt(pipiscrew[0].outerText);

        if (previous_value!=sumup) {
          pipiscrew[0].style.color='red';
          pipiscrew[0].textContent = sumup;
          write2db(div, point_one_val, point_two_val, sumup);
        }
        else {
          pipiscrew[0].style.color='#ffdf1b';
        }
      }

    });

  
  divs = null;

}, 3000);


function write2db(element, point_one, point_two, summation){
  
  var team_points = element.parentNode;  /*ipo-TeamPoints_TeamScoresWrapper*/
  var match_scoredisplay = team_points.parentNode;  /*ipo-ScoreDisplayStandard_Wrapper*/

  if (match_scoredisplay){
    var in_play_timer = (match_scoredisplay.getElementsByClassName('ipo-InPlayTimer')[0].outerText);
    var period_info = (match_scoredisplay.getElementsByClassName('ipo-PeriodInfo')[0].outerText);

     /*parse teams div*/
    var team_stack_all = match_scoredisplay.getElementsByClassName('.ipo-TeamStack');
    var team_stack_all2 = match_scoredisplay.getElementsByClassName('ipo-TeamStack_Team');
     /*console.log(team_stack_all2[0].outerText + '|' + team_stack_all2[1].outerText);*/
  } 
  else {
    console.log('no info at source html!');
    return;
  }

  var fixture_tr = match_scoredisplay.parentNode.parentNode;  /*ipo-Fixture_TableRow*/
  var main_markets = fixture_tr.getElementsByClassName('ipo-MainMarkets');
  var market_renders = fixture_tr.getElementsByClassName('ipo-MainMarketRenderer');
  var odds = market_renders[1].getElementsByClassName('gl-ParticipantCentered_Handicap');
  
   var odd_team_one = '0';
   var odd_team_two = '0';
  if (odds.length==2){
    odd_team_one = odds[0].outerText;
    odd_team_two = odds[1].outerText;
  } 
  
  console.log(new Date().toISOString() + '~' + team_stack_all2[0].outerText.replace('\n','') + '~' + point_one + '~' + team_stack_all2[1].outerText.replace('\n','') + '~' + point_two + '~' + summation + '~' + period_info + '~' + in_play_timer + '~' + odd_team_one.replace('O ','')  + '~' +  odd_team_two.replace('U ',''));

}