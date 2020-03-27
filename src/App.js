import React, { Component } from "react";
import EmployeeCard from "./components/EmployeeCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import employees from "./employees.json";
// import FilterCard from "./components/FilterbyCard";
 // import $ from "jquery";




class App extends Component {
  // Setting this.state.friends to the friends json array
  constructor(props) {
    super(props);
    this.state = {
      employees: employees,
      managers: employees,
      servers: employees,
      searchTermFilter: employees,
      searchTerm: "",
      
  
    };

    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.handleFilter = this.handleFilter.bind(this);
  }

  // // state = {
  // //   employees: employees,
  // //   managers: employees,
  // //   servers: employees,
  // //   searchTermFilter: employees,
  // //   searchTerm: ""

  // // };
  // putOnDisplay = () => {
  //   this.setState({...this.employees, ...this.managers, ...this.servers, ...this.searchTermFilter, searchTerm: "", display: !this.display})

//////////////////////////////// change this function to one that filters by name 
  removeFromDisplay = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const employees = this.state.employees.filter(employee => employee.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ employees, ...this.managers, ...this.servers, ...this.searchTermFilter, searchTerm: "",});

    /////////////////////////// change setState to update the state with filter
  };

//   handleFormSubmit = () => {
//     // Getting the value and name of the input which triggered the change
//     // // const searchName = event.target.value;

//     // // const stringed = searchName.toString();
//     // // const foundName = this.state.searchTermFilter.filter(employee => employee.name === `"${stringed}"`);
// const valueHere = this.state.searchTerm;
// const foundName = this.state.searchTermFilter.filter(employee => employee.name === valueHere);    
//     // Updating the input's state
//     this.setState({
//       ...employees,
//       ...this.managers,
//       ...this.servers,
//       searchTermFilter: foundName,
//       searchTerm: ""
     
//     });

    
    
    
    
//   };

onChangeHandler = (event) => {

  
  this.setState({
    ...employees,
    ...this.managers,
    ...this.servers,
    ...this.searchTermFilter,
    searchTerm: event.target.value,
    
   
  });

}
  handleFilter = (event) => {

    event.preventDefault();
     const searchName = this.state.searchTerm;
     
     const foundName = this.state.searchTermFilter.filter(employee => employee.name === searchName);    


    this.setState({
      ...employees,
      ...this.managers,
      ...this.servers,
      searchTermFilter: foundName,
      ...this.searchTerm,
      
     
    });
  }

  

  

  handleManagers = () => {
    const managers = this.state.managers.filter(employee => employee.occupation === "Manager");
    

    this.setState({
      ...employees,
      managers: managers,
      ...this.servers,
      ...this.searchTermFilter,
      searchTerm: "",
      
    })
  }


  handleServers = () => {
    const servers = this.state.servers.filter(employee => employee.occupation === "Server");

  

    this.setState({
      ...employees,
      ...this.managers,
      servers: servers,
      ...this.searchTermFilter,
      searchTerm: "",
      
    })
  }
  // renderFilter = (event) => {
  //   const employees = this.state.employees.filter(employee => employee.occupation !== event.target.value);
  //   return ( $("#chosenOne").append(`"${employees.map(employee => (
  //     <FilterCard
          
  //         id={employee.id}
  //         key={employee.id}
  //         name={employee.name}
          
  //         occupation={employee.occupation}
  //         location={employee.location}
  //       />
  //       ))}"`
        
  //     ) 
  //     )
      
  // }
  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <div>
      <Wrapper>
        <Title>All employees until removed</Title>
        {this.state.employees.map(employee => (
          <EmployeeCard
            removeFromDisplay ={this.removeFromDisplay}
            id={employee.id}
            key={employee.id}
            name={employee.name}
            
            occupation={employee.occupation}
            location={employee.location}
          />
        ))}
        </Wrapper>
        
       

       <Title>Search for employee</Title>
       <form onSubmit = {this.handleFilter} className="form">
          <input
            onChange = {this.onChangeHandler}
            name="searchTermFilter"
            value = {this.state.searchTerm}
            type="text"
            placeholder="find employees by name"
          />
           <input type="submit" value="Submit" />
        {/* <button onClick={this.handleFilter}>Submit</button> */}
        </form>
       <Wrapper >
       {this.state.searchTermFilter.map(employee => (
          <EmployeeCard
            removeFromDisplay ={this.removeFromDisplay}
            id={employee.id}
            key={employee.id}
            name={employee.name}
            
            occupation={employee.occupation}
            location={employee.location}
          />
        ))}
</Wrapper>
  


        <Title>All servers after button press</Title>

<button onClick = {this.handleServers}> Show me the servers</button>
<Wrapper >
{this.state.servers.map(employee => (
          <EmployeeCard
            removeFromDisplay ={this.removeFromDisplay}
            id={employee.id}
            key={employee.id}
            name={employee.name}
            
            occupation={employee.occupation}
            location={employee.location}
          />
        ))}
        </Wrapper>
<button onClick = {this.handleManagers}> Show me the managers</button>
<Title>All Managers after button press</Title>
<Wrapper >
        {this.state.managers.map(employee => (
          <EmployeeCard
            removeFromDisplay ={this.removeFromDisplay}
            id={employee.id}
            key={employee.id}
            name={employee.name}
            
            occupation={employee.occupation}
            location={employee.location}
          />
        ))}
        
{/* <div id ="chosenOne">

</div> */}
       

      </Wrapper>
      </div>
    );
  }
}

export default App;