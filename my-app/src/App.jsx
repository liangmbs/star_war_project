import React from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import $ from '../node_modules/jquery';


var options = [
    { value: 'one', label: 'One' },
    { value: 'two', label: 'Two' }
];

var people1 = "";
var people2 = "";

var App = React.createClass({   
    getInitialState: function(){
        return {
            searchResults: []
        }
    },
    
    showResult: function(response){
        console.log(response);
        this.setState({
            searchResults: response
                
        });
    },
    
    // AJAX get
    search: function(URL){
         $.ajax({
            data:"JSON",
            type: "GET",
            url: URL,
            success: function(data){
                //this.setState(data);
                //this.showReuslt(data);
                console.log(data);
            },
            error: function(xhr, status, err){
                console.log(this.props.url, status, err.toString);  
            }
        });
    },

    
    render: function(){
        return (
            <div>
                <SearchPeople1 />
                <SearchPeople2 />
                <SearchBox search={this.search} />
                <Result searchResults={this.state.searchResults} />
            </div>
        );
    }
});

var SearchPeople1 = React.createClass({
    
    getInitialState: function(){
        return{
            state: {value: 'one'}
        }
    },            
    
    logChange: function(val){
        this.setState({value:val});
        people1 = val;
        console.log(people1);
    },
    render: function(){
        return (
            <div>
                <Select
                    name="form-field-name"
                    value={this.state.value}
                    options={options}
                    onChange={this.logChange}
                />
            </div>
        );   
    }
    
});

var SearchPeople2 = React.createClass({
    
    getInitialState: function(){
        return{
            state: {value: 'one'}
        }
    },            
    
    logChange: function(val){
        this.setState({value:val});
        people2 = val;
        console.log(people2);
    },
    
    render: function(){
        return (
            <div>
                <Select
                    name="form-field-name"
                    value={this.state.value}
                    options={options}
                    onChange={this.logChange}
                />
            </div>
        );
        
    }   
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
        var URL = 'http://graphql-swapi.parseapp.com/?query={%20allPeople{%20people{%20name%20}%20}%20}';
        this.props.search(URL);
    }
});

var Result = React.createClass({
    render: function(){
         var resultItems = this.props.searchResults.map(function(result) {
            return <ResultItem key={result.trackId} trackName={result.trackName} />
        });
        return(
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