import React from 'react';
import './App.css';
import UserPage from "./components/user";
import SearchForm from "./components/searchform"

class User extends React.Component {
  state= {
  page:{},
  followers: []
}

componentDidMount () {
  fetch(`https://api.github.com/users/britneyparkerson`)
  .then((res) => res.json())
  .then((res) => this.setState({ page: res }) )
  .catch(err => console.error("Oops! And error occurred, please wait.", err))
  .then(
  fetch(`https://api.github.com/users/britneyparkerson/followers`)
  .then((res) => res.json())
  .then((res) => this.setState({ followers: res }))
  .catch(err => console.error("Oops! And error occurred, please wait.", err))
  )
  }
render() {
  const {page, followers } = this.state;
  return (
    <div>
      <SearchForm/>      
      <UserPage page={page}/>
      <h2>Britney's Followers</h2>
      {followers && followers.map((follower, i) => <UserPage key={i} page={follower}/>)}
    </div>
  );
}

}
export default User;