import React from 'react';
import { marked } from 'marked';

marked.use({
    breaks: true,
    gfm: true
})

const Preview = ({ markdown }) => {
    return (
        <div className='column column-2'>
            <div className='title'>
                <span>Preview</span>
            </div>
            <div className='preview-wrapper'>
                <div 
                    className='preview' 
                    id='preview'
                    dangerouslySetInnerHTML={{
                        __html: marked(markdown)
                    }}
                >
                </div>
            </div>
        </div>
    );
}

export default Preview;
