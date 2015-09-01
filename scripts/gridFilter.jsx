/*
   See License / Disclaimer https://raw.githubusercontent.com/DynamicTyped/Griddle/master/LICENSE
*/
var React = require('react');

var GridFilter = React.createClass({
    getDefaultProps: function(){
      return {
        "placeholderText": "",
          searchIcon: false,
          searchStyle: {}
      }
    },
    handleChange: function(event){
        this.props.changeFilter(event.target.value);
    },
    render: function(){
        var searchIcon = null;
        if (this.props.searchIcon) {
            searchIcon =  <span className="glyphicon glyphicon-search"></span>
        }
        return <div style={this.props.searchStyle} className="filter-container">
            <input type="text" name="filter" placeholder={this.props.placeholderText} className="form-control" onChange={this.handleChange} />
            {searchIcon}
        </div>
    }
});

module.exports = GridFilter;
