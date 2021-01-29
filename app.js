//====================================================== Start =============================================================


// for decrement
const firstClassIncrement = document.getElementById('first-class-increment') ;
firstClassIncrement.addEventListener('click' , function(){
	ticketPriceHandler(true , 'first-class');
	
});
const economyIncrement = document.getElementById('economy-increment') ;
economyIncrement.addEventListener('click', function(){
    ticketPriceHandler(true, 'economy');
})


// for decrement
const firstClassDecrement  = document.getElementById('first-class-decrement');
firstClassDecrement.addEventListener('click' , function () {
	ticketPriceHandler(false , 'first-class');
}) 
const economyDecrement = document.getElementById('economy-decrement') ;
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
	
	Calculation(); 
}

// calculation function
function Calculation(){
	const firstClassInput = document.getElementById('first-class-input');
	const firstClassValue = parseInt(firstClassInput.value);

	const economyInput = document.getElementById('economy-input');
	const economyValue = parseInt(economyInput.value);


	// for sub total
	let subTotalPrice = firstClassValue * 150 + economyValue * 100 ;
	document.getElementById('sub-total').innerText = '$'+subTotalPrice ;

	// for vat
	let ticketVat = Math.floor(subTotalPrice * 10/100);
	document.getElementById('ticket-vat').innerText = '$'+ticketVat ;

	// for totalPrice 
	let totalPrice = subTotalPrice + ticketVat ;
	document.getElementById('total-price').innerText = '$'+totalPrice; 
}


// for book
let bookNowBtn = document.getElementById('book-now').addEventListener('click', function() {
	const firstClassInput = document.getElementById('first-class-input');
	const economyInput = document.getElementById('economy-input');

	// validation and show completed ui.
	if(firstClassInput.value == 0 && economyInput.value == 0){
		alert('Take your ticket!')
	}else{
		document.getElementById('book-completed').style.visibility='visible';
		backHomeHandler();
		firstClassInput.value = 0 ;
		economyInput.value = 0 ;
		document.getElementById('sub-total').innerText = '$'+0;
		document.getElementById('ticket-vat').innerText = '$'+0 ;
		document.getElementById('total-price').innerText = '$'+0; 
	}
});

// for back home
function backHomeHandler(){
	document.getElementById('back-home').addEventListener('click', function(){
		document.getElementById('book-completed').style.visibility='hidden';
		
	})
}




// ==================================================== End =========================================================