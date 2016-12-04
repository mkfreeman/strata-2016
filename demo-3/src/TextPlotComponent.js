// Scatterplot
import React from 'react';
import * as d3 from 'd3';
import TextPlot from './TextPlot';

// Scatterplot component
var TextPlotComponent = React.createClass({
    componentDidMount(){
        // Define scatterplot function
        this.textPlot = TextPlot();
        this.update()
    },
    // Create chart
    update() {
        // Update parameters
        this.textPlot
            .fontSize(this.props.fontSize)
            .color(this.props.color);

        // Call d3 update
        d3.select(this.root)
            .datum(this.props.data)
            .call(this.textPlot);
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

export default TextPlotComponent;
