import React from 'react';
import './imagelinkform.css';

const ImageLinkForm = ({onInputChange, onButtonSubmit}) => {
  const enter=(event)=> {
    if (event.keyCode === 13) {
      onButtonSubmit();
    }
  }
  return (
    <div>
      <p className='f3'>
        {'Enter an image url from the internet into the search bar and this app will use AI to determine if there is a face in your image. If there is a face in your picture a bounding box will wrap around one of the faces in the image.'}
      </p>
      <div className='center'>
      <div className='form pa4 br3 shadow-5 barwidth backgroundcolor'>
        <input id='input' type='text' onKeyDown={(e) => enter(e) } className='f4 pa2 w-70 center' type='text' onChange={onInputChange}/>
        <button id='button' className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple'
        onClick={onButtonSubmit}
        >Detect</button>
      </div>
      </div>
    </div>
  );
}

export default ImageLinkForm;
