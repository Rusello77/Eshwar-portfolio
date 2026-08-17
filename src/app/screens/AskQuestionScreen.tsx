import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Button } from '../components/Button';
import { Tag } from '../components/Tag';
import { ArrowLeft, Image } from 'lucide-react';

export function AskQuestionScreen() {
  const navigate = useNavigate();
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  
  const tags = ['Packaging', 'Pricing', 'Suppliers', 'Marketing', 'Legal', 'Finance'];
  
  const toggleTag = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter(t => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };
  
  return (
    <div className="min-h-screen bg-white pb-24 max-w-[390px] mx-auto">
      <div className="px-6 pt-12 pb-4 border-b border-[#E0E0E0] sticky top-0 bg-white z-10">
        <div className="flex items-center gap-3 mb-2">
          <button onClick={() => navigate(-1)} className="p-2 -ml-2">
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h2>Ask the Community</h2>
        </div>
      </div>
      
      <div className="px-6 pt-6">
        <div className="mb-6">
          <label className="block mb-2 text-[#1A1A1A]">Your Question</label>
          <textarea
            className="w-full px-4 py-3 rounded-[10px] border border-[#E0E0E0] focus:border-[#5A8B6F] focus:outline-none resize-none"
            rows={6}
            placeholder="What would you like to know from the community?"
          />
        </div>
        
        <div className="mb-6">
          <label className="block mb-3 text-[#1A1A1A]">Select Tags</label>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Tag
                key={tag}
                selected={selectedTags.includes(tag)}
                onClick={() => toggleTag(tag)}
              >
                {tag}
              </Tag>
            ))}
          </div>
        </div>
        
        <div className="mb-6">
          <button className="w-full p-4 border-2 border-dashed border-[#E0E0E0] rounded-[12px] flex items-center justify-center gap-2 text-[#666666] hover:border-[#5A8B6F] transition-colors">
            <Image className="w-5 h-5" />
            <span>Upload photo (optional)</span>
          </button>
        </div>
        
        <Button 
          variant="primary" 
          className="w-full"
          onClick={() => navigate('/home')}
        >
          Post Question
        </Button>
      </div>
    </div>
  );
}
