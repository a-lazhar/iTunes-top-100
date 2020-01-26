import React from 'react'
import SongList from '../components/SongList'

class ListContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            songs: []
        }
    }

    componentDidMount() {
        const url = "https://itunes.apple.com/us/rss/topalbums/limit=100/json";
        const request = new XMLHttpRequest();
        request.open("GET", url);
        request.addEventListener("load", () => {
            if (request.status === 200) {
                const jsonString = request.responseText;
                const data = JSON.parse(jsonString);
                this.setState({songs: data.feed.entry})
            }
        });
        request.send();

    }

    render() {
        return (
            <div className={"main-container"}>
                <h1 id="header">iTunes Top 100</h1>
                <SongList songs={this.state.songs}/>
            </div>
        )
    }
}


export default ListContainer
