export interface Insight {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  image: string;
  readTime: string;
}

export const insights: Insight[] = [
  {
    id: 1,
    title: "Understanding Nigeria's Youth Electoral Force",
    excerpt: "Nigeria's under-35 population represents the largest voting bloc, digitally active and politically engaged. Reaching them effectively requires data-driven strategies and evidence-based engagement frameworks.",
    category: "Research",
    date: "2024-11-15",
    image: "/assets/insight-1.jpg",
    readTime: "8 min read",
  },
  {
    id: 2,
    title: "Post-Policy Sentiment Shift Analysis",
    excerpt: "Tracking public opinion shifts following key policy announcements reveals critical engagement patterns across geopolitical zones and demographic segments.",
    category: "Sentiment",
    date: "2024-10-28",
    image: "/assets/insight-2.jpg",
    readTime: "6 min read",
  },
  {
    id: 3,
    title: "Tinubu Administration: First 100 Days Data Review",
    excerpt: "A comprehensive data-driven review of governance initiatives, policy implementation, and public reception during the first 100 days of the administration.",
    category: "Governance",
    date: "2024-10-10",
    image: "/assets/insight-3.jpg",
    readTime: "12 min read",
  },
  {
    id: 4,
    title: "Regional Polling Intelligence Report Q3 2024",
    excerpt: "Aggregated polling data across Nigeria's six geopolitical zones reveals emerging patterns in voter satisfaction and priority issues for the upcoming electoral cycle.",
    category: "Polling",
    date: "2024-09-22",
    image: "/assets/insight-4.jpg",
    readTime: "10 min read",
  },
  {
    id: 5,
    title: "Digital Engagement Patterns in Northern Nigeria",
    excerpt: "Analysis of social media engagement patterns reveals unique content consumption behaviors and platform preferences in the Northern region compared to national averages.",
    category: "Analysis",
    date: "2024-09-05",
    image: "/assets/insight-5.jpg",
    readTime: "7 min read",
  },
  {
    id: 6,
    title: "The Role of AI in Modern Campaign Intelligence",
    excerpt: "How artificial intelligence is transforming political campaigns through automated sentiment analysis, predictive modeling, and real-time decision support systems.",
    category: "Research",
    date: "2024-08-18",
    image: "/assets/insight-6.jpg",
    readTime: "9 min read",
  },
];

export const categories = ["All", "Research", "Polling", "Sentiment", "Governance", "Analysis"];
