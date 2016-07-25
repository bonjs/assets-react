/**
 *author: spq 
 */  
Ext.define('js.module.UserList', {
	extend: 'core.DataViewReact',
	renderTo: 'portal',
	template: function() {
		return (
			<div style={{border: "1px red solid", width: '300px'}}> 
				<button id="add">增加</button>
				<button id="del">删除</button>
				{
					this.state.list.map(function(u, i) {
						return <input onChange={this.test} value={u.name} />
					}.bind(this))
				}
			</div>
		)
	}, 
	test: function() {
		console.log(this);
	},
	data: {
		name:'用户管理',
		list: [ 
			{name: 'sun'},
			{name: 'tom'},
			{name: 'test'},
			{name: 'aaa'},
		]
	},
	
	constructor: function() { 
		var me = this; 
		this.callParent(arguments);
		$('#add').on('click', function() {
			var list = me.data.list;
			list.push({ 
				name: '新用户' + new Date().getTime()
			})
			me.setState({
				list: list
			})
		}.bind(this));
		$('#del').on('click', function() {
			me.setState(me.data.list.splice(me.data.list.length - 1, 1))	
		}.bind(this));
		
	}
});
