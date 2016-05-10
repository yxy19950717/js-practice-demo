// CommonJS写法
KISSY.add(function(S, require, exports, module) {
	var test = function() {
		console.log('this is CommonJS style');
	};
	module.exports = test;
});