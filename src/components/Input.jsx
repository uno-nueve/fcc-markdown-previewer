import React from 'react';

const Input = ({ text, setText }) => {

    const handleChange = (e) => {
        setText(e.target.value)
    }

    return (
        <div className='column column-1'>
            <div className='title'>
                <span>Markdown</span>
            </div>
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

