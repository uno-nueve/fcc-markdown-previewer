import React, { useState } from 'react';
import Input from './Input'
import Preview from './Preview';
import Footer from './Footer';
// import './styles.css'
import './previewer.css'

const initialContent = `
# Hi!  
## This is a markdown previewer
*******************************

### You can type:

- A **line of code**: \`<div clasName='contianer'></div>\`

- Or a **block of code**:  
\`\`\`
const showMultiline = (event) => {
    event.preventDefault()
    showCode(event)
}
\`\`\`
> Amazing, innit?

*You can also display images:*

![ASCII art](https://steamuserimages-a.akamaihd.net/ugc/865111643820639935/E6F64A1452B8609AB04A11E4FF5A20F3C208FB67/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false)

If you want to learn more [click here](https://developer.mozilla.org/en-US/docs/MDN/Writing_guidelines/Howto/Markdown_in_MDN)
`;

const MarkdownPreviewer = () => {

    const [content, setContent] = useState(initialContent);

    return (
        <div className="wrapper">
            <div className='container' id='content'>
                <Input text={content} setText={setContent} />
                <Preview markdown={content} />
            </div>
            <Footer />
        </div>
    );
}

export default MarkdownPreviewer;

