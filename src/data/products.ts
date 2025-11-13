// Course types and interfaces
export interface CourseSpecifications {
  [key: string]: string;
}

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  images: string[];
  video?: string;
  videos?: string[];
  description: string;
  detailedDescription: string;
  category: string;
  features: string[];
  specifications: CourseSpecifications;
  inStock: boolean;
}

// Helper function to get course image with fallback
export const getProductImage = (productId: number, imageIndex: number = 1): string => {
  return `/images/img_1.jpg`;
};

// Helper function to get all available images for a course
export const getProductImages = (productId: number): string[] => {
  return [getProductImage(productId)];
};

// Helper function to get course video preview (10-second previews for catalog)
export const getProductVideo = (productId: number): string | undefined => {
  const videoMap: { [key: number]: string } = {
    1: "/videos/vid10sec/1 Learn the English Language Basic Writing and Grammar Skills Cour_10sec.mp4",
    2: "/videos/vid10sec/2 Learn the English Language Basic Writing and Grammar Skills Cour_10sec.mp4",
    3: "/videos/vid10sec/3 Learn the English Language Basic Writing and Grammar Skills Cour_10sec.mp4",
    4: "/videos/vid10sec/4 Learn the English Language Basic Writing and Grammar Skills Cour (1)_10sec.mp4",
    5: "/videos/vid10sec/5 Learn the English Language Basic Writing and Grammar Skills Cour_10sec.mp4",
    6: "/videos/vid10sec/8 Learn the English Language Basic Writing and Grammar Skills Cour_10sec.mp4",
    7: "/videos/vid10sec/9 Learn the English Language Basic Writing and Grammar Skills Cour_10sec.mp4",
    8: "/videos/vid10sec/10 Learn the English Language Basic Writing and Grammar Skills Cour (1)_10sec.mp4",
    9: "/videos/vid10sec/12 Learn the English Language Basic Writing and Grammar Skills Cour (1)_10sec.mp4",
    10: "/videos/vid10sec/13 Learn the English Language Basic Writing and Grammar Skills Cour_10sec.mp4",
    11: "/videos/vid10sec/16 Learn the English Language Basic Writing and Grammar Skills Cour_10sec.mp4",
    12: "/videos/vid10sec/1 Learn the English Language Basic Writing and Grammar Skills Cour_10sec.mp4",
    13: "/videos/vid10sec/2 Learn the English Language Basic Writing and Grammar Skills Cour_10sec.mp4",
    14: "/videos/vid10sec/3 Learn the English Language Basic Writing and Grammar Skills Cour_10sec.mp4",
    15: "/videos/vid10sec/4 Learn the English Language Basic Writing and Grammar Skills Cour (1)_10sec.mp4",
    16: "/videos/vid10sec/5 Learn the English Language Basic Writing and Grammar Skills Cour_10sec.mp4"
  };
  return videoMap[productId];
};

