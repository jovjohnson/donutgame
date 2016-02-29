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
	
	//console.log(shuffleCount);
	donutArr = []
	var $donutArea = $('#donut-area');
	$donutArea.empty();
	donuts = Math.ceil(Math.random() * 12);
	
	for(var i = 0; i < donuts; i++) {
		var $donut = $('<div>').addClass('donuts');
		donutArr.push($donut)
	}
	
	$donutArea.append(donutArr);
		//console.log(donutArr.length)


}

function select() {
	$(this).toggleClass('selected');
	 var $num = $(this).text();
	 if($(this).hasClass('selected')) {
	 	 //console.log($num);
	 	 
	 }
	
}

function submit() {

	//console.log(donuts);
	var $selected = $(".selected");
	var $donut = $(".donut");
	//donutArr.push($donut);
      
	$selected.each(function(index,value){
		total += parseInt(value.innerHTML);
		win += parseInt(value.innerHTML);
		//console.log(index, value);
		//console.log(total);
		console.log(win);
		if (total === donuts) {
		
		$selected.remove();
		// removedDonuts++;
		// console.log(removedDonuts);
		makeDonuts();
	}
		});

	total = 0;

	if(win === 45) {
		//this happens
		console.log("")
		var $winAlert = $('<p>You Win!</p>');
		var $donut = $('.donut');
		$donut.remove();

	}

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

 // if (total === $('#stars').children().length){
 //   removeNumbers();
 //   generateStars(correct);
 // }



