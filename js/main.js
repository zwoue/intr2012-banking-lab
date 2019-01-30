let balance = 0;
let name = `John Doe`;


// Greet the user by name
      // Search the document for the 'username' element
      let _username = document.getElementById('username');
      // Change the content of the element
      _username.innerHTML = name;

      // The above can be simplified:
      //    document.getElementById('username').innerHTML = name;



// 1. Let them know their starting balance
      // Search the document for the 'balance' element
      // Change the content of the element

//http://www.mattmorgante.com/technology/javascript-add-remove-html-elements

/*
list = document.getElementsByTagName('ul')[0];
newItem = document.createElement('li');
newTransaction = document.createTextNode('You deposited $' + document.getElementById('amount').value +'.');
newItem.appendChild(newTransaction);

list.appendChild(newItem);
*/

var completeTransaction = function() {

  // Store the value from the 'amount' input in a variable (let)
  let _amount = document.getElementById('amount').value;
  // 1. Update the balance using the transaction value
  balance += parseInt(_amount);

  // 2. Add a record to the history showing the amount deposited
  document.getElementById('history').innerHTML += '<li>You deposited $' + _amount + '.</li>';

  // Update the balance in the document
  document.getElementById('balance').innerHTML = balance;

  // 3. If the balance is less than 0, make the balance red, else make it black
    // A) change the style.color of the balance
    //IF STATEMENT : 
      //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else
    if (parseInt(document.getElementById('balance').innerHTML)< 0) {
      document.getElementById('balance').style.color = "red";
    }
    else {
      document.getElementById('balance').style.color = "black";
    }

    // B) create a css class and .add() a class to the balance
};

document.getElementById('process').addEventListener('click', completeTransaction);

// EVENT:
//  1) Which object should it be listening to?    document.getElementById('process')
//  2) What are we waiting for?                   'click'
//  3) What do we do when it happens? (callback)  completeTransaction



// 3. Add a record to the history (a list item)
// Update the balance variable
// Update the balance in the document



// Note: Both records must be visible
