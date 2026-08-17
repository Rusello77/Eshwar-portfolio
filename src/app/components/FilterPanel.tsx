import { useState } from 'react';
import { X } from 'lucide-react';
import { Button } from './Button';

interface FilterPanelProps {
  isOpen: boolean;
  onClose: () => void;
  onApply: (filters: FilterState) => void;
}

export interface FilterState {
  contentType: string[];
  skillLevel: string;
  businessType: string[];
  duration: string[];
  goals: string[];
  format: string[];
  sortBy: string;
}

export function FilterPanel({ isOpen, onClose, onApply }: FilterPanelProps) {
  const [filters, setFilters] = useState<FilterState>({
    contentType: [],
    skillLevel: 'Beginner',
    businessType: [],
    duration: [],
    goals: [],
    format: [],
    sortBy: 'Most relevant'
  });

  const handleCheckboxChange = (category: keyof FilterState, value: string) => {
    const current = filters[category];
    if (Array.isArray(current)) {
      const updated = current.includes(value)
        ? current.filter(v => v !== value)
        : [...current, value];
      setFilters({ ...filters, [category]: updated });
    }
  };

  const handleRadioChange = (category: keyof FilterState, value: string) => {
    setFilters({ ...filters, [category]: value });
  };

  const handleReset = () => {
    setFilters({
      contentType: [],
      skillLevel: 'Beginner',
      businessType: [],
      duration: [],
      goals: [],
      format: [],
      sortBy: 'Most relevant'
    });
  };

  const handleApply = () => {
    onApply(filters);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
      />
      
      {/* Panel */}
      <div className="relative w-full max-w-[390px] mx-auto bg-white rounded-t-3xl max-h-[80vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white px-6 pt-6 pb-4 border-b border-[#E5E5E5] flex items-center justify-between z-10">
          <h2 className="font-semibold text-[#1A1A1A] text-[18px]">Find what you need</h2>
          <button onClick={onClose} className="p-2 -mr-2">
            <X className="w-5 h-5 text-[#666666]" />
          </button>
        </div>
        
        {/* Content */}
        <div className="px-6 py-6 space-y-6">
          {/* Content Type */}
          <div>
            <h3 className="font-semibold text-[#1A1A1A] text-[15px] mb-3">Content Type</h3>
            <div className="space-y-2">
              {['Video lessons', 'Learning paths', 'Community stories', 'Tools & templates', 'Live sessions'].map(option => (
                <label key={option} className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={filters.contentType.includes(option)}
                    onChange={() => handleCheckboxChange('contentType', option)}
                    className="w-5 h-5 rounded border-2 border-[#D1D1D1] text-[#5A8B6F] focus:ring-[#5A8B6F]"
                  />
                  <span className="text-[#1A1A1A] text-[14px]">{option}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Skill Level */}
          <div>
            <h3 className="font-semibold text-[#1A1A1A] text-[15px] mb-3">Skill Level</h3>
            <div className="space-y-2">
              {['Beginner', 'Intermediate', 'Advanced'].map(option => (
                <label key={option} className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="radio"
                    name="skillLevel"
                    checked={filters.skillLevel === option}
                    onChange={() => handleRadioChange('skillLevel', option)}
                    className="w-5 h-5 border-2 border-[#D1D1D1] text-[#5A8B6F] focus:ring-[#5A8B6F]"
                  />
                  <span className="text-[#1A1A1A] text-[14px]">{option}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Business Type */}
          <div>
            <h3 className="font-semibold text-[#1A1A1A] text-[15px] mb-3">Business Type</h3>
            <div className="space-y-2">
              {['Baking', 'Pickles & Snacks', 'Tailoring', 'Handmade Crafts', 'Beauty Services', 'Homemade Meals'].map(option => (
                <label key={option} className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={filters.businessType.includes(option)}
                    onChange={() => handleCheckboxChange('businessType', option)}
                    className="w-5 h-5 rounded border-2 border-[#D1D1D1] text-[#5A8B6F] focus:ring-[#5A8B6F]"
                  />
                  <span className="text-[#1A1A1A] text-[14px]">{option}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Duration */}
          <div>
            <h3 className="font-semibold text-[#1A1A1A] text-[15px] mb-3">Duration</h3>
            <div className="space-y-2">
              {['Under 5 min', '5–15 min', '15–30 min'].map(option => (
                <label key={option} className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={filters.duration.includes(option)}
                    onChange={() => handleCheckboxChange('duration', option)}
                    className="w-5 h-5 rounded border-2 border-[#D1D1D1] text-[#5A8B6F] focus:ring-[#5A8B6F]"
                  />
                  <span className="text-[#1A1A1A] text-[14px]">{option}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Goals */}
          <div>
            <h3 className="font-semibold text-[#1A1A1A] text-[15px] mb-3">Goals</h3>
            <div className="space-y-2">
              {['Start a business', 'Improve sales', 'Learn marketing', 'Manage time', 'Improve packaging'].map(option => (
                <label key={option} className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={filters.goals.includes(option)}
                    onChange={() => handleCheckboxChange('goals', option)}
                    className="w-5 h-5 rounded border-2 border-[#D1D1D1] text-[#5A8B6F] focus:ring-[#5A8B6F]"
                  />
                  <span className="text-[#1A1A1A] text-[14px]">{option}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Format */}
          <div>
            <h3 className="font-semibold text-[#1A1A1A] text-[15px] mb-3">Format</h3>
            <div className="space-y-2">
              {['Step-by-step course', 'Quick tip', 'Story-based learning'].map(option => (
                <label key={option} className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={filters.format.includes(option)}
                    onChange={() => handleCheckboxChange('format', option)}
                    className="w-5 h-5 rounded border-2 border-[#D1D1D1] text-[#5A8B6F] focus:ring-[#5A8B6F]"
                  />
                  <span className="text-[#1A1A1A] text-[14px]">{option}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Sort By */}
          <div>
            <h3 className="font-semibold text-[#1A1A1A] text-[15px] mb-3">Sort By</h3>
            <div className="space-y-2">
              {['Most relevant', 'Most popular', 'Recently added', 'Shortest duration'].map(option => (
                <label key={option} className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="radio"
                    name="sortBy"
                    checked={filters.sortBy === option}
                    onChange={() => handleRadioChange('sortBy', option)}
                    className="w-5 h-5 border-2 border-[#D1D1D1] text-[#5A8B6F] focus:ring-[#5A8B6F]"
                  />
                  <span className="text-[#1A1A1A] text-[14px]">{option}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Bottom Actions */}
          <div className="flex gap-3 pt-2 pb-24">
            <Button 
              variant="secondary" 
              className="flex-1"
              onClick={handleReset}
            >
              Reset
            </Button>
            <Button 
              variant="primary" 
              className="flex-1"
              onClick={handleApply}
            >
              Apply Filters
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}