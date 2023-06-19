const {canAI} = require('./ai_const');

const millionaire = canAI.getA("millionaire");
const cartoon = canAI.getA("simpsonsChar");
const comedian = canAI.getA("publiclyShamedComedian");
const doctor = "Dr. " + canAI.getA("wizardLastName");
const car = canAI.getA("fancyCar");
const creature = canAI.getA("fantasyCreature");

const joke = 
  `A doctor, a millionaire, and a comedian walk into a bar.  ` +
  `${doctor}, wanting to impress the room, annouces he will buy ` +
  `ten drinks for anyone that has a cooler ride than his ${car}, `+
  `parked outside. \n\nWith that, ${millionaire} stands up and ` +
  `says, "I'll take those drinks!  I just rode my ${creature} ` +
  `familiar, all the way from Middleearth, and it's tied up to ` +
  `a pole near your car.\n\n The patrons of the bar are very ` +
  `impressed, and the bartender begins to ask the millionaire ` +
  `what drinks he should put on ${doctor}'s tab. \n\nAlready ` +
  `drunk, ${millionaire} says, "I'll have ` +
  `one ${canAI.getA("fancyDrink")}, ` +
  `one ${canAI.getA("fancyDrink")}, ` +
  `one ${canAI.getA("fancyDrink")}, ` +
  `one ${canAI.getA("fancyDrink")}, ` +
  `one ${canAI.getA("fancyDrink")}, ` +
  `one ${canAI.getA("fancyDrink")}, ` +
  `one ${canAI.getA("fancyDrink")}, ` +
  `one ${canAI.getA("fancyDrink")}, ` +
  `one ${canAI.getA("fancyDrink")}, ` +
  `and one ${canAI.getA("fancyDrink")}, and don't make me ` +
  `repeat myself!"\n\nWith that, ${comedian} suddenly turns ` +
  `around and out of nowhere says, "I'll take those!  I just ` + 
  `slid in here on my public repuation, and it's non-existent!"`;

console.log(joke)


