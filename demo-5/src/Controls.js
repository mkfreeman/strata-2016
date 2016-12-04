// Scatterplot
import React from 'react';
import './Controls.css';
import {MuiThemeProvider, SelectField, MenuItem, TextField} from 'material-ui';

// Needed for onTouchTap (to avoid warning from material-ui)
// See: https://github.com/callemall/material-ui/issues/4670
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();


// Scatterplot component
var Controls = React.createClass({

	render() {
		// Return links and show anything inside the <App> component (children)
		return (
            <MuiThemeProvider>
                <div className="controls">
                    <SelectField
                        floatingLabelText="X Axis Variable"
                        value={this.props.xVar}
                        onChange={this.props.changeX}
                    >
                        <MenuItem value={'gdp'} primaryText="Gross Domestic Product" />
                        <MenuItem value={'fertility_rate'} primaryText="Fertility" />
                        <MenuItem value={'life_expectancy'} primaryText="Life Expectancy" />
                    </SelectField>
                    <SelectField
                        floatingLabelText="Y Axis Variable"
                        value={this.props.yVar}
                        onChange={this.props.changeY}
                    >
                        <MenuItem value={'gdp'} primaryText="Gross Domestic Product" />
                        <MenuItem value={'fertility_rate'} primaryText="Fertility" />
                        <MenuItem value={'life_expectancy'} primaryText="Life Expectancy" />
                    </SelectField>
                    <br/>
                    <TextField
                        hintText="Find a country"
                        onChange={this.props.search}
                    />
                </div>
            </MuiThemeProvider>
		);
	}
});

export default Controls;
