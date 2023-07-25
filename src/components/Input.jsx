import React from 'react';

const Input = ({ text, setText }) => {

    const handleChange = (e) => {
        setText(e.target.value)
    }

    return (
        <div className='column'>
            <h4 className='title'>Input</h4>
            <div className='editor-wrapper'>
                <textarea 
                    className='editor'
                    id='editor'
                    value={text}
                    onChange={handleChange}
                />
            </div>
        </div>
    );
}

export default Input;

