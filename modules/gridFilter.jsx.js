/*
   See License / Disclaimer https://raw.githubusercontent.com/DynamicTyped/Griddle/master/LICENSE
*/
"use strict";

var React = require('react');

var GridFilter = React.createClass({
    displayName: "GridFilter",

    getDefaultProps: function getDefaultProps() {
        return {
            "placeholderText": "",
            searchIcon: false
        };
    },
    handleChange: function handleChange(event) {
        this.props.changeFilter(event.target.value);
    },
    render: function render() {
        var searchIcon = null;
        if (this.props.searchIcon) {
            searchIcon = React.createElement("span", { className: "glyphicon glyphicon-search" });
        }
        return React.createElement("div", { className: "filter-container" }, React.createElement("input", { type: "text", name: "filter", placeholder: this.props.placeholderText, className: "form-control", onChange: this.handleChange }), searchIcon);
    }
});

module.exports = GridFilter;
