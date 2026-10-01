const societies = [
    {
        id: "the-alliance",
        name: "The Alliance",
        category: "Literary",
        color: "#198754",
        icon: "✍",
        img: "assets/TheAlliance.jpeg",
        tagline: "Stories, perspectives and voices from across the NSUT community.",
        description: "NSUT's student-run newspaper connecting the campus community through news, features, interviews and student perspectives.",
        criteria: [
            "Strong writing and editing skills",
            "Curiosity about campus life and current affairs",
            "Ability to research and verify information",
            "Commitment to deadlines and teamwork"
        ],
        roles: [
            { name: "Writer", description: "Research and write engaging campus stories, features and interviews.", skills: ["Writing", "Research", "Interviewing"] },
            { name: "Editor", description: "Shape articles for clarity, structure, accuracy and readability.", skills: ["Editing", "Grammar", "Content Review"] },
            { name: "Design & Media", description: "Create visual assets and layouts for stories and social media.", skills: ["Design", "Visual Storytelling", "Creativity"] }
        ]
    },
    {
        id: "debsoc",
        name: "DebSoc",
        category: "Literary",
        color: "#198754",
        icon: "🗣",
        img: "assets/Debsoc.png",
        tagline: "Think critically. Speak clearly. Challenge ideas.",
        description: "The debating society develops articulate and analytical thinkers through debates, discussion forums, MUNs and workshops.",
        criteria: [
            "Clear communication and willingness to speak",
            "Curiosity and critical thinking",
            "Ability to listen and respond constructively",
            "Consistency in practice and events"
        ],
        roles: [
            { name: "Debater", description: "Participate in debates and represent the society at competitions.", skills: ["Public Speaking", "Argumentation", "Research"] },
            { name: "Research & Content", description: "Prepare motions, background research and discussion material.", skills: ["Research", "Current Affairs", "Writing"] },
            { name: "Operations", description: "Help coordinate debates, workshops and society events.", skills: ["Planning", "Communication", "Teamwork"] }
        ]
    },
    {
        id: "ieee-nsut",
        name: "IEEE NSUT",
        category: "Technical",
        color: "#0d6efd",
        icon: "💻",
        img: "assets/IEEE.jpeg",
        tagline: "Bridging technical knowledge with hands-on innovation.",
        description: "A student chapter focused on technical excellence, innovation and research through workshops, seminars, technical talks and practical sessions.",
        criteria: [
            "Interest in technology and engineering",
            "Willingness to learn beyond the classroom",
            "Problem-solving mindset",
            "Ability to collaborate on projects and events"
        ],
        roles: [
            { name: "Technical Team", description: "Work on technical workshops, projects and learning initiatives.", skills: ["Programming", "Problem Solving", "Learning"] },
            { name: "Web & Development", description: "Build and maintain digital experiences for the chapter.", skills: ["HTML/CSS", "JavaScript", "Web Development"] },
            { name: "Design & Outreach", description: "Create event creatives and communicate initiatives to students.", skills: ["Design", "Content", "Communication"] }
        ]
    },
    {
        id: "gdg-nsut",
        name: "GDG NSUT",
        category: "Technical",
        color: "#0d6efd",
        icon: "🤖",
        img: "assets/gdg.svg",
        tagline: "Learn, build and grow with fellow developers.",
        description: "Google Developer Group bringing together student developers for collaborative learning across web, mobile, machine learning, cloud and UI/UX.",
        criteria: [
            "Genuine interest in technology and development",
            "Willingness to learn and experiment",
            "Ability to work in a team",
            "Basic technical knowledge is helpful, but curiosity matters more"
        ],
        roles: [
            { name: "Frontend Developer", description: "Build responsive interfaces and interactive web experiences.", skills: ["HTML", "CSS", "JavaScript"] },
            { name: "UI/UX Designer", description: "Turn ideas into clear, intuitive and accessible digital experiences.", skills: ["Figma", "Wireframing", "Visual Design"] },
            { name: "Technical Content", description: "Create tutorials, technical posts and learning resources.", skills: ["Writing", "Research", "Technology"] }
        ]
    },
    {
        id: "ashwamedh",
        name: "ASHWAMEDH",
        category: "Cultural",
        color: "#ffc107",
        icon: "🎭",
        img: "assets/ASHWAMEDH.jpg",
        tagline: "Find your voice on stage.",
        description: "Dramatics and performing arts society creating opportunities to explore acting, dramatic expression, character development and stagecraft.",
        criteria: [
            "Confidence to experiment and perform",
            "Creativity and expressive thinking",
            "Commitment to rehearsals",
            "Ability to collaborate with a cast and crew"
        ],
        roles: [
            { name: "Actor", description: "Perform characters across stage productions and events.", skills: ["Acting", "Expression", "Improvisation"] },
            { name: "Script & Direction", description: "Develop scenes, scripts and creative concepts for productions.", skills: ["Writing", "Direction", "Storytelling"] },
            { name: "Production", description: "Support sets, props, backstage coordination and stagecraft.", skills: ["Planning", "Stagecraft", "Teamwork"] }
        ]
    },
    {
        id: "crescendo",
        name: "CRESCENDO",
        category: "Cultural",
        color: "#ffc107",
        icon: "🎵",
        img: "assets/crescendo.jpg",
        tagline: "Where voices, instruments and ideas come together.",
        description: "The official music society of NSUT, bringing together vocalists, instrumentalists and music producers across diverse genres.",
        criteria: [
            "Passion for music",
            "Willingness to rehearse and perform",
            "Openness to different genres and collaborators",
            "Consistency and teamwork"
        ],
        roles: [
            { name: "Vocalist", description: "Perform as a soloist or part of the society's vocal ensemble.", skills: ["Vocals", "Pitch", "Performance"] },
            { name: "Instrumentalist", description: "Perform and collaborate with other musicians in live sets.", skills: ["Instrument", "Rhythm", "Performance"] },
            { name: "Music Production", description: "Help create, arrange and produce music for performances and content.", skills: ["DAW", "Arrangement", "Audio"] }
        ]
    }
];
