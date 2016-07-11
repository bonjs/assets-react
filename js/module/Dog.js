/**
 *author: spq 
 */
E.define('js.module.Dog', {
	renderTo: 'portal',
	template: function() {
		return (
			<div style={{border: "1px red solid", width: '300px'}}> 
				<button id="add">增加</button>
				<button id="del">删除</button>
				<div className="title">{this.state.name}</div>
				{  
					this.state.list.map(function(u, i) {
						return <li className="row">{u.name}</li>;
					})
				}
			</div>
		)
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
	getInitialState: function() {
		return this.data;
	},
	componentDidMount: function(r){
		var me = this;
		$('#add').on('click', function() {
			var list = me.data.list;
			list.push({ 
				name: '新用户' + new Date().getTime()
			})
			me.setState({
				list: list
			})
		}.bind(this))
		$('#del').on('click', function() {
			me.setState(me.data.list.splice(me.data.list.length - 1, 1))	
		}.bind(this))
	},
	setState: function(d) {
		this.react.setState(d);
	},
	constructor: function() { 
		var me = this;
		this.callParent(arguments);
		
		var F = React.createClass({
			getInitialState: function() {
				me.react = this;
				return me.getInitialState.call(me)
			},
			componentDidMount: function() {
				me.componentDidMount.call(me, this)
			},
			render: function() {
				return me.template.call(this);
			}
		});
		
		ReactDOM.render(<F />, document.getElementById(this.renderTo))
	}
});
