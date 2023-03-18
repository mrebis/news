import React,{ Component, useState } from 'react';
import '../css/styles.css'

    
    


class Header extends Component {

    state = {
     
        keywords:''
    }

  
    inputChangeHandler = (event) => {
        this.setState({
      
            keywords:event.target.value
        })
    }
    
    render(){      
     
        return (
            <header>
         
                <div className="logo">LOGO</div>

                <input type="text"
                onChange={this.inputChangeHandler} />

            </header>

        )
  }
}

export default Header;