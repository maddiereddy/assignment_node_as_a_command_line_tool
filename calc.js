/************************* Pseudocode **********************************

1. Get user input: argv = process.argv
2. Check parsed input:
	if argv[2] === '-v' or '--version' or '-h' or '--help'
		print relevant info
	else
		check if argv[2] is a command and next two array items are numbers
		if yes
			do operation requested in command
			while argv.length not reached
				do chaining by:
				move three places in array 
				check  argv[5] for command and arg[6] is number
				do operation  	
				continue till array .length reached
		else
			print out error message
3. print out final answer

**************************************************************************/

let args = process.argv.slice(2);
let command, int1, int2;
let subTotal = 0;
let debugFlag = false;

while (args.length !== 0) {

  command = args.shift();

  switch (command) {
  	
	case 'add':
  	case 'sub':
  	case 'div':
  	case 'mult':
  	case 'pow':
  	  if (subTotal === 0) subTotal = args.shift();

  	  int1 = subTotal;
  	  int2 = args.shift();

  	  subTotal = doMath(command, int1, int2);

  	  if (debugFlag) {
  	  	console.log(`${command} ${int1} ${int2} => ${subTotal}` );
  	  } else {
  	  	console.log(`Result: ${ subTotal } `);
  	  }
  	  break;
	
	case 'sqrt':
	  if (subTotal === 0) subTotal = args.shift();

	  int1 = subTotal;
	  subTotal = Math.sqrt(int1);
	  if (debugFlag) {
  	  	console.log(`${command} ${int1} => ${subTotal}` );
  	  } else {
	    console.log(`Result: ${ subTotal } `);
	  }
	  break;

	case '-d':
  	case '--debug':
  	  debugFlag = true;
  	  console.log('Debug mode turned on now');
  	  break;

  	case '-v':
  	case '--version':
  	  console.log('1.0.0');
  	  break;

  	case '-h':
  	case'--help':
  	  printHelp();
  	  break;

  	case 'done':
  	  console.log("Goodbye!")
  	  process.exit();

  	default:
      console.log('Invalid input, please try again or type -h for help');
      break;
  }	

}	

function doMath(command, num1, num2){

  switch (command) {

	case 'add': 
		return Number(num1) + Number(num2);
  	case 'sub':
  		return Number(num1) - Number(num2);
  	case 'div':
  		return Number(num1) / Number(num2);
  	case 'mult':
  		return Number(num1) * Number(num2);
  	case 'pow':
  		return Math.pow(Number(num1), Number(num2));
  	default:
  		break;
  }
}

function printHelp() {

	console.log(`
  	--------- How to use calc.js ---------
  	Type "done" to exit program
	  or "-v" or "--version" for version 
	  or "-h" or "--help" for help
	  or "-d" or "--debug" for debug mode
	--------------------------------------
	Usage:  <oper> <int> <int>
	where <oper> could be: 
	  add/sub/mult/div/sqrt/pow
	--------------------------------------
	Example:  
	  add 5 10
	Or, could be chained like this:
	  add 5 10 sub 4
	--------------------------------------
		`); 
}