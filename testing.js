

//_.each();


function testLast(){
	var fruits =['apple','orange','tomato','grape'];
	console.log("last = " + _.last(fruits));
}
testLast();

function testFirst(){
	var fruits =['apple','orange','tomato','grape'];
	console.log("first = " + _.first(fruits));
}
testFirst();



//function testEach(){
//	var fruits =['apple','orange','tomato','grape'];
//	console.log("each = " + _.each(fruits));
//}
//testEach();



function testFilter(){
	var fruits =['apple','orange','tomato','grape'];
		console.log(fruits);
		console.log("filter = " + _.filter(fruits));
	//if(fruits = 'tomato'){
		//return true;
	//}else{
		//return false;
	//}
}
testFilter();


function testReject(){
	var fruits = ['apple','orange','tomato','grape'];
		console.log(fruits);
		console.log("reject = " + _.reject(fruits));
}
testReject();