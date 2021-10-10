let userName = ''

userName ? console.log(`Hello ${userName}!`)
: console.log('Hey there, friend!');

let userQuestionInsert = 'When will the pizza arrive?'

console.log(`The user wants to know...'${userQuestionInsert}'`);

let randomNumber = Math.floor(Math.random()* 8);

let eightBall = '8'
switch(eightBall){

  case '0' :
    console.log ('TEST')
       break;

  case '1' :
    console.log ('Probz depends on climate change.')
      break;

  case '2' :
    console.log ('Dumb question... ask again?')
     break;

  case '3' :
    console.log('Do I look like a genie?')
      break;

  case '4' :
     console.log ('Low battery! Try again...')
       break;

  case '5':
    console.log ('The future is growing hazy...')
      break;

  case '6':
    console.log ('James Bond?')
     break;

  case '7':
    console.log ('Let me check Reddit!')
     break;

  case '8':
    console.log ('I don\'t have permission to say...')
      break;
}
