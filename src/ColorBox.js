import React, { Component } from 'react';

export default class ColorBox extends Component {

  state = {
    todos: [
      
    ]
  }

  render() {
    return (
      <div className="color-box" style={{opacity: this.props.opacity /*replace null with the value*/}}>
        { this.props.opacity >= 0.2 ? 
            <ColorBox opacity ={this.props.opacity - 0.1} />
            : null}
      </div>
    )
  }

}

// export default class ColorBox extends Component {

//   render(){
//     if(this.props.opacity >= 0.2) {
//       return (
//         <div className="color-box" style={{opacity: this.props.opacity}}>
//             <ColorBox opacity={this.props.opacity - 0.1} />
//         </div>
//       )
//     } else {
//       return null
//     }
//   }







// }
