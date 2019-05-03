import React from 'react';

class Form extends React.Component{
	render(){
		return(
			<div>
				<form onSubmit={this.props.getWeather}>
					<input type="text" name="city" placepholder="City"/>
					<input type="text" name="country" placepholder="Country"/>
					<button> Get Weather </button>
				</form>

			</div>

		)
	}
}

export default Form
