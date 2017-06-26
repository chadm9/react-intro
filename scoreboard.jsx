
var teams = [
    {
        name: "Braves",
        gamesBack: 0,
        city: "Atlanta"
    },
    {
        name: "Nationals",
        gamesBack: 0,
        city: "Washington D.C."
    },
    {
        name: "Marlins",
        gamesBack: 0,
        city: "Miami"
    },
    {
        name:"Mets",
        gamesBack: 0,
        city: "New York"
    },
    {
        name:"Phillies",
        gamesBack:0,
        city:"Philadeliphia"
    }
];

function Application(props) {
    return(
        <div>
            <div className="container">
                <Header title={props.title} />

                {props.teams.map((team,index)=>{
                    return <Team key={index} name={team.name} gamesBack={team.gamesBack} city-={team.city} />
                })};
            </div>
        </div>
    )
}


function Header(props) {
    return(
        <div className="header">
            <h1>{props.title}</h1>
        </div>
    )
}

function Team(props) {
    return(
        <div className="row">
            <div className="col-sm-8 col-sm-offset-2 team">
                <div className="team-name col-sm-12">{props.name}</div>

                    <Counter gamesBack={props.gamesBack} />

            </div>
        </div>
    )
}

//The only REQUIRED property is render
var Counter = React.createClass({

    getInitialState: function () {
        var stateObject = {
            gamesBack: 0
        };

        return stateObject


    },

    addGame: function () {
        this.setState({
            gamesBack: this.state.gamesBack + 1
        })
    },

    loseGame: function () {
        this.setState({
            gamesBack: this.state.gamesBack - 1
        })
    },

    render: function () {
        return (
            <div className="counter">
                <button onClick={this.addGame} className="btn btn-success">+</button>
                <div className="team-score">{this.state.gamesBack}</div>
                <button onClick={this.loseGame} className="btn btn-danger">-</button>
            </div>


        )
    }
});

ReactDOM.render(
    <Application title="Braves Scoreboard" teams={teams} />,
    document.getElementById('root')
);