import React, { useState } from 'react';
import Footer from './comps/Footer';
import ImageGrid from './comps/ImageGrid';
import Modal from './comps/Modal';
import Title from './comps/Title';
import UploadForm from './comps/UploadForm'

function App() {
  const [selectedImg, setSelectedImg ] = useState(null);

  return (
    <div className="App">
      <Title />
      <UploadForm />
      <div className="main">
      <ImageGrid setSelectedImg={setSelectedImg}/>
      { selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg}/> }
      </div>
      <Footer />
    </div>
  );
}

export default App;
