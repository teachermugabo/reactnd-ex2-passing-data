import React, { Component } from 'react'
import UserList from './UserList';

/* component structure: 
  <h2>{movie.name}</h2>
  <p>Liked By:</p>
  <NamesList names={names}/>
*/

class MovieFavorites extends Component {
  render () {
  	return (
    <div>
      	<h2>{this.props.movie.name}</h2>
      	{(this.props.users.length === 0)? 
          "No one liked it :(" :
      	  <div>
            <p>Liked By: </p>	
            <UserList users={this.props.users}/>
          </div>
       }
	</div>
    )
  }
}

export default MovieFavorites;