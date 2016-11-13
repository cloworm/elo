import React from 'react';
import AjaxPromise from 'ajax-promise';
import Store from '../reducers/store.js';
import loadingUntil from '../reducers/loading.js';
import League from './League.jsx';
// import RaisedButton from 'material-ui/RaisedButton';

class Leagues extends React.Component {

  componentDidMount () {
    if (!this.props.leagues) {
      let fetchLeagues = AjaxPromise
        .get('/api/users/1/leagues')
        .then(function (response) {
          console.log("load leagues", response);
          Store.dispatch({
            type: "LOAD_LEAGUES",
            leagues: response
          });
        })
        .catch(function(err){
          console.log("/api/user/index error", err);
        });

      loadingUntil(fetchLeagues);
    }
  }

  renderLeagues() {
    if (!this.props.leagues) return <div/>;

    return this.props.leagues.map(function(league) {
      return <League key={league.id} league={league}/>
    });
  }

  render (){
    return(
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
          <h2>Leagues: {this.props.leagues && this.props.leagues.length}</h2>
          {this.renderLeagues()}
        </div>
      </div>
    )
  }
}

module.exports = Leagues;
