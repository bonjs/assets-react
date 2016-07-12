/**
 *author: spq 
 */
// 
Ext.define('core.DataViewReact', {
	extend: 'core.DataView', 
	
	constructor: function() {
		var me = this;
		this.callParent();
		
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
		
		ReactDOM.render(React.createElement(F, null), this.el);
		
	},
	getInitialState: function() {
		return this.data;
	},
	componentDidMount: function(r){
		var me = this;
		
	},
	setState: function(d) {
		this.react.setState(d);
	},
	
	onRender: function(container, position) {	// 重写父类
		this.widgetId = this.getId();
		
		
		if(container == undefined) {
			return;
		}
		
		if (container.constructor == jQuery) {
			this.container = container[0];
		} else if (container instanceof HTMLElement) {
			this.container = container;
		} else if (container.constructor == String) {
			this.container = document.getElementById(container);
		}
		this.container.appendChild(this.el);
		
		if(typeof this.url == 'string') {
			this.load(this.url);	
		}
	}
	
});


