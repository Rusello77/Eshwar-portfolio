import { useNavigate } from 'react-router';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { ArrowLeft, Edit, MapPin, Cake } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function ProfileScreen() {
  const navigate = useNavigate();
  
  const products = [
    'https://images.unsplash.com/photo-1754294437651-2a79a3f1888b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWtlcnklMjBjYWtlcyUyMGRlc3NlcnRzJTIwZGlzcGxheXxlbnwxfHx8fDE3NzMwMjA0NjN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1771499194141-329333b53841?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB3b21lbiUyMGVudHJlcHJlbmV1ciUyMGJha2luZyUyMGtpdGNoZW58ZW58MXx8fHwxNzczMDIwNDU3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1722411983920-068599446408?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kbWFkZSUyMGNyYWZ0cyUyMGNvbG9yZnVsJTIwcHJvZHVjdHN8ZW58MXx8fHwxNzczMDIwNDYzfDA&ixlib=rb-4.1.0&q=80&w=1080'
  ];
  
  const tabs = ['My Posts', 'My Questions', 'My Collaborations'];
  
  return (
    <div className="min-h-screen bg-[#F5F5F5] pb-24 max-w-[390px] mx-auto">
      {/* Header */}
      <div className="bg-white px-6 pt-12 pb-4 border-b border-[#E0E0E0]">
        <div className="flex items-center justify-between mb-4">
          <button onClick={() => navigate(-1)} className="p-2 -ml-2">
            <ArrowLeft className="w-6 h-6" />
          </button>
          <Button variant="ghost" className="py-2 px-4">
            <Edit className="w-5 h-5 mr-2" />
            Edit Profile
          </Button>
        </div>
      </div>
      
      <div className="px-6 pt-6 space-y-6">
        {/* Profile Info */}
        <div className="flex flex-col items-center text-center">
          <div className="w-24 h-24 rounded-full overflow-hidden bg-[#E8F0EC] mb-3">
            <ImageWithFallback 
              src="https://images.unsplash.com/photo-1623594675959-02360202d4d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHBvcnRyYWl0JTIwc21pbGluZyUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NzMwMTIwNjB8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="mb-1">Priya's Homemade Delights</h1>
          <p className="text-[#666666] mb-2">Priya Sharma</p>
          <div className="flex items-center gap-4 text-[14px] text-[#666666] mb-3">
            <div className="flex items-center gap-1">
              <Cake className="w-4 h-4" />
              <span>Home Baking</span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              <span>Mumbai, Andheri</span>
            </div>
          </div>
          <p className="text-[#1A1A1A] max-w-[300px]">
            Making fresh homemade cakes, cookies, and desserts with love. Custom orders welcome!
          </p>
        </div>
        
        {/* Stats */}
        <div className="flex justify-around py-4 bg-white rounded-[16px]" style={{ boxShadow: '0 6px 20px rgba(0, 0, 0, 0.05)' }}>
          <div className="text-center">
            <p className="text-[24px] font-semibold text-[#1A1A1A]">45</p>
            <p className="text-[13px] text-[#666666]">Posts</p>
          </div>
          <div className="text-center">
            <p className="text-[24px] font-semibold text-[#1A1A1A]">127</p>
            <p className="text-[13px] text-[#666666]">Connections</p>
          </div>
          <div className="text-center">
            <p className="text-[24px] font-semibold text-[#1A1A1A]">8</p>
            <p className="text-[13px] text-[#666666]">Collaborations</p>
          </div>
        </div>
        
        {/* Products */}
        <div>
          <h3 className="mb-3">My Products</h3>
          <div className="grid grid-cols-3 gap-2">
            {products.map((product, i) => (
              <div key={i} className="aspect-square rounded-[12px] overflow-hidden bg-[#E8F0EC]">
                <ImageWithFallback 
                  src={product}
                  alt={`Product ${i + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
        
        {/* Tabs */}
        <div>
          <div className="flex gap-2 border-b border-[#E0E0E0] mb-4">
            {tabs.map((tab, i) => (
              <button
                key={i}
                className={`pb-3 px-2 text-[14px] ${
                  i === 0
                    ? 'text-[#5A8B6F] border-b-2 border-[#5A8B6F] font-semibold'
                    : 'text-[#666666]'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          
          <Card>
            <p className="text-center text-[#666666] py-8">
              Your posts will appear here
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}
