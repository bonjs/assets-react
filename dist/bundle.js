(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/**
 *author: spq 
 */
E.define('js.module.Dog', {
	extend: Object,
	renderTo: 'portal',
	template: function() {
		return (
			React.createElement("div", {style: {border: "1px red solid", width: '300px'}}, 
				React.createElement("button", {id: "add"}, "增加"), 
				React.createElement("button", {id: "del"}, "删除"), 
				React.createElement("div", {className: "title"}, this.state.name), 
				  
					this.state.list.map(function(u, i) {
						return React.createElement("li", {className: "row"}, u.name);
					})
				
			)
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
		
	},
	setState: function(d) {
		this.react.setState(d);
	},
	constructor: function() { 
		var me = this;
		this.callParent(arguments);
		var F = React.createClass({displayName: "F",
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
		
		
		
		ReactDOM.render(React.createElement(F, null), document.getElementById(this.renderTo))
		
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
	}
});
},{}]},{},[1]);