// Helper function to get course videos
export const getProductVideos = (productId: number): string[] | undefined => {
  const videosMap: { [key: number]: string[] } = {
    1: ["/videos/vid5min/1 Learn the English Language Basic Writing and Grammar Skills Cour_5min_compressed.mp4"],
    2: ["/videos/vid5min/2 Learn the English Language Basic Writing and Grammar Skills Cour_5min_compressed.mp4"],
    3: ["/videos/vid5min/3 Learn the English Language Basic Writing and Grammar Skills Cour_5min_compressed.mp4"],
    4: ["/videos/vid5min/4 Learn the English Language Basic Writing and Grammar Skills Cour (1)_5min_compressed.mp4"],
    5: [
      "/videos/vid5min/5 Learn the English Language Basic Writing and Grammar Skills Cour_5min_compressed.mp4",
      "/videos/vid5min/8 Learn the English Language Basic Writing and Grammar Skills Cour_5min_compressed.mp4",
      "/videos/vid5min/9 Learn the English Language Basic Writing and Grammar Skills Cour_5min_compressed.mp4"
    ],
    6: [
      "/videos/vid5min/10 Learn the English Language Basic Writing and Grammar Skills Cour (1)_5min_compressed.mp4",
      "/videos/vid5min/12 Learn the English Language Basic Writing and Grammar Skills Cour (1)_5min_compressed.mp4",
      "/videos/vid5min/13 Learn the English Language Basic Writing and Grammar Skills Cour_5min_compressed.mp4"
    ],
    7: [
      "/videos/vid5min/16 Learn the English Language Basic Writing and Grammar Skills Cour_5min_compressed.mp4",
      "/videos/vid5min/1 Learn the English Language Basic Writing and Grammar Skills Cour_5min_compressed.mp4",
      "/videos/vid5min/2 Learn the English Language Basic Writing and Grammar Skills Cour_5min_compressed.mp4"
    ],
    8: [
      "/videos/vid5min/3 Learn the English Language Basic Writing and Grammar Skills Cour_5min_compressed.mp4",
      "/videos/vid5min/4 Learn the English Language Basic Writing and Grammar Skills Cour (1)_5min_compressed.mp4",
      "/videos/vid5min/5 Learn the English Language Basic Writing and Grammar Skills Cour_5min_compressed.mp4",
      "/videos/vid5min/8 Learn the English Language Basic Writing and Grammar Skills Cour_5min_compressed.mp4"
    ],
    9: [
      "/videos/vid5min/9 Learn the English Language Basic Writing and Grammar Skills Cour_5min_compressed.mp4",
      "/videos/vid5min/10 Learn the English Language Basic Writing and Grammar Skills Cour (1)_5min_compressed.mp4",
      "/videos/vid5min/12 Learn the English Language Basic Writing and Grammar Skills Cour (1)_5min_compressed.mp4",
      "/videos/vid5min/13 Learn the English Language Basic Writing and Grammar Skills Cour_5min_compressed.mp4"
    ],
    10: [
      "/videos/vid5min/16 Learn the English Language Basic Writing and Grammar Skills Cour_5min_compressed.mp4",
      "/videos/vid5min/1 Learn the English Language Basic Writing and Grammar Skills Cour_5min_compressed.mp4",
      "/videos/vid5min/2 Learn the English Language Basic Writing and Grammar Skills Cour_5min_compressed.mp4",
      "/videos/vid5min/3 Learn the English Language Basic Writing and Grammar Skills Cour_5min_compressed.mp4"
    ],
    11: [
      "/videos/vid5min/4 Learn the English Language Basic Writing and Grammar Skills Cour (1)_5min_compressed.mp4",
      "/videos/vid5min/5 Learn the English Language Basic Writing and Grammar Skills Cour_5min_compressed.mp4",
      "/videos/vid5min/8 Learn the English Language Basic Writing and Grammar Skills Cour_5min_compressed.mp4",
      "/videos/vid5min/9 Learn the English Language Basic Writing and Grammar Skills Cour_5min_compressed.mp4",
      "/videos/vid5min/10 Learn the English Language Basic Writing and Grammar Skills Cour (1)_5min_compressed.mp4"
    ],
    12: [
      "/videos/vid5min/12 Learn the English Language Basic Writing and Grammar Skills Cour (1)_5min_compressed.mp4",
      "/videos/vid5min/13 Learn the English Language Basic Writing and Grammar Skills Cour_5min_compressed.mp4",
      "/videos/vid5min/16 Learn the English Language Basic Writing and Grammar Skills Cour_5min_compressed.mp4",
      "/videos/vid5min/1 Learn the English Language Basic Writing and Grammar Skills Cour_5min_compressed.mp4",
      "/videos/vid5min/2 Learn the English Language Basic Writing and Grammar Skills Cour_5min_compressed.mp4"
    ],
    13: [
      "/videos/vid5min/3 Learn the English Language Basic Writing and Grammar Skills Cour_5min_compressed.mp4",
      "/videos/vid5min/4 Learn the English Language Basic Writing and Grammar Skills Cour (1)_5min_compressed.mp4",
      "/videos/vid5min/5 Learn the English Language Basic Writing and Grammar Skills Cour_5min_compressed.mp4",
      "/videos/vid5min/8 Learn the English Language Basic Writing and Grammar Skills Cour_5min_compressed.mp4",
      "/videos/vid5min/9 Learn the English Language Basic Writing and Grammar Skills Cour_5min_compressed.mp4"
    ],
    14: [
      "/videos/vid5min/10 Learn the English Language Basic Writing and Grammar Skills Cour (1)_5min_compressed.mp4",
      "/videos/vid5min/12 Learn the English Language Basic Writing and Grammar Skills Cour (1)_5min_compressed.mp4",
      "/videos/vid5min/13 Learn the English Language Basic Writing and Grammar Skills Cour_5min_compressed.mp4",
      "/videos/vid5min/16 Learn the English Language Basic Writing and Grammar Skills Cour_5min_compressed.mp4",
      "/videos/vid5min/1 Learn the English Language Basic Writing and Grammar Skills Cour_5min_compressed.mp4"
    ],
    15: [
      "/videos/vid5min/2 Learn the English Language Basic Writing and Grammar Skills Cour_5min_compressed.mp4",
      "/videos/vid5min/3 Learn the English Language Basic Writing and Grammar Skills Cour_5min_compressed.mp4",
      "/videos/vid5min/4 Learn the English Language Basic Writing and Grammar Skills Cour (1)_5min_compressed.mp4",
      "/videos/vid5min/5 Learn the English Language Basic Writing and Grammar Skills Cour_5min_compressed.mp4",
      "/videos/vid5min/8 Learn the English Language Basic Writing and Grammar Skills Cour_5min_compressed.mp4"
    ],
    16: [
      "/videos/vid5min/9 Learn the English Language Basic Writing and Grammar Skills Cour_5min_compressed.mp4",
      "/videos/vid5min/10 Learn the English Language Basic Writing and Grammar Skills Cour (1)_5min_compressed.mp4",
      "/videos/vid5min/12 Learn the English Language Basic Writing and Grammar Skills Cour (1)_5min_compressed.mp4",
      "/videos/vid5min/13 Learn the English Language Basic Writing and Grammar Skills Cour_5min_compressed.mp4",
      "/videos/vid5min/16 Learn the English Language Basic Writing and Grammar Skills Cour_5min_compressed.mp4",
      "/videos/vid5min/1 Learn the English Language Basic Writing and Grammar Skills Cour_5min_compressed.mp4"
    ]
  };
  return videosMap[productId];
};

