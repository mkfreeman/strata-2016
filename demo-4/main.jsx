// Main.jsx file

// Data to pass to our List elements
var InputComponent = React.createClass({
    getInitialState:function() {
        return {text:''};
    },
    update:function(event) {
        var value = event.target.value;
        this.setState({text:value});
    },
    render:function() {
        return (
            <div>
                <input onChange={this.update} />
                <br/>
                <text>The user has typed: {this.state.text}</text>
            </div>
        );
    }
})

// Render your component in the `main` section
ReactDOM.render(<InputComponent/>,
    document.querySelector('main')
);
