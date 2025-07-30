"use client"

import { useState, useEffect } from "react"
import { type ServiceSection, defaultPricingData } from "@/lib/pricing-data"

const STORAGE_KEY = "jons-beauty-pricing-data"

export function usePricingData() {
  const [pricingData, setPricingData] = useState<ServiceSection[]>(defaultPricingData)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Load data from localStorage on mount
    const savedData = localStorage.getItem(STORAGE_KEY)
    if (savedData) {
      try {
        const parsedData = JSON.parse(savedData)
        setPricingData(parsedData)
      } catch (error) {
        console.error("Error parsing saved pricing data:", error)
        // If there's an error, use default data
        setPricingData(defaultPricingData)
      }
    }
    setIsLoading(false)
  }, [])

  const savePricingData = (newData: ServiceSection[]) => {
    setPricingData(newData)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newData))
  }

  const updateService = (
    sectionId: string,
    serviceId: string,
    updates: Partial<{ title: string; price: number; description: string; popular: boolean }>,
  ) => {
    const newData = pricingData.map((section) => {
      if (section.id === sectionId) {
        return {
          ...section,
          services: section.services.map((service) => {
            if (service.id === serviceId) {
              return { ...service, ...updates }
            }
            return service
          }),
        }
      }
      return section
    })
    savePricingData(newData)
  }

  const updateSection = (sectionId: string, updates: Partial<{ title: string; description: string }>) => {
    const newData = pricingData.map((section) => {
      if (section.id === sectionId) {
        return { ...section, ...updates }
      }
      return section
    })
    savePricingData(newData)
  }

  const resetToDefault = () => {
    savePricingData(defaultPricingData)
  }

  return {
    pricingData,
    isLoading,
    updateService,
    updateSection,
    resetToDefault,
    savePricingData,
  }
}