export const products: Product[] = [
  {
    id: 1,
    name: "Welcome to Class",
    price: 1.95,
    image: getProductImage(1),
    images: getProductImages(1),
    video: getProductVideo(1),
    videos: getProductVideos(1),
    description: "Introduction to the native English writing and grammar skills university course.",
    detailedDescription: "Hello and welcome to the native English writing and grammar skills university course. In this university level course, you will learn some of the key writing and grammar skills that will not only level up your written English ability, but will give you a better command of the English language. This is the same writing and grammar curriculum top students learn as a requirement in order to graduate.",
    category: "Course Introduction",
    features: [
      "University-level English course",
      "Key writing and grammar skills",
      "Better command of English",
      "Professional curriculum",
      "Perfect for beginners"
    ],
    specifications: {
      "Duration": "Introduction module",
      "Level": "All Levels",
      "Language": "English",
      "Focus": "Course Overview",
      "Access": "Lifetime",
      "Certificate": "Upon completion"
    },
    inStock: true
  },
  {
    id: 2,
    name: "Forming Format",
    price: 6.99,
    image: getProductImage(2),
    images: getProductImages(2),
    video: getProductVideo(2),
    videos: getProductVideos(2),
    description: "Learn paragraph format - what you need to do to make your paragraph or essay look good and easy to read.",
    detailedDescription: "Today we're going to speak about forming format or, more specifically, paragraph format. Learn the essential rules including title formatting, indentation, sentence spacing, font type and size, and correct paragraph length. Master the 5 key elements: title, indentation, sentence spacing, font type/size, and correct length. Keep in mind you need at least 5 sentences in a paragraph.",
    category: "Writing Basics",
    features: [
      "Paragraph format rules",
      "Title formatting",
      "Proper indentation",
      "Sentence spacing",
      "Font selection"
    ],
    specifications: {
      "Duration": "Complete lesson",
      "Level": "Beginner",
      "Focus": "Formatting & Structure",
      "Topics": "5 essential formatting rules",
      "Access": "Lifetime",
      "Support": "Q&A forum"
    },
    inStock: true
  },
  {
    id: 3,
    name: "Paragraph Structure",
    price: 9.99,
    image: getProductImage(3),
    images: getProductImages(3),
    video: getProductVideo(3),
    videos: getProductVideos(3),
    description: "Learn building structure - laying the foundation for a good paragraph with topic, body and conclusion.",
    detailedDescription: "Today we're going to talk about building structure, specifically paragraph structure. You need to put certain sentences in the correct order to make sense. The parts of a paragraph include the topic, body and conclusion. Master the hamburger structure where the topic and conclusion are the buns, and the body is the meat with all the details.",
    category: "Writing Structure",
    features: [
      "Paragraph structure basics",
      "Topic sentence mastery",
      "Body development",
      "Conclusion techniques",
      "Complete paragraph examples"
    ],
    specifications: {
      "Duration": "Full module",
      "Level": "Beginner",
      "Focus": "Structure & Organization",
      "Tools": "Visual examples",
      "Access": "Lifetime",
      "Bonus": "Practice exercises"
    },
    inStock: true
  },
  {
    id: 4,
    name: "The Big Idea - Capitalization",
    price: 19.99,
    image: getProductImage(4),
    images: getProductImages(4),
    video: getProductVideo(4),
    videos: getProductVideos(4),
    description: "Master capitalization rules - know when to make letters large and small in English writing.",
    detailedDescription: "Learn the big idea about capitalization. The purpose of capitalization is to know when we should and should not make letters capital or lowercase. Master all capitalization rules including first words, proper nouns, brand names, religions, ethnicity, language, geographical regions, days, months, holidays, and title capitalization rules.",
    category: "Grammar Fundamentals",
    features: [
      "Complete capitalization rules",
      "Proper noun mastery",
      "Title capitalization",
      "Brand and place names",
      "Dictionary reference tips"
    ],
    specifications: {
      "Duration": "Comprehensive lesson",
      "Level": "Beginner-Intermediate",
      "Focus": "Capitalization Rules",
      "Techniques": "10+ capitalization rules",
      "Access": "Lifetime",
      "Bonus": "Rule reference guide"
    },
    inStock: true
  },
  {
    id: 5,
    name: "A Tale of Topic Sentences",
    price: 29.99,
    image: getProductImage(5),
    images: getProductImages(5),
    video: getProductVideo(5),
    videos: getProductVideos(5),
    description: "Master topic sentences - the most important sentence in a paragraph with subject and controlling idea.",
    detailedDescription: "Learn topic sentences in detail. A good paragraph has one topic sentence that all sentences relate to. Topic sentences are usually the first sentence, more general than details, and the most important sentence. Master the two parts: subject and controlling idea. Learn to focus topics, switch components, and avoid common facts.",
    category: "Writing Skills",
    features: [
      "3 comprehensive video modules",
      "Topic sentence structure",
      "Subject identification",
      "Controlling idea mastery",
      "Focus techniques",
      "Common mistakes to avoid"
    ],
    specifications: {
      "Duration": "Extended module",
      "Videos": "3 detailed lessons",
      "Level": "Intermediate",
      "Focus": "Topic sentence mastery",
      "Projects": "Multiple examples",
      "Access": "Lifetime",
      "Bonus": "Practice worksheets"
    },
    inStock: true
  },
  {
    id: 6,
    name: "Describing Adjectives",
    price: 39.99,
    image: getProductImage(6),
    images: getProductImages(6),
    video: getProductVideo(6),
    videos: getProductVideos(6),
    description: "Learn adjectives - descriptive words that modify nouns and pronouns to make writing more interesting.",
    detailedDescription: "Master describing adjectives. Adjectives are descriptive words that modify or give more details about nouns or pronouns. Learn adjective placement before nouns and after certain verbs (be, feel, seem, look). Understand the correct order of adjectives and learn to use determiners properly. Maximum 3 adjectives at a time for best results.",
    category: "Grammar Skills",
    features: [
      "3 comprehensive modules",
      "Adjective placement rules",
      "Order of adjectives",
      "Determiner usage",
      "Before and after verb patterns",
      "Practice with examples"
    ],
    specifications: {
      "Duration": "Complete training",
      "Videos": "3 detailed modules",
      "Level": "Intermediate",
      "Focus": "Adjective mastery",
      "Applications": "Descriptive writing",
      "Access": "Lifetime",
      "Support": "Exercise library"
    },
    inStock: true
  },
  {
    id: 7,
    name: "Sentence Basics",
    price: 49.99,
    image: getProductImage(7),
    images: getProductImages(7),
    video: getProductVideo(7),
    videos: getProductVideos(7),
    description: "Master sentence basics - understanding subject, verb, object order and parts of speech.",
    detailedDescription: "Learn sentence basics with comprehensive training. A sentence needs three things: subject, verb, and complete idea. Master the correct order (S-V-O) and learn all parts of speech including nouns, pronouns, verbs, adjectives, adverbs, prepositions, and conjunctions. Understand how word placement changes part of speech.",
    category: "Grammar Foundation",
    features: [
      "3 comprehensive video modules",
      "Subject-Verb-Object order",
      "Complete sentence structure",
      "Parts of speech mastery",
      "Word identification",
      "Multiple examples"
    ],
    specifications: {
      "Duration": "Full course section",
      "Videos": "3 detailed modules",
      "Level": "Intermediate-Advanced",
      "Focus": "Sentence construction",
      "Applications": "All writing types",
      "Access": "Lifetime",
      "Bonus": "Practice exercises"
    },
    inStock: true
  },
  {
    id: 8,
    name: "The 4 Major Types of Sentences",
    price: 59.99,
    image: getProductImage(8),
    images: getProductImages(8),
    video: getProductVideo(8),
    videos: getProductVideos(8),
    description: "Learn the four sentence types - simple, compound, complex, and compound-complex sentences.",
    detailedDescription: "Comprehensive training with 4 detailed modules covering the four major sentence types. Master simple sentences (1 independent clause), compound sentences (2 independent clauses with coordinating conjunctions), complex sentences (independent + dependent clause with subordinating conjunctions), and compound-complex sentences (2 independent + 1 dependent clause).",
    category: "Advanced Grammar",
    features: [
      "4 detailed video modules",
      "Independent clause mastery",
      "Dependent clause understanding",
      "Coordinating conjunctions",
      "Subordinating conjunctions",
      "Multiple sentence examples"
    ],
    specifications: {
      "Duration": "Extended training",
      "Videos": "4 detailed modules",
      "Level": "Intermediate-Advanced",
      "Focus": "Sentence variety",
      "Techniques": "Clause combination",
      "Access": "Lifetime",
      "Bonus": "Sentence type guide"
    },
    inStock: true
  },
  {
    id: 9,
    name: "Articles (the/an/a)",
    price: 69.99,
    image: getProductImage(9),
    images: getProductImages(9),
    video: getProductVideo(9),
    videos: getProductVideos(9),
    description: "Master articles - one of the most difficult subjects in English: the, an, and a.",
    detailedDescription: "Premium course with 4 comprehensive modules covering one of the most difficult aspects of English. Learn indefinite (a/an) vs definite (the) articles. Master when to use each article, countable vs uncountable nouns, vowel sound rules, and when to use no article. Includes extensive practice and examples.",
    category: "Advanced Grammar",
    features: [
      "4 comprehensive video modules",
      "Indefinite article rules",
      "Definite article mastery",
      "Vowel sound rules",
      "Countable/uncountable nouns",
      "Extensive practice"
    ],
    specifications: {
      "Duration": "Complete module",
      "Videos": "4 comprehensive lessons",
      "Level": "Intermediate-Advanced",
      "Focus": "Article mastery",
      "Techniques": "All article rules",
      "Access": "Lifetime",
      "Bonus": "Practice worksheets"
    },
    inStock: true
  },
  {
    id: 10,
    name: "The Good, the Bad, and the Many - Plurals",
    price: 79.99,
    image: getProductImage(10),
    images: getProductImages(10),
    video: getProductVideo(10),
    videos: getProductVideos(10),
    description: "Master plurals - learn all plural rules including regular and irregular forms.",
    detailedDescription: "Advanced training with 4 detailed modules. Master plural formation rules: adding -s for most nouns, -ies for consonant+y endings, -es for ch/s/sh/x/z endings, -s or -es for words ending in o, and -ves for f/fe endings. Learn irregular plurals like child/children, woman/women, tooth/teeth. Essential for correct English writing.",
    category: "Grammar Mastery",
    features: [
      "4 detailed video modules",
      "Regular plural rules",
      "Irregular plurals",
      "Vowel and consonant rules",
      "Common mistakes",
      "Extensive examples"
    ],
    specifications: {
      "Duration": "Complete training",
      "Videos": "4 detailed modules",
      "Level": "Intermediate",
      "Focus": "Plural mastery",
      "Techniques": "All plural rules",
      "Access": "Lifetime",
      "Bonus": "Rule reference sheet"
    },
    inStock: true
  },
  {
    id: 11,
    name: "Getting Into Prepositions",
    price: 89.99,
    image: getProductImage(11),
    images: getProductImages(11),
    video: getProductVideo(11),
    videos: getProductVideos(11),
    description: "Master prepositions - focus on in, on, at for time and location.",
    detailedDescription: "Premium training with 5 detailed modules. Master the top three prepositions: in, on, at. Learn prepositions of time (in for months/years, on for days/dates, at for specific times) and location (in for enclosed spaces, on for surfaces, at for points). Essential for proper English communication.",
    category: "Grammar Essentials",
    features: [
      "5 detailed video modules",
      "Time prepositions",
      "Location prepositions",
      "In/on/at mastery",
      "Multiple examples",
      "Practice exercises"
    ],
    specifications: {
      "Duration": "Extended module",
      "Videos": "5 detailed modules",
      "Level": "Intermediate",
      "Focus": "Preposition mastery",
      "Applications": "Speaking & writing",
      "Access": "Lifetime",
      "Bonus": "Preposition guide"
    },
    inStock: true
  },
  {
    id: 12,
    name: "Comparatives and Superlatives",
    price: 99.99,
    image: getProductImage(12),
    images: getProductImages(12),
    video: getProductVideo(12),
    videos: getProductVideos(12),
    description: "Learn comparatives and superlatives - comparing two or more things effectively.",
    detailedDescription: "Advanced course with 5 comprehensive modules. Master comparative forms (-er, more) for comparing two things and superlative forms (-est, most) for comparing three or more. Learn syllable rules, irregular forms (good/better/best, bad/worse/worst), and proper usage with 'than' and 'the'.",
    category: "Advanced Grammar",
    features: [
      "5 comprehensive modules",
      "Comparative forms",
      "Superlative forms",
      "Syllable rules",
      "Irregular forms",
      "Multiple examples"
    ],
    specifications: {
      "Duration": "Full training",
      "Videos": "5 comprehensive lessons",
      "Level": "Intermediate-Advanced",
      "Focus": "Comparison mastery",
      "Techniques": "All comparison rules",
      "Access": "Lifetime",
      "Bonus": "Comparison chart"
    },
    inStock: true
  },
  {
    id: 13,
    name: "Comparing Signal Words",
    price: 109.00,
    image: getProductImage(13),
    images: getProductImages(13),
    video: getProductVideo(13),
    videos: getProductVideos(13),
    description: "Master signal words - learn words that show similarities and differences in writing.",
    detailedDescription: "Premium course with 5 detailed modules covering signal words for comparing and contrasting. Master similarity words (also, as well, similarly, both, like) and difference words (however, on the other hand, while, although, but). Learn to write effective compare and contrast paragraphs.",
    category: "Writing Skills",
    features: [
      "5 detailed video modules",
      "Similarity signal words",
      "Difference signal words",
      "Compare/contrast structure",
      "Multiple examples",
      "Practice paragraphs"
    ],
    specifications: {
      "Duration": "Complete module",
      "Videos": "5 detailed modules",
      "Level": "Intermediate-Advanced",
      "Focus": "Signal word mastery",
      "Applications": "Academic writing",
      "Access": "Lifetime",
      "Bonus": "Signal word list"
    },
    inStock: true
  },
  {
    id: 14,
    name: "You Can Use Modals",
    price: 119.00,
    image: getProductImage(14),
    images: getProductImages(14),
    video: getProductVideo(14),
    videos: getProductVideos(14),
    description: "Master modal verbs - helping verbs that express ability, possibility, permission, and obligation.",
    detailedDescription: "Advanced training with 5 comprehensive modules. Master all modal verbs including can/could/be able to (ability), may/might (possibility/permission), shall/should/ought to (suggestions/advice), must/have to/need to (necessity), and will/would (requests). Essential for proper English expression.",
    category: "Advanced Grammar",
    features: [
      "5 comprehensive modules",
      "All modal verbs",
      "Ability expressions",
      "Permission requests",
      "Obligation forms",
      "Extensive practice"
    ],
    specifications: {
      "Duration": "Extended training",
      "Videos": "5 comprehensive lessons",
      "Level": "Advanced",
      "Focus": "Modal verb mastery",
      "Techniques": "All modal uses",
      "Access": "Lifetime",
      "Bonus": "Modal verb chart"
    },
    inStock: true
  },
  {
    id: 15,
    name: "If You Use Conditionals",
    price: 129.00,
    image: getProductImage(15),
    images: getProductImages(15),
    video: getProductVideo(15),
    videos: getProductVideos(15),
    description: "Master conditionals - sentences showing cause and effect relationships with 'if'.",
    detailedDescription: "Premium training with 5 detailed modules covering all four conditional types. Master Type 0 (facts), Type 1 (likely possibility), Type 2 (unlikely), and Type 3 (impossible past). Learn proper tense combinations and understand when to use each conditional form. Essential for complex English expression.",
    category: "Advanced Grammar",
    features: [
      "5 detailed video modules",
      "All four conditional types",
      "Tense combinations",
      "Cause and effect",
      "If clause mastery",
      "Multiple examples"
    ],
    specifications: {
      "Duration": "Complete training",
      "Videos": "5 detailed modules",
      "Level": "Advanced",
      "Focus": "Conditional mastery",
      "Applications": "Complex sentences",
      "Access": "Lifetime",
      "Bonus": "Conditional chart"
    },
    inStock: true
  },
  {
    id: 16,
    name: "Complete English Writing Mastery",
    price: 139.00,
    image: getProductImage(16),
    images: getProductImages(16),
    video: getProductVideo(16),
    videos: getProductVideos(16),
    description: "Complete mastery of English writing and grammar - from basics to advanced techniques.",
    detailedDescription: "Achieve complete English writing mastery with comprehensive training. This premium course includes 6 comprehensive modules covering all aspects: formatting, structure, capitalization, topic sentences, adjectives, sentence basics, sentence types, articles, plurals, prepositions, comparatives, signal words, modals, and conditionals. Everything you need for perfect English writing.",
    category: "Complete Mastery",
    features: [
      "6 comprehensive video modules",
      "Complete writing curriculum",
      "All grammar topics",
      "Format and structure",
      "Advanced techniques",
      "Professional writing skills",
      "Lifetime access",
      "Certificate of completion"
    ],
    specifications: {
      "Duration": "Full course access",
      "Videos": "6 comprehensive modules",
      "Level": "All Levels",
      "Coverage": "Complete writing & grammar",
      "Skills": "University-level English",
      "Access": "Lifetime",
      "Bonus": "Complete workbook & certificate"
    },
    inStock: true
  }
];
