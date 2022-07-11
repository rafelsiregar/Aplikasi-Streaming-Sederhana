import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';



class Title extends React.Component {
  constructor(){
      super();
      this.state = {
          title: "Aplikasi Streaming Sederhana",
          subTitle: "Streaming TV Nasional Indonesia"
      }
  }

  render(){
      return(
          <div>
              <h1>{this.state.title}</h1>
              <p>{this.state.subTitle}</p>
          </div>
      );
  }
}

class TelevisionCard extends React.Component {
  render(){
    return (
            <Card as={Col} className = {this.props.theme+' tv-card mx-2 my-3'} style={{ width: '18rem'}} onClick={event =>  window.open(this.props.website, '_blank')}>
                  <Card.Body>
                    <div className="tv-photo"><img src={'assets/'+this.props.channel+'.png'} style = {{height: '40px'}} alt={this.props.channel}></img></div>
                      
                      
                      <Card.Title>{this.props.channel}</Card.Title>
                </Card.Body>
              </Card>
    );
  }
}

function split(channels_list, divisor){
  let channel_to_show = [];
  for (let i = 0; i < channels_list.length; i += divisor) {
    const splitted = channels_list.slice(i, i + divisor);
    const elements = [];
    splitted.forEach((c)=>elements.push(<TelevisionCard channel={c.channel} website={c.website} theme = {c.theme} />));
    const row_element =  (<Row className="mx-auto">
      {elements}
    </Row>);
    channel_to_show.push(row_element)
}
return channel_to_show;
}


class TelevisionRow extends React.Component {
  render(){
    let national_channels_list = [
      {channel : 'TVRI', website : 'https://www.vidio.com/live/6441-tvri'},
      {channel : 'RCTI', website : 'https://www.rctiplus.com/tv/rcti'},
      {channel : 'SCTV', website : 'https://www.vidio.com/live/204-sctv'},
      {channel : 'MNC TV', website : "https://www.rctiplus.com/tv/mnctv"},
      {channel : "ANTV",  website : "https://www.vidio.com/live/782-antv"},        
      {channel : "Indosiar",  website : "https://www.vidio.com/live/205-indosiar"},
      {channel : "Metro TV",  website : "https://www.youtube.com/watch?v=WemeIY5-P6o"},
      {channel :"Trans TV", website : "https://www.transtv.co.id/live"},
      {channel : "Trans 7" , website : "https://www.transtv.co.id/live/trans7"},
      {channel : "TVOne",  website : "https://www.vidio.com/live/783-tvone" },
      {channel : "GTV" , website : "https://www.rctiplus.com/tv/gtv"},
      {channel : "RTV",  website : "https://www.useetv.com/livetv/rtv", theme : "network"},
      {channel : "iNews",  website : "https://www.rctiplus.com/tv/inews", theme : "network"},
      {channel : "Kompas TV",  website : "https://www.youtube.com/watch?v=Za5-fvwbPJI", theme : "network"},
      {channel : "NET.",  website : "https://www.netmedia.co.id/live-streaming", theme : "network"},
      {channel : "Berita Satu",  website : "https://www.beritasatu.tv/", theme : "digital"},
      {channel : "O Channel",  website : "https://www.vidio.com/live/206-ochannel", theme : "digital"},
      {channel : "Mentari TV",  website : "https://www.vidio.com/live/8237-mentari-tv", theme : "digital"},
      {channel : "CNN Indonesia",  website : "", theme : "digital"},
      {channel : "CNBC Indonesia",  website : "", theme : "digital"},
      {channel : "Nusantara TV",  website : "", theme : "digital"},
      {channel : "BNTV",  website : "", theme : "digital"},
      {channel : "Magna Channel",  website : "", theme : "digital"},
      {channel : "Inspira TV",  website : "", theme : "digital"},
      {channel : "JPM TV",  website : "", theme : "digital"},
      {channel : "",  website : "", theme : "digital"},
      {channel : "",  website : "", theme : "digital"},
      {channel : "",  website : "", theme : "digital"},
    ];

    let local_channels_list = [
      {channel : 'JAK TV', website : '', theme:"local"},
      {channel : 'DAAI TV', website : '', theme:"local"},
      {channel : 'MyTV', website : '', theme:"local"},
      {channel : 'KTV', website : '', theme:"local"},
      {channel : 'CTV', website : '', theme:"local"},
      {channel : 'Bali TV', website : '', theme:"local"},
      {channel : 'JTV', website : '', theme:"local"},
      {channel : 'BBS TV', website : '', theme:"local"},
    ];

    let channels;

    if(this.props.status=="national"){
      channels = national_channels_list;
    }else if(this.props.status=="local"){
      channels = local_channels_list;
    }

    const channel_to_show = split(channels, 4);

    return (
      <div>
        {channel_to_show}
      </div>
    );
  }
}


TelevisionCard.defaultProps = {
  theme:"standart"
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Title />
      </header>
      <div className="main-class">
      <div>
        <h2>Stasiun TV Nasional</h2>
        <TelevisionRow status="national"/>
      </div>
      <div>
      <h2>Stasiun TV Lokal</h2>
        <TelevisionRow status="local"/>
      </div>
      </div>
     
      
    </div>
  );
}
  


export default App;

