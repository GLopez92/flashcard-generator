function BasicCards(front, back) {
	  this.front = front;
	  this.back = back;

	// return new BasicCards(front,back);
};

function ClozeCards(text, cloze) {

	  this.text = text;
	  this.cloze = cloze;
	  // this.fullText = function(){
	  // 	return this.text
	  // }
	  // this.getCloze = function (){
	  // 	return this.cloze
	  // }
	  // this.partial = function(){
	  // 	var partialText = this.text.replace(this.cloze, "...");

	  // 	return partialText
	  // }
	  // this.error = function(answer, response){
	  // 	// if repsonse is not inside of answer log error
	  // 	if(!(response === answer)){
	  // 		console.log("Error: Enter correct information");
	  // 	}
	  // }

	// return new BasicCards(text,cloze);

}

ClozeCards.prototype.fullText = function() {
	return this.text
};

ClozeCards.prototype.getCloze = function() {
	return this.cloze
};

ClozeCards.prototype.partial = function() {
	var partialText = this.text.replace(this.cloze, "...");
	return partialText
};

// ClozeCards.prototype.error = function() {
// 	if(!(response === answer)){
// 	  		console.log("Error: Enter correct information");
// 	  	}

// };




var firstPresident = new BasicCards(
    "Who was the first president of the United States?", "George Washington");

"Who was the first president of the United States?"
console.log(firstPresident.front); 

"George Washington"
console.log(firstPresident.back); 

var firstPresidentCloze = new ClozeCards(
    "George Washington was the first president of the United States.", "George Washington");


firstPresidentCloze.fullText();
// firstPresidentCloze.error();
firstPresidentCloze.getCloze();
firstPresidentCloze.partial();


// // "George Washington"
// console.log(firstPresidentCloze.getCloze()); 

// // // " ... was the first president of the United States.
// console.log(firstPresidentCloze.partial()); 

// // // "George Washington was the first president of the United States.
// console.log(firstPresidentCloze.fullText());


// // Should throw or log an error because "oops" doesn't appear in "This doesn't work"
// brokenCloze.prototype = ("This doesn't work", "oops"); 

// firstPresidentCloze.brokenCloze.start();