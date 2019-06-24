import React from 'react';

class Acordian extends React.Component {
  static defaultProps = { sections: []};
  state = {
    currentTabIndex: 0
  };
  handleButtonClick(index) {
    this.setState({
      currentTabIndex: index
    })
  }
  renderButtons() {
    return this.props.sections.map((tab, index) => (
      <li  key={index}>
        <button onClick={() => this.handleButtonClick(index)}>
        {tab.title}
        </button>
      </li>
    ))
  }
  renderContent() {
    const currentTab = this.props.sections[this.state.currentTabIndex]
    return (
      <p>{currentTab.content}</p>
    )
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

export default Acordian