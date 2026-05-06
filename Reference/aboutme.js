// about.js - Visually interesting version without conventional boxes
// Profile and Bio Data
const profile = {
    bio: "AI/ML Intern and Designer from Nepal, currently pursuing a B.Tech in AI  degree at Kathmandu University. I specialize in building intelligent systems, blending machine learning with creative problem-solving. With experience in full-stack development and UI/UX design, I focus on creating user-friendly, scalable, and efficient applications that bridge technology and creativity."
  };
  // Expertise Data
  const expertise = [
    {
      id: 1,
      title: "Machine Learning / Artificial",
      icon: "fa fa-robot",
      description: "Specializing in Large Language Models (LLMs) for conversational AI, prompt engineering, and fine-tuning foundation models using Python, TensorFlow, and PyTorch to create intelligent, context-aware applications."
    },
    {
      id: 2,
      title: "Full Stack Developer",
      icon: "fas fa-laptop-code",
      description: "Building responsive web applications with modern frameworks including React, Next.js, FastAPI, and Django, with a focus on scalable architecture and clean code."
    },
    {
      id: 3,
      title: "UI/UX Designer",
      icon: "fa fa-desktop",
      description: "Creating intuitive user experiences and interfaces with a user-centered design approach, wireframing, prototyping, and implementing designs using Figma."
    },
    {
      id: 4,
      title: "Graphic Designer",
      icon: "fa-solid fa-tablet-screen-button",
      description: "Developing visual concepts and digital illustrations with industry-standard tools including Adobe Photoshop, Clipstudio Paint, and Sketchbook Pro."
    }
  ];
  
  // Rendering function - Executes when the DOM is fully loaded
  document.addEventListener('DOMContentLoaded', function() {
    // Check for about container
    const aboutContainer = document.getElementById('about-container');
    
    try {
      if (aboutContainer) {
        // Create a visually interesting layout with flowing elements
        aboutContainer.innerHTML = `
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            <!-- Column 1 - Profile Photo -->
            <div class="relative">
              <img src="image/profile.jpg" alt="Profile Photo" class="w-full rounded-lg shadow-lg">
            </div>

            <!-- Column 2 - About Me and Education -->
            <div class="text-white">
              <!-- Hello Section -->
              <div class="mb-8">
                <p class="text-lg mb-4">
                  ${profile.bio}
                </p>
              </div>

              <!-- Education Section -->
              <div class="mb-8">
                <h2 class="text-4xl font-bold mb-4">EDUCATION</h2>
                <div class="mb-4">
                  <h3 class="text-xl font-semibold">2021 - present: Kathmandu University</h3>
                  <p>B.Tech in Artificial Intelligence</p>
                </div>
                <div class="mb-4">
                  <h3 class="text-xl font-semibold">2018 - 2020:KEF Higher Secondary School</h3>
                  <p>High School, Computer Science</p>
                </div>
              </div>
            </div>

            <!-- Column 3 - Skills and Experience -->
            <div class="text-white">
              <!-- Skills Section -->
              <div class="mb-8">
                <h2 class="text-4xl font-bold mb-4">SKILLS</h2>
                <div class="grid grid-cols-2 gap-4">
                  <div class="p-2">
                    <i class="fab fa-python text-[#E06031] text-4xl"></i>
                    <p class="mt-2">Python/ML</p>
                  </div>
                  <div class="p-2">
                    <i class="fab fa-react text-[#E06031] text-4xl"></i>
                    <p class="mt-2">React</p>
                  </div>
                  <div class="p-2">
                    <i class="fas fa-brain text-[#E06031] text-4xl"></i>
                    <p class="mt-2">AI/LLMs</p>
                  </div>
                  <div class="p-2">
                    <i class="fas fa-paint-brush text-[#E06031] text-4xl"></i>
                    <p class="mt-2">UI/UX</p>
                  </div>
                </div>
              </div>

              <!-- Experience Section 
              <div>
                <h2 class="text-4xl font-bold mb-4">EXPERIENCE</h2>
                <div class="grid gap-4">
                  ${expertise.map(exp => `
                    <div>
                      <h3 class="text-xl font-semibold flex items-center">
                        <i class="${exp.icon} text-[#E06031] mr-2"></i>
                        ${exp.title}
                      </h3>
                      <p class="text-gray-300">${exp.description}</p>
                    </div>
                  `).join('')}
                </div>
              </div>
              -->
            </div>
          </div>
        `;
        
        console.log("About section rendered successfully with visually interesting elements!");
      } else {
        console.error("About container not found! Make sure the element with id='about-container' exists in the DOM.");
      }
    } catch (error) {
      console.error("Error rendering about section:", error);
    }
  });
  
  // Log a simple message to confirm the script has loaded
  console.log("about.js has loaded with visually interesting elements!");