'use strict';
// meant for browser
// just uncomment and paste into console

// function mySetTimeout() {
//   setTimeout(function() { alert('HAMMERTIME'); }, 5000);
// }
//
// function hammerTime(time) {
//   window.setTimeout( function printTime() {
//     alert(`${time} is hammertime!`);
//   }, time);
// }

const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function teaAndBiscuits () {
  let first, second;

  reader.question('Would you like some tea?', (res) => {
    first = res;
    console.log(`You replied ${res}.`);
  });

  reader.question('Would you like some biscuits?', (res) => {
    second = res;
    console.log(`You replied ${res}.`);
  });

  const firstRes = (first === 'yes') ? 'do' : 'don\'t';
  const secondRes = (second === 'yes') ? 'do' : 'don\'t';
  console.log(`So you ${firstRes} want tea and you ${secondRes} want biscuits.`);
  reader.close();
}

function teaAndBiscuits() {
  let first, second;

  function renderResponse() {
    const firstRes = (first === 'yes') ? 'do' : 'don\'t';
    const secondRes = (second === 'yes') ? 'do' : 'don\'t';
    console.log(`So you ${firstRes} want tea and you ${secondRes} want biscuits.`);
    reader.close();
  }

  function teaQuestion() {
    reader.question('Would you like some tea?', (res) => {
      first = res;
      console.log(`You replied ${res}.`);
      biscuitsQuestion();
    });
  }

  function biscuitsQuestion() {
    reader.question('Would you like some biscuits?', (res) => {
      second = res;
      console.log(`You replied ${res}.`);
      renderResponse();
    });
  }

  teaQuestion();
}

teaAndBiscuits();
