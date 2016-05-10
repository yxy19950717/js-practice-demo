// 指定模块名字
KISSY.add('package_1', function(S, Node) {
	Node.one('button').on('click', function(e) {
		Node.one('button').html('success loaded');
	});
}, {
	requires: ['node']
});


