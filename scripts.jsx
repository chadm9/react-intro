
//Our first component
function Application(){

    //above return statement is regular JS

    return (
        <div>
            <h2>Hello, World</h2>
            <Message name="Shane" gender="M"/>
            <Message name="Carla"/>
            <Message name="Nick"/>
            <h1>I'm CHAAAAAAAAAAAAAAAAAAAAAAAAAAAAD!</h1>
        </div>
    )
}



function Message(props) {
    return(
        <div>
            <h1>Hello, {props.name}. Gender: {props.gender}</h1>
        </div>
    )
}


ReactDOM.render(
    <Application />,
    document.getElementById('container')
);