import React, from 'react';
import logo from '.styles/logo.svg';
import registerServiceWorker from '../registerServiceWorker'

export default class App extends React.Component{
  render(){
    return(
      <div className="App">
        <BaseLayout>
        {this.props.children}
        </BaseLayout>
      </div>
    )
  }
}