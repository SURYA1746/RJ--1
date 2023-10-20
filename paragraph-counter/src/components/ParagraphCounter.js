import React, { useState } from 'react';

function ParagraphCounter() {
  const [text, setText] = useState('');
  const wordCount = text.split(/\s+/).filter(Boolean).length;

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const containerStyle = {
    maxWidth: '400px',
    margin: '0 auto',
    padding: '20px',
  };

  const textareaStyle = {
    width: '100%',
    height: '200px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    padding: '10px',
    fontSize: '16px',
  };

  const wordCountStyle = {
    marginTop: '10px',
    fontSize: '18px',
  };

  return (
    <div style={containerStyle}>
      <h1>Responsive paragraph <br/>Word Counter</h1>
      <textarea
        style={textareaStyle}
        value={text}
        onChange={handleTextChange}
        placeholder="Enter text here..."
      />
      <p style={wordCountStyle}>WordCount: {wordCount}</p>
    </div>
  );
}

export default ParagraphCounter;
