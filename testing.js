

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


var myFunc = function(item){
			if(item.charAt(0)==="a"){
				return true;
			}else{
				return false;
			}
}


filter(list, test) {
	test(list[i]);
}



filter(fruits, myFunc);

function testFilter(){
	var fruits =['apple','orange','tomato','grape'];
		console.log(fruits);
		console.log("filter = " + _.filter(fruits, function(item){
			if(item.charAt(0)==="a"){
				return true;
			}else{
				return false;
			}
		}));
		
		
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