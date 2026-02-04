export const SITE_CONFIG = {
  name: "BrightMinds Academy",
  tagline: "Nurturing Young Minds for a Brighter Tomorrow",
  description: "Premier coaching institute for Grades 1-8 in India. Expert teachers, proven methodology, and personalized attention for your child's academic success.",
  phone: "+91 98765 43210",
  whatsapp: "919876543210",
  email: "hello@brightmindsacademy.in",
  address: "123, Education Lane, Koramangala, Bangalore, Karnataka - 560034",
  city: "Bangalore",
  timings: "Mon-Sat: 8:00 AM - 8:00 PM",
};

export const GRADES = [
  {
    id: "primary",
    name: "Primary (Grades 1-3)",
    grades: "1-3",
    ageRange: "6-8 years",
    color: "primary",
    icon: "Sparkles",
    description: "Building strong foundations with fun, interactive learning",
    subjects: ["English", "Hindi", "Mathematics", "EVS", "Art & Craft"],
    features: [
      "Phonics & Reading Skills",
      "Basic Number Concepts",
      "Environmental Awareness",
      "Creative Expression",
      "Motor Skills Development",
    ],
  },
  {
    id: "middle",
    name: "Middle (Grades 4-5)",
    grades: "4-5",
    ageRange: "9-10 years",
    color: "secondary",
    icon: "BookOpen",
    description: "Expanding knowledge and developing critical thinking",
    subjects: ["English", "Hindi", "Mathematics", "Science", "Social Studies"],
    features: [
      "Advanced Reading & Comprehension",
      "Multiplication & Division Mastery",
      "Introduction to Science Concepts",
      "Indian History & Geography",
      "Project-Based Learning",
    ],
  },
  {
    id: "upper",
    name: "Upper (Grades 6-8)",
    grades: "6-8",
    ageRange: "11-13 years",
    color: "accent",
    icon: "GraduationCap",
    description: "Preparing for academic excellence and board exams",
    subjects: ["English", "Hindi/Sanskrit", "Mathematics", "Science", "Social Science"],
    features: [
      "NCERT Curriculum Aligned",
      "Olympiad Preparation",
      "Exam Strategies & Time Management",
      "Practical Science Learning",
      "Regular Assessments & Feedback",
    ],
  },
];

export const BENEFITS = [
  {
    icon: "Users",
    title: "Small Batch Sizes",
    description: "Maximum 15 students per batch ensuring individual attention for every child",
  },
  {
    icon: "Award",
    title: "Experienced Faculty",
    description: "Trained teachers with 5+ years of experience in school education",
  },
  {
    icon: "BookMarked",
    title: "NCERT Aligned",
    description: "Curriculum designed to complement CBSE, ICSE, and State board syllabi",
  },
  {
    icon: "LineChart",
    title: "Regular Progress Reports",
    description: "Weekly updates and monthly parent-teacher meetings to track growth",
  },
  {
    icon: "Gamepad2",
    title: "Fun Learning Methods",
    description: "Interactive activities, games, and multimedia to make learning enjoyable",
  },
  {
    icon: "Shield",
    title: "Safe Environment",
    description: "CCTV monitored premises with trained staff ensuring child safety",
  },
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Parent of Aarav (Grade 4)",
    location: "Koramangala, Bangalore",
    content: "My son's confidence in Mathematics has improved tremendously since joining BrightMinds. The teachers are patient and use creative methods that my child loves!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    role: "Parent of Ananya (Grade 7)",
    location: "HSR Layout, Bangalore",
    content: "The regular assessments and feedback have helped us understand where our daughter needs improvement. She's now among the top performers in her school.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
  },
  {
    id: 3,
    name: "Deepa Venkatesh",
    role: "Parent of Karthik (Grade 2)",
    location: "Indiranagar, Bangalore",
    content: "The primary section teachers are wonderful with young children. My son actually looks forward to going to tuition now! The activity-based learning approach is excellent.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
  },
  {
    id: 4,
    name: "Amit Patel",
    role: "Parent of Riya & Rohan (Grades 5 & 8)",
    location: "Whitefield, Bangalore",
    content: "Both my children study at BrightMinds. The best part is the personalized attention - teachers know each student's strengths and weaknesses. Highly recommended!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
  },
];

