import React from 'react';
import logo from './logo.svg';
import './App.css';

import {MessageBox, Input}  from "react-chat-elements";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <p>
          A Web UI for Twilio SMS and Whatsapp API . 
        </p>
        
      </header>
      <MessageBox
        position='left'
        title='Burhan'
        type='text'
        text="Hi there !"
        date={new Date()}
        id='1234'
        focus={true}
        replyButton={false}
        removeButton={false}
        forwarded={false}
        titleColor=''
        status='received'
        notch={false}
        retracted={false}

        
      />

      <Input
          className='rce-example-input'
          placeholder='Write your message here.'
          defaultValue=''
          //value={inputValue}
          //onChange={handleInputChange}
          multiline={true}
          maxlength={300}
          onMaxLengthExceed={() => console.log('onMaxLengthExceed')}
          
          
          maxHeight={50}
          
          onKeyPress={(e: any) => {
            if (e.shiftKey && e.charCode === 13) {
              return true
            }
            if (e.charCode === 13) {
              
            }
          }}
      />
    </div>
    
  );
}

export default App;
