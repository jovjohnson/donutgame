$(document).ready(init);

var total = 0;
var shuffleCount = 0;
var donutArr;
var donuts;
var remainingShuffles = 3;
var removedDonuts = 0;
var win = 0;

function init() {

	makeDonuts();
	donutArr = []

	$('#submit').click(submit);
	$('#restart').click(restartGame);
	$('#shuffle').click(shuffleDonuts);
	$('.num-selector').click(select);
}

function makeDonuts() {
	donutArr = []
	var $donutArea = $('#donut-area');
	$donutArea.empty();
	donuts = Math.ceil(Math.random() * 12);

	for(var i = 0; i < donuts; i++) {
		var $donut = $('<div>').addClass('donuts');
		donutArr.push($donut)
	}

	$donutArea.append(donutArr);
	var numArray = $(".num-selector");

	if (numArray.length === 0) {
		console.log("you win");
}

}

function select() {
	$(this).toggleClass('selected');
	 var $num = $(this).text();
	 if($(this).hasClass('selected')) {

	 }

}

function submit() {

	var $selected = $(".selected");
	var $donut = $(".donut");

	$selected.each(function(index,value){

		total += parseInt(value.innerHTML);
		win += parseInt(value.innerHTML);
		if (total === donuts) {
			$selected.remove();
			makeDonuts();
		}
	});

	total = 0;
}

function restartGame() {
	location.reload();
}

function shuffleDonuts() {
	if (shuffleCount === 3) {
		return;
	}
	shuffleCount++;
	remainingShuffles--;

	var shufflesLeft = $("#shuffles-left");
	shufflesLeft.text(remainingShuffles);

	makeDonuts();

}
