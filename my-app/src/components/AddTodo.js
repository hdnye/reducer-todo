import React from 'react';

class AddTodo extends React.Component {
    constructor(props) {
        super(props);
           this.state = {
               item: ''
      };
    }

  changeHandler = e => {
      this.setState({ item: e.target.value });
  };  

  submitHandler = e => {
      e.preventDefault();
      this.props.addTodo(this.state.item);
      this.setState({ item: '' });
  }

  render() {
      return (
        <form onSubmit={this.submitHandler}>
            <label htmlFor='item'></label>
                <input className='new_todo'
                    type='text'
                    name='item'
                    placeholder='Add New Todo'
                    value={this.state.item}
                    onChange={this.changeHandler}
                />  
            <button type='submit' >Add New</button>
         </form>
     );
  }
}; 

export default AddTodo;
     
 