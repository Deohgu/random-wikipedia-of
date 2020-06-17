import React from 'react';

import { InputField, Title } from './components';
import styles from './App.module.css';

// Sort this
import { request } from './api';

class App extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <Title />
        <InputField />
      </div>
    );
  }
}

// Currently here!
// Seems to be loggin before the data is delivered, do I also need to make it async?
// Check youtube projects like before.
console.log(request());

// Currently working between app.js and ./api/index.js

// App done whilst following a youtube video regarding a different app done with React
// Left off at 15:40
// https://www.youtube.com/watch?v=khJlrj3Y6Ls
// Compare with this one to understand
// https://www.youtube.com/watch?v=U9T6YkEDkMo

export default App;






// const InputComponent = () => {
//   <input type="text" tabindex="1">
      
//   </input>
// };

// // Rendering the input field
// class InputField extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       category: ""
//     };
//   }
  
//   render() {
//     <form>
//       <inputComponent />
      
//     </form>
//   }
// }