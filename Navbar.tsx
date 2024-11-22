import React, { useState } from 'react';
import { Menu, X, Flower2, ChevronDown } from 'lucide-react';

const services = {
  "CONDITIONS WE TREAT": [
    "Adrenal Health",
    "Autoimmune Disease",
    "Cardiovascular Health",
    "Chronic Fatigue Syndrome",
    "Depression & Anxiety",
    "Detoxification Issues",
    "Diabetes",
    "Digestive Health",
    "Energy Issues",
    "Hormonal Imbalance",
    "Infertility",
    "Lyme Disease + Co-Infections",
    "Overweight / Obesity",
    "Thyroid Disorders"
  ],
  "FUNCTIONAL MEDICINE SERVICES": [
    "Empowered Health Program",
    "Metabolic Reset Program",
    "Nutritional Consultation",
    "Hormone Harmony",
    "Cardiovascular Care",
    "Brain Health + Cognitive Care",
    "Covid Recovery",
    "Gut Health Testing",
    "Advanced Hormone Testing",
    "Environmental Toxin Testing",
    "Micronutrient Testing",
    "Comprehensive Metabolic Testing",
    "Advanced Lyme Testing",
    "Mold + Mycotoxins Testing"
  ],
  "SUPPORTING MODALITIES": [
    "Hyperbaric Oxygen Therapy",
    "IV Nutrient Therapy & Injections",
    "Ozone Therapy",
    "Peptide Therapy",
    "Rapid Tranformational Therapy®",
    "Regenerative Aesthetics",
    "Zerona Z6 Laser",
    "FX 405 Laser",
    "Evolt 360 Body Scanner",
    "Healthy Wave Mat",
    "Infrared Sauna",
    "Vibration Plate",
    "Ionic Detoxifying Foot Bath",
    "BrainTap",
    "Healy"
  ],
  "THERAPEUTIC PROTOCOLS + WELLNESS PLANS": [
    "Foundational Detox Program",
    "Nutraceuticals",
    "Wellness Products",
    "Thermography",
    "Corporate Wellness"
  ]
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showServices, setShowServices] = useState(false);

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-md z-50 border-b border-sage-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Flower2 className="h-8 w-8 text-sage-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">Celera Wellness Solutions</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <div className="relative">
              <button 
                onClick={() => setShowServices(!showServices)}
                className="flex items-center text-gray-600 hover:text-sage-600 transition-colors"
              >
                Services <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              
              {showServices && (
                <div className="fixed left-1/2 transform -translate-x-1/2 mt-2 w-[90vw] max-w-4xl bg-white shadow-lg rounded-lg p-6 grid grid-cols-4 gap-6">
                  {Object.entries(services).map(([category, items]) => (
                    <div key={category}>
                      <h3 className="font-semibold text-sage-600 mb-3 text-sm">{category}</h3>
                      <ul className="space-y-2">
                        {items.map((item) => (
                          <li key={item} className="text-sm text-gray-600 hover:text-sage-600 cursor-pointer">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <a href="#contact" className="bg-sage-600 text-white px-4 py-2 rounded-md hover:bg-sage-700 transition-colors">
              Book Consultation
            </a>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-b">
            <button 
              onClick={() => setShowServices(!showServices)}
              className="w-full text-left px-3 py-2 text-gray-600 hover:text-sage-600"
            >
              Services
            </button>
            {showServices && (
              <div className="pl-6 space-y-4">
                {Object.entries(services).map(([category, items]) => (
                  <div key={category}>
                    <h3 className="font-semibold text-sage-600 mb-2 text-sm">{category}</h3>
                    <ul className="space-y-2">
                      {items.map((item) => (
                        <li key={item} className="text-sm text-gray-600">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
            <a href="#contact" className="block px-3 py-2 text-sage-600 font-medium">Book Consultation</a>
          </div>
        </div>
      )}
    </nav>
  );
}