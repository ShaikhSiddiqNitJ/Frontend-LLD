import Popover from './Popover'
const Test = () => {
    return (
      <div style={{ padding: "50px", textAlign: "center" }}>
        <h1>Popover Example</h1>
        <Popover content={<p>This is the popover content!</p>} position="right">
          Click Me
        </Popover>
      </div>
    );
  };
  
  export default Test;
  