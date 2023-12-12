function scuberGreetingForFeet(distanceTravelled) {
  if (distanceTravelled <= 400) {
    return 'This one is on me!';
  }
  else if (distanceTravelled > 2000 && distanceTravelled <= 2500) {
  return 'I will gladly take your thirty bucks.';
  }
  else if (distanceTravelled > 2500){
    return 'No can do.'
  }
} 
scuberGreetingForFeet(199);
scuberGreetingForFeet(2001);
scuberGreetingForFeet(25001);

function ternaryCheckCity(theDestinationCity){

  return theDestinationCity === 'NYC' ? 'Ok, sounds good.' : 'No go.';
 



}
ternaryCheckCity('NYC');
ternaryCheckCity('Pittsburgh');


function switchOnCharmFromTip(theTip){
  switch (theTip) {
    case 'generous':
      return 'Thank you so much.';
    case 'not as generous':
      return 'Thank you.';
    default:
      return 'Bye.';

  }
  // Write your code here!

  switchOnCharmFromTip('generous');
  switchOnCharmFromTip('not as generous');
  switchOnCharmFromTip('thanks for everything')
}