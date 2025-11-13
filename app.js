const express = require('express');
const session = require('express-session');
const flash = require('connect-flash');
const app = express();

// Set up view engine
app.set('view engine', 'ejs');

//  enable static files
app.use(express.static('public'));

// enable form processing
app.use(express.urlencoded({
    extended: false
}));

app.use(flash());

// Define routes
app.get('/',  (req, res) => {
    res.render('home');
});

app.get('/home',  (req, res) => {
    res.render('home');
});

app.get('/portfolio',  (req, res) => {
    res.render('portfolio');
});

app.get('/about',  (req, res) => {
    res.render('about');
});

app.get('/contact',  (req, res) => {
    res.render('contact');
});

app.get('/work/:id', (req, res) => {
    const workId = req.params.id;
    
    // Project data
    const projects = {
        work1: {
            title: '3x3 Grid',
            description: 'Description of project 1',
            image: 'cat1_work1.jpg',
        },
        work2: {
            title: 'Project 2',
            description: 'Description of project 2',
            image: 'cat1_work2.png',
        },
        work3: {
            title: 'Project 3',
            description: 'Description of project 3',
            image: 'project3.jpg',
        },
        work4: {
            title: 'Project 4',
            description: 'Description of project 4',
            image: 'project4.jpg',
        },
        work5: {
            title: 'Project 5',
            description: 'Description of project 5',
            image: 'project5.jpg',
        }
    };
    
    const project = projects[workId];
    
    if (project) {
        res.render('work', { project: project });
    } else {
        res.redirect('/portfolio');
    }
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
