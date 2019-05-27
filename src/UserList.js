import React, { Component } from 'react'

/* component structure: 
  <ul>
    <li>Nicholas Lain</li>
  </ul>
*/

class UserList extends Component {
  render () {
  	return (
      <ul>
      {this.props.users.map((user) => (
      	<li key={user.id}>{user.name}</li>
      ))}
	  </ul>
    )
  }
}

export default UserList;