import React, { Component } from 'react';
import '../App.css';
import '../assets/css/app.css';
import PageContent from './PageContent';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      gifs: []
    }
  }

  async ApiCall(url) {
    let gifsArray = [];
    for(let i = 0; i < 4; i++) {
      let randomNumber = Math.floor(Math.random() * 50);
       await fetch(url)
        .then(response => response.json())
        .then(data => {
          gifsArray.push(data.data[randomNumber].images.downsized.url);
        })
        .catch(error => console.log(error))
    }
    this.showGifs(gifsArray);
  }

  getNewGif() {
    this.ApiCall('https://api.giphy.com/v1/gifs/trending?api_key={Your Giphy Key}');
  }
 
  showGifs(data) {
    this.setState(
      {
          gifs: data,
      }
    )
  }

  componentDidMount() {
    this.getNewGif();
  }

  render () {
      return (
        <React.Fragment>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div className="container">
                <a className="navbar-brand" href="localhost:3000">GIPHY APP</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </div>
            <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="nav ml-auto">
                    <li className="nav-item">
                        <button className="btn btn-success" onClick={() => this.getNewGif()}>Cargar random</button>
                    </li>
                </ul>
            </div>
          </nav>
          <PageContent
          gifs = {this.state.gifs}
          />
        </React.Fragment>
      )
  }
}

export default App;
