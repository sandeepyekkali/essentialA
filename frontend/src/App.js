import React from 'react';
import './styling/styles.scss';
import Form from './components/form';
import Text from './components/text'
import ImageList from './components/imageList';

function App() {
  return (
    <div className="App">
      <h1>Example Form</h1>
      <div className= "dashboard">
      <ImageList/>
       <Form >
         <Text />
       </Form>
      </div>
    </div>
  );
}

export default App;
