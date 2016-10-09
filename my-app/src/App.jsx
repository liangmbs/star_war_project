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
                <SearchBox search={this.search} />
                <Result searchResults={this.state.searchResults} />
            </div>
        );
    }

//testing the connection
/*    
    componentDidMount(){
            this.search('http://graphql-swapi.parseapp.com/?query={%20allPeople{%20people{%20name%20}%20}%20}');
    }
*/ 
});

var SearchBox = React.createClass({    
    render: function(){
        return (
            <div>
                <input type="submit" onClick={this.createAjax} />
            </div>
        );
    },

    createAjax: function(){
        var query    = '{%20allPeople{%20people{%20name%20}%20}%20}';
        var URL      = 'http://graphql-swapi.parseapp.com/?query=' + query;
        this.props.search(URL)
    }
});



var Result = React.createClass({
    render: function(){
        var resultItems = this.props.searchResults.map(function(result){
            return <ResultItem name={result.allPeople.people} />
        });
        return (
            <ul>
                {resultItems}
            </ul>
        );
    }
});



var ResultItem = React.createClass({
    render: function(){
        return <li> {this.props.name} </li>;   
    }
});



export default App;