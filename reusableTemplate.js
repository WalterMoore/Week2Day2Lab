var library = (function(){
	return {
		// Utility --- Complete Functions Below
		identity : function(val) {
			return val;
		},

		// Collections --- Complete Functions Below
		each : function(list, iterator) {
			if(list.constructor === Array){
				for(var i = 0; i < list.length; i++){
					iterator(list[i],i,list);
				}
			}else{
				for(var key in list){
					iterator(list[key],key,list);
				}
			}
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
		
		reduce : function(list, iterator, accumulator) {
			//var arr = [];
			if(accumulator === undefined){
				accumulator = list[0];
			}
			var n = list.length;
			for (var i = 0; i < n; i++){
				accumulator = iterator(list[i],accumulator);
			}
			return accumulator;
		},
			

		every : function(list, iterator) {
			if(iterator===undefined){
				iterator = this.identity;
			}
			var n = list.length;
			for (var i = 0; i < n; i++){
				if (!iterator(list[i])){
					return false;
				}
			}
			return true;
		},



		some : function(list, iterator) {
			if(iterator===undefined){
				iterator = library.identity;
			}
			var n = list.length;
			for (var i = 0; i < n; i++){
				if(iterator(list[i])/*===true*/){
					return true;
				}
			}
			return false;
		},
		
		

		/*contains : function(list, target) {
			return this.reduce(list, function(wasFound,item){
				if (wasFound){
					return true;
				}else{
					var n = list.length;
					for(var i = 0; i < n; i++){
						if (target===(list[i])){
							return i;
						}else{
							return -1;
						}
					}
				}
			});
		},*/
		
	contains: function(list, target) {
        return this.reduce(list, function(wasFound, item) {
            if (wasFound) {
              return true;
            }
            return item === target;
          }, false);
      },
		

		// Advanced Collections --- Complete Functions Below
		shuffle : function(array) {
			var copy = array.slice();
			for (var i = 0; i < copy.length - 1; i++){
				for (var j = 1; j < copy.length; j++){
					if(Math.random() < 0.5){
						var temp = copy[i];
						copy[i] = copy[j];
						copy[j] = temp;
					}
				}
			}
			return copy;
		},
		
			//why doesn't this work?
			/*var counter = array.length, temp, index;		
			var arr = [];
			var n = array.length;
			for(var i = 0; i < n; i ++){
				var shuffled = i + 1;
				if (shuffled = n){
					shuffled = shuffled - n;
				}
				arr.push(array[i]);
			}
		    return array;
		},*/
		


		invoke : function(list, methodName, args) {//started
			return this.map(list, function(item){
				if(typeof methodName == 'function'){
					return methodName.apply(item, args);
				}else{
					return item[methodName].apply(item, args);
				}
			});
		},

		sortBy : function(list, iterator) {//started
			if (typeof iterator !== 'function'){
				var str = iterator;
				iterator = function(item) { return item[str];};
			}
			var res = [];
			this.each(list, function(item) { res.push(item); });
			
			for (var i = 0; i < res.length - 1; i++) {
				for (var j = i + 1; j < res.length; j++) {
					if (iterator(res[i]) > iterator(res[j]) || !res[i]) {
						var temp = res[i];
						res[i] = res[j];
						res[j] = temp;
					}
				}
			}
			return res;
		},

		// Objects --- Complete Functions Below
		extend : function(obj) {//make a place to store the new obj
			var args = Array.prototype.slice.call(arguments, 1);
			this.each(args, function(property){
				for (var key in property) {
					obj[key] = property[key];
				}
			});
			return obj;
		},
			
			
		defaults : function(obj) {//make a way to fill in undefined object
			var args = Array.prototype.slice.call(arguments, 1);
			
			this.each(args, function(property){
				for(var key in property){
					if(!obj.hasOwnProperty(key)){
						obj[key] = property[key];
					}
				}
			});
			return obj;
		},


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
			var result = -1;
			this.each(array, function(item, index) {
				if (item === target && result === -1) {
					result = index;
				}
			});
			return result;
		},
			//var arr = [];
			/*var n = array.length;
			for (var i = 0; i < n; i++){
				if (target===(array[i])){
					return i;
				}
				//arr.push(array[i]);
			}
			return -1;*/
			//return arr;
          //     if (array[i] === 15){ return i;
			//}else{
			//	if (array[target]= false){
			//		return -1
			//	}
			//}
			
		
		uniq : function(array) {
			var arr2 = [];
            for(var i = 0, len = array.length; i < len; i++){
                if(library.indexOf(arr2, array[i]) === -1){
                    arr2.push(array[i])
                }
            }
                return arr2;    
           
			//var arr = [];
			//var n = array.length;
			//for(var i = 0; i < n; i++){
			//	if (library.indexOf(arr,array[i])=== -1) {
			//		arr.push(array[i]);
			//	}
			//return arr;
			//}
		
		},

		// Advanced Arrays --- Complete Functions Below
		zip : function() {
			var arrays = Array.prototype.slice.call(arguments);
			var longest = this.sortBy(arrays, 'length')[arrays.length - 1].length;
			var zipped = [];
			for (var i = 0; i < longest; i++) {
				var zipPart = [];
				this.each(arrays, function(arr){
					if (i >= arr.length) zipPart.push(undefined);
					else zipPart.push(arr[i]);
				});
				zipped.push(zipPart);
			}
			return zipped;
		},
			/*var arr1 = [];
			var arr2 = [];
			if(arr1.length > arr2.length){
				var n = arr1.length;
			}else{
				var n = arr2.length;
			}
			for (var i = 0; i < n; i++){}
		},*/

		flatten : function(nestedArray, result) {
			var self = this;
			result = result || [];
			this.each(nestedArray, function(item) {
				if (!Array.isArray(item)) result.push(item);
				else self.flatten(item, result);
			});
			return result;
		},

		intersection : function() {
			var over = [], args = Array.prototype.slice.call(arguments, 1);
			var self = this;
			
			self.each(arguments[0], function(i){
				var cross = true;
				self.each(args, function(j) {
					if (self.indexOf(j, i) < 0) cross = false;
				});
				if (cross) over.push(i);
			});
			return over;
		},

		difference : function(array) {
			var arrays = Array.prototype.slice.call(arguments, 1);
			var unique = [];
			var self = this;
			self.each(array, function(i) {
				var selfish = true;
				self.each(arrays, function(j) {
					if (self.indexOf(j,i) >= 0) selfish = false;
				});
				if (selfish) unique.push(i);
			});
			return unique;
		},

		// Functions --- Complete Functions Below
		once : function(func) {
			var alreadyCalled = false;
			var result;
			return function() {
				if (!alreadyCalled) {
					result = func.apply(this, arguments);
					alreadyCalled = true;
				}
				return result;
			};
		},

		memoize : function(func) {
			var storage = {};
			return function() {
				if (!storage[arguments[0]]) {
					storage[arguments[0]] = func.apply(this, arguments);
				}
				return storage[arguments[0]];
			};
		},

		delay : function(func, wait) {
			var args = Array.prototype.slice.call(arguments, 2);
			setTimeout(function() {
				func.apply(this, args);
			}, wait);
		}
	}
})();




