// ScatterPlot
import * as d3 from 'd3';
import d3tip from 'd3-tip';

var TextPlot = function() {
    // Set default values
    var fontSize = 12,
        color = 'red',
        height = 300,
        width = 400;

    // Function returned by ScatterPlot
    var chart = function(selection) {
        // Iterate through selections, in case there are multiple
        selection.each(function(data){

            // Use the data-join to create the svg (if necessary)
            var ele = d3.select(this);
            var div = ele.selectAll("div").data([data]);

            // Append static elements (i.e., only added once)
            div.enter()
                .append("div")
                .attr('class', 'wrapper')
                .append("g");

            // Draw markers
            let texts = ele.select('.wrapper').selectAll('p').data(data, (d) => d.id);

            // Use the .enter() method to get entering elements, and assign initial position
            texts.enter().append('p')
    			.text((d) => d.text)
                .style('font-size', '0px')
                .style('color', color)
                // Transition properties of the + update selections
                .merge(texts)
                .transition()
                .duration(500)
                .delay((d,i) => i * 30)
                .style('color', color)
    			.style('font-size', fontSize + 'px');

            // Use the .exit() and .remove() methods to remove elements that are no longer in the data
    		texts.exit().transition()
                 .duration(500)
                 .style('font-size', '0px')                 
                 .remove();
        });
    };

    // Getter/setter methods to change locally scoped options
    chart.fontSize = function(value){
        if (!arguments.length) return fontSize;
        fontSize = value;
        return chart;
    };

    chart.color = function(value){
        if (!arguments.length) return color;
        color = value;
        return chart;
    };

    return chart;
};


export default TextPlot;
