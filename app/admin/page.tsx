"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { usePricingData } from "@/hooks/use-pricing-data"
import type { ServiceItem, ServiceSection } from "@/lib/pricing-data"
import { Settings, Edit3, Save, RotateCcw, ArrowLeft, Eye } from "lucide-react"

const formatPrice = (price: number) => {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price)
}

export default function AdminPage() {
  const { pricingData, isLoading, updateService, updateSection, resetToDefault } = usePricingData()
  const [editingService, setEditingService] = useState<{ sectionId: string; serviceId: string } | null>(null)
  const [editingSection, setEditingSection] = useState<string | null>(null)
  const [serviceForm, setServiceForm] = useState<Partial<ServiceItem>>({})
  const [sectionForm, setSectionForm] = useState<Partial<ServiceSection>>({})

  const handleEditService = (sectionId: string, service: ServiceItem) => {
    setEditingService({ sectionId, serviceId: service.id })
    setServiceForm(service)
  }

  const handleEditSection = (section: ServiceSection) => {
    setEditingSection(section.id)
    setSectionForm(section)
  }

  const handleSaveService = () => {
    if (editingService && serviceForm.title && serviceForm.price) {
      updateService(editingService.sectionId, editingService.serviceId, {
        title: serviceForm.title,
        price: serviceForm.price,
        description: serviceForm.description || "",
        popular: serviceForm.popular || false,
      })
      setEditingService(null)
      setServiceForm({})
    }
  }

  const handleSaveSection = () => {
    if (editingSection && sectionForm.title) {
      updateSection(editingSection, {
        title: sectionForm.title,
        description: sectionForm.description || "",
      })
      setEditingSection(null)
      setSectionForm({})
    }
  }

  const handleCancelEdit = () => {
    setEditingService(null)
    setEditingSection(null)
    setServiceForm({})
    setSectionForm({})
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-pink-500"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                size="sm"
                onClick={() => (window.location.href = "/")}
                className="flex items-center gap-2"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Pricing
              </Button>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Admin Panel</h1>
                <p className="text-gray-600">Jon's Beauty Clinik & Spa - Pricing Management</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                size="sm"
                onClick={() => window.open("/", "_blank")}
                className="flex items-center gap-2"
              >
                <Eye className="h-4 w-4" />
                Preview
              </Button>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="destructive" size="sm" className="flex items-center gap-2">
                    <RotateCcw className="h-4 w-4" />
                    Reset All
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Reset All Pricing Data</DialogTitle>
                    <DialogDescription>
                      This will reset all pricing data to the original defaults. This action cannot be undone.
                    </DialogDescription>
                  </DialogHeader>
                  <DialogFooter>
                    <Button variant="outline">Cancel</Button>
                    <Button variant="destructive" onClick={resetToDefault}>
                      Reset All Data
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-8">
          {pricingData.map((section) => (
            <Card key={section.id} className="w-full">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-pink-100">
                      <Settings className="h-5 w-5 text-pink-600" />
                    </div>
                    <div>
                      {editingSection === section.id ? (
                        <div className="space-y-2">
                          <Input
                            value={sectionForm.title || ""}
                            onChange={(e) => setSectionForm({ ...sectionForm, title: e.target.value })}
                            className="text-xl font-semibold"
                          />
                          <Textarea
                            value={sectionForm.description || ""}
                            onChange={(e) => setSectionForm({ ...sectionForm, description: e.target.value })}
                            placeholder="Section description"
                            className="text-sm"
                          />
                        </div>
                      ) : (
                        <>
                          <CardTitle className="text-xl text-gray-900">{section.title}</CardTitle>
                          {section.description && (
                            <CardDescription className="mt-1">{section.description}</CardDescription>
                          )}
                        </>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {editingSection === section.id ? (
                      <>
                        <Button size="sm" onClick={handleSaveSection} className="flex items-center gap-1">
                          <Save className="h-4 w-4" />
                          Save
                        </Button>
                        <Button size="sm" variant="outline" onClick={handleCancelEdit}>
                          Cancel
                        </Button>
                      </>
                    ) : (
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleEditSection(section)}
                        className="flex items-center gap-1"
                      >
                        <Edit3 className="h-4 w-4" />
                        Edit Section
                      </Button>
                    )}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {section.services.map((service) => (
                    <div
                      key={service.id}
                      className={`p-4 rounded-lg border transition-all ${
                        service.popular ? "border-pink-300 bg-pink-50" : "border-gray-200"
                      }`}
                    >
                      {editingService?.sectionId === section.id && editingService?.serviceId === service.id ? (
                        <div className="space-y-4">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <Label htmlFor="title">Service Name</Label>
                              <Input
                                id="title"
                                value={serviceForm.title || ""}
                                onChange={(e) => setServiceForm({ ...serviceForm, title: e.target.value })}
                                placeholder="Service name"
                              />
                            </div>
                            <div>
                              <Label htmlFor="price">Price (₦)</Label>
                              <Input
                                id="price"
                                type="number"
                                value={serviceForm.price || ""}
                                onChange={(e) =>
                                  setServiceForm({ ...serviceForm, price: Number.parseInt(e.target.value) || 0 })
                                }
                                placeholder="Price"
                              />
                            </div>
                          </div>
                          <div>
                            <Label htmlFor="description">Description (Optional)</Label>
                            <Input
                              id="description"
                              value={serviceForm.description || ""}
                              onChange={(e) => setServiceForm({ ...serviceForm, description: e.target.value })}
                              placeholder="Service description"
                            />
                          </div>
                          <div className="flex items-center space-x-2">
                            <Switch
                              id="popular"
                              checked={serviceForm.popular || false}
                              onCheckedChange={(checked) => setServiceForm({ ...serviceForm, popular: checked })}
                            />
                            <Label htmlFor="popular">Mark as Popular</Label>
                          </div>
                          <div className="flex items-center gap-2">
                            <Button size="sm" onClick={handleSaveService} className="flex items-center gap-1">
                              <Save className="h-4 w-4" />
                              Save Changes
                            </Button>
                            <Button size="sm" variant="outline" onClick={handleCancelEdit}>
                              Cancel
                            </Button>
                          </div>
                        </div>
                      ) : (
                        <div className="flex justify-between items-start">
                          <div className="flex-1">
                            <div className="flex items-center gap-2">
                              <h4 className="font-medium text-gray-900">{service.title}</h4>
                              {service.popular && <Badge className="bg-pink-500 hover:bg-pink-600">Popular</Badge>}
                            </div>
                            {service.description && <p className="text-sm text-gray-600 mt-1">{service.description}</p>}
                          </div>
                          <div className="flex items-center gap-3">
                            <span className="text-lg font-bold text-pink-600">{formatPrice(service.price)}</span>
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => handleEditService(section.id, service)}
                              className="flex items-center gap-1"
                            >
                              <Edit3 className="h-4 w-4" />
                              Edit
                            </Button>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Instructions */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Settings className="h-5 w-5" />
              How to Use This Admin Panel
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Editing Services</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Click "Edit" next to any service to modify its name, price, or description</li>
                  <li>• Use the "Popular" toggle to highlight featured services</li>
                  <li>• Changes are automatically saved to your browser's local storage</li>
                  <li>• Click "Save Changes" to confirm your edits</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Managing Sections</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Click "Edit Section" to modify section titles and descriptions</li>
                  <li>• Use "Preview" to see how changes look on the main pricing page</li>
                  <li>• "Reset All" will restore original pricing data (cannot be undone)</li>
                  <li>• All changes persist between browser sessions</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
