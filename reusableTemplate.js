var library = (function(){
	return {
		// Utility --- Complete Functions Below
		identity : function(val) {
			return val;
		},

		// Collections --- Complete Functions Below
		each : function(list, iterator) {
			var list = 2//later
		},

		filter : function(list, test) {
			var arr = [];
			var n = list.length;
			for (var i = 0; i < n; i++){
			test(list[i]);
			if(test(list[i])){
				arr.push(list[i]);
			}
			}
			return arr; 
		},

		reject : function(list, test) {
			var arr = [];
			var n = list.length;
			for (var i = 0; i < n; i++){
			test(list[i]);
			if(!test(list[i])){
				arr.push(list[i]);
			}
			}
			return arr;
		},

		map : function(list, iterator) {
			var arr = [];
			var n = list.length;
			for (var i = 0; i < n; i++){
            iterator(list[i]);
			arr.push(iterator(list[i]));
			//--the below also works instead of the one line above:
			//var temp = iterator(list[i]);
			//	arr.push(temp);
			}
			return arr;
    		//for (i=0;i < list.length ;i++){
     		//return (list[i] + "<br />");
    		
			// }
		},

		pluck : function(list, key) {
			return this.map(list, function(item){
				return item[key];
			});
		},
		reduce : function(list, iterator, accumulator) {},

		every : function(list, iterator) {},

		some : function(list, iterator) {},

		contains : function(list, target) {},

		// Advanced Collections --- Complete Functions Below
		shuffle : function(array) {},

		invoke : function(list, methodName, args) {},

		sortBy : function(list, iterator) {},

		// Objects --- Complete Functions Below
		extend : function(obj) {},

		defaults : function(obj) {},

		// Arrays --- Complete Functions Below
		first : function(array, n) {
			return n === undefined ? array[0] : array.slice(0, n);
		},

		last : function(array, n) {
			if (n > array.length){
				return array;	
		}else{
			if (n === undefined){
				return array[array.length - 1];
			}else{
				return array.slice(array.length -n);
		}
		}
		},
		indexOf : function(array, target){
            for(var i = 0, len = array.length; i < len; i++) {
          //     if (array[i] === 15){ return i;
			//}else{
			//	if (array[target]= false){
			//		return -1
			//	}
			//}
			}
		},
		uniq : function(array) {},

		// Advanced Arrays --- Complete Functions Below
		zip : function() {},

		flatten : function(nestedArray, result) {},

		intersection : function() {},

		difference : function(array) {},

		// Functions --- Complete Functions Below
		once : function(func) {},

		memoize : function(func) {},

		delay : function(func, wait) {

		}
	}
})();




