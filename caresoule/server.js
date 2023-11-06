const express = require('express');
const app = express();
const port = 5000;

const sliderData = {
    heading: 'Top Heading from Node.js',
    subheading: 'Subheading from Node.js',
    images: [
        {
            
            heading: 'Heading 1',
            subheading: 'Node Js 1'
        },
        {
           
            heading: 'Heading 2',
            subheading: 'Node Js 2'
        },
        {
           
            heading: 'Heading 3',
            subheading: 'Node Js 3 '
        },
        {
           
            heading: 'Heading 4',
            subheading: 'Node Js 4'
        },
        {
           
            heading: 'Heading 5',
            subheading: 'Node Js 5'
        },
    ]
};

app.get('/api/data', (req, res) => {
    res.json(sliderData);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
