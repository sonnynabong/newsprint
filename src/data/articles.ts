export interface Article {
  id: string;
  headline: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  authorTitle: string;
  publishedAt: string;
  readTime: string;
  imageUrl: string;
  imageCaption: string;
  featured?: boolean;
  breaking?: boolean;
  trending?: boolean;
}

export const categories = [
  'World',
  'Politics',
  'Business',
  'Technology',
  'Science',
  'Health',
  'Culture',
  'Sports',
  'Climate',
];

export const articles: Article[] = [
  // BREAKING NEWS - Featured Hero
  {
    id: '1',
    headline: "Global Climate Summit Reaches Historic Agreement on Carbon Emissions",
    excerpt: "After two weeks of intense negotiations, world leaders have committed to unprecedented targets that could reshape the future of industrial policy across continents.",
    content: "In a landmark decision that signals a new era of international cooperation, representatives from 195 nations have agreed to binding carbon reduction targets that exceed previous commitments by 40%. The agreement, dubbed the 'New York Protocol,' establishes a framework for carbon pricing and creates a $100 billion annual fund to support developing nations in their transition to renewable energy.",
    category: "Climate",
    author: "Eleanor Vance",
    authorTitle: "Climate Correspondent",
    publishedAt: "2026-03-13T08:00:00Z",
    readTime: "8 min read",
    imageUrl: "/images/climate-summit.jpg",
    imageCaption: "Delegates celebrate after the historic vote at UN Headquarters",
    featured: true,
    breaking: true,
  },
  
  // WORLD NEWS
  {
    id: '2',
    headline: "European Union Announces Revolutionary Digital Privacy Framework",
    excerpt: "The comprehensive legislation aims to protect citizens in an era of artificial intelligence and biometric surveillance.",
    content: "The European Parliament has passed the Digital Sovereignty Act, establishing the world's most comprehensive framework for data protection in the AI age. The legislation introduces strict limits on facial recognition, mandates algorithmic transparency, and grants citizens the 'right to explanation' for automated decisions affecting their lives.",
    category: "World",
    author: "Marcus Chen",
    authorTitle: "European Affairs Editor",
    publishedAt: "2026-03-12T14:30:00Z",
    readTime: "6 min read",
    imageUrl: "/images/eu-parliament.jpg",
    imageCaption: "The European Parliament during the historic vote",
    trending: true,
  },
  {
    id: '3',
    headline: "Archaeologists Uncover Lost City in the Amazon Rainforest",
    excerpt: "Lidar technology reveals sprawling urban complex that challenges conventional theories about pre-Columbian civilization.",
    content: "A team of international researchers has discovered evidence of a sophisticated urban center deep in the Amazon, featuring causeways, reservoirs, and terraced agriculture spanning over 50 square kilometers. The findings suggest that complex societies existed in the rainforest far earlier than previously believed.",
    category: "World",
    author: "Dr. Sarah Okonkwo",
    authorTitle: "Science Correspondent",
    publishedAt: "2026-03-11T09:15:00Z",
    readTime: "7 min read",
    imageUrl: "/images/amazon-ruins.jpg",
    imageCaption: "Aerial view of the newly discovered urban complex",
  },
  {
    id: '4',
    headline: "Middle East: Historic Peace Treaty Signed After Decades of Conflict",
    excerpt: "Breakthrough agreement establishes mutual recognition and opens borders for the first time in a generation.",
    content: "In a ceremony witnessed by leaders from across the globe, the historic Treaty of Alexandria was signed yesterday, ending one of the region's most protracted disputes. The agreement includes provisions for economic cooperation, water rights sharing, and the establishment of a joint development corridor.",
    category: "World",
    author: "Amira Hassan",
    authorTitle: "Middle East Bureau Chief",
    publishedAt: "2026-03-10T16:45:00Z",
    readTime: "9 min read",
    imageUrl: "/images/peace-treaty.jpg",
    imageCaption: "Leaders shake hands following the historic signing ceremony",
  },

  // POLITICS
  {
    id: '5',
    headline: "Supreme Court Ruling Redefines Scope of Digital Fourth Amendment Rights",
    excerpt: "Landmark decision establishes new protections for biometric data and location history.",
    content: "In a 5-4 decision that legal scholars are calling 'the most significant privacy ruling of the digital age,' the Supreme Court has ruled that law enforcement must obtain warrants to access biometric data and historical location information stored on personal devices. The decision significantly expands Fourth Amendment protections in the digital realm.",
    category: "Politics",
    author: "James Morrison",
    authorTitle: "Legal Affairs Correspondent",
    publishedAt: "2026-03-12T11:20:00Z",
    readTime: "7 min read",
    imageUrl: "/images/supreme-court.jpg",
    imageCaption: "The Supreme Court building following the landmark ruling",
    breaking: true,
  },
  {
    id: '6',
    headline: "Infrastructure Bill Passes Senate with Bipartisan Support",
    excerpt: "$2.3 trillion package includes massive investments in high-speed rail, broadband, and clean water infrastructure.",
    content: "The Senate has passed the most significant infrastructure investment in modern history, approving a comprehensive package that will modernize the nation's transportation networks, expand broadband access to rural communities, and replace aging water systems. The bill passed with a rare bipartisan majority of 68-32.",
    category: "Politics",
    author: "Patricia Williams",
    authorTitle: "Congressional Reporter",
    publishedAt: "2026-03-11T18:00:00Z",
    readTime: "5 min read",
    imageUrl: "/images/senate-vote.jpg",
    imageCaption: "Senators gather for the historic vote",
    trending: true,
  },

  // BUSINESS
  {
    id: '7',
    headline: "Tech Giants Face Unprecedented Antitrust Action",
    excerpt: "Justice Department files sweeping lawsuit that could force breakup of major technology conglomerates.",
    content: "The Department of Justice has filed a landmark antitrust lawsuit against four of the world's largest technology companies, alleging systematic monopolistic practices that have stifled competition and harmed consumers. The case, described as the most significant antitrust action since the Microsoft case of the 1990s, could result in forced divestitures.",
    category: "Business",
    author: "Robert Kim",
    authorTitle: "Business Editor",
    publishedAt: "2026-03-13T07:30:00Z",
    readTime: "8 min read",
    imageUrl: "/images/courthouse.jpg",
    imageCaption: "The federal courthouse where the historic case was filed",
    breaking: true,
    trending: true,
  },
  {
    id: '8',
    headline: "Global Markets Rally as Inflation Concerns Ease",
    excerpt: "Major indices reach record highs following better-than-expected economic data from major economies.",
    content: "Stock markets around the world surged to new records today as fresh economic data suggested that inflation pressures are easing faster than anticipated. The S&P 500 climbed 2.3%, while European and Asian markets posted similar gains. Analysts attribute the rally to declining energy prices and supply chain normalization.",
    category: "Business",
    author: "Jennifer Liu",
    authorTitle: "Markets Correspondent",
    publishedAt: "2026-03-12T20:15:00Z",
    readTime: "4 min read",
    imageUrl: "/images/trading-floor.jpg",
    imageCaption: "Traders on the floor of the New York Stock Exchange",
  },
  {
    id: '9',
    headline: "Electric Vehicle Sales Surpass Traditional Cars in Historic First",
    excerpt: "Industry milestone signals accelerating shift away from internal combustion engines.",
    content: "For the first time in automotive history, electric vehicles outsold gasoline-powered cars globally in the last quarter, marking a watershed moment in the transition to sustainable transportation. Industry analysts say the milestone came years earlier than most predictions, driven by improving technology and expanding charging infrastructure.",
    category: "Business",
    author: "David Park",
    authorTitle: "Automotive Industry Reporter",
    publishedAt: "2026-03-11T12:00:00Z",
    readTime: "6 min read",
    imageUrl: "/images/ev-charging.jpg",
    imageCaption: "An electric vehicle charging station in downtown Los Angeles",
  },

  // TECHNOLOGY
  {
    id: '10',
    headline: "Quantum Computer Achieves 'Quantum Advantage' in Pharmaceutical Research",
    excerpt: "Breakthrough could accelerate drug discovery by orders of magnitude, revolutionizing medicine.",
    content: "Researchers at the Quantum Computing Institute have demonstrated the first practical quantum advantage in pharmaceutical research, using a 1,000-qubit system to simulate molecular interactions that would be impossible to calculate with classical computers. The breakthrough could reduce drug development timelines from decades to months.",
    category: "Technology",
    author: "Dr. Alan Foster",
    authorTitle: "Technology Correspondent",
    publishedAt: "2026-03-12T09:45:00Z",
    readTime: "7 min read",
    imageUrl: "/images/quantum-computer.jpg",
    imageCaption: "The quantum computing facility at the research institute",
    trending: true,
  },
  {
    id: '11',
    headline: "New AI Model Demonstrates Human-Level Reasoning in Scientific Discovery",
    excerpt: "System independently formulated and tested hypotheses, leading to novel materials discovery.",
    content: "Scientists at DeepMind have unveiled an artificial intelligence system capable of conducting independent scientific research, including hypothesis generation, experimental design, and result interpretation. The system recently identified three novel superconducting materials without human guidance, demonstrating what researchers call 'autonomous scientific reasoning.'",
    category: "Technology",
    author: "Lisa Chen",
    authorTitle: "AI and Robotics Editor",
    publishedAt: "2026-03-10T15:30:00Z",
    readTime: "8 min read",
    imageUrl: "/images/ai-lab.jpg",
    imageCaption: "Researchers monitoring the AI system during experiments",
  },

  // SCIENCE
  {
    id: '12',
    headline: "James Webb Telescope Discovers Potentially Habitable Exoplanet",
    excerpt: "Atmospheric analysis suggests presence of water vapor and conditions suitable for life.",
    content: "NASA has announced the discovery of an Earth-sized exoplanet orbiting within the habitable zone of a nearby star, with atmospheric conditions that could support liquid water. The planet, designated Kepler-442b, shows spectral signatures suggesting the presence of water vapor and possibly oxygen in its atmosphere.",
    category: "Science",
    author: "Dr. Maria Rodriguez",
    authorTitle: "Space Correspondent",
    publishedAt: "2026-03-13T06:00:00Z",
    readTime: "7 min read",
    imageUrl: "/images/exoplanet.jpg",
    imageCaption: "Artist's impression of the newly discovered exoplanet",
    trending: true,
  },
  {
    id: '13',
    headline: "Breakthrough in Fusion Energy: Net Positive Reaction Sustained for One Hour",
    excerpt: "Milestone brings commercial fusion power closer to reality than ever before.",
    content: "Scientists at the International Fusion Research Facility have achieved a sustained fusion reaction that produced more energy than was consumed for over one hour, shattering previous records and bringing the dream of limitless clean energy significantly closer to reality. The achievement represents a crucial step toward commercial fusion power plants.",
    category: "Science",
    author: "Thomas Wright",
    authorTitle: "Energy Correspondent",
    publishedAt: "2026-03-11T10:00:00Z",
    readTime: "6 min read",
    imageUrl: "/images/fusion-reactor.jpg",
    imageCaption: "The tokamak fusion reactor during the record-breaking experiment",
  },

  // HEALTH
  {
    id: '14',
    headline: "Universal Cancer Vaccine Shows Promise in Phase III Trials",
    excerpt: "Revolutionary treatment triggers immune response against multiple cancer types.",
    content: "A universal cancer vaccine has shown remarkable efficacy in Phase III clinical trials, triggering immune responses that eliminated tumors in 78% of patients across multiple cancer types. The treatment, which works by targeting common antigens shared by cancer cells, represents a potential paradigm shift in oncology.",
    category: "Health",
    author: "Dr. Rachel Green",
    authorTitle: "Medical Correspondent",
    publishedAt: "2026-03-12T13:00:00Z",
    readTime: "7 min read",
    imageUrl: "/images/medical-research.jpg",
    imageCaption: "Researchers analyzing trial data at the medical center",
    breaking: true,
    trending: true,
  },
  {
    id: '15',
    headline: "Study Links Sleep Quality to Longevity in Largest-Ever Analysis",
    excerpt: "Research involving 2 million participants reveals optimal sleep patterns for healthy aging.",
    content: "The largest study of its kind has established clear correlations between sleep quality and longevity, finding that consistent, high-quality sleep is associated with up to 15% longer lifespan. The research, published in The Lancet, analyzed data from over 2 million participants across 40 years.",
    category: "Health",
    author: "Dr. Michael Chang",
    authorTitle: "Health Editor",
    publishedAt: "2026-03-10T08:30:00Z",
    readTime: "5 min read",
    imageUrl: "/images/sleep-study.jpg",
    imageCaption: "A participant in the longitudinal sleep study",
  },

  // CULTURE
  {
    id: '16',
    headline: "Lost Manuscript by Literary Giant Discovered in Private Collection",
    excerpt: "Unpublished novel by Nobel laureate to be released after 50 years in vault.",
    content: "A complete unpublished novel by a Nobel Prize-winning author has been discovered in a private Swiss vault, where it remained untouched for over five decades. The manuscript, authenticated by leading literary scholars, is scheduled for publication next year and is already being hailed as a major literary event.",
    category: "Culture",
    author: "Sophie Anderson",
    authorTitle: "Arts Correspondent",
    publishedAt: "2026-03-11T16:00:00Z",
    readTime: "6 min read",
    imageUrl: "/images/manuscript.jpg",
    imageCaption: "The discovered manuscript with the author's handwritten notes",
    trending: true,
  },
  {
    id: '17',
    headline: "National Museum Announces Largest Art Acquisition in History",
    excerpt: "$500 million collection includes works by Van Gogh, Monet, and previously unknown Basquiats.",
    content: "The National Museum of Art has announced the acquisition of a $500 million private collection that includes major works by Van Gogh, Monet, and Kahlo, along with a trove of previously unknown paintings by Jean-Michel Basquiat. The collection will be permanently displayed in a new wing opening next year.",
    category: "Culture",
    author: "Oliver Bennett",
    authorTitle: "Art Critic",
    publishedAt: "2026-03-10T14:00:00Z",
    readTime: "5 min read",
    imageUrl: "/images/museum-gallery.jpg",
    imageCaption: "The newly acquired Van Gogh painting on display",
  },

  // SPORTS
  {
    id: '18',
    headline: "Underdog Team Wins Championship in Historic Upset",
    excerpt: "Last-place finishers from previous season complete remarkable turnaround.",
    content: "In one of the most remarkable turnarounds in sports history, a team that finished last in the previous season has won the championship, defeating the defending champions in a dramatic final. The victory completes a journey from worst to first that analysts are calling unprecedented in professional sports.",
    category: "Sports",
    author: "Carlos Martinez",
    authorTitle: "Sports Editor",
    publishedAt: "2026-03-12T23:00:00Z",
    readTime: "6 min read",
    imageUrl: "/images/championship.jpg",
    imageCaption: "The team celebrates their historic championship victory",
    trending: true,
  },
  {
    id: '19',
    headline: "Olympic Committee Announces New Sports for 2028 Games",
    excerpt: "Breakdancing, parkour, and esports among additions reflecting evolving athletic landscape.",
    content: "The International Olympic Committee has announced the addition of six new sports to the 2028 Los Angeles Games, including breakdancing, parkour, competitive climbing, and three esports titles. The additions reflect the IOC's efforts to engage younger audiences and recognize evolving forms of athletic competition.",
    category: "Sports",
    author: "Emma Thompson",
    authorTitle: "Olympics Correspondent",
    publishedAt: "2026-03-11T11:00:00Z",
    readTime: "5 min read",
    imageUrl: "/images/olympics.jpg",
    imageCaption: "The official announcement at IOC headquarters",
  },
  {
    id: '20',
    headline: "Record-Breaking Marathon Time Shatters Previous Best by Three Minutes",
    excerpt: "Kenyan runner achieves sub-2-hour marathon in sanctioned race conditions.",
    content: "Eliud Kipchoge's marathon world record has been shattered by three minutes as a Kenyan runner completed the 26.2-mile distance in 1 hour, 56 minutes, and 42 seconds during a sanctioned race in Berlin. The achievement, long considered physiologically impossible by many experts, has stunned the athletics world.",
    category: "Sports",
    author: "Aisha Johnson",
    authorTitle: "Athletics Correspondent",
    publishedAt: "2026-03-10T09:00:00Z",
    readTime: "6 min read",
    imageUrl: "/images/marathon.jpg",
    imageCaption: "The record-breaking runner crossing the finish line",
  },
];

export const getFeaturedArticle = () => articles.find(a => a.featured);
export const getBreakingNews = () => articles.filter(a => a.breaking);
export const getTrendingArticles = () => articles.filter(a => a.trending);
export const getArticlesByCategory = (category: string) => 
  articles.filter(a => a.category === category);
export const getLatestArticles = (count: number = 10) => 
  articles.slice(0, count);
