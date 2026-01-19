export interface ServiceItem {
  id: string;
  title: string;
  price: number | string;  // string for ranges or "per session"
  description?: string;
  popular?: boolean;
}

export interface ServiceSection {
  id: string;
  title: string;
  description?: string;
  icon: string;
  services: ServiceItem[];
}

export const defaultPricingData: ServiceSection[] = [
  {
    id: "facials",
    title: "Facial Treatments",
    description: "Rejuvenate your skin with expert facial services",
    icon: "Flower2",
    services: [
      // New / updated specialized facials
      { id: "facial-inner-thigh", title: "Inner Thigh Facial", price: 20000 },
      { id: "facial-butt", title: "Butt Facial", price: 25000 },
      { id: "facial-butt-peel", title: "Butt Facial + Peel", price: 50000 },
      { id: "facial-vampire", title: "Vampire Facial", price: 60000, popular: true },
      { id: "facial-bb-glow", title: "BB Glow Facial", price: 100000 },
      { id: "facial-back", title: "Back Facial", price: 30000 },
      { id: "facial-carbon-laser", title: "Carbon Laser Facial", price: 40000 },
      { id: "facial-armpit", title: "Armpit Facial", price: 10000 },
      { id: "facial-mesotherapy", title: "Mesotherapy Facial", price: 60000 },
      { id: "facial-carbon", title: "Carbon Facial", price: 30000 },
      { id: "facial-pro-acne", title: "PRO Acne Facial", price: 50000 },
      { id: "facial-high-frequency-hydra", title: "High Frequency / Hydra Facial", price: 30000 },
      { id: "facial-lift-galvanic", title: "Face Lift / Galvanic Facial", price: 55000 },
      { id: "facial-collagen-infusion", title: "Collagen Infusion Facial", price: 55000 },

      // Retained from original list
      { id: "facial-deep-extraction", title: "Treatment Facial with Deep Extraction", price: 30000 },
      { id: "facial-mild", title: "Treatment Facial (Mild)", price: 25000, description: "For spots and pimples" },
      { id: "facial-gentleman", title: "Gentleman Facial", price: 20000 },
      { id: "facial-brightening", title: "Brightening Facial", price: 20000 },
      { id: "facial-dermaplaning", title: "Derma Planning Facial", price: 30000 },
      { id: "facial-anti-aging", title: "Anti-Aging Dermabrasion Facial", price: 40000 },
      { id: "facial-microderm", title: "Microdermabrasion Facial", price: 40000 },
      { id: "facial-chemical-peel", title: "Chemical Peel (Dark Spots)", price: 50000 },
    ],
  },

  {
    id: "iv-sessions",
    title: "IV Therapy Sessions",
    description: "Boost your health with premium IV treatments",
    icon: "Droplets",
    services: [
      { id: "iv-slimming", title: "Slimming IV", price: 35000, description: "Per session" },
      { id: "iv-detox", title: "Detox IV", price: 55000, description: "Per session" },

      // Retained from original
      { id: "iv-immune", title: "Immune Booster IV", price: 25000, popular: true },
      { id: "iv-whitening", title: "Whitening IV Cocktail", price: 60000 },
      { id: "iv-collagen", title: "Collagen Infusion IV", price: 45000 },
      { id: "iv-b12", title: "Vitamin B12 Shot", price: 15000 },
    ],
  },

  {
    id: "fillers",
    title: "Filler Treatments",
    description: "Advanced dermal fillers & volume restoration",
    icon: "Heart",
    services: [
      { id: "filler-volumetric-full", title: "Volumetric Face Lift - Full Face Filler", price: 450000 },
      { id: "filler-face-1ml", title: "Face Filler 1ml", price: 110000, popular: true },
      { id: "filler-body", title: "Body Filler", price: 240000 },

      // Retained from original
      { id: "filler-prp-undereye", title: "PRP Filler - Under Eye", price: 45000 },
      { id: "filler-prp-nasolabial", title: "PRP Filler - Nasolabial", price: 45000 },
      { id: "filler-prp-butt-single", title: "PRP Butt Filler (Per Session)", price: 120000 },
      { id: "filler-prp-butt-3", title: "PRP Butt Filler (3 Sessions)", price: 300000 },
    ],
  },

  {
    id: "laser-treatments",
    title: "Laser Treatments",
    description: "Precision laser hair removal & skin correction",
    icon: "Zap",
    services: [
      { id: "laser-bikini", title: "Laser Hair Removal - Bikini", price: 20000 },
      { id: "laser-underarm", title: "Laser Hair Removal - Under Arm", price: 10000 },
      { id: "laser-upper-lip", title: "Laser Hair Removal - Upper Lip", price: 10000 },
      { id: "laser-chin", title: "Laser Hair Removal - Chin", price: 10000 },
      { id: "laser-jawline", title: "Laser Hair Removal - Jawline", price: 10000 },
      { id: "laser-knuckle", title: "Laser Knuckle Removal", price: 30000 },
      { id: "laser-spot", title: "Laser Spot Removal", price: 30000, description: "Per session" },
      { id: "laser-tattoo", title: "Laser Tattoo Removal", price: 60000, description: "Per session" },
      { id: "laser-stretch-marks", title: "Laser Stretch Marks Removal", price: 40000, description: "Per session" },
      { id: "laser-warts", title: "Laser Warts Removal", price: 20000, description: "Per session" },
      { id: "laser-leg", title: "Laser Hair Removal - Leg", price: 20000, description: "Per session" },
    ],
  },

  {
    id: "body-sculpting",
    title: "Body Sculpting & Cavitation",
    description: "Advanced body contouring treatments",
    icon: "Zap",
    services: [
      { id: "body-1", title: "Body Sculpting/Cavitation (Any Part)", price: 15000, description: "Per session" },
      { id: "body-2", title: "Full Body Sculpting/Cavitation", price: 50000, description: "Per session", popular: true },
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
    id: "microneedling",
    title: "Microneedling",
    description: "Advanced skin rejuvenation",
    icon: "Zap",
    services: [
      { id: "micro-vampire", title: "Vampire Facial PRP", price: 60000 },
      { id: "micro-scar-single", title: "Scar Removal (Per Session)", price: 60000 },
      { id: "micro-scar-3", title: "Scar Removal (3 Sessions)", price: 120000 },
      { id: "micro-hair-single", title: "Hair Loss Treatment", price: 80000, description: "Per session" },
      { id: "micro-hair-3", title: "Hair Loss Treatment (3 Sessions)", price: 200000 },
    ],
  },

  {
    id: "body-scrub",
    title: "Body Scrub & Spa",
    description: "Luxurious body treatments",
    icon: "HandHeart",
    services: [
      { id: "scrub-jons-royal", title: "Jon's Royal Polish (Whitening & Polish)", price: 40000 },
      { id: "scrub-moroccan", title: "Moroccan Whitening Hammam", price: 45000 },

      // Retained from original
      { id: "scrub-brightening", title: "Brightening Polish", price: 20000 },
      { id: "scrub-deep", title: "Deep Body Scrub & Steaming", price: 25000 },
      { id: "scrub-whitening", title: "Whitening Polish", price: 40000 },
      { id: "scrub-cleopatra", title: "Cleopatra Hammam", price: 40000 },
      { id: "scrub-jon-signature", title: "Jon's Signature Hamman", price: 45000 },
      { id: "scrub-coffee", title: "Coffee Body Polish", price: 35000 },
    ],
  },

  {
    id: "massage",
    title: "Massage Therapy",
    description: "Relaxation and therapeutic treatments",
    icon: "HandHeart",
    services: [
      { id: "massage-foot", title: "Foot Massage", price: 5000 },
      { id: "massage-thigh-waist-leg", title: "Thigh, Waist and Leg Massage", price: 15000 },

      // Retained from original
      { id: "massage-deep-hot", title: "Deep Tissue with Hot Stone", price: 50000 },
      { id: "massage-deep-full", title: "Deep Tissue Full Body", price: 35000 },
      { id: "massage-detox", title: "Detoxing Massage", price: 30000 },
      { id: "massage-acupressure", title: "Acupressure & Cupping", price: 50000 },
      { id: "massage-indian-head", title: "Indian Head Massage", price: 30000 },
      { id: "massage-swedish", title: "Swedish Full Body", price: 25000 },
      { id: "massage-back-neck", title: "Back, Neck & Shoulders", price: 15000 },
    ],
  },

  {
    id: "waxing",
    title: "Waxing Services",
    description: "Professional hair removal treatments",
    icon: "Star",
    services: [
      { id: "wax-upper-lip", title: "Upper Lip Waxing", price: 3000 },

      // Retained from original
      { id: "wax-chin-neck", title: "Chin and Neck Waxing", price: 8000 },
      { id: "wax-chin", title: "Chin Waxing", price: 4500 },
      { id: "wax-full-body", title: "Full Body Wax", price: 50000, popular: true },
      { id: "wax-facial", title: "Facial Waxing", price: 15000 },
      { id: "wax-full-arm", title: "Full Arm Waxing", price: 12000 },
      { id: "wax-full-leg", title: "Full Leg Waxing", price: 15000 },
      { id: "wax-half-leg", title: "Half Leg Waxing", price: 12000 },
      { id: "wax-thigh", title: "Thigh Waxing", price: 10000 },
      { id: "wax-vajacial", title: "Vajacial", price: 20000 },
      { id: "wax-underarm", title: "Underarm Waxing", price: 6000 },
      { id: "wax-bikini", title: "Bikini Wax", price: 10000 },
      { id: "wax-brazilian-vajacial", title: "Brazilian Wax & Vajacial", price: 25000 },
    ],
  },

  {
    id: "nail-care",
    title: "Nail Care",
    description: "Professional nail services",
    icon: "Nail",
    services: [
      { id: "nail-filling", title: "Filling of Nail/Finger", price: 1000 },
      { id: "nail-gel-hand", title: "Hand Gel Polish", price: 3000 },
      { id: "nail-gel-leg", title: "Leg Gel Polish", price: 2000 },
      { id: "nail-gel-hand-full", title: "Gel Hand Nails", price: 5000 },
      { id: "nail-gel-hand-design", title: "Designs (Hand)", price: 6000 },
      { id: "nail-gel-toe-fix", title: "Gel Toe Nails (Fix)", price: 5000 },
      { id: "nail-gel-toe-design", title: "Designs (Toe)", price: 6000 },

      { id: "acrylic-short", title: "Acrylic Plain Nails - Short", price: 8000 },
      { id: "acrylic-medium", title: "Acrylic Plain Nails - Medium", price: 10000 },
      { id: "acrylic-long", title: "Acrylic Plain Nails - Long", price: 13000 },
      { id: "acrylic-design-short", title: "Acrylic Design Nails - Short", price: 10000 },
      { id: "acrylic-design-medium", title: "Acrylic Design Nails - Medium", price: 13000 },
      { id: "acrylic-design-long", title: "Acrylic Design Nails - Long", price: 15000 },

      { id: "acrylic-overlay-hand", title: "Hand Acrylic Overlay / Wrap Nails", price: 10000 },
      { id: "acrylic-overlay-hand-design", title: "Designs (Overlay Hand)", price: 12000 },
      { id: "acrylic-overlay-leg", title: "Leg Acrylic Overlay / Wrap Nails", price: 8000 },
      { id: "acrylic-overlay-leg-design", title: "Designs (Overlay Leg)", price: 10000 },

      { id: "acrylic-toe-fix", title: "Toe Nails (Fix, Acrylic)", price: 10000 },
      { id: "acrylic-toe-design", title: "Designs (Toe Acrylic)", price: 12000 },
      { id: "nail-soak-off", title: "Soak Off / Dissolving Nails", price: 2000 },

      // Retained from original
      { id: "nail-pedicure-reg", title: "Pedicure Regular", price: 7000 },
      { id: "nail-pedicure-foot-massage", title: "Pedicure with Foot Massage", price: 10000 },
      { id: "nail-pedicure-gen", title: "Pedicure Regular with Gen", price: 10000 },
      { id: "nail-jelly-pedicure", title: "Jelly Pedicure", price: 20000 },
      { id: "nail-vvip-pedicure", title: "VVIP Pedicure", price: 25000 },
      { id: "nail-manicure", title: "Manicure", price: 7000 },
      { id: "nail-foot-detox", title: "Foot Detox", price: 7000 },
    ],
  },

  {
    id: "hair-services",
    title: "Hair Services",
    description: "Professional hair styling, installs & maintenance",
    icon: "Scissors",
    services: [
      { id: "hair-wash-dry", title: "Hair Washing & Drying", price: 2000 },
      { id: "hair-retouch-dry", title: "Retouching & Drying", price: 4000 },
      { id: "hair-retouch-stretch", title: "Retouching & Stretching / Blow Drying", price: 6000 },
      { id: "hair-frontal-custom", title: "Frontal Customization (Bleach, Pluck, Tint, Install & Style)", price: 25000 },
      { id: "hair-frontal-install", title: "Frontal Install (Tint, Pluck, Install & Style)", price: 20000 },
      { id: "hair-frontal-regular", title: "Regular Frontal (Install & Style)", price: 15000 },
      { id: "hair-packing-gel", title: "Hair Packing Gel Only", price: 8000 },
      { id: "hair-packing-install", title: "Packing Gel with Installation", price: 12000 },
      { id: "hair-wig-revamp", title: "Wig Revamping", price: "10000 - 15000" },

      // Retained popular braiding from original
      { id: "hair-big-long", title: "Big Braids (Long)", price: 9000 },
      { id: "hair-big-medium", title: "Big Braids (Medium)", price: 7000 },
      { id: "hair-big-short", title: "Big Braids (Short)", price: 5000 },
      { id: "hair-box-small-long", title: "Box Braids Small (Long)", price: 12000 },
      { id: "hair-knotless-big-long", title: "Knotless Braids Big (Long)", price: 15000, popular: true },
    ],
  },

  {
    id: "lash-brow",
    title: "Lash & Brow",
    description: "Eye area enhancement",
    icon: "Eye",
    services: [
      { id: "brows-ombre", title: "Ombre Brows", price: 40000 },
      { id: "brows-retouch", title: "Brows Retouching", price: 25000 },

      // Retained from original lash/brow
      { id: "lash-classic", title: "Classic Lash Extension", price: 15000 },
      { id: "lash-volume", title: "Volume Lash Extension", price: 25000 },
      { id: "lash-mega", title: "Mega Volume Lash", price: 35000 },
      { id: "lash-microblading", title: "Microblading", price: 40000 },
      { id: "lash-micro-shading", title: "Micro Shading", price: 45000 },
      { id: "lash-hybrid", title: "Hybrid Brows", price: 50000 },
      { id: "lash-combo", title: "Combo Brows", price: 60000 },
    ],
  },

  {
    id: "packages",
    title: "Exclusive Packages",
    description: "Complete wellness experiences",
    icon: "Crown",
    services: [
      { id: "package-combo-glow", title: "Combo Glow Up", price: 80000, description: "Facials + Deep Tissue Massage + Pedicure", popular: true },

      // Retained couple packages
      { id: "package-indulge", title: "Indulge Me Bouquet (Single)", price: 80000 },
      { id: "package-couple-care", title: "Couple Cares Me Bouquet", price: 240000, popular: true },
      { id: "package-classic-couple", title: "Classic Couple Bouquet", price: 150000 },
      { id: "package-royal-couple", title: "Royal Couple Bouquet", price: 200000 },
    ],
  },

  {
    id: "teeth-whitening",
    title: "Teeth Whitening",
    description: "Professional dental aesthetics",
    icon: "Sparkles",
    services: [
      { id: "teeth-single", title: "Per Session", price: 25000 },
      { id: "teeth-2pack", title: "2 Sessions Package", price: 45000 },
    ],
  },

  {
    id: "lipo-injection",
    title: "Lipo Injection",
    description: "Advanced body contouring",
    icon: "Zap",
    services: [
      { id: "lipo-face-medium", title: "Face Lipo (1 Vial Medium)", price: 40000 },
      { id: "lipo-face-strong", title: "Face Lipo (1 Vial Strong)", price: 80000 },
      { id: "lipo-5-strong", title: "5 Vials Strong", price: 360000 },
      { id: "lipo-10-medium", title: "10 Vials Medium", price: 340000 },
    ],
  },

  {
    id: "other-treatments",
    title: "Other Treatments",
    description: "Specialized body & skin services",
    icon: "Scissors",
    services: [
      { id: "skin-tag", title: "Skin Tag Removal", price: 2000, description: "Per tag" },
      { id: "vacuum-butt", title: "Vacuum Butt Lift", price: 15000 },
      { id: "vacuum-breast", title: "Vacuum Breast Lift", price: 15000 },
    ],
  },
];
