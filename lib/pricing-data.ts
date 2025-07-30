export interface ServiceItem {
  id: string
  title: string
  price: number
  description?: string
  popular?: boolean
}

export interface ServiceSection {
  id: string
  title: string
  description?: string
  icon: string
  services: ServiceItem[]
}

export const defaultPricingData: ServiceSection[] = [
  {
    id: "iv-sessions",
    title: "IV Therapy Sessions",
    description: "Boost your health with our premium IV treatments",
    icon: "Droplets",
    services: [
      { id: "iv-1", title: "Immune Booster IV", price: 25000, popular: true },
      { id: "iv-2", title: "Detox IV", price: 50000 },
      { id: "iv-3", title: "Whitening IV Cocktail", price: 60000 },
      { id: "iv-4", title: "Slimming IV", price: 31666 },
      { id: "iv-5", title: "Collagen Infusion IV", price: 45000 },
      { id: "iv-6", title: "Vitamin B12 Shot", price: 15000 },
    ],
  },
  {
    id: "body-sculpting",
    title: "Body Sculpting & Cavitation",
    description: "Advanced body contouring treatments",
    icon: "Zap",
    services: [
      { id: "body-1", title: "Body Sculpting/Cavitation (Any Part)", price: 15000, description: "Per session" },
      {
        id: "body-2",
        title: "Full Body Sculpting/Cavitation",
        price: 50000,
        description: "Per session",
        popular: true,
      },
      { id: "body-3", title: "Body Sculpting - 5 Sessions (Any Part)", price: 60000 },
      { id: "body-4", title: "Body Sculpting - 10 Sessions (Any Part)", price: 100000 },
    ],
  },
  {
    id: "botox",
    title: "Botox Treatments",
    description: "Professional cosmetic enhancement",
    icon: "Sparkles",
    services: [
      { id: "botox-1", title: "Botox 50 Units", price: 125000 },
      { id: "botox-2", title: "Botox 100 Units", price: 210000, popular: true },
      { id: "botox-3", title: "Botox Per Unit", price: 3000 },
    ],
  },
  {
    id: "fillers",
    title: "Filler Treatments",
    description: "Advanced dermal fillers",
    icon: "Heart",
    services: [
      { id: "filler-1", title: "Face Filler", price: 240000, popular: true },
      { id: "filler-2", title: "PRP Filler - Under Eye", price: 45000 },
      { id: "filler-3", title: "PRP Filler - Nasolabial", price: 45000 },
      { id: "filler-4", title: "PRP Butt Filler (3 Sessions)", price: 300000 },
      { id: "filler-5", title: "PRP Butt Filler (Per Session)", price: 120000 },
    ],
  },
  {
    id: "hair-braiding",
    title: "Hair & Braiding Services",
    description: "Professional hair styling and braiding",
    icon: "Scissors",
    services: [
      { id: "hair-1", title: "Big Braids (Long)", price: 9000 },
      { id: "hair-2", title: "Big Braids (Medium)", price: 7000 },
      { id: "hair-3", title: "Big Braids (Short)", price: 5000 },
      { id: "hair-4", title: "Box Braids Small (Long)", price: 12000 },
      { id: "hair-5", title: "Knotless Braids Big (Long)", price: 15000, popular: true },
      { id: "hair-6", title: "Loosening Attachments (Long)", price: 2500 },
      { id: "hair-7", title: "Loosening Attachments (Short)", price: 1500 },
      { id: "hair-8", title: "Weaving All Back Hair", price: 1000 },
      { id: "hair-9", title: "Washing & Drying Hair", price: 1500 },
      { id: "hair-10", title: "Washing & Drying Hair (Gen)", price: 2500 },
      { id: "hair-11", title: "Washing & Drying Braids", price: 5000 },
      { id: "hair-12", title: "Washing & Steaming Hair", price: 7000 },
      { id: "hair-13", title: "Wig Revamping (Curly)", price: 15000 },
      { id: "hair-14", title: "Wig Revamping (Straight)", price: 10000 },
    ],
  },
  {
    id: "facials",
    title: "Facial Treatments",
    description: "Rejuvenate your skin with our expert facial services",
    icon: "Flower2",
    services: [
      { id: "facial-1", title: "Treatment Facial with Deep Extraction", price: 30000 },
      { id: "facial-2", title: "Treatment Facial (Mild)", price: 25000, description: "For spots and pimples" },
      { id: "facial-3", title: "Gentleman Facial", price: 20000 },
      { id: "facial-4", title: "Brightening Facial", price: 20000 },
      { id: "facial-5", title: "Vampire Facial", price: 47000, popular: true },
      { id: "facial-6", title: "Derma Planning/Hydra Facial", price: 55000 },
      { id: "facial-7", title: "Anti-Aging Dermabrasion Facial", price: 40000 },
      { id: "facial-8", title: "Derma Planning Facial", price: 30000 },
      { id: "facial-9", title: "Chemical Peel (Dark Spots)", price: 50000 },
      { id: "facial-10", title: "Microdermabrasion Facial", price: 40000 },
    ],
  },
  {
    id: "waxing",
    title: "Waxing Services",
    description: "Professional hair removal treatments",
    icon: "Star",
    services: [
      { id: "wax-1", title: "Chin and Neck Waxing", price: 8000 },
      { id: "wax-2", title: "Chin Waxing", price: 4500 },
      { id: "wax-3", title: "Full Body Wax", price: 50000, popular: true },
      { id: "wax-4", title: "Facial Waxing", price: 15000 },
      { id: "wax-5", title: "Full Arm Waxing", price: 12000 },
      { id: "wax-6", title: "Full Leg Waxing", price: 15000 },
      { id: "wax-7", title: "Half Leg Waxing", price: 12000 },
      { id: "wax-8", title: "Thigh Waxing", price: 10000 },
      { id: "wax-9", title: "Vajacial", price: 20000 },
      { id: "wax-10", title: "Underarm Waxing", price: 6000 },
      { id: "wax-11", title: "Bikini Wax", price: 10000 },
      { id: "wax-12", title: "Brazilian Wax & Vajacial", price: 25000 },
    ],
  },
  {
    id: "packages",
    title: "Exclusive Packages",
    description: "Complete wellness experiences",
    icon: "Crown",
    services: [
      { id: "package-1", title: "Indulge Me Bouquet (Single)", price: 80000 },
      { id: "package-2", title: "Couple Cares Me Bouquet", price: 240000, popular: true },
      { id: "package-3", title: "Classic Couple Bouquet", price: 150000 },
      { id: "package-4", title: "Royal Couple Bouquet", price: 200000 },
    ],
  },
  {
    id: "microneedling",
    title: "Microneedling",
    description: "Advanced skin rejuvenation",
    icon: "Zap",
    services: [
      { id: "micro-1", title: "Vampire Facial PRP", price: 60000 },
      { id: "micro-2", title: "Scar Removal (Per Session)", price: 60000 },
      { id: "micro-3", title: "Scar Removal (3 Sessions)", price: 120000 },
      { id: "micro-4", title: "Hair Loss Treatment", price: 80000, description: "Per session" },
      { id: "micro-5", title: "Hair Loss Treatment (3 Sessions)", price: 200000 },
    ],
  },
  {
    id: "body-scrub",
    title: "Body Scrub & Spa",
    description: "Luxurious body treatments",
    icon: "HandHeart",
    services: [
      { id: "scrub-1", title: "Brightening Polish", price: 20000 },
      { id: "scrub-2", title: "Deep Body Scrub & Steaming", price: 25000 },
      { id: "scrub-3", title: "Hamman", price: 45000 },
      { id: "scrub-4", title: "Whitening Polish", price: 40000 },
      { id: "scrub-5", title: "Cleopatra Hammam", price: 40000 },
      { id: "scrub-6", title: "Jon's Signature Hamman", price: 45000 },
      { id: "scrub-7", title: "Coffee Body Polish", price: 35000 },
    ],
  },
  {
    id: "massage",
    title: "Massage Therapy",
    description: "Relaxation and therapeutic treatments",
    icon: "HandHeart",
    services: [
      { id: "massage-1", title: "Deep Tissue with Hot Stone", price: 50000 },
      { id: "massage-2", title: "Deep Tissue Full Body", price: 35000 },
      { id: "massage-3", title: "Detoxing Massage", price: 30000 },
      { id: "massage-4", title: "Acupressure & Cupping", price: 50000 },
      { id: "massage-5", title: "Indian Head Massage", price: 30000 },
      { id: "massage-6", title: "Swedish Full Body", price: 25000 },
      { id: "massage-7", title: "Back, Neck & Shoulders", price: 15000 },
    ],
  },
  {
    id: "nail-care",
    title: "Nail Care",
    description: "Professional nail services",
    icon: "Nail",
    services: [
      { id: "nail-1", title: "Pedicure Regular", price: 7000 },
      { id: "nail-2", title: "Pedicure with Foot Massage", price: 10000 },
      { id: "nail-3", title: "Pedicure Regular with Gen", price: 10000 },
      { id: "nail-4", title: "Jelly Pedicure", price: 20000 },
      { id: "nail-5", title: "VVIP Pedicure", price: 25000 },
      { id: "nail-6", title: "Manicure", price: 7000 },
      { id: "nail-7", title: "Foot Massage", price: 5000 },
      { id: "nail-8", title: "Foot Detox", price: 7000 },
      { id: "nail-9", title: "Acrylic Nails", price: 4000 },
      { id: "nail-10", title: "Acrylic Nails with Design", price: 8000 },
      { id: "nail-11", title: "Gel Polish (Normal)", price: 2000 },
      { id: "nail-12", title: "Gel Polish with Design", price: 5500 },
    ],
  },
  {
    id: "teeth-whitening",
    title: "Teeth Whitening",
    description: "Professional dental aesthetics",
    icon: "Sparkles",
    services: [
      { id: "teeth-1", title: "Per Session", price: 25000 },
      { id: "teeth-2", title: "2 Sessions Package", price: 45000 },
    ],
  },
  {
    id: "lipo-injection",
    title: "Lipo Injection",
    description: "Advanced body contouring",
    icon: "Zap",
    services: [
      { id: "lipo-1", title: "Face Lipo (1 Vial Medium)", price: 40000 },
      { id: "lipo-2", title: "Face Lipo (1 Vial Strong)", price: 80000 },
      { id: "lipo-3", title: "5 Vials Strong", price: 360000 },
      { id: "lipo-4", title: "10 Vials Medium", price: 340000 },
    ],
  },
  {
    id: "lash-brow",
    title: "Lash & Brow",
    description: "Eye area enhancement",
    icon: "Eye",
    services: [
      { id: "lash-1", title: "Classic Lash Extension", price: 15000 },
      { id: "lash-2", title: "Volume Lash Extension", price: 25000 },
      { id: "lash-3", title: "Mega Volume Lash", price: 35000 },
      { id: "lash-4", title: "Microblading", price: 40000 },
      { id: "lash-5", title: "Micro Shading", price: 45000 },
      { id: "lash-6", title: "Hybrid Brows", price: 50000 },
      { id: "lash-7", title: "Combo Brows", price: 60000 },
      { id: "lash-8", title: "Lip Blush (Both)", price: 30000 },
      { id: "lash-9", title: "Lip Blush (Single)", price: 20000 },
    ],
  },
]
