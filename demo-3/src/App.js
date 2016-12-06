// Application
import React from 'react';
import * as d3 from 'd3';
import './App.css';
import TextPlotComponent from './TextPlotComponent'
import Controls from './Controls';

var App = React.createClass({
    getInitialState() {
        return {
            numParagraphs:4,
            color:'red',
            fontSize:18
        }
    },
    changeColor(event, value) {
        this.setState({color:value})
    },
    changeFontSize(event, value) {
        this.setState({fontSize:value})
    },
    changeParagraphs(event, value) {
        this.setState({numParagraphs:value})
    },
	render() {
        // Prep data
        let textData = d3.range(0, this.state.numParagraphs).map(function(d,i) {
            return {id:i, text:'Paragraph Number ' + (i + 1)}
        });

		// Return ScatterPlot element
		return (

            <div className="app">
                <h1 className="header">Demo 3</h1>
                <Controls
                    changeColor={this.changeColor}
                    color={this.state.color}
                    fontSize={this.state.fontSize}
                    numParagraphs={this.state.numParagraphs}
                    changeFontSize={this.changeFontSize}
                    changeParagraphs={this.changeParagraphs}
                />
                <TextPlotComponent
                    data={textData}
                    color={this.state.color}
                    fontSize={this.state.fontSize}
                />
            </div>
		);
	}
});

export default App;
