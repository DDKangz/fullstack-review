import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: []
    }

  }

  search (term) {
    console.log(`${term} was searched`);
    // TODO
    let query = {username : term};
    $ajax({
      url : '/repos',
      type: 'POST',
      contentType :'application/json',
      success : () => {
        console.log('sucess on search Ajax request')
        $ajax({
          url: '/repos',
          type: 'GET',
          contentType: 'application/json',
          data: JSON.stringify (query),
          success: (data) => {
            this.setState({repose: data})
          },
          error: (err) => {
            console.log ('Faild GET request!');
          }
        });
      },
      error: (err) => {
        console.log ('Faild POST request!')
      }
    })
  }


  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos}/>
      <Search onSearch={this.search.bind(this)}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));