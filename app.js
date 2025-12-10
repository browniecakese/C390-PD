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
        title: 'Digital Banner',
        mainImage: 'cat1_work1.jpg',
        text1: `Overview: This digital banner was created as part of a school assignment where we were tasked with designing a 336x280px advertisement for a fictional travel company called Travelly. The main objective of the work was to promote the company's travel packages and its flight and hotel booking services through an eye-catching and engaging design.`,
        text2: `Concept: The concept I chose for this digital banner was inspired by the hobby of scrapbooking. Scrapbooking is a creative hobby where people note down past experiences like travelling or special occasions in books, decorated with stickers, tape and drawings, to reminisce good memories from those experiences. I wanted to capture that nostalgic and heartfelt feeling in the banner to show that after using Travelly’s services, customers end up with amazing trips and wonderful memories. Using this idea gives the digital banner a personal and relatable touch and allows Travelly to come across more friendly and inviting towards potential customers. This concept approach also sets the design apart from typical advertisements, making it distinctive and attention-grabbing to viewers.`,
        text3: `Principles of design: I used the principle of movement in the banner to direct the viewer’s eyes naturally towards different points of the banner using the red dotted line that runs along the entire span of the page of the book. I used emphasis to make the company services highlighted since the rest of the elements are more warm toned in comparison to the cool toned light blue used as the backing for the text, making it stand out more. I used repetition with the letter stickers, the format on how the pictures are shown and the company services’ font and layout to create consistency within the slightly ‘messy’ layout of the scrapbook aesthetic.`,
        text4: `Image editing and composition: To achieve the scrapbook look, I primarily used masking techniques for cutting out the stickers from an embedded picture and clip masking to embed pictures of the landmarks into rectangle frames. To make the banner have a warmer and vintage-looking atmosphere, I applied a semi-transparent brown overlay as a filter and adjusted it's colour balance to product a warm, slight aged tone for the paper. This not only complimented my colour scheme and scrapbooking concept but also enhances the inviting and nostalgic feel of the whole digital banner.`
    },

    work2: {
        title: '3x3 Grid',
        mainImage: 'cat1_work2.png',
        text1: `Overview: This 3x3 grid was created as a part of a school assignment where we were tasked with designing a 3x3 Instagram Grid advertisement for a fictional travel company called Travelly. The main objective of this work was to design a cohesive social media campaign that promotes the company's discounts while encouraging user engagement.`,
        text2:  `Concept: The concept behind my design was inspired by the classic board game Snakes & Ladders. I chose this theme because it evokes nostalgia and playfulness, these feelings remind viewers of good childhood memories and memories in general. However I removed the 'snakes' portion of the game as they traditionally represent negative setbacks in the game, since the purpose of this design was to encourage positive thinking and excitement about Travelly's promotions, I kept the ladders which help to represent opportunity and adventures.`,
        text3: `To support my concept I used a bright colour scheme reminiscent of the original snakes & ladders games, softening the saturation of the colours so as to not strain the viewer's eyes when looking at the grid. The landmarks placed in the outer squares help to visually balance the design while also promoting destinations that Travelly offers. I used the path of the game as a visual guide for viewers, it creates movement and directs their eyes from each grid square to the next, increasing engagement with all the grid squares. This playful and interactive layout helps communicate the promotions in a fun way, keeping the viewers interested.`,
        text4: `Design Principles: The principle of movement plays a major role in this design, by using the path of the snakes & ladders game as a directional guide for viewers. Balance was achieved in the 3x3 grid by ensuring the alternating corners of the design had the same elements like the travel destinations being in opposite corners and the main text being on opposite corners as well. The whole design has unity through using the same colour scheme consistently and graphic styles, so that even when viewed individually the design of each square is cohesive.`,
        text5: `Image editing and composition: To achieve the board game inspired look, i used masking and clipping techniques to align the coloured checkerboard path, made with vector shapes and line tools, smoothly across all the squares. The destination images were embedded and masked into curved corners.`
    },
    
    work3: {
        title: 'Project 3',
        mainImage: 'project3.jpg',
        images: [],
        description: [
            'Description of project 3'
        ]
    },
    work4: {
        title: 'VR Game - The Greenhouse Escape',
        mainImage: 'cat2_work1_ss1.jpg',
        text1: 'Overview: The Greenhouse Escape is a short virtual reality (VR) escape room project designed to combine exploration, problem-solving, and environmental storytelling. Set inside an abandoned greenhouse, the experience challenges players to solve a sequence of interactive puzzles in order to escape. The project was developed with a focus on accessibility and ease of play, making it suitable for newcomers to both VR and escape room experiences.',
        text2: 'Concept and Design Vision: The main idea behind the project was to create an immersive yet relaxing puzzle environment where players could learn basic VR interaction mechanics while being engaged through curiosity and discovery. Instead of emphasizing difficulty or time pressure, the design encourages players to explore freely and think logically at their own pace.',
        text3: 'The greenhouse setting was chosen for its natural aesthetic and atmospheric potential, a mix of overgrown nature and forgotten human presence. This space serves as both the environment and the narrative device: every object, texture, and sound subtly reinforces the sense of mystery and isolation.',
        image1: 'cat2_work1_ss2.jpg',
        text4: 'Gameplay and Interaction: Players begin inside a single greenhouse room and must investigate their surroundings to find tools and clues that progress through a chain of five puzzles. The interactions are intentionally simple, picking up, placing, and activating objects using VR controllers, helping players become comfortable with virtual interactions.',
        text5: 'Each solved puzzle contributes to a larger sequence, gradually unlocking the final key that allows the player to exit the greenhouse. The use of color and object-matching mechanics was chosen to make puzzle objectives intuitive and visually clear without requiring on-screen instructions.',
        text6: 'User Experience and Accessibility: The gameplay experience emphasizes comfort and inclusivity. Movement is handled through teleportation to reduce motion sickness, and the absence of NPCs or time limits allows players to focus entirely on exploration and puzzle-solving. The design prioritizes intuitive feedback and minimal user interface, letting the environment itself guide the player.',
        video1: 'cat2_work1_video.mp4',
        text7:'Visual and Audio Design: The art direction blends muted natural tones with a slightly eerie ambience to highlight the theme of abandonment. Soft, diffused lighting, cracked glass, and moss-covered textures create an immersive mood without overwhelming visual detail. Ambient greenhouse sounds, such as dripping water and faint rustling, enhance the sense of realism and immersion.',
        text8: 'Development Process: The project was completed over several structured milestones, starting with the conceptual design and scene building, followed by puzzle implementation, testing, and final polish. Each stage emphasized iteration and user testing to ensure smooth interactions and stable gameplay in VR.',
        text9: 'The development process also focused on learning key VR development principles, such as teleportation systems, object interaction scripting and spatial sound design, while maintaining an achievable scope for a small-scale student project.',
        file1:{name: 'GreenHouse GDD', path:'C337_GDD_23031962_Kaera.docx'},
        text10: 'Reflection and Outcome: Through The Greenhouse Escape, the project demonstrates how simple design choices can create an engaging VR experience without relying on complex mechanics. The final product achieves a balance between accessibility and immersion, offering players a calm yet rewarding escape room experience. It also served as a valuable exercise in integrating environmental design, puzzle logic, and user experience principles into a cohesive VR project.'
    },

    work5: {
        title: 'Project 5',
        mainImage: 'project5.jpg',
        images: [],
        description: [
            'Description of project 5'
        ]
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