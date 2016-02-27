$(document).ready(init);

var total = 0;
var shuffleCount = 0;
var donutArr;

function init() {
	shuffleDonuts()
	donutArr = []

	$('#checker').click(checker);
	$('#restart').click(restartGame);
	$('#shuffle').click(shuffleDonuts);
	$('.num-selector').click(select);
}

function shuffleDonuts() {

	shuffleCount++;
	//console.log(shuffleCount);
	donutArr = []
	var $donutArea = $('#donut-area');
	$donutArea.empty();
	var getRandom = Math.ceil(Math.random() * 12);
	
	for(var i = 0; i < getRandom; i++) {
		var $donut = $('<div>').addClass('donuts');
		donutArr.push($donut)
	}
		$donutArea.append(donutArr);
		console.log(donutArr.length)

}

function select() {
	$(this).toggleClass('selected');
	 var $num = $(this).text();
	 if($(this).hasClass('selected')) {
	 	 //console.log($num);
	 	 
	 }
	
}

function checker() {

	donutArr;
	var $selected = $(".selected");
	var $donut = $(".donut");
	//donutArr.push($donut);
	 
	$selected.each(function(index,value){
		total += parseInt(value.innerHTML);
		//console.log(index, value);
		console.log(total);
		//console.log(donutArr.length);
		if (total == donutArr) {
		
		$selected.addClass('dead');

		shuffleDonuts();
	}
		});

	total = 0;

}

function restartGame() {

	var $selected = $(".selected");
	$selected.on('click');
	shuffleDonuts();
}


 // if (total === $('#stars').children().length){
 //   removeNumbers();
 //   generateStars(correct);
 // }



