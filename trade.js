// ###### variables #########
var equityCode = '';
var target = '';
var stopLoss = '';
var trade = '';
var stopTime = '';
var trend = '';

var quantity = 1;
var watchlistItem = 4;
var previousPrice = '4.25';
var targetPrice = '4.30';
// #######################

var row = $(".slick-row")[watchlistItem];
var buyBtn = $(row).find('.buyTrade');
var sellBtn = $(row).find('.sellTrade');

// DELAY FUNCTION
function placeOrderWithdelay(type,secs = 2000){
	setTimeout(function(){
		var stock = $("#orderSymbolSearch").val();
		// FILL REQUIRED DETAILS
		$("#orderQuantity").val(quantity);
		if(previousPrice != ''){
			$("#orderPrice").val(previousPrice);
		}
		
		// PLACE ORDER
		$("#btnConfirmOrder").click();
		setTimeout(function(){
			// CONFIRM ORDER
			$("#btnPostOrder").click();
		},secs);

		if(type=='buy'){
			console.log(stock+' purchased at '+$("#orderPrice").val());
		}else{
			console.log(stock+' sold at '+$("#orderPrice").val());
		}

	},secs);
}

// CALLED FOR BUYING THE STOCK
function buy(){
	// OPENS THE BUY MODAL
	$(buyBtn).click();
	// DELAYING FOR MODAL TO OPEN UP AND PLACING BUY ORDER
	placeOrderWithdelay('buy',5000);
}

// CALLED FOR SELLING THE STOCK
function sell(){
	// OPENS THE SELL MODAL
	$(sellBtn).click();
	// DELAYING FOR MODAL TO OPEN UP AND PLACING SELL ORDER
	placeOrderWithdelay('sell',5000);
}

// CALLED FOR SQUARYING OFF THE STOCK (EXIT)
function squareOff(){
	$(".openpositions").click();
	setTimeout(function(){
		setTimeout(function(){
			$($($($($(".grid-canvas")[1]).children()[0]).children()[8]).find('.squareoffopenposition')[0]).click();
			setTimeout(function(){
				$("#orderPrice").val(targetPrice);
				setTimeout(function(){
					$("#btnConfirmOrder").click();
					setTimeout(function(){
						$("#btnPostOrder").click();
					},2000);
				},2000);
			},3000);	
		},4000);
	},2000);	
}

// CALLED FOR CHECKING IF THERE ARE ANY RUNNING ORDERS IF YES THEN CLOSE THE TRADING GATE
function runningOrders(){

}

// REQUIREMENTS
/*
1. Get running orders status
2. squareoff function
3. on chnage trigger.
*/