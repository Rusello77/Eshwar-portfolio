import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { Cake, Cookie, Scissors, Palette, Sparkles, UtensilsCrossed, Plus } from 'lucide-react';

export function ChooseCategoryScreen() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState<string>('');
  
  const categories = [
    { id: 'baking', name: 'Home Baking', icon: Cake },
    { id: 'pickles', name: 'Pickles & Snacks', icon: Cookie },
    { id: 'tailoring', name: 'Tailoring', icon: Scissors },
    { id: 'crafts', name: 'Handmade Crafts', icon: Palette },
    { id: 'beauty', name: 'Beauty Services', icon: Sparkles },
    { id: 'meals', name: 'Homemade Meals', icon: UtensilsCrossed },
    { id: 'other', name: 'Other', icon: Plus },
  ];
  
  return (
    <div className="min-h-screen bg-white px-6 pt-12 pb-24 max-w-[390px] mx-auto">
      <h1 className="text-center mb-2">Choose Your Business Category</h1>
      <p className="text-center text-[#666666] mb-8">Select what best describes your business</p>
      
      <div className="grid grid-cols-2 gap-4 mb-8">
        {categories.map((category) => {
          const Icon = category.icon;
          const isSelected = selected === category.id;
          
          return (
            <Card
              key={category.id}
              className={`cursor-pointer transition-all ${
                isSelected ? 'border-2 border-[#5A8B6F] bg-[#E8F0EC]' : ''
              }`}
              onClick={() => setSelected(category.id)}
            >
              <div className="flex flex-col items-center text-center py-4">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-3 ${
                  isSelected ? 'bg-[#5A8B6F]' : 'bg-[#E8F0EC]'
                }`}>
                  <Icon className={`w-8 h-8 ${isSelected ? 'text-white' : 'text-[#5A8B6F]'}`} />
                </div>
                <p className={isSelected ? 'text-[#5A8B6F] font-semibold' : 'text-[#1A1A1A]'}>
                  {category.name}
                </p>
              </div>
            </Card>
          );
        })}
      </div>
      
      <div className="w-full max-w-[310px] mx-auto">
        <Button
          variant="primary"
          className="w-full"
          disabled={!selected}
          onClick={() => navigate('/business-stage')}
        >
          Continue
        </Button>
      </div>
    </div>
  );
}
