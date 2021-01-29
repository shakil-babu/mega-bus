//====================================================== Start =============================================================


// for decrement
const firstClassIncrement = document.getElementById('first-class-increment') ;
firstClassIncrement.addEventListener('click' , function(){
	ticketPriceHandler(true , 'first-class');
	
});
var economyIncrement = document.getElementById('economy-increment') ;
economyIncrement.addEventListener('click', function(){
    ticketPriceHandler(true, 'economy');
})


// for decrement
const firstClassDecrement  = document.getElementById('first-class-decrement');
firstClassDecrement.addEventListener('click' , function () {
	ticketPriceHandler(false , 'first-class');
}) 
var economyDecrement = document.getElementById('economy-decrement') ;
economyDecrement.addEventListener('click', function(){
	ticketPriceHandler(false , 'economy');
})


// main function
function ticketPriceHandler(isIncrement, ticketName) {
	let ticketLength = document.getElementById(ticketName+'-input');
    let ticketCount = parseInt(ticketLength.value );
	if (isIncrement == false && ticketCount > 0) {
		ticketCount -=1;  
	}
	if(isIncrement == true){
		ticketCount +=1
	}
	ticketLength.value = ticketCount ;
	let ticketPrice = 0 ;
	if(ticketName== 'first-class'){
		ticketPrice = ticketCount * 150 ;
	}

	if(ticketName == 'economy'){
		ticketPrice = ticketCount * 100;
    }
}



// ==================================================== End =========================================================