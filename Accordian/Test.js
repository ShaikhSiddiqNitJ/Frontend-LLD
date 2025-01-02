import Accordion from './Accordian'
const Test = () => {
    const items = [
      { title: "Section 1", content: "This is the content for section 1." },
      { title: "Section 2", content: "This is the content for section 2." },
      { title: "Section 3", content: "This is the content for section 3." },
    ];
  
    return (
      <div>
        <h1 style={{ textAlign: "center" }}>React Accordion</h1>
        <Accordion items={items} allowMultiple={true} />
      </div>
    );
  };
  
  export default Test;
  