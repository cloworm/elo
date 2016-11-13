import React from 'react';
import AjaxPromise from 'ajax-promise';
import Store from '../reducers/store.js';
import loadingUntil from '../reducers/loading.js';
// import RaisedButton from 'material-ui/RaisedButton';

class League extends React.Component {

  render (){
    return(
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
          <h2>League: {this.props.league.name}</h2>
        </div>
      </div>
    )
  }
}

module.exports = League;
