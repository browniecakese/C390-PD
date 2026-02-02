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
        title: 'Digital Banner', // Design
        mainImage: 'cat1_work1.jpg',
        text1: `Overview: This digital banner was created as part of a school assignment where we were tasked with designing a 336x280px advertisement for a fictional travel company called Travelly. The main objective of the work was to promote the company's travel packages and its flight and hotel booking services through an eye-catching and engaging design.`,
        text2: `Concept: The concept I chose for this digital banner was inspired by the hobby of scrapbooking. Scrapbooking is a creative hobby where people note down past experiences like travelling or special occasions in books, decorated with stickers, tape and drawings, to reminisce good memories from those experiences. I wanted to capture that nostalgic and heartfelt feeling in the banner to show that after using Travelly’s services, customers end up with amazing trips and wonderful memories. Using this idea gives the digital banner a personal and relatable touch and allows Travelly to come across more friendly and inviting towards potential customers. This concept approach also sets the design apart from typical advertisements, making it distinctive and attention-grabbing to viewers.`,
        text3: `Principles of design: I used the principle of movement in the banner to direct the viewer’s eyes naturally towards different points of the banner using the red dotted line that runs along the entire span of the page of the book. I used emphasis to make the company services highlighted since the rest of the elements are more warm toned in comparison to the cool toned light blue used as the backing for the text, making it stand out more. I used repetition with the letter stickers, the format on how the pictures are shown and the company services’ font and layout to create consistency within the slightly ‘messy’ layout of the scrapbook aesthetic.`,
        text4: `Image editing and composition: To achieve the scrapbook look, I primarily used masking techniques for cutting out the stickers from an embedded picture and clip masking to embed pictures of the landmarks into rectangle frames. To make the banner have a warmer and vintage-looking atmosphere, I applied a semi-transparent brown overlay as a filter and adjusted it's colour balance to product a warm, slight aged tone for the paper. This not only complimented my colour scheme and scrapbooking concept but also enhances the inviting and nostalgic feel of the whole digital banner.`
    },

    work2: {
        title: '3x3 Grid', // Design
        mainImage: 'cat1_work2.png',
        text1: `Overview: This 3x3 grid was created as a part of a school assignment where we were tasked with designing a 3x3 Instagram Grid advertisement for a fictional travel company called Travelly. The main objective of this work was to design a cohesive social media campaign that promotes the company's discounts while encouraging user engagement.`,
        text2:  `Concept: The concept behind my design was inspired by the classic board game Snakes & Ladders. I chose this theme because it evokes nostalgia and playfulness, these feelings remind viewers of good childhood memories and memories in general. However I removed the 'snakes' portion of the game as they traditionally represent negative setbacks in the game, since the purpose of this design was to encourage positive thinking and excitement about Travelly's promotions, I kept the ladders which help to represent opportunity and adventures.`,
        text3: `To support my concept I used a bright colour scheme reminiscent of the original snakes & ladders games, softening the saturation of the colours so as to not strain the viewer's eyes when looking at the grid. The landmarks placed in the outer squares help to visually balance the design while also promoting destinations that Travelly offers. I used the path of the game as a visual guide for viewers, it creates movement and directs their eyes from each grid square to the next, increasing engagement with all the grid squares. This playful and interactive layout helps communicate the promotions in a fun way, keeping the viewers interested.`,
        text4: `Design Principles: The principle of movement plays a major role in this design, by using the path of the snakes & ladders game as a directional guide for viewers. Balance was achieved in the 3x3 grid by ensuring the alternating corners of the design had the same elements like the travel destinations being in opposite corners and the main text being on opposite corners as well. The whole design has unity through using the same colour scheme consistently and graphic styles, so that even when viewed individually the design of each square is cohesive.`,
        text5: `Image editing and composition: To achieve the board game inspired look, i used masking and clipping techniques to align the coloured checkerboard path, made with vector shapes and line tools, smoothly across all the squares. The destination images were embedded and masked into curved corners.`
    },
    
    work3: {
        title: 'Character Design', // Design
        mainImage: 'project3.jpg',
        text1:'',
        text2:'',
        text3:'',
        text4:"",
    },

    work4: {
        title: 'Learn@RP App', // Design
        mainImage: 'project3.jpg',
        text1:'',
        text2:'',
        text3:'',
        text4:"",
    },

    work5: {
        title: 'Ecommerce App', // Design
        mainImage: 'project3.jpg',
        text1:'',
        text2:'',
        text3:'',
        text4:"",
    },

    work6: {
        title: 'VR Game - The Greenhouse Escape', //Development
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

    work7: {
        title: 'Event Tracker', //Development
        mainImage: 'cat2_work2_ss1.png',
        text1: 'Overview: The Event Tracker is a simple web-based application developed using Node.js and Express to help users record and manage events they have participated in. The project focuses on implementing core web development concepts such as routing, form handling, and dynamic content rendering, while presenting information in a clear and visually structured interface using Bootstrap.',
        text2: 'The application allows users to view a list of events, add new events, and update or delete existing entries, providing a complete basic CRUD experience.',
        text3: 'Concept and Design Vision: The main concept behind the Event Tracker was to create a personal and easy-to-use platform for documenting dance related events. Rather than building a complex database driven system, the project emphasizes understanding server-side logic, page navigation, and user interaction flow. The design vision prioritizes clarity and simplicity. Each page serves a single purpose, ensuring users can immediately understand what actions are available. A consistent navigation bar across all pages helps maintain familiarity and ease of movement throughout the application.',
        image1: 'cat2_work2_ss2.png',
        text4: 'Application Structure and Navigation: The application is structured into three main pages: Home, Events, and Add Event. The homepage functions as a welcoming introduction, briefly explaining the purpose of the tracker. From there, users can navigate to the Events page to view all recorded events or access the Add Event page to create new entries. This clear separation of functionality helps keep the interface intuitive and user-friendly.',
        text5: 'Event Display and Interaction: The Events page is the core feature of the application. It combines both visual and textual elements to present event information effectively. A Bootstrap carousel is used to showcase images from different events, adding visual interest and context to the listed content.',
        text6: 'Below the carousel, events are displayed in a dynamically generated list that includes the event title, date, and genre. Each event entry provides options to edit or delete the event, allowing users to manage their records directly from the page.',
        image2: 'cat2_work2_ss3.png',
        text7:'Adding and Editing Events: The Add Event page allows users to submit new event details through a simple form. Once submitted, the event is added to the existing list and immediately displayed on the Events page. An Edit Event feature is also included, enabling users to modify previously added events. The edit form is pre-filled with existing data to improve usability and reduce errors. Together, these features demonstrate effective handling of user input and server-side data updates.',
        text8: 'User Experience and Usability: The user experience focuses on straightforward interactions and minimal complexity. Forms are clearly labeled, navigation is consistent, and feedback is immediate through page redirection after actions such as adding, editing, or deleting events. Bootstrap components are used to ensure responsive layout and visual consistency across different screen sizes, while keeping the interface clean and uncluttered.',
        text9: 'Development Process: The project was developed incrementally, beginning with setting up the Express server and basic routing. Core features such as event listing and page navigation were implemented first, followed by form handling for adding events. Additional functionality, including editing, deleting, and the event carousel, was added after the core structure was established. This iterative approach allowed for testing and refinement at each stage of development.',
        image3: 'cat2_work2_ss4.png',
        text10: 'Reflection and Outcome: The Event Tracker project successfully demonstrates the fundamentals of building a server-side web application with Express. It highlights the integration of backend logic with frontend presentation, as well as the implementation of essential CRUD functionality. Through this project, valuable experience was gained in structuring routes, handling user input, and designing a simple yet functional user interface. The final outcome is a cohesive application that balances usability, visual engagement, and technical clarity, making it a strong example of foundational full-stack web development'
    },

    work8: {
        title: 'Calorie Tracker', // Development
        mainImage: 'cat2_work3_ss1.jpg',
        text1: 'Overview: The Daily Calorie Tracker is a mobile application developed using React Native that enables users to record, manage, and review their daily calorie intake. The application allows users to input food items along with their calorie values and organizes these entries into predefined meal categories. By calculating totals and providing a summary of daily consumption, the app supports users in gaining a clearer understanding of their eating patterns and overall calorie intake.',
        text2: 'Concept and Design Vision: The core concept of the Daily Calorie Tracker was to design a lightweight and efficient mobile application that focuses on essential calorie tracking functionality without unnecessary complexity. The design emphasizes structured data representation and straightforward interactions, ensuring that users can log information quickly and accurately. Meal-based categorization was intentionally chosen to reflect common daily eating routines and to make the tracked data more meaningful and easier to interpret.',
        text3: 'From a design perspective, the application adopts a minimal interface that prioritizes readability and functional clarity. Visual differentiation between meal categories helps users quickly scan and understand their data, while consistent layout patterns across screens reduce cognitive load and improve usability.',
        image1: 'cat2_work3_ss2.jpg',
        text4: 'Application Architecture and Navigation: The application follows a component-based architecture typical of React Native development. State is managed locally to store food entries and calorie data, which are then passed between components as needed. The main tracking screen is responsible for displaying food entries, while a separate summary component handles all calorie calculations and data aggregation',
        text5: 'Navigation between the tracking screen and the summary screen is implemented to maintain a clear separation of concerns. This structure ensures that the logic for displaying and modifying food data is kept distinct from the logic used to compute and present summary information, improving maintainability and readability of the codebase.',
        text6: 'Data Structure and Food Management: Food data is structured into sections representing breakfast, lunch, and dinner, with each section containing an array of food items. This structure allows the use of React Native’s SectionList component to efficiently render grouped data. Each food item stores both descriptive information and a numeric calorie value, enabling real-time calculations. Users can add new food entries through controlled inputs, edit existing entries to update calorie values or reassign them to different meal categories, and delete items when necessary. Deletion actions are paired with confirmation prompts to prevent accidental data loss, reinforcing data integrity within the application.',
        image2: 'cat2_work3_ss3.jpg',
        text7:'Summary Logic and Calorie Computation: The summary screen is responsible for calculating total calorie intake by iterating through all meal sections and summing the calorie values of each food item. In addition to the overall total, the application computes individual calorie totals for breakfast, lunch, and dinner, providing users with a detailed breakdown of their consumption throughout the day.',
        text8: 'The app compares the calculated total against recommended daily intake values of 2000 calories for females and 2500 calories for males. Logical conditions are used to determine whether the user’s intake exceeds or falls below these recommendations, and the exact difference is displayed. These calculations update dynamically whenever the underlying food data changes, ensuring the summary remains accurate and responsive.',
        text9: 'Development Process: The project was developed incrementally, beginning with setting up the Express server and basic routing. Core features such as event listing and page navigation were implemented first, followed by form handling for adding events. Additional functionality, including editing, deleting, and the event carousel, was added after the core structure was established. This iterative approach allowed for testing and refinement at each stage of development.',
        image3: 'cat2_work3_ss4.jpg',
        text10: 'Reflection and Outcome: The Daily Calorie Tracker demonstrates a strong understanding of React Native fundamentals, including component-based architecture, state management, and dynamic data rendering. The project successfully integrates user input handling with real-time calculations to create a functional and informative mobile application. Through this project, practical experience was gained in structuring mobile app logic, managing grouped data efficiently, and designing interfaces that prioritize usability. The final application effectively balances technical implementation with user-centered design, making it a solid example of applied mobile development skills.',
        video1: 'cat2_work3_video.mp4'
    },

    work9: {
        title: 'Name', // Development
        mainImage: 'image.jpg',
        text1: '',
        text2: '',
        text3: '',
        image1: 'image.jpg',
        text4: '',
        text5: '',
        text6: '',
        image2: 'image.jpg',
        text7:'',
        text8: '',
        text9: '',
        image3: 'image.jpg',
        text10: '',
        video1: 'video.mp4'
    },

    work10: {
        title: 'Name', // Development
        mainImage: 'image.jpg',
        text1: '',
        text2: '',
        text3: '',
        image1: 'image.jpg',
        text4: '',
        text5: '',
        text6: '',
        image2: 'image.jpg',
        text7:'',
        text8: '',
        text9: '',
        image3: 'image.jpg',
        text10: '',
        video1: 'video.mp4'
    },

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