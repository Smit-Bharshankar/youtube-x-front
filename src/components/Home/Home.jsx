import React from 'react'

const videos = [
  {
    id: "1",
    title: "Learn JavaScript in 15 Minutes",
    thumbnail: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/master-javascript-programming-beginner-friend-design-template-057f79a6b5ce0bbbaf0a2a579865a4fc_screen.jpg?ts=1683752393", 
    channelName: "CodeWithUs",
    profilePic: "https://i.ytimg.com/vi/iACJOc5gZXo/mqdefault.jpg", 
    views: 1567890,
    uploadDate: "2024-11-12",
  },
  {
    id: "2",
    title: "Top 10 CSS Tricks for Beginners",
    thumbnail: "https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/e68de24e-db9b-44bb-a1d6-6a2331367c70/2155a6bd-f25e-4535-b40e-4b3c7dbc10b3.png",
    channelName: "DesignHub",
    profilePic: "https://i.ytimg.com/vi/iACJOc5gZXo/mqdefault.jpg", 
    views: 897600,
    uploadDate: "2024-09-15",
  },
  {
    id: "3",
    title: "How to Build a React App from Scratch",
    thumbnail: "https://i.ytimg.com/vi/y5gtWU4gweU/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCqFhSy74_VtnmGRq5Ay3oqt60w5w",
    channelName: "ReactMastery",
    profilePic: "https://i.ytimg.com/vi/iACJOc5gZXo/mqdefault.jpg", 
    views: 230500,
    uploadDate: "2024-01-05",
  },
  {
    id: "4",
    title: "The Ultimate Guide to MongoDB",
    thumbnail: "https://i.ytimg.com/vi/ExcRbA7fy_A/maxresdefault.jpg",
    channelName: "DataWhiz",
    profilePic: "https://i.ytimg.com/vi/iACJOc5gZXo/mqdefault.jpg", 
    views: 124560,
    uploadDate: "2023-12-18",
  },
  {
    id: "5",
    title: "Understanding JWT Authentication",
    thumbnail: "https://i.ytimg.com/vi/hoBSjmrwF1k/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAti-zTE3r_O2XU8GEw_FLXykHfJw",
    channelName: "DevSecure",
    profilePic: "https://i.ytimg.com/vi/iACJOc5gZXo/mqdefault.jpg", 
    views: 650000,
    uploadDate: "2024-10-08",
  },
  {
    id: "6",
    title: "Node.js Crash Course for Beginners",
    thumbnail: "https://i.ytimg.com/vi/hoBSjmrwF1k/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAti-zTE3r_O2XU8GEw_FLXykHfJw",
    channelName: "BackendPro",
    profilePic: "https://i.ytimg.com/vi/iACJOc5gZXo/mqdefault.jpg", 
    views: 310450,
    uploadDate: "2022-01-15",
  },
  {
    id: "7",
    title: "Top 5 VS Code Extensions for Developers",
    thumbnail: "https://i.ytimg.com/vi/hoBSjmrwF1k/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAti-zTE3r_O2XU8GEw_FLXykHfJw",
    channelName: "ToolboxDev",
    profilePic: "https://i.ytimg.com/vi/iACJOc5gZXo/mqdefault.jpg", 
    views: 502340,
    uploadDate: "2021-07-21",
  },
  {
    id: "8",
    title: "Setup Tailwind for Project for Beginners",
    thumbnail: "https://i.ytimg.com/vi/arftp8kFBBg/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCIBI4Elzm22qymPxiEDIv6yIKDug",
    channelName: "ModernJS",
    profilePic: "https://i.ytimg.com/vi/iACJOc5gZXo/mqdefault.jpg", 
    views: 123400,
    uploadDate: "2020-01-10",
  },
];


const Home = () => {

  const formatViews = (views) => {
    if (views >= 1_000_000) {
      return `${(views / 1_000_000).toFixed(1)}M`; // Million views
    } else if (views >= 1_000) {
      return `${(views / 1_000).toFixed(1)}K`; // Thousand views
    }
    return views.toString(); // Less than 1K views
  };
  
  // Helper function to calculate relative time
  const timeSince = (uploadDate) => {
    const now = new Date();
    const uploaded = new Date(uploadDate);
    const diffInMs = now - uploaded;
  
    // Convert milliseconds to days
    const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
  
    // Handle "Today" and "Yesterday"
    if (diffInDays === 0) return "Today";
    if (diffInDays === 1) return "1 day ago";
  
    // Handle weeks
    if (diffInDays < 7) return `${diffInDays} days ago`;
    if (diffInDays < 14) return "1 week ago";
    if (diffInDays < 21) return "2 weeks ago";
    if (diffInDays < 28) return "3 weeks ago";
  
    // Convert days to months
    const diffInMonths = Math.floor(diffInDays / 30);
    if (diffInMonths === 1) return "1 month ago";
    if (diffInMonths < 12) return `${diffInMonths} months ago`;
  
    // Convert months to years
    const diffInYears = Math.floor(diffInMonths / 12);
    if (diffInYears === 1) return "1 year ago";
    return `${diffInYears} years ago`;
  };
  


  return (
    <div className=" min-h-screen">
    <div className="container mx-auto py-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-6">
        {videos.map((video) => (
          <div
            key={video.id}
            className="bg-gray-800 p-2 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200"
          >
            <img
              src={video.thumbnail}
              alt={video.title}
              className="w-full h-52 overflow-hidden object-cover"
            />

            {/* includes both pfp and test */}
            <div className='flex flex-row'>
            <div className="px-2 py-1 flex flex-row gap-4 items-center">
             
              {/* for img */}
              <div className="flex items-center space-x-3 mb-3">
                <img
                  src={video.profilePic}
                  alt={video.channelName}
                  className="w-10 h-10 rounded-full object-cover"
                />
                </div>
                
                {/* for flex-row between title and below text  */}
                <div className='flex flex-col'>
                <div className="text-sm">
              <h2 className="font-semibold text-gray-300 text-base mb-2 truncate">
                {video.title}
              </h2>
                </div>

                {/* for chanel name and view and date  */}
                  <div>
                  <h3 className="font-medium text-sm text-gray-500">{video.channelName}</h3>
              <div className="text-sm flex flex-row gap-3 text-gray-500">
                 <p>{formatViews(video.views)} views</p>
                  <p>{timeSince(video.uploadDate)}</p>
                </div>
                  </div>
              </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);
};

export default Home
