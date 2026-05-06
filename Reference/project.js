// projects.js - Contains both project data and rendering logic
// Project Data
const projects = [
    {
      id: 1,
      title: "Sign Language Recognition",
      description: "This Django web application utilizes Convolutional Neural Networks (CNN) for real-time sign language recognition. It can classify up to 10 different labels of sign language gestures. The application consists of a frontend developed using HTML/CSS and a backend powered by Django.",
      image: "image/project/sign.jpg",
      tags: ["AI/ML", "Django"],
      github: "https://github.com/Anjila-26/Signlanguagerecognition",
      demo: "#"
    },
    {
      id: 2,
      title: "Cultural Video Captioning with CNNs and LLM",
      description: "Automatically generates captions for Nepali cultural dance videos using CNN-based encoders like VGG16 and EfficientNet, paired with LSTM and GPT decoders for detailed and contextual captions.",
      image: "image/project/captioning.jpg",
      tags: ["LLM"],
      github: "#",
      demo: "#"
    },
    {
      id: 3,
      title: "Gantavya",
      description: "Gantavya is a modern and efficient solution for public transportation management. It utilizes advanced technologies such as facial recognition, geo-tagging, and mobile payment to streamline the commuting experience that addresses the problems of the public while travelling such as security issues, unfair pricing and discomfort.",
      image: "image/project/gantavya.png",
      tags: ["Django", "AI/ML"],
      github: "https://github.com/aagaman09/Facial-Recognition-Transportation-System",
      demo: "#"
    },
    {
      id: 4,
      title: "Document Summarization App",
      description: "This is a Streamlit web application for summarizing text from PDFs, text input, and images. It utilizes EasyOCR for text extraction, Hugging Face's Transformers for text summarization, and Streamlit for the user interface.",
      image: "image/project/summarization.png",
      tags: ["AI/ML", "Streamlit"],
      github: "https://github.com/Anjila-26/Nepali_Summarization",
      demo: "#"
    },
    {
      id: 5,
      title: "PLACEME DADDY",
      description: "LLM based Resume Parser and Job Matching A system that parses resumes, extracts key details using prompt engineering, and matches candidates to relevant jobs. Additionally generates tailored interview questions based on job descriptions.",
      image: "image/project/llm.png",
      tags: ["React", "FastAPI", "LLM"],
      github: "#",
      demo: "#"
    },
    {
      id: 6,
      title: "EduCat",
      description: "A mobile and Web AI-based study tool built with Next.js that processes PDFs, YouTube videos, PPTs, research papers, and articles to generate flashcards, quizzes, and summaries.",
      image: "image/project/ui.png",
      tags: ["Next.js", "FastAPI", "LLM"],
      github: "#",
      demo: "#"
    }
  ];
  
  // Rendering function - Make sure this executes after the DOM is completely loaded
  document.addEventListener('DOMContentLoaded', function() {
    // Using console.log for debugging
    console.log("DOM fully loaded, running projects.js...");
    
    // Get the project container element
    const projectContainer = document.getElementById('project-container');
    
    // Check if the container exists to avoid errors
    if (projectContainer) {
      console.log("Project container found, rendering projects...");
      
      try {
        // Generate HTML for each project
        const projectsHTML = projects.map(project => {
          // Generate tags HTML with proper spacing
          const tagsHTML = project.tags.map(tag => 
            `<span class="bg-[#E06031] text-white text-xs px-2 py-1 rounded">${tag}</span>`
          ).join(' ');
          
          // Return complete project card HTML matching your site's styling
          return `
          <div class="group bg-[#252525] rounded-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-300">
            <div class="relative overflow-hidden">
              <img src="${project.image}" alt="${project.title}" class="w-full h-48 object-cover transform group-hover:scale-110 transition-all duration-500">
              <div class="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              <div class="absolute top-4 right-4 space-x-2">
                ${tagsHTML}
              </div>
            </div>
            <div class="p-6">
              <h3 class="text-[#E06031] font-poppins font-bold text-xl mb-2">${project.title}</h3>
              <p class="text-gray-400 font-poppins font-medium text-sm mb-4">${project.description}</p>
              <div class="flex justify-between items-center">
                <div class="flex space-x-3">
                  <a href="${project.github}" target="_blank" class="text-gray-400 hover:text-[#E06031] transition-colors duration-300">
                    <i class="fab fa-github"></i>
                  </a>
                  <a href="${project.demo}" target="_blank" class="text-gray-400 hover:text-[#E06031] transition-colors duration-300">
                    <i class="fas fa-external-link-alt"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          `;
        }).join('');
        
        // Insert all projects into the container
        projectContainer.innerHTML = projectsHTML;
        console.log("Projects rendered successfully!");
      } catch (error) {
        console.error("Error rendering projects:", error);
      }
    } else {
      console.error("Project container not found! Make sure the element with id='project-container' exists in the DOM.");
    }
  });
  
  // Add a window.onload handler as a backup to ensure scripts are loaded properly
  window.onload = function() {
    console.log("Window loaded, checking if projects were rendered...");
    
    // If the projects container is empty, try rendering again
    const projectContainer = document.getElementById('project-container');
    if (projectContainer && projectContainer.innerHTML.trim() === '') {
      console.log("Project container is empty, attempting to render projects again...");
      
      // Trigger the rendering function directly
      const event = new Event('DOMContentLoaded');
      document.dispatchEvent(event);
    }
  };
  
  // Log a simple message to confirm the script has loaded
  console.log("projects.js has loaded!");