"use client"

import type React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { usePricingData } from "@/hooks/use-pricing-data"
import {
  Sparkles,
  Scissors,
  Heart,
  Zap,
  Palette,
  Flower2,
  Star,
  Crown,
  Droplets,
  HandHeart,
  Eye,
  SnailIcon as Nail,
  Settings,
} from "lucide-react"

const iconMap = {
  Sparkles,
  Scissors,
  Heart,
  Zap,
  Palette,
  Flower2,
  Star,
  Crown,
  Droplets,
  HandHeart,
  Eye,
  Nail,
  Settings,
}

const formatPrice = (price: number) => {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price)
}

const ServiceCard = ({
  title,
  price,
  description,
  popular = false,
}: {
  title: string
  price: number
  description?: string
  popular?: boolean
}) => (
  <div
    className={`relative p-4 rounded-lg border transition-all hover:shadow-md ${
      popular ? "border-pink-300 bg-pink-50" : "border-gray-200 hover:border-pink-200"
    }`}
  >
    {popular && <Badge className="absolute -top-2 left-4 bg-pink-500 hover:bg-pink-600">Popular</Badge>}
    <div className="flex justify-between items-start">
      <div className="flex-1">
        <h4 className="font-medium text-gray-900">{title}</h4>
        {description && <p className="text-sm text-gray-600 mt-1">{description}</p>}
      </div>
      <div className="text-right">
        <span className="text-lg font-bold text-pink-600">{formatPrice(price)}</span>
      </div>
    </div>
  </div>
)

const SectionCard = ({
  title,
  icon: iconName,
  children,
  description,
  image,
}: {
  title: string
  icon: string
  children: React.ReactNode
  description?: string
  image?: string
}) => {
  const Icon = iconMap[iconName as keyof typeof iconMap] || Settings

  return (
    <Card className="w-full overflow-hidden">
      {image && (
        <div className="relative h-48 overflow-hidden">
          <img src={image || "/placeholder.svg"} alt={title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          <div className="absolute bottom-4 left-4 flex items-center gap-3">
            <div className="p-2 rounded-lg bg-white/90 backdrop-blur-sm">
              <Icon className="h-5 w-5 text-pink-600" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">{title}</h3>
              {description && <p className="text-white/90 text-sm">{description}</p>}
            </div>
          </div>
        </div>
      )}
      {!image && (
        <CardHeader className="pb-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-pink-100">
              <Icon className="h-5 w-5 text-pink-600" />
            </div>
            <div>
              <CardTitle className="text-xl text-gray-900">{title}</CardTitle>
              {description && <CardDescription className="mt-1">{description}</CardDescription>}
            </div>
          </div>
        </CardHeader>
      )}
      <CardContent className={`space-y-3 ${image ? "pt-6" : ""}`}>{children}</CardContent>
    </Card>
  )
}

export default function HomePage() {
  const { pricingData, isLoading } = usePricingData()

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-rose-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-pink-500"></div>
      </div>
    )
  }

  // Get section images mapping
  const getSectionImage = (sectionId: string) => {
    const imageMap: Record<string, string> = {
      massage: "/images/deep-tissue-massage.jpeg",
      waxing: "/images/waxing-treatment.webp",
      facials: "/images/facial-treatment.avif",
      packages: "/images/couples-massage.jpeg",
    }
    return imageMap[sectionId]
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-rose-50">
      {/* Hero Section */}
      <div className="relative bg-white border-b border-pink-100 overflow-hidden min-h-[80vh]">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/massage-hero.webp"
            alt="Professional spa massage therapy at Jon's Beauty Clinik & Spa"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-pink-900/30 via-transparent to-pink-900/20"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex items-center min-h-[80vh]">
          <div className="text-center w-full">
            {/* Salon Logo/Icon */}
            <div className="flex justify-center mb-8">
              <div className="p-6 rounded-full bg-white/10 backdrop-blur-md border-4 border-white/20">
                <Sparkles className="h-16 w-16 text-white" />
              </div>
            </div>

            {/* Salon Name - Bold and Prominent */}
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight drop-shadow-2xl">
              <span className="text-pink-300">Jon's</span> <span className="text-white">Beauty Clinik</span>{" "}
              <span className="text-pink-300">&</span> <span className="text-white">Spa</span>
            </h1>

            {/* Tagline */}
            <p className="text-2xl md:text-3xl text-white font-bold max-w-4xl mx-auto mb-6 drop-shadow-lg">
              Transform Yourself with Premium Beauty & Wellness
            </p>

            {/* Description */}
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-10 drop-shadow-md">
              Experience our professional beauty and wellness treatments designed to help you look and feel your
              absolute best. Quality services at competitive prices in a luxurious environment.
            </p>

       

            {/* Trust Indicators */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-white/90">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-pink-400 rounded-full shadow-lg"></div>
                <span className="font-semibold text-lg">Professional Services</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-pink-400 rounded-full shadow-lg"></div>
                <span className="font-semibold text-lg">Expert Team</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-pink-400 rounded-full shadow-lg"></div>
                <span className="font-semibold text-lg">Premium Quality</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Gallery Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Premium Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our comprehensive range of beauty and wellness treatments
            </p>
          </div>

          {/* Featured Services Images */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <div className="relative group overflow-hidden rounded-2xl shadow-lg">
              <img
                src="/images/facial-mask.jpeg"
                alt="Facial treatments"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-4 left-4">
                <h3 className="text-white font-bold text-lg">Facial Treatments</h3>
                <p className="text-white/80 text-sm">Rejuvenating skincare</p>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-2xl shadow-lg">
              <img
                src="/images/waxing-treatment.webp"
                alt="Waxing services"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-4 left-4">
                <h3 className="text-white font-bold text-lg">Waxing Services</h3>
                <p className="text-white/80 text-sm">Professional hair removal</p>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-2xl shadow-lg">
              <img
                src="/images/deep-tissue-massage.jpeg"
                alt="Massage therapy"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-4 left-4">
                <h3 className="text-white font-bold text-lg">Massage Therapy</h3>
                <p className="text-white/80 text-sm">Relaxation & wellness</p>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-2xl shadow-lg">
              <img
                src="/images/couples-massage.jpeg"
                alt="Couples packages"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-4 left-4">
                <h3 className="text-white font-bold text-lg">Couples Packages</h3>
                <p className="text-white/80 text-sm">Shared experiences</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-8">
          {pricingData.map((section) => (
            <SectionCard
              key={section.id}
              title={section.title}
              icon={section.icon}
              description={section.description}
              image={getSectionImage(section.id)}
            >
              <div className={`grid gap-3 ${section.services.length > 6 ? "sm:grid-cols-2" : ""}`}>
                {section.services.map((service) => (
                  <ServiceCard
                    key={service.id}
                    title={service.title}
                    price={service.price}
                    description={service.description}
                    popular={service.popular}
                  />
                ))}
              </div>
            </SectionCard>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="mt-16 relative overflow-hidden rounded-3xl">
          <div className="absolute inset-0">
            <img
              src="/images/facial-treatment.avif"
              alt="Professional beauty treatment"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-pink-900/80 to-purple-900/80"></div>
          </div>
          <div className="relative text-center p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Transform Yourself?</h2>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto text-lg">
              Book your appointment at Jon's Beauty Clinik & Spa today and experience our premium beauty and wellness
              services. Our expert team is ready to help you look and feel your best.
            </p>
            {/* <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-pink-600 hover:bg-gray-100 font-bold px-8 py-4">
                Book Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10 font-bold px-8 py-4 bg-transparent"
              >
                Contact Us
              </Button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}
