import React from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class Button extends React.Component {
    //static contextType = LanguageContext;//se agrega a la clase directamente porque es estático

    renderSubmit(value) {
        return value === 'english' ? 'Submit' : 'Voorleggen';
    }

    render(){
        //console.log(this.contextType);
        //const text= this.context === 'english' ? 'Submit' : 'Voorleggen';
        //this.context no funca si tengo varios contextos, tengo que usar consumer y provider
        return (
        
        <ColorContext.Consumer>
            {(color) => 
                <button className={`ui button ${color}`}>
                <LanguageContext.Consumer>
                    {(value) => this.renderSubmit(value)}
                </LanguageContext.Consumer>
                </button>
            }
        </ColorContext.Consumer>
        )
    }
}

export default Button;