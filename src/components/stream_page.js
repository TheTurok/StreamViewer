import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchLiveBroadcasts} from '../actions';

class StreamPage extends Component {
  constructor(props){
    super(props);

    this.state = {
      videos: [],
      selectedStreams: null
    };
  }

  componentDidMount(){
    this.props.fetchLiveBroadcasts();
  }

  render() {
      const {liveStreams} = this.props;
      if(liveStreams)
        console.log(liveStreams);

    return (
      <div>
        <h1> Streams </h1>
      </div>
    );
  }
}

function mapStateToProps(state){
  return{ liveStreams: state.liveStreams};
}

export default connect(mapStateToProps, {fetchLiveBroadcasts} ) (StreamPage);
