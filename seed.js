const mongoose = require("mongoose");
const Blog = require("./models/Blog");

const URI="mongodb+srv://n200374:Anirudh.9493@unfold-ink.k8ptnwa.mongodb.net/?retryWrites=true&w=majority&appName=unfold-ink";
// === Real user IDs ===
const AUTHOR_IDS = [
  "682f0cdb5c83de5670b05a28",
  "682f0cdb5c83de5670b05a22",
  "682f0cdb5c83de5670b05a25",
  "682e17090a83f14eb298de01",
  "682f2e4790acaac5826f4cc5",
];

// Function to pick a random author
function getRandomAuthorId() {
  const randomIndex = Math.floor(Math.random() * AUTHOR_IDS.length);
  return new mongoose.Types.ObjectId(AUTHOR_IDS[randomIndex]);
}

// === Blog Data ===
const blogs = [
  {
    title: "The Changing Landscape of Global Power",
    content: `
    <p class="text-lg mb-4">As emerging economies rise and established powers realign, the global power dynamics are shifting in unprecedented ways.</p>
    <h2 class="text-2xl font-bold my-4">Emerging Economies on the Rise</h2>
    <p class="text-lg mb-4">Countries in Asia, Africa, and Latin America are gaining influence through economic growth and strategic partnerships.</p>
    <h2 class="text-2xl font-bold my-4">Realignment of Traditional Powers</h2>
    <p class="text-lg mb-4">Established powers are redefining alliances and policies to adapt to the new multipolar world order.</p>
    <h2 class="text-2xl font-bold my-4">Impact on Global Governance</h2>
    <p class="text-lg mb-4">International institutions face challenges in balancing competing interests and fostering cooperation.</p>
  `,
    category: "Politics",
    tags: ["geopolitics", "international relations", "power shift"],
    featuredImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtyKUUVPEkP98siXvdJmg48VY4GtITYBACfcAAtnj8AqMjGqs&s",
    author: getRandomAuthorId(),
    status: "published",
  },
  {
    title: "Digital Democracy: Promise and Pitfalls",
    content: `
    <p class="text-lg mb-4">From e-voting to social media debates, technology is reshaping how citizens engage with democracy.</p>
    <h2 class="text-2xl font-bold my-4">E-Voting: Accessibility vs Security</h2>
    <p class="text-lg mb-4">While e-voting offers convenience and inclusivity, concerns about fraud and privacy persist.</p>
    <h2 class="text-2xl font-bold my-4">Social Media’s Double-Edged Sword</h2>
    <p class="text-lg mb-4">Platforms amplify voices but also spread misinformation and polarization.</p>
    <h2 class="text-2xl font-bold my-4">The Role of Digital Literacy</h2>
    <p class="text-lg mb-4">Empowering voters with critical thinking skills is key to a healthy digital democracy.</p>
  `,
    category: "Politics",
    tags: ["democracy", "technology", "governance"],
    featuredImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM6qhjxwuhdF5NhYtl8xW0BeupbGoDbrV0bOr-XUSVZ_nYoZgSm8_Xnz9c&s=10",
    author: getRandomAuthorId(),
    status: "published",
  },

  {
    title: "Election 2025: Key Issues Shaping the Vote",
    content: `
    <p class="text-lg mb-4">As the world heads into another crucial election cycle, voters are focused on pressing concerns that will shape the future.</p>
    <h2 class="text-2xl font-bold my-4">Economic Recovery</h2>
    <p class="text-lg mb-4">Post-pandemic strategies and inflation management dominate policy debates.</p>
    <h2 class="text-2xl font-bold my-4">Climate Change</h2>
    <p class="text-lg mb-4">Environmental policies and sustainable development are at the forefront of voter priorities.</p>
    <h2 class="text-2xl font-bold my-4">Social Justice</h2>
    <p class="text-lg mb-4">Discussions around equality, rights, and reforms continue to influence public opinion.</p>
  `,
    category: "Politics",
    tags: ["elections", "policy", "2025"],
    featuredImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsYEpIq-fazOK_nBRbZaTJfxIBTivWJF8ysA&s",
    author: getRandomAuthorId(),
    status: "published",
  },

  {
    title: "The Evolution of Superhero Cinema",
    content: `
    <p class="text-lg mb-4">Superhero movies have transformed from niche to mainstream, dominating box offices worldwide.</p>
    <p class="text-lg mb-4">What began as cult classics are now blockbuster franchises with massive fan followings.</p>
    <h2 class="text-2xl font-bold my-4">Origins and Growth</h2>
    <p class="text-lg mb-4">The rise of Marvel and DC studios redefined the genre, blending action with complex storytelling.</p>
    <h2 class="text-2xl font-bold my-4">Cultural Influence</h2>
    <p class="text-lg mb-4">Superhero films shape pop culture, inspire fandoms, and influence fashion and media.</p>
  `,
    category: "Movies",
    tags: ["superhero", "cinema", "Hollywood"],
    featuredImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_rJQLORZCU9OFI1XdXypz03Vyf2s7caejjw&usqp=CAU",
    author: getRandomAuthorId(),
    status: "published",
  },

  {
    title: "Independent Films That Changed the Industry",
    content: `
    <p class="text-lg mb-4">From 'Pulp Fiction' to 'Parasite', independent films have reshaped the landscape of cinema.</p>
    <p class="text-lg mb-4">These movies often bring fresh perspectives, innovative storytelling, and challenge mainstream norms.</p>
    <h2 class="text-2xl font-bold my-4">Breaking Boundaries</h2>
    <p class="text-lg mb-4">Indie films often tackle bold themes and diverse voices that big studios may overlook.</p>
    <h2 class="text-2xl font-bold my-4">Cultural Impact</h2>
    <p class="text-lg mb-4">They inspire new filmmakers and influence mainstream film trends, making lasting impressions on audiences worldwide.</p>
  `,
    category: "Movies",
    tags: ["indie", "film history", "cinema"],
    featuredImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGf-qeUQgofxJnobXKwYnWPBzbLPMvyQurGA&usqp=CAU",
    author: getRandomAuthorId(),
    status: "published",
  },

  {
    title: "Streaming Wars: The Future of Film Distribution",
    content: `
    <p class="text-lg mb-4">Netflix, Amazon, and Disney+ are revolutionizing the way films are produced, distributed, and consumed worldwide.</p>
    <p class="text-lg mb-4">These streaming giants have shifted power dynamics within the film industry, impacting traditional studios and theaters.</p>
    <h2 class="text-2xl font-bold my-4">The Rise of Direct-to-Consumer Models</h2>
    <p class="text-lg mb-4">By offering exclusive content and personalized experiences, streaming platforms are redefining audience engagement.</p>
    <h2 class="text-2xl font-bold my-4">Challenges and Opportunities Ahead</h2>
    <p class="text-lg mb-4">While streaming brings convenience and choice, it also raises questions about content saturation and the future of cinema culture.</p>
  `,
    category: "Movies",
    tags: ["streaming", "film industry", "Netflix"],
    featuredImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRur2rj51h8WsM4KGh9ASX1rULCO0Udu4hhew&usqp=CAU",
    author: getRandomAuthorId(),
    status: "published",
  },

  {
    title: "The Revival of Indigenous Traditions",
    content: `
    <p class="text-lg mb-4">Indigenous communities around the world are actively reviving their languages, customs, and cultural practices.</p>
    <p class="text-lg mb-4">This resurgence strengthens identity and fosters a deeper connection to ancestral heritage.</p>
    <h2 class="text-2xl font-bold my-4">Preserving Language and Knowledge</h2>
    <p class="text-lg mb-4">Efforts to document and teach native languages are crucial in keeping these traditions alive for future generations.</p>
    <h2 class="text-2xl font-bold my-4">Cultural Practices in Modern Times</h2>
    <p class="text-lg mb-4">Traditional ceremonies, arts, and storytelling are being adapted to contemporary contexts, ensuring their relevance today.</p>
  `,
    category: "Cultural",
    tags: ["indigenous", "heritage", "tradition"],
    featuredImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRddqkh3Jj5d7ZKCBxdJEsYy8tUxNy7BGsPROrkmusshnv8MjI4X0LFOYQa&s=10",
    author: getRandomAuthorId(),
    status: "published",
  },

  {
    title: "Food as Cultural Identity",
    content: `
    <p class="text-lg mb-4">Cuisine acts as a living mirror reflecting the history, migration, and traditions of a community.</p>
    <p class="text-lg mb-4">From spices traded across continents to recipes passed down through generations, food connects us to our roots.</p>
    <h2 class="text-2xl font-bold my-4">A Taste of History</h2>
    <p class="text-lg mb-4">Each dish tells a story — of cultural exchanges, adaptation, and the resilience of traditions in an ever-changing world.</p>
    <h2 class="text-2xl font-bold my-4">More Than Just Nutrition</h2>
    <p class="text-lg mb-4">Food transcends sustenance, embodying identity and community through shared meals, rituals, and celebrations.</p>
  `,
    category: "Cultural",
    tags: ["food", "identity", "tradition"],
    featuredImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLvKM6sZ4xV3E-H2xWN6-cK7ycCzHqezUYQLMMX3BpOJK7vXGGBrhrgI-p&s=10",
    author: getRandomAuthorId(),
    status: "published",
  },

  {
    title: "Festivals as Vessels of Shared Memory",
    content: `
    <p class="text-lg mb-4">From Diwali’s vibrant lights to Japan’s delicate Hanami cherry blossoms, festivals serve as living expressions of cultural identity.</p>
    <p class="text-lg mb-4">They preserve traditions while allowing communities to come together in celebration, reflection, and renewal.</p>
    <h2 class="text-2xl font-bold my-4">The Role of Festivals in Society</h2>
    <p class="text-lg mb-4">Festivals act as vessels of shared memory, passing stories and customs across generations through rituals, music, dance, and food.</p>
    <h2 class="text-2xl font-bold my-4">Evolving Traditions</h2>
    <p class="text-lg mb-4">While rooted in history, many festivals evolve by incorporating contemporary elements, reflecting changes in society and community values.</p>
    <p class="text-lg mb-4">This dynamic nature ensures festivals remain relevant and meaningful for both old and new generations alike.</p>
  `,
    category: "Cultural",
    tags: ["festivals", "community", "memory"],
    featuredImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeaMmJcjvUqTXuWuESzwqsbj_2mxpLuaeASZW9jF-2gRApqA6_q5TyQTI&s=10",
    author: getRandomAuthorId(),
    status: "published",
  },

  {
    title: "Understanding Inflation: Causes and Consequences",
    content: `
    <p class="text-lg mb-4">Inflation is the rise in prices of goods and services over time, which reduces purchasing power and impacts the economy.</p>
    <p class="text-lg mb-4">It affects everything from daily expenses to long-term investments, influencing interest rates and monetary policies worldwide.</p>
    <h2 class="text-2xl font-bold my-4">What Causes Inflation?</h2>
    <p class="text-lg mb-4">Inflation can result from demand outpacing supply, increased production costs, or expansive monetary policies.</p>
    <h2 class="text-2xl font-bold my-4">Consequences of Inflation</h2>
    <p class="text-lg mb-4">While moderate inflation is normal in a growing economy, rapid or unpredictable inflation can harm consumers, savers, and businesses.</p>
    <p class="text-lg mb-4">It can erode savings, reduce purchasing power, and increase uncertainty, complicating financial planning.</p>
    <h2 class="text-2xl font-bold my-4">Managing Inflation</h2>
    <p class="text-lg mb-4">Central banks use tools like interest rate adjustments to control inflation and stabilize economies.</p>
    <p class="text-lg mb-4">Understanding inflation helps individuals and businesses make informed decisions in an ever-changing financial landscape.</p>
  `,
    category: "Economics",
    tags: ["inflation", "macroeconomics", "finance"],
    featuredImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeaIWEXNGSUE0ZKv5chICSU0yc2YIFlBNoSVM0jx2REqNhJbaAq7itwuX4&s=10",
    author: getRandomAuthorId(),
    status: "published",
  },

  {
    title: "The Gig Economy and the Future of Work",
    content: `
    <p class="text-lg mb-4">The gig economy has transformed how people work, offering unprecedented flexibility and independence through freelance, contract, and short-term jobs.</p>
    <p class="text-lg mb-4">Platforms like Uber, Fiverr, and TaskRabbit connect workers with opportunities instantly, reshaping labor markets worldwide.</p>
    <h2 class="text-2xl font-bold my-4">Benefits of Flexibility</h2>
    <p class="text-lg mb-4">For many, gig work provides freedom to choose hours, avoid traditional office constraints, and pursue multiple income streams simultaneously.</p>
    <h2 class="text-2xl font-bold my-4">Hidden Costs and Challenges</h2>
    <p class="text-lg mb-4">Yet this flexibility often comes with unpredictable income, lack of benefits like healthcare or retirement plans, and limited job security.</p>
    <p class="text-lg mb-4">Workers face challenges in negotiating fair pay and protections in a system designed around short-term engagements.</p>
    <h2 class="text-2xl font-bold my-4">The Future Landscape</h2>
    <p class="text-lg mb-4">As gig work grows, policymakers, companies, and workers must rethink labor laws, social safety nets, and worker rights to balance flexibility with fairness.</p>
    <p class="text-lg mb-4">The gig economy's evolution will shape not only employment but also the broader social contract.</p>
  `,
    category: "Economics",
    tags: ["gig economy", "future of work", "labor"],
    featuredImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb7ss8JZ9mUzcxcGyk9fszQjcxn_3zLcEMiKvjyhZ0Vs7PCrXlU7i6m4Q&s=10",
    author: getRandomAuthorId(),
    status: "published",
  },

  {
    title: "Crypto Beyond Currency: Blockchain’s Real Potential",
    content: `
    <p class="text-lg mb-4">While cryptocurrencies like Bitcoin and Ethereum grabbed the spotlight, blockchain technology’s true potential extends far beyond digital currency.</p>
    <p class="text-lg mb-4">At its core, blockchain offers a decentralized, immutable ledger that can revolutionize industries by enhancing transparency, security, and efficiency.</p>
    <h2 class="text-2xl font-bold my-4">Logistics and Supply Chain</h2>
    <p class="text-lg mb-4">Blockchain enables real-time tracking of goods, reducing fraud and errors while boosting trust among stakeholders in complex supply chains worldwide.</p>
    <h2 class="text-2xl font-bold my-4">Governance and Voting</h2>
    <p class="text-lg mb-4">From secure digital voting systems to transparent public records, blockchain can empower democratic processes and curb corruption.</p>
    <p class="text-lg mb-4">Its decentralized nature ensures tamper-proof data, fostering accountability at all levels of governance.</p>
    <h2 class="text-2xl font-bold my-4">Decentralization Beyond Finance</h2>
    <p class="text-lg mb-4">Decentralized applications (dApps) and autonomous organizations (DAOs) are emerging, challenging traditional centralized models across finance, social media, and more.</p>
    <p class="text-lg mb-4">This shift could democratize digital platforms, giving users greater control over data and decisions.</p>
    <p class="text-lg mb-4">As blockchain matures, its impact could reshape how society manages trust, collaboration, and value exchange.</p>
  `,
    category: "Economics",
    tags: ["blockchain", "crypto", "decentralization"],
    featuredImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0FsUkjxouKykZaSwNlxFTp-xcArMIQpDksNOgJxjq6zm2p2N6JROFNR0&s=10",
    author: getRandomAuthorId(),
    status: "published",
  },

  {
    title: "T20 Cricket: Entertainment or Evolution?",
    content: `
    <p class="text-lg mb-4">T20 cricket has dramatically transformed the sport, blending rapid pace with high-octane entertainment. Since its inception, it has attracted new fans and redefined how cricket is played and consumed globally.</p>
    <p class="text-lg mb-4">The format’s brevity demands aggressive play, innovative strategies, and thrilling finishes, making every ball count in a way traditional formats rarely do.</p>
    <h2 class="text-2xl font-bold my-4">Changing the Game</h2>
    <p class="text-lg mb-4">T20 has accelerated the evolution of cricketing techniques, encouraging power hitting, inventive bowling, and dynamic fielding. Players now train with a focus on versatility and adaptability.</p>
    <p class="text-lg mb-4">Leagues like the Indian Premier League (IPL) have become global spectacles, merging cricket with entertainment, celebrity culture, and commercial success.</p>
    <h2 class="text-2xl font-bold my-4">Criticism and Debate</h2>
    <p class="text-lg mb-4">Despite its popularity, purists argue that T20 compromises the strategic depth and tradition of longer formats like Test cricket.</p>
    <p class="text-lg mb-4">They worry the emphasis on fast-paced excitement may overshadow technique and the game's historical values.</p>
    <h2 class="text-2xl font-bold my-4">The Future of Cricket</h2>
    <p class="text-lg mb-4">Whether viewed as pure entertainment or a natural evolution, T20’s influence on cricket is undeniable. It continues to attract new audiences while challenging players and fans to rethink the game’s possibilities.</p>
    <p class="text-lg mb-4">The ongoing debate ensures cricket remains a dynamic sport, blending tradition with innovation.</p>
  `,
    category: "Cricket",
    tags: ["T20", "cricket", "IPL"],
    featuredImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfJzqmKrOzZENfB4rUyeQLQMGaN33yTnpTsTB8eZ3I2h2aXm-4Q6o3t1E&s=10",
    author: getRandomAuthorId(),
    status: "published",
  },

  {
    title: "India vs Pakistan: A Rivalry Beyond the Game",
    content: `
    <p class="text-lg mb-4">Few sporting events in the world ignite as much passion, anticipation, and emotion as an India vs Pakistan cricket match. This is not just a game; it's a cultural phenomenon that transcends boundaries and generations.</p>
    <p class="text-lg mb-4">Every encounter between these two teams carries with it a deep history, rooted in decades of political tension, shared culture, and unmatched national pride.</p>
    <h2 class="text-2xl font-bold my-4">A Historical Showdown</h2>
    <p class="text-lg mb-4">The rivalry began soon after partition, with cricket becoming one of the few battlegrounds where both nations could compete directly and publicly. Each match became a symbolic struggle, and over time, a celebrated spectacle.</p>
    <p class="text-lg mb-4">From Javed Miandad’s last-ball six in Sharjah to Virat Kohli’s T20 heroics in Melbourne, every generation has its own defining moment.</p>
    <h2 class="text-2xl font-bold my-4">Beyond the Boundary</h2>
    <p class="text-lg mb-4">What sets this rivalry apart is its power to momentarily unite entire nations in collective celebration or heartbreak. Offices shut down, streets empty, and televisions glow in homes, tea stalls, and stadiums across both countries.</p>
    <p class="text-lg mb-4">The players carry not just the hopes of millions but also the burden of history and expectations. Yet, camaraderie between players often reminds fans of the human connection beyond politics.</p>
    <h2 class="text-2xl font-bold my-4">A Path Toward Sportsmanship</h2>
    <p class="text-lg mb-4">Despite political strains, cricket continues to be a bridge — a common language spoken on both sides. Through the game, there are glimpses of understanding, mutual respect, and hope.</p>
    <p class="text-lg mb-4">As the rivalry continues into the future, perhaps it can inspire a new generation to focus on sportsmanship, dialogue, and shared love for the game.</p>
  `,
    category: "Cricket",
    tags: ["India", "Pakistan", "rivalry"],
    featuredImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP3Ce58umwAFv-Z-HUZn4QQ9_dD9jxzBCH0aO4S-Eb8octz94Y_dJ9LYw&s=10",
    author: getRandomAuthorId(),
    status: "published",
  },

  {
    title: "Women’s Cricket on the Rise",
    content: `
    <p class="text-lg mb-4">Women's cricket has seen an unprecedented rise in recent years, gaining attention not just as a sport, but as a powerful movement redefining the athletic landscape.</p>
    <p class="text-lg mb-4">From grassroots programs to international tournaments, female cricketers are stepping into the spotlight with performances that match — and often surpass — their male counterparts in skill and strategy.</p>
    <h2 class="text-2xl font-bold my-4">The Role of the WPL</h2>
    <p class="text-lg mb-4">The Women’s Premier League (WPL) has been a game-changer. It provided a platform for emerging players to share the field with global stars, boosting both visibility and investment in the women’s game.</p>
    <p class="text-lg mb-4">Franchise support, fan engagement, and media coverage have grown exponentially since the inaugural season, proving there is a huge market and audience for women's cricket.</p>
    <h2 class="text-2xl font-bold my-4">Global Recognition and Momentum</h2>
    <p class="text-lg mb-4">International bodies like the ICC have taken significant steps toward equality, including prize money parity in major tournaments and more televised matches.</p>
    <p class="text-lg mb-4">With national teams expanding their outreach and training programs, the pipeline for future female cricket stars is more robust than ever before.</p>
    <h2 class="text-2xl font-bold my-4">The Road Ahead</h2>
    <p class="text-lg mb-4">Despite the progress, challenges remain — from pay disparities to access to facilities in some regions. But the momentum is clear: women’s cricket is not just rising, it’s redefining the game itself.</p>
  `,
    category: "Cricket",
    tags: ["women", "cricket", "growth"],
    featuredImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpMko6aC_pZxlYZLxwSX_DRA0w8niNrg22GlmlCDm8bDMSCVHzD91sJuc&s=10",
    author: getRandomAuthorId(),
    status: "published",
  },
];

// === Seeder Function ===
async function seed() {
  try {
    await mongoose.connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    await Blog.deleteMany({}); // remove all existing blogs
    await Blog.insertMany(blogs); // insert new ones

    console.log("✅ Blog data seeded successfully!");
    mongoose.disconnect();
  } catch (err) {
    console.error("❌ Error seeding data:", err);
  }
}

seed();
