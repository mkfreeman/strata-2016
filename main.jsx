// Main.jsx file

// Data to pass to our List elements
var InputComponent = React.createClass({
    getInitialState:function() {
        return {demos:[]};
    },
    componentDidMount() {
        d3.csv('data/demos.csv', function(data){
            this.setState({demos:data});
        }.bind(this))
    },
    render:function() {
        return (
            <div>
                {this.state.demos.map(function(d, i) {
                    return(
                        <div key={'demo-' + i}>
                            <h3>{d.title}</h3>
                            <p>{d.description}
                                <span> (
                                    <a href={d.link} target="_blank">link</a>
                                    ).
                                </span>
                            </p>

                        </div>
                    )
                })}
            </div>
        );
    }
})

// Render your component in the `main` section
ReactDOM.render(<InputComponent/>,
    document.querySelector('main')
);
