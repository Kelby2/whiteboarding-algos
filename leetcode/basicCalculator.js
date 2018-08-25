// Implement a basic calculator to evaluate an expression string.
// In the expression, the operator comes first, followed by the numbers that we are operating on.

// The expression string may contain open ( and closing parentheses ),
// an operator (+ - * /), non-negative integers. You can assume the parenthesis and order are written correctly. Blank space (' ') will separate new digits
//
// "(+ 3 5 (+ 9 (- 5 3)) (* 13 3) 1)" should return 59
// (3 + 5 + 9 + 2 + 39 + 1)

// First, create a function that evaluates an expression (string between parens)

// (+ 10 9 7)
function compute(string) {
  const operation = string[0];
  const digits = string.split(' ').slice(1);
  const total = parseInt(digits[0]);

  return digits.reduce(function(acc, el) {
  	switch (operation) {
  		case "+":
  			return parseInt(acc) + parseInt(el);
  		case "-":
  			return parseInt(acc) - parseInt(el);
  		case "*":
  			return parseInt(acc) * parseInt(el);
  		case "/":
  			return parseInt(acc) / parseInt(el);
  	}
  })
}

function mathEval(string) {
	const openParens = [];
	for (let i = 0; i < string.length; i++) {
		const currChar = string[i];
		if (currChar === '(') {
			openParens.push(i);
		}

		if (currChar === ')') {
			const startPos = openParens[openParens.length - 1];
			const expressionString = string.slice(startPos + 1, i);
			const evaluated = compute(expressionString);
			string = string.substr(0, startPos) + evaluated + string.substr(i + 1);
			i = startPos;
			openParens.pop();
		}
	}

	return parseInt(string);
}

console.log(mathEval("(+ 3 5 (+ 9 (- 5 3)) (* 13 3) 1)"));