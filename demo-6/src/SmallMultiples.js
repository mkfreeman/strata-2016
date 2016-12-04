// Scatterplot
import React from 'react';
import * as d3 from 'd3';
import './ScatterPlot.css';
import ScatterPlot from './ScatterPlot';

// Scatterplot component
var SmallMultiples = React.createClass({
    componentDidMount(){
        // Define scatterplot function
        this.scatter = ScatterPlot()
        this.update()
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
            .radius((d) => d.selected === true ? 6 : 1);

        // Call d3 update
        var charts = d3.select(this.root)
                       .selectAll('.chart')
                       .data(this.props.data, (d) => d.key)

        // Enter new charts
        charts.enter()
            .append('div')
            .attr('class', 'chart')
            .merge(charts)            
            .call(this.scatter);

        charts.exit().remove()
    },
    // Update on new props
    componentWillReceiveProps (props){
        this.props = props;
        this.update();
    },

	render() {
		// Expose HTML node via ref property
		return (
            <div width={this.props.width}
                height={this.props.height}
                ref={(node) => { this.root = node;}}
            />
		);
	}
});

export default SmallMultiples;
