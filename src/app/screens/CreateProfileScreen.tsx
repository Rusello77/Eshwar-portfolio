import { useNavigate } from 'react-router';
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { Upload, Camera } from 'lucide-react';

export function CreateProfileScreen() {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-white px-6 pt-12 pb-24 max-w-[390px] mx-auto">
      <h1 className="text-center mb-2">Create Your Profile</h1>
      <p className="text-center text-[#666666] mb-8">Let others know about you and your business</p>
      
      <div className="flex justify-center mb-6">
        <div className="relative">
          <div className="w-24 h-24 rounded-full bg-[#E8F0EC] flex items-center justify-center">
            <Camera className="w-10 h-10 text-[#5A8B6F]" />
          </div>
          <button className="absolute bottom-0 right-0 w-8 h-8 bg-[#5A8B6F] rounded-full flex items-center justify-center">
            <Upload className="w-4 h-4 text-white" />
          </button>
        </div>
      </div>
      
      <div className="space-y-4 mb-6">
        <Input 
          label="Name"
          placeholder="Enter your name"
        />
        
        <Input 
          label="Business Name"
          placeholder="Enter your business name"
        />
        
        <div>
          <label className="block mb-2 text-[#1A1A1A]">Short Description</label>
          <textarea
            className="w-full px-4 py-3 rounded-[10px] border border-[#E0E0E0] focus:border-[#5A8B6F] focus:outline-none resize-none"
            rows={3}
            placeholder="Tell us about your business..."
          />
        </div>
      </div>
      
      <div className="mb-8">
        <p className="text-[14px] text-[#666666] mb-3">Upload product photo (optional)</p>
        <div className="border-2 border-dashed border-[#E0E0E0] rounded-[12px] p-6 flex flex-col items-center justify-center cursor-pointer hover:border-[#5A8B6F] transition-colors">
          <Upload className="w-8 h-8 text-[#666666] mb-2" />
          <p className="text-[14px] text-[#666666]">Tap to upload</p>
        </div>
      </div>
      
      <div className="w-full max-w-[310px] mx-auto">
        <Button
          variant="primary"
          className="w-full"
          onClick={() => navigate('/home')}
        >
          Join Community
        </Button>
      </div>
    </div>
  );
}
