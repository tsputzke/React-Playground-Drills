import React from 'react';
import './Accordion.css'

class Acordion extends React.Component {
  static defaultProps = { sections: []};
  state = {
    currentTabIndex: null
  };
  handleButtonClick(index) {
    this.setState({
      currentTabIndex: index
    })
  }
  renderButtons() {
    return this.props.sections.map((tab, index) => (
      <li  key={index}>
        <button className="button-styles" onClick={() => this.handleButtonClick(index)}>
        {tab.title}
        </button>
      </li>
    ))
  }
  renderContent() {
    if(this.state.currentTabIndex != null) {
      const currentTab = this.props.sections[this.state.currentTabIndex]
      return (
        <p>{currentTab.content}</p>
      )
    }
  }
  render() {
    return (
      <div>
        <ul>
        {this.renderButtons()}
        </ul>
        {!!this.props.sections.length && this.renderContent()}
      </div>      
    )
  }
}

export default Acordion