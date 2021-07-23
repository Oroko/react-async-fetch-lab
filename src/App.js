// create your App component here

// import React ,{useState, useEffect} from 'react'

// const App = () => {
//   const [people, setPeople] = useState([])
//   useEffect(() => {
//     fetch("http://api.open-notify.org/astros.json")
//     .then(res => res.json())
//     .then(data => setPeople(data.people))
//   })
//   return (
//     <div>{people.map(person => <ul><li>{person.name}</li></ul>)}</div>
//   )
// }

// export default App

import React from 'react'
class App extends React.Component{
  constructor(){
    super();
    this.state = {
      people: [],
    }
  } 

  componentDidMount(){
    fetch("http://api.open-notify.org/astros.json")
    .then(res => res.json())
    .then(data => this.setState({people: data.people}))
  }

  render(){
    const {people} = this.state
    return (
      <div>{people.map(person => <ul><li>{person.name}</li></ul>)}</div>
    )
  }
}

export default App