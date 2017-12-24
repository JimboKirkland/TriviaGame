$('#start').on('click', function() {
	game.start();

	console.log("STARTING GAME");
});


$(document).on('click', '#end', function() {
	game.done();
});


// QUESTIONS BELOW ****************************
var questions = [{
	question:"What is the name of the group believed to be pulling the strings?",
	answers: ["Enlightened Ones", "Opus Dei", "Illuminati", "Jay-Z and Beyonce"],
	correctAnswer: "Illuminati"
}, {
	question:"Who is Adolfo Nicolas?",
	answers: ["The Black Pope", "The High Cardinal", "The Blue Pope", "The Pope's Butler"],
	correctAnswer: "The Black Pope"
}, {
	question:"Skull and Bones is a secret organization at what institution?",
	answers: ["Harvard", "MIT", "Yale", "Perimeter College"],
	correctAnswer: "Yale"
}, {
	question:"The United States Marshals Service and FBI were involved in what famous standoff with American citizens?",
	answers: ["Topeka", "Ruby Ridge", "Waco", "Boise"],
	correctAnswer: "Ruby Ridge"
}, {
	question:"The NSA was said to be sending all illegally obtained citizen communications to what NSA center?",
	answers: ["Cheyenne", "Area 51", "Utah Data Center", "Foxwoods"],
	correctAnswer: "Utah Data Center"
}, {
	question:"This was the name of the experiment in which the US government was trying to discover time travel.",
	answers: ["Philadelphia Experiment", "D.U.M.B.S", "Montauk", "Langley Dream Session"],
	correctAnswer: "Philadelphia Experiment"
}, {
	question:"The world's top elite gather yearly and burn an owl effigy at what gathering?",
	answers: ["Kentucky Derby", "Bohemian Grove", "Bilderberg Meeting", "Gotham Club"],
	correctAnswer: "Bohemian Grove"
}, {
	question:"What is the name given to clouds that form behind airplanes believed to be spraying chemicals?",
	answers: ["Bad Clouds", "Jetstreams", "Chemtrails", "Stratonimbus"],
	correctAnswer: "Chemtrails"
}, {
	question:"Who is the famous Hollywood director believed to have helped fake the moon landings?",
	answers: ["Alfred Hitchcock", "Martin Scorcese", "Orson Welles", "Stanley Kubrick"],
	correctAnswer: "Stanley Kubrick"
}, {
	question:"This is the name of the individual claiming to be from Venus, who spent 3 years with the Pentagon by request of President Eisenhower.",
	answers: ["Dick Solomon", "EBE", "Martian Manhunter", "Valiant Thor"],
	correctAnswer: "Valiant Thor"
}];


// GAME AND TIMER *************************
var game = {
	correct: 0,
	incorrect: 0,
	counter: 100,
	countdown: function() {
		game.counter--;
		$("#counter").html(game.counter);
			if (game.counter <= 0) {
				console.log("Time is up! They're after you!");
				game.done();
			}
	},
	start: function () {
		timer = setInterval(game.countdown,1000);
		$('#subwrapper').prepend('<h2>Time Remaining: <span id="counter">120</span> Seconds</h2>')
		$('#start').remove();
		for (var i = 0; i < questions.length; i++) {
			$('#subwrapper').append('<h2>' + questions[i].question + '</h2>');
			for (var j = 0; j < questions[i].answers.length; j++) {
				$('#subwrapper').append("<input type='radio' name='question-" + i + " 'value=' " + questions[i].answers[j] + " '>" + questions[i].answers[j])
			}
		}
	},

	done: function(){
		$.each($('input[name="question-0]":checked'), function() {
			if($(this).val()==questions[0].correctAnswer){
				game.correct++;
		}	else {
				game.incorrect++;
		}
		});
		$.each($('input[name="question-1]":checked'), function(){
			if($(this).val()==questions[1].correctAnswer){
				game.correct++;
		}	else {
				game.incorrect++;
		}
		});
		$.each($('input[name="question-2]":checked'), function(){
			if($(this).val()==questions[2].correctAnswer){
				game.correct++;
		}	else {
				game.incorrect++;
		}
		});
		$.each($('input[name="question-3]":checked'), function(){
			if($(this).val()==questions[3].correctAnswer){
				game.correct++;
		}	else {
				game.incorrect++;
		}
		});
		$.each($('input[name="question-4]":checked'), function(){
			if($(this).val()==questions[4].correctAnswer){
				game.correct++;
		}	else {
				game.incorrect++;
		}
		});
		$.each($('input[name="question-5]":checked'), function(){
			if($(this).val()==questions[5].correctAnswer){
				game.correct++;
		}	else {
				game.incorrect++;
		}
		});
		$.each($('input[name="question-6]":checked'), function(){
			if($(this).val()==questions[6].correctAnswer){
				game.correct++;
		}	else {
				game.incorrect++;
		}
		});
		$.each($('input[name="question-7]":checked'), function(){
			if($(this).val()==questions[7].correctAnswer){
				game.correct++;
		}	else {
				game.incorrect++;
		}
		});
		$.each($('input[name="question-8]":checked'), function(){
			if($(this).val()==questions[8].correctAnswer){
				game.correct++;
		}	else {
				game.incorrect++;
		}
		});
		$.each($('input[name="question-9]":checked'), function(){
			if($(this).val()==questions[9].correctAnswer){
				game.correct++;
		}	else {
				game.incorrect++;
		}
		});
	
	this.result();
	},

	result: function() {
		clearInterval(timer);
		$('#subwrapper h2').remove();

		$('#subwrapper').html("<h2>All Done!</h2>");
		$('#subwrapper').append("<h3>Correct Answers: " + this.correct + "</h3>");
		$('#subwrapper').append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
		$('#subwrapper').append("<h3>Unanswered: " + (questions.length-(this.incorrect+this.correct)) + "</h3>");
	}
};


















