import React from 'react';
import $ from '../node_modules/jquery';
    
var App = React.createClass({
    
    getInitialState: function(){
        return {
            searchResults: []
        }
    },
    
    
    showResult: function(response){
        this.setState({
            searchResults: response.results
        });
        console.log(response.results.data)
    },
    
    search: function(URL){
        $.ajax({
            type: "GET",
            dataType: 'jsonp',
            url: URL,
            success: function(response){
                this.showResult(response);
            }.bind(this)
        });
    },
    
    render: function(){
        return (
            <div>
                <searchBox search={this.search} />
            </div>
        )
    },
    
    componentDidMount(){
            this.search('http://graphql-swapi.parseapp.com/?query={%20allPeople{%20people{%20name%20}%20}%20}');
    }
});


/*
var SearchBox = React.createClass({    
    render: function(){
        return (
            <div>
                <input type="text" ref="query" />
                <input type="submit" onClick={this.createAjax} />
            </div>
        );
    },

    createAjax: function(){
        var query    = '{%20allPeople{%20people{%20name%20}%20}%20}';
        var URL      = 'http://graphql-swapi.parseapp.com/?query=' + query;
        App.search(URL)
    }
});



*/

export default App;