import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import SearchBox from './components/searchBox';

// import UserInfo from './components/userinfo';
import UserInfoo from './components/userinfo';

class App extends Component{
  constructor(){
    super()
    this.state={
      Details:[],
      searchDetails:""
    }
  }
  
  componentDidMount(){
    fetch("https://www.omdbapi.com/?apikey=45f0782a&s=war/")
    .then(res=>res.json())
    .then(user=>this.setState(()=>{
      return{Details:user.Search}
    }))
  }
  onSearch=(data)=>{
    const key=data.target.value.toLocaleLowerCase()
    this.setState(()=>{
      return{searchDetails:key}
    })
  }
  render(){
    console.log(this.state.Details)
    const filter=this.state.Details.filter((users)=>{
      return(
        users.Title.toLocaleLowerCase().includes(this.state.searchDetails)
      )
    })
    console.log(filter)

 
    
    
    return (
      <div className="App">
  
      
        <SearchBox searchHandler={this.onSearch} className={"SearchName"} placeHolder={"Search for Movie Title..."}/>
      <UserInfoo userData={filter}/>
    
    
      
      </div>
    );
  }
 
}

export default App;