const InputComponent = () => {
  <input type="text" tabindex="1">
      
  </input>
};

// Rendering the input field
class InputField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category: ""
    };
  }
  
  render() {
    <form>
      <inputComponent />
      
    </form>
  }
}