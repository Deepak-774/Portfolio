const communityData = [
    {
        title: "FonePay Student Ambassador",
        event: "FonePay",
        date: "May 2025",
        description: "Representing FonePay as a student ambassador, promoting digital payment solutions and financial technology.",
        image: "image/community/fonepay.jpg"
    },
    {
        title: "Design Lead",
        event: "AI Meet and AIcrusade",
        date: "October 2024",
        description: "Led the design team for two major AI events, creating cohesive visual identities and promotional materials.",
        image: "image/community/design-lead.jpg"
    },
    {
        title: "EMCEE",
        event: "AICrusade",
        date: "September 2024",
        description: "Served as the Master of Ceremonies for AICrusade, facilitating the event flow and audience engagement.",
        image: "image/community/emcee.jpg"
    },
    {
        title: "AI Workshop Facilitator",
        event: "AI Meet",
        date: "August 2024",
        description: "Conducted workshops on artificial intelligence, sharing knowledge and practical insights with participants.",
        image: "image/community/ai-workshop.jpg"
    },
    {
        title: "Executive",
        event: "KUAIC",
        date: "December 2023",
        description: "Served as an executive member of KU Artificial Intelligence Club, organizing various technical events and workshops.",
        image: "image/community/kuaic.jpg"
    },
    {
        title: "Creative Media Team Lead",
        event: "AR Treasure Hunt",
        date: "October 2023",
        description: "Led the creative media team for an innovative AR-based treasure hunt event.",
        image: "image/community/ar-treasure.jpg"
    },
    {
        title: "Hackathon Coordinator",
        event: "AI Crusade",
        date: "September 2023",
        description: "Coordinated the successful execution of AI Crusade hackathon, managing participants and event logistics.",
        image: "image/community/hackathon.jpg"
    },
    {
        title: "Participant",
        event: "Github Field Day",
        date: "August 2023",
        description: "Participated in Github Field Day, learning and sharing knowledge about Git and collaborative development.",
        image: "image/community/github.jpg"
    },
    {
        title: "Designer",
        event: "KU Hackfest",
        date: "July 2023",
        description: "Created visual materials and branding elements for KU Hackfest.",
        image: "image/community/ku-hackfest.jpg"
    },
    {
        title: "Beta MLSA",
        event: "Microsoft Learn Student Ambassador",
        date: "July 2023",
        description: "Selected as a Beta Microsoft Learn Student Ambassador, representing and promoting Microsoft technologies.",
        image: "image/community/mlsa.jpg"
    },
    {
        title: "Magazine Designer",
        event: "IT MEET",
        date: "July 2022",
        description: "Designed the official magazine for IT MEET, showcasing creative and technical content.",
        image: "image/community/magazine.jpg"
    }
];

function loadCommunityItems() {
    const container = document.getElementById('community-container');
    if (!container) return;

    communityData.forEach(item => {
    const card = document.createElement('div');
        card.className = 'group relative overflow-hidden rounded-lg transform transition-all duration-300 hover:scale-105';
          card.innerHTML = `
            <div class="bg-[#222222] rounded-lg overflow-hidden h-[360px] w-full">
                <div class="h-[240px] w-full overflow-hidden">
                    <img src="${item.image}" alt="${item.title}" 
                         class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                         onerror="this.src='image/community/placeholder.jpg'">
                </div>
                <div class="p-4 h-[120px] flex flex-col justify-center">
                    <span class="text-[#E06031] font-researcher text-sm">${item.date}</span>
                    <h3 class="text-white font-bold text-xl mt-2 mb-1 font-researcher line-clamp-1">${item.title}</h3>
                    <h4 class="text-[#E06031] text-md line-clamp-1">${item.event}</h4>
                </div>
            </div>
        `;
        
        container.appendChild(card);
    });
}

// Load community items when the DOM is ready
document.addEventListener('DOMContentLoaded', loadCommunityItems);
