// Scatterplot
import React from 'react';
import * as d3 from 'd3';
import './ScatterPlot.css';
import ScatterPlot from './ScatterPlot';

// Scatterplot component
var ScatterPlotComponent = React.createClass({
    componentDidMount(){
        // Define scatterplot function
        this.scatter = ScatterPlot();
        this.update();
    },
    // Create chart
    update() {
        // Update parameters
        this.scatter
            .width(this.props.width)
            .height(this.props.height)
            .fill('blue')
            .xTitle(this.props.xTitle)
            .yTitle(this.props.yTitle)
            .radius((d) => d.selected == true ? 6 : 1);

        // Call d3 update
        d3.select(this.root)
            .datum(this.props.data)
            .call(this.scatter);
    },
    // Update on new props
    componentWillReceiveProps (props){
        this.props = props;
        this.update();
    },

	render() {
		// Expose HTML node via ref property
		return (
            <div
                className="chart"
                width={this.props.width}
                height={this.props.height}
                ref={(node) => { this.root = node;}}
            />
		);
	}
});

export default ScatterPlotComponent;
