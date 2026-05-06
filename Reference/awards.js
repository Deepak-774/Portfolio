// awards.js - Contains both award data and rendering logic
// Award Data
const awards = [
    {
      id: 1,
      title: "National Winner",
      event: "Codefest 2024",
      image: "image/codefest.jpg",
      alt: "Codefest 2024"
    },
    {
      id: 2,
      title: "Winner",
      event: "Nepal Largest All female hackathon 2023 @Shequal Foundation",
      image: "image/shequal1.jpg",
      alt: "Shequal Hackathon"
    },
    {
      id: 3,
      title: "AI/ML Track Winner",
      event: "Deerhack 2023",
      image: "image/deerhack.JPG",
      alt: "Tech Summit 2023"
    },
    {
      id: 4,
      title: "1st Runner Up",
      event: "Udhyam 2023",
      image: "image/udhyam.jpg",
      alt: "OpenCode"
    },
    {
      id: 5,
      title: "Semester Topper",
      event: "5th and 6th Semester @KU(AI)",
      image: "image/ideathon.jpg",
      alt: "NSIC"
    },
    {
      id: 6,
      title: "1st Runner Up",
      event: "Datathon 2023 @KUAIC",
      image: "image/datathon.JPG",
      alt: "Datathon"
    }
  ];
  
  // Rendering function - Executes when the DOM is fully loaded
  document.addEventListener('DOMContentLoaded', function() {
    const awardContainer = document.getElementById('award-container');
    
    // If the container exists, render all awards
    if (awardContainer) {
      // Generate HTML for each award
      const awardsHTML = awards.map(award => {
        // Return complete award card HTML
        return `
        <div class="bg-[#252525] rounded-lg overflow-hidden transform hover:scale-105 transition duration-300">
          <img src="${award.image}" alt="${award.alt}" class="w-full h-48 object-cover">
          <div class="p-6">
            <h3 class="text-[#E06031] font-yapari font-bold text-xl mb-2 tracking-mid-wide">${award.title}</h3>
            <h4 class="text-white font-poppins text-lg mb-2">${award.event}</h4>
          </div>
        </div>
        `;
      }).join('');
      
      // Insert all awards into the container
      awardContainer.innerHTML = awardsHTML;
    }
  });
  
  // Log a simple message to confirm the script has loaded
  console.log("awards.js has loaded!");