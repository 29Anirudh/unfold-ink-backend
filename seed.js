const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Blog = require("./models/Blog");

dotenv.config();

const blogs = [
  // POLITICS - 8 blogs
  {
    user:
    title: "The Changing Landscape of Global Politics",
    category: "Politics",
    tags: ["global", "diplomacy", "policy"],
    content: `Global politics is evolving rapidly with new alliances forming and old ones dissolving. In this blog, we explore the key factors reshaping international relations including economic pressures, climate policies, and emerging geopolitical threats. The dynamic interplay between nations creates both opportunities and challenges for diplomacy in the 21st century.`,
    featuredImage:
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
    author: "Jane Doe",
    profile_pic:
      "https://randomuser.me/api/portraits/women/44.jpg",
    date: "2024-04-15",
  },
  {
    title: "How Social Media Influences Political Opinions",
    category: "Politics",
    tags: ["social media", "politics", "influence"],
    content: `Social media platforms have transformed the way political opinions are formed and spread. This blog delves into the mechanisms of political discourse on social media, the rise of echo chambers, and how misinformation campaigns impact public trust and democracy worldwide.`,
    featuredImage:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
    author: "John Smith",
    profile_pic:
      "https://randomuser.me/api/portraits/men/55.jpg",
    date: "2024-03-20",
  },
  // Add 6 more Politics blogs here...

  // MOVIES - 8 blogs
  {
    title: "Top 10 Must-Watch Movies of 2024",
    category: "Movies",
    tags: ["movies", "reviews", "cinema"],
    content: `The year 2024 promises an exciting lineup of films across genres. From intense dramas to thrilling action flicks, this blog highlights the top 10 movies you cannot miss, complete with synopsis, cast info, and critical reception.`,
    featuredImage:
      "https://images.unsplash.com/photo-1517602302552-471fe67acf66?auto=format&fit=crop&w=800&q=80",
    author: "Alice Johnson",
    profile_pic:
      "https://randomuser.me/api/portraits/women/68.jpg",
    date: "2024-02-10",
  },
  {
    title: "The Rise of Independent Cinema",
    category: "Movies",
    tags: ["independent", "cinema", "film"],
    content: `Independent films have carved out a vital space in the cinematic world. This blog examines the challenges and opportunities faced by indie filmmakers, the unique storytelling techniques they employ, and their growing influence on mainstream cinema.`,
    featuredImage:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=80",
    author: "Mark Lee",
    profile_pic:
      "https://randomuser.me/api/portraits/men/44.jpg",
    date: "2024-01-30",
  },
  // Add 6 more Movies blogs here...

  // CULTURAL - 8 blogs
  {
    title: "Exploring the Richness of Cultural Diversity",
    category: "Cultural",
    tags: ["culture", "diversity", "heritage"],
    content: `Cultural diversity enriches societies in countless ways. This blog explores traditions, languages, and arts from around the world, emphasizing the importance of preserving heritage in a rapidly globalizing society.`,
    featuredImage:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    author: "Sophia Martinez",
    profile_pic:
      "https://randomuser.me/api/portraits/women/30.jpg",
    date: "2024-03-01",
  },
  {
    title: "The Role of Festivals in Preserving Culture",
    category: "Cultural",
    tags: ["festivals", "culture", "tradition"],
    content: `Festivals serve as vibrant expressions of culture and community. This blog discusses several notable festivals worldwide, their origins, and how they contribute to cultural preservation and community identity.`,
    featuredImage:
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=800&q=80",
    author: "Liam Brown",
    profile_pic:
      "https://randomuser.me/api/portraits/men/38.jpg",
    date: "2024-04-05",
  },
  // Add 6 more Cultural blogs here...

  // ECONOMICS - 8 blogs
  {
    title: "Understanding the Impact of Inflation",
    category: "Economics",
    tags: ["inflation", "economy", "finance"],
    content: `Inflation affects purchasing power and economic stability worldwide. This blog breaks down the causes and consequences of inflation, how central banks respond, and what it means for everyday consumers and businesses.`,
    featuredImage:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
    author: "Emma Wilson",
    profile_pic:
      "https://randomuser.me/api/portraits/women/50.jpg",
    date: "2024-02-15",
  },
  {
    title: "The Future of Cryptocurrency in Global Markets",
    category: "Economics",
    tags: ["cryptocurrency", "finance", "blockchain"],
    content: `Cryptocurrency has disrupted traditional finance and continues to evolve rapidly. This blog explores its current state, regulatory challenges, and potential future impact on global markets and monetary policy.`,
    featuredImage:
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=800&q=80",
    author: "Oliver Davis",
    profile_pic:
      "https://randomuser.me/api/portraits/men/60.jpg",
    date: "2024-03-18",
  },
  // Add 6 more Economics blogs here...

  // CRICKET - 8 blogs
  {
    title: "Top Cricket Moments of 2024",
    category: "Cricket",
    tags: ["cricket", "sports", "highlights"],
    content: `From nail-biting finishes to record-breaking performances, 2024 has been an exciting year for cricket fans. This blog covers the top moments that have defined the cricketing calendar so far.`,
    featuredImage:
      "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=800&q=80",
    author: "David Kumar",
    profile_pic:
      "https://randomuser.me/api/portraits/men/25.jpg",
    date: "2024-01-20",
  },
  {
    title: "Training Tips from Professional Cricketers",
    category: "Cricket",
    tags: ["training", "cricket", "sports"],
    content: `Achieving excellence in cricket requires dedicated training and discipline. This blog shares valuable tips from professional cricketers on fitness, technique, and mental preparation.`,
    featuredImage:
      "https://images.unsplash.com/photo-1507133750040-749f2b9f9939?auto=format&fit=crop&w=800&q=80",
    author: "Sanjay Patel",
    profile_pic:
      "https://randomuser.me/api/portraits/men/33.jpg",
    date: "2024-02-28",
  },
  // Add 6 more Cricket blogs here...
];

// To fill in the 6 remaining blogs for each category, repeat the above pattern with different titles, content, images, etc.

async function seedDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");

    await Blog.deleteMany({});
    console.log("Deleted existing blogs");

    for (const blog of blogs) {
      const newBlog = new Blog(blog);
      await newBlog.save();
    }

    console.log("Seeded database with blogs");
    mongoose.connection.close();
  } catch (error) {
    console.error("Error seeding database:", error);
  }
}

seedDB();
