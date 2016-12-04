// Application
import React from 'react';
import * as d3 from 'd3';
import ScatterPlotComponent from './ScatterPlotComponent'
import Controls from './Controls';
var App = React.createClass({
    getInitialState() {
        return {
            data:[],
            xVar:'ylls',
            groupVar:'age',
            yVar:'ylds',
            idVar:'cause_name',
            search:''
        }
    },
    componentWillMount() {
        // Get data
        d3.csv('data/prepped_data.csv', function(data){
            this.setState({data:data})
        }.bind(this))
    },
    changeX(event, index, value) {
        this.setState({xVar:value})
    },
    changeY(event, index, value) {
        this.setState({yVar:value})
    },
    search(event) {
        this.setState({search:event.target.value.toLowerCase()})
    },
	render() {
        // Prep data
        let chartData = this.state.data.map((d) => {
            let selected = d[this.state.idVar].toLowerCase().match(this.state.search) !== null;
            console.log(selected)
            return {
                x:d[this.state.xVar],
                y:d[this.state.yVar],
                group:d[this.state.groupVar],
                id:d[this.state.idVar],
                selected:selected
            }
        });

        // nest data
        let nest = d3.nest().key((d) => d.group);
        let nestedData = nest.entries(chartData);

        let titleMap = {
            gdp:'Gross Domestic Product',
            life_expectancy:'Life expectancy in 2014',
            fertility_rate:'Fertility Rate'
        };

        let titles = {
            x:titleMap[this.state.xVar],
            y:titleMap[this.state.yVar]
        };

		// Return ScatterPlot element
		return (

            <div>
                <Controls
                    changeX={this.changeX}
                    changeY={this.changeY}
                    xVar={this.state.xVar}
                    yVar={this.state.yVar}
                    search={this.search}
                />
                {this.state.data.length !=0 &&
                    <div className="App">
                        <ScatterPlotComponent
                            xTitle={titles.x}
                            yTitle={titles.y}
                            search={this.state.search}
                            data={nestedData}
                            width={window.innerWidth * .7}
                            height={window.innerHeight * .9} />
                    </div>
                }

            </div>
		);
	}
});

export default App;
