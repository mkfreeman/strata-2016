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
                    <br/>
                    <TextField
                        hintText="Find a disease"
                        onChange={this.props.search}
						width='500px'
                    />
                </div>
            </MuiThemeProvider>
		);
	}
});

export default Controls;