export const STATS = [
  { value: "500+", label: "Happy Students" },
  { value: "15+", label: "Expert Teachers" },
  { value: "98%", label: "Pass Rate" },
  { value: "8+", label: "Years Experience" },
];

export const FAQ_DATA = [
  {
    question: "What grades do you provide coaching for?",
    answer: "We provide comprehensive coaching for students from Grade 1 to Grade 8. Our programs are divided into three segments: Primary (Grades 1-3), Middle (Grades 4-5), and Upper (Grades 6-8), each with age-appropriate teaching methods.",
  },
  {
    question: "Which school boards do you follow?",
    answer: "Our curriculum is aligned with CBSE and ICSE boards, but we also support students from Karnataka State Board. We use NCERT textbooks as our primary reference and supplement with additional materials as needed.",
  },
  {
    question: "What is the batch size?",
    answer: "We maintain small batch sizes of maximum 15 students to ensure individual attention. This helps our teachers understand each student's learning pace and provide personalized guidance.",
  },
  {
    question: "What are the timings and duration of classes?",
    answer: "We offer flexible timing slots: Morning (8 AM - 10 AM), Afternoon (2 PM - 4 PM), and Evening (5 PM - 7 PM). Each session is 2 hours long. Weekend batches are also available for working parents.",
  },
  {
    question: "Do you provide study materials?",
    answer: "Yes, we provide comprehensive study materials, worksheets, and practice papers aligned with the school curriculum. Digital resources are also available through our parent portal.",
  },
  {
    question: "How can I track my child's progress?",
    answer: "We send weekly progress updates via WhatsApp, conduct monthly assessments, and organize parent-teacher meetings every quarter. Parents also get access to our online portal for detailed reports.",
  },
  {
    question: "Do you offer demo classes?",
    answer: "Yes! We offer a FREE demo class for all new students. This helps both the child and parents experience our teaching methodology before enrolling.",
  },
  {
    question: "What is your fee structure?",
    answer: "Fees vary based on the grade level and subjects chosen. We offer monthly, quarterly, and annual payment options with discounts for siblings. Please contact us for a detailed fee structure.",
  },
  {
    question: "Is there transportation facility available?",
    answer: "Currently, we don't provide transportation. However, our central location in Koramangala is well-connected by public transport, and we have safe pick-up/drop-off zones for parents.",
  },
  {
    question: "Do you prepare students for Olympiads?",
    answer: "Yes, we offer special preparation for Math Olympiad, Science Olympiad, and other competitive exams for students in Grades 4-8. This is available as an add-on program.",
  },
];

export const NAVIGATION = [
  { name: "Home", href: "/" },
  { name: "Courses", href: "/courses" },
  { name: "About", href: "/about" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "FAQ", href: "/faq" },
  { name: "Contact", href: "/contact" },
];

export const IMAGES = {
  hero: {
    main: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&h=800&fit=crop",
    alt: "Happy Indian school children learning together in a classroom",
  },
  about: {
    classroom: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&h=600&fit=crop",
    teacher: "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800&h=600&fit=crop",
    students: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&h=600&fit=crop",
  },
  grades: {
    primary: "https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?w=600&h=400&fit=crop",
    middle: "https://images.pexels.com/photos/8612990/pexels-photo-8612990.jpeg?w=600&h=400&fit=crop",
    upper: "https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?w=600&h=400&fit=crop",
  },
  decorative: {
    books: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=400&h=300&fit=crop",
    study: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=300&fit=crop",
  },
};