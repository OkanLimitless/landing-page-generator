// Collection of prelander templates with different angles/approaches
const prelanderTemplates = {
  version1: {
    version: 'version1',
    headline: "\"My Husband's Growth Shocked Me, But What Happened Next Left Me Speechless...\"",
    subtitle: "Brazilian Discovery Challenges Everything We Thought We Knew About Male Enhancement",
    leadText: "\"When my husband first told me about this Brazilian discovery, I was skeptical. But after seeing the results firsthand, I had to share this with other women...\"",
    keyPoints: [
      "Natural ingredients from Brazilian rainforest",
      "Results visible in just weeks",
      "Clinically tested formula"
    ],
    ctaText: "Learn The Full Story",
    guaranteeText: "180-Day Satisfaction Guarantee"
  },

  version2: {
    version: 'version2',
    headline: "\"97% of Men See Results Within 30 Days with This Brazilian Formula\"",
    subtitle: "Clinical Study Reveals Breakthrough in Natural Male Enhancement",
    leadText: "\"In a groundbreaking study of 1,000 men, this unique Brazilian compound showed remarkable results...\"",
    keyPoints: [
      "97% success rate in clinical trials",
      "10,000+ satisfied customers",
      "#1 rated natural solution"
    ],
    ctaText: "See the Clinical Results",
    guaranteeText: "180-Day Money-Back Guarantee"
  },

  version3: {
    version: 'version3',
    headline: "\"Groundbreaking Research: Brazilian Plant Extract Shows 312% Increase in Male Performance\"",
    subtitle: "Scientific Study Published in International Journal of Urology",
    leadText: "\"The active compounds in this rare Brazilian plant have shown remarkable effects on male enhancement in double-blind clinical trials...\"",
    keyPoints: [
      "Clinically proven formula",
      "100% natural compounds",
      "FDA registered facility"
    ],
    ctaText: "View Scientific Research",
    guaranteeText: "180-Day Scientific Guarantee"
  }
};

// Helper function to get random template
const getRandomTemplate = () => {
  const templates = Object.keys(prelanderTemplates);
  const randomIndex = Math.floor(Math.random() * templates.length);
  return prelanderTemplates[templates[randomIndex]];
};

export { prelanderTemplates, getRandomTemplate }; 