// Application
import React from 'react';
import * as d3 from 'd3';
import SmallMultiples from './SmallMultiples'
import Controls from './Controls';
import './App.css';
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
        let nestedData = nest.entries(chartData)
                        .sort(function(a,b){
                            let aKey = a.key == 'Under 5' ? '0' : a.key;
                            let bKey = b.key == 'Under 5' ? '0' : b.key;
                            return Number(aKey.split(' ')[0]) - Number(bKey.split(' ')[0])
                        });

		// Return ScatterPlot element
		return (

            <div>
                <nav>Disease Burden in India</nav>
                <Controls
                    search={this.search}
                />
                {this.state.data.length !==0 &&
                    <div className="App">
                        <SmallMultiples
                            xTitle="YLLs"
                            yTitle="YLDs"
                            search={this.state.search}
                            data={nestedData}
                            width={window.innerWidth / 3}
                            height={window.innerHeight / 2} />
                    </div>
                }

            </div>
		);
	}
});

export default App;
