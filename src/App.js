import React from 'react';

import { TitleInput } from './components';
import styles from './App.module.css';

import { randomArticle } from './api';

// Up next, write code that outputs a random title.
// questions, where to run the code? a component here? on inputField? a new component? ask André what he thinks.
class App extends React.Component {

  // On hold as this is no longer to use the previous function
  
  // Babel will transpile and add a constructor behind the scenes.
  state = {
    data: [],
    selectedData: "",
  }

  async componentDidMount() {
    const fetchedData = await randomArticle();

    this.setState({ data: fetchedData });
  }

  render() {
  // console.log(this.state.data);

    return (
      <div className={styles.container}>
        <TitleInput data={this.state.data} />
      </div>
    );
  }
}

// App done whilst following a youtube video regarding a different app done with React
// Left off at ####
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
