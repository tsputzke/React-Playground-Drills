import React, { Component } from 'react';
import './App.css';
import RegistrationForm from './registrationForm/registrationForm';
// import Messages from './Messages';
// import TheDate from './state/TheDate';
// import Counter from './state/Counter';
// import HelloWorld from './state-drills/HelloWorld'
// import Bomb from './state-drills/Bomb'
// import RouletteGun from './state-drills/RouletteGun';
// import Tabs from './state/Tabs';
// import Accordion from './state-drills/Accordian';
// import DemonymApp from './DemonymApp/demonymApp';

// const tabsProp = [
//   { name: 'First tab',
//     content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque.' },
//   { name: 'Second tab',
//     content: 'Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
//   { name: 'Third tab',
//     content: 'Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur.' },
// ];

// const sections = [
//   {
//     title: 'Section 1',
//     content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
//   },
//   {
//     title: 'Section 2',
//     content: 'Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!',
//   },
//   {
//     title: 'Section 3',
//     content: 'Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?',
//   },
// ]

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Messages name="Messages" unread={0}/>
        <Messages name="Notifications" unread={10}/>
        <TheDate />
        <Counter step={3} />
        <HelloWorld />
        <Bomb />
        <RouletteGun  bulletInChamber={3} />
        <Tabs tabs={tabsProp}/>
        <Accordion sections={sections}/> */}
        {/* <DemonymApp /> */}
        <RegistrationForm />
      </div>
    );
  }
}

export default App;