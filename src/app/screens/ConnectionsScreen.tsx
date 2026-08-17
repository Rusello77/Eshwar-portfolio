import { useState } from 'react';
import { MessageCircle, Share2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Avatar } from '../components/Avatar';
import { useNavigate, useLocation } from 'react-router';

interface Connection {
  id: number;
  name: string;
  businessType: string;
  distance: number; // in km
  area: string;
  avatar: 'bee';
  imageUrl?: string; // Real photo URL for connected users only
  category: string;
  isConnected?: boolean; // true = accepted connection
}

interface LocationState {
  selectionMode?: boolean;
  onSelectConnection?: (connection: Connection) => void;
}

const connections: Connection[] = [
  // CONNECTED USERS (My People) - IDs 1-10
  { id: 1, name: 'Meera Patel', businessType: 'Home Baking', distance: 2.3, area: 'Indiranagar', avatar: 'bee', imageUrl: 'https://images.unsplash.com/photo-1614436163996-25cee5f54290?w=200&h=200&fit=crop', category: 'Bakers', isConnected: true },
  { id: 2, name: 'Kavita Singh', businessType: 'Handmade Crafts', distance: 3.1, area: 'Koramangala', avatar: 'bee', imageUrl: 'https://images.unsplash.com/photo-1583623025817-d180a2221d0a?w=200&h=200&fit=crop', category: 'Handmade Crafts', isConnected: true },
  { id: 3, name: 'Anjali Desai', businessType: 'Beauty Services', distance: 1.8, area: 'JP Nagar', avatar: 'bee', imageUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop', category: 'Beauty Services', isConnected: true },
  { id: 4, name: 'Lakshmi Reddy', businessType: 'Tailoring Services', distance: 2.8, area: 'Malleshwaram', avatar: 'bee', imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop', category: 'Tailoring', isConnected: true },
  { id: 9, name: 'Radha Krishnan', businessType: 'Yoga Classes', distance: 2.1, area: 'BTM Layout', avatar: 'bee', imageUrl: 'https://images.unsplash.com/photo-1609505848912-b7c3b8b4beda?w=200&h=200&fit=crop', category: 'Beauty Services', isConnected: true },
  { id: 10, name: 'Nisha Varma', businessType: 'Mehendi Artist', distance: 3.8, area: 'Rajajinagar', avatar: 'bee', imageUrl: 'https://images.unsplash.com/photo-1558899-1ea57e8a-0c6e-42c8-8f84-c19c6d3c-8b38?w=200&h=200&fit=crop', category: 'Beauty Services', isConnected: true },
  { id: 11, name: 'Pooja Nair', businessType: 'Organic Spices', distance: 4.5, area: 'Yelahanka', avatar: 'bee', imageUrl: 'https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?w=200&h=200&fit=crop', category: 'Pickles & Snacks', isConnected: true },
  { id: 12, name: 'Geeta Rao', businessType: 'Catering Services', distance: 2.9, area: 'RT Nagar', avatar: 'bee', imageUrl: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=200&h=200&fit=crop', category: 'Homemade Meals', isConnected: true },
  { id: 13, name: 'Shanti Devi', businessType: 'Embroidery Work', distance: 3.3, area: 'Vijayanagar', avatar: 'bee', imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop', category: 'Handmade Crafts', isConnected: true },
  { id: 14, name: 'Latha Kumar', businessType: 'Tiffin Service', distance: 1.9, area: 'Basavanagudi', avatar: 'bee', imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop', category: 'Homemade Meals', isConnected: true },

  // NON-CONNECTED USERS (Radar) - IDs 5-8
  { id: 5, name: 'Priya Sharma', businessType: 'Pickles & Snacks', distance: 4.2, area: 'Jayanagar', avatar: 'bee', category: 'Pickles & Snacks', isConnected: false },
  { id: 6, name: 'Rekha Menon', businessType: 'Homemade Meals', distance: 3.5, area: 'HSR Layout', avatar: 'bee', category: 'Homemade Meals', isConnected: false },
  { id: 7, name: 'Sunita Kumar', businessType: 'Cake Baking', distance: 1.5, area: 'Whitefield', avatar: 'bee', category: 'Bakers', isConnected: false },
  { id: 8, name: 'Divya Iyer', businessType: 'Handmade Jewelry', distance: 4.8, area: 'Banashankari', avatar: 'bee', category: 'Handmade Crafts', isConnected: false },
  { id: 15, name: 'Aruna Rao', businessType: 'Sweet Making', distance: 1.2, area: 'Malleshwaram', avatar: 'bee', category: 'Bakers', isConnected: false },
  { id: 16, name: 'Kamala Srinivas', businessType: 'Home Tailoring', distance: 5.8, area: 'Kengeri', avatar: 'bee', category: 'Tailoring', isConnected: false },
  { id: 17, name: 'Usha Reddy', businessType: 'Saree Draping', distance: 7.2, area: 'Electronic City', avatar: 'bee', category: 'Beauty Services', isConnected: false },
  { id: 18, name: 'Sowmya Hegde', businessType: 'Crochet Items', distance: 2.4, area: 'Sadashivanagar', avatar: 'bee', category: 'Handmade Crafts', isConnected: false },
  { id: 19, name: 'Padma Krishnan', businessType: 'Authentic Cuisine', distance: 6.5, area: 'Marathahalli', avatar: 'bee', category: 'Homemade Meals', isConnected: false },
  { id: 20, name: 'Vasantha Kumari', businessType: 'Mango Pickle', distance: 8.1, area: 'Hebbal', avatar: 'bee', category: 'Pickles & Snacks', isConnected: false },
  { id: 21, name: 'Savita Joshi', businessType: 'Blouse Stitching', distance: 3.9, area: 'RR Nagar', avatar: 'bee', category: 'Tailoring', isConnected: false },
  { id: 22, name: 'Mala Deshmukh', businessType: 'Herbal Beauty', distance: 9.2, area: 'Yelahanka', avatar: 'bee', category: 'Beauty Services', isConnected: false },
  { id: 23, name: 'Renuka Patel', businessType: 'Cupcake Specialist', distance: 1.8, area: 'Frazer Town', avatar: 'bee', category: 'Bakers', isConnected: false },
  { id: 24, name: 'Bharati Nair', businessType: 'Kondattam Snacks', distance: 5.3, area: 'JP Nagar', avatar: 'bee', category: 'Pickles & Snacks', isConnected: false },
  { id: 25, name: 'Shobha Murthy', businessType: 'Handwoven Bags', distance: 7.8, area: 'Sarjapur', avatar: 'bee', category: 'Handmade Crafts', isConnected: false },
];

const filters = [
  'All',
  'Bakers',
  'Pickles & Snacks',
  'Tailoring',
  'Handmade Crafts',
  'Beauty Services',
  'Homemade Meals'
];

export function ConnectionsScreen() {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [selectedNode, setSelectedNode] = useState<Connection | null>(null);
  const [distanceFilter, setDistanceFilter] = useState<2 | 5 | 10>(10);
  const [viewMode, setViewMode] = useState<'radar' | 'list'>('radar');

  const selectionMode = location.state?.selectionMode || false;
  const [selectedConnection, setSelectedConnection] = useState<Connection | null>(null);

  const handleConnectionSelect = (connection: Connection) => {
    if (selectionMode) {
      setSelectedConnection(connection);
    } else {
      setSelectedNode(connection);
    }
  };

  const handleSendRecommendation = () => {
    if (selectedConnection) {
      navigate(-1, {
        state: {
          sharedConnection: selectedConnection
        }
      });
    }
  };

  const myPeople = connections.filter(c => c.isConnected);
  const radarConnections = connections.filter(c => !c.isConnected);

  let filteredConnections = selectedFilter === 'All'
    ? radarConnections
    : radarConnections.filter(c => c.category === selectedFilter);

  filteredConnections = filteredConnections.filter(c => c.distance <= distanceFilter);

  const distributeNodes = () => {
    const distributed: { ring: number; angle: number; connection: Connection }[] = [];

    filteredConnections.forEach((connection, index) => {
      let ring = 1;
      if (connection.distance > 5) ring = 3;
      else if (connection.distance > 2) ring = 2;

      const nodesInRing = filteredConnections.filter(c => {
        if (c.distance > 5) return ring === 3;
        if (c.distance > 2) return ring === 2;
        return ring === 1;
      }).length;

      const ringIndex = filteredConnections.filter((c, i) => {
        let cRing = 1;
        if (c.distance > 5) cRing = 3;
        else if (c.distance > 2) cRing = 2;
        return i < index && cRing === ring;
      }).length;

      const angle = (ringIndex / nodesInRing) * 360;
      distributed.push({ ring, angle, connection });
    });

    return distributed;
  };

  const nodePositions = distributeNodes();

  const getColorByDistance = (distance: number) => {
    // Juno botanical green palette for distance rings
    if (distance <= 2) return '#7AA98A'; // Close - darker green
    if (distance <= 5) return '#A3BDAF'; // Medium - medium green
    return '#C8D8CE'; // Far - lightest green
  };

  return (
    <div className="min-h-screen bg-[#F5F1E8] pb-20 max-w-[390px] mx-auto">
      {/* Header */}
      <div className="bg-[#FAF8F2] px-6 pt-12 pb-5">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <h1 className="mb-1 text-[22px] leading-tight">{selectionMode ? 'Select person to share' : 'Connections'}</h1>
            <p className="text-[#666666] text-[13px] leading-relaxed">
              {selectionMode ? 'Choose someone to recommend' : 'Find homemakers with similar businesses nearby'}
            </p>
          </div>
          {selectionMode ? (
            <button
              onClick={() => navigate(-1)}
              className="text-[13px] text-[#666666] font-medium hover:text-[#5A8B6F] transition-colors ml-3 flex-shrink-0"
            >
              Cancel
            </button>
          ) : (
            <button onClick={() => navigate('/messages')} className="p-2.5 -mr-2 hover:bg-[#F5F5F5] rounded-full transition-colors ml-3 flex-shrink-0">
              <div className="relative">
                <MessageCircle className="w-5 h-5 text-[#5A8B6F]" />
                <div className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-[#FF6B6B] rounded-full border-2 border-white shadow-sm" />
              </div>
            </button>
          )}
        </div>
      </div>

      {/* My People Section - 24px spacing */}
      {myPeople.length > 0 && (
        <div className="bg-[#FAF8F2] px-6 pt-6 pb-6 mb-2">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-[16px] font-semibold text-[#1A1A1A] mb-0.5">My People</h2>
              <p className="text-[#999999] text-[12px]">People you've connected with</p>
            </div>
            <button
              onClick={() => navigate('/my-people')}
              className="text-[12px] text-[#5A8B6F] font-semibold hover:text-[#4A7360] transition-colors"
            >
              View All
            </button>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-1 scrollbar-hide -mx-6 px-6">
            {myPeople.slice(0, 5).map((person) => (
              <button
                key={person.id}
                onClick={() => navigate(`/profile/${person.id}`)}
                className="flex flex-col items-center flex-shrink-0 group"
              >
                <div className="w-16 h-16 mb-2 rounded-full overflow-hidden shadow-sm ring-2 ring-transparent group-hover:ring-[#5A8B6F]/20 transition-all">
                  <Avatar
                    variant="real"
                    imageUrl={person.imageUrl}
                    alt={person.name}
                    className="w-full h-full"
                  />
                </div>
                <span className="text-[11px] font-medium text-[#1A1A1A] text-center max-w-[70px] truncate">
                  {person.name.split(' ')[0]}
                </span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Filters + View Toggle Container - 24px from My People */}
      <div className="bg-[#FAF8F2] px-6 pt-5 pb-5">
        {/* Category Filters */}
        <div className="mb-4">
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide -mx-6 px-6">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`
                  px-4 py-2.5 rounded-full text-[12px] font-semibold whitespace-nowrap transition-all shadow-sm
                  ${selectedFilter === filter
                    ? 'bg-[#5A8B6F] text-white shadow-md'
                    : 'bg-[#FAF8F2] text-[#666666] border-2 border-[#E0E0E0] hover:border-[#5A8B6F]/30'
                  }
                `}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* View Toggle */}
        <div className="flex justify-center">
          <div className="inline-flex bg-[#E8F0EC] rounded-full p-1 shadow-sm">
            <button
              onClick={() => setViewMode('radar')}
              className={`
                px-7 py-2.5 rounded-full text-[12px] font-semibold transition-all duration-200
                ${viewMode === 'radar'
                  ? 'bg-[#5A8B6F] text-white shadow-sm'
                  : 'text-[#666666] hover:text-[#5A8B6F]'
                }
              `}
            >
              Radar
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`
                px-7 py-2.5 rounded-full text-[12px] font-semibold transition-all duration-200
                ${viewMode === 'list'
                  ? 'bg-[#5A8B6F] text-white shadow-sm'
                  : 'text-[#666666] hover:text-[#5A8B6F]'
                }
              `}
            >
              List
            </button>
          </div>
        </div>
      </div>

      {/* Radar View - 24px from filters */}
      {viewMode === 'radar' && (
        <div className="relative w-full aspect-square px-6 mt-6">
          <svg
            viewBox="0 0 400 400"
            className="w-full h-full"
            style={{ maxHeight: '400px' }}
          >
            {/* Orbit rings with softer appearance - Juno botanical green */}
            <circle cx="200" cy="200" r="80" fill="none" stroke="#7AA98A" strokeWidth="1.5" opacity="0.4" />
            <circle cx="200" cy="200" r="130" fill="none" stroke="#7AA98A" strokeWidth="1.5" opacity="0.3" />
            <circle cx="200" cy="200" r="180" fill="none" stroke="#7AA98A" strokeWidth="1.5" opacity="0.25" />

            {/* Connection lines */}
            {nodePositions.map(({ ring, angle, connection }) => {
              const radius = ring === 1 ? 80 : ring === 2 ? 130 : 180;
              const radian = (angle - 90) * (Math.PI / 180);
              const x = 200 + radius * Math.cos(radian);
              const y = 200 + radius * Math.sin(radian);

              return (
                <line
                  key={`line-${connection.id}`}
                  x1="200" y1="200" x2={x} y2={y}
                  stroke="#7AA98A" strokeWidth="1" opacity="0.2"
                />
              );
            })}

            {/* Center node - User's real photo with Juno green accent */}
            <g>
              <circle cx="200" cy="200" r="34" fill="#5A8B6F" opacity="0.2" />
              <circle cx="200" cy="200" r="32" fill="#FAF8F2" filter="drop-shadow(0 3px 12px rgba(90,139,111,0.25))" />
              <foreignObject x="168" y="168" width="64" height="64">
                <div className="w-full h-full rounded-full overflow-hidden ring-2 ring-[#5A8B6F]/30">
                  <Avatar
                    variant="me"
                    imageUrl="https://images.unsplash.com/photo-1623594675959-02360202d4d6?w=200&h=200&fit=crop"
                    alt="My Profile"
                    className="w-full h-full"
                  />
                </div>
              </foreignObject>
            </g>

            {/* Connection nodes */}
            {nodePositions.map(({ ring, angle, connection }) => {
              const radius = ring === 1 ? 80 : ring === 2 ? 130 : 180;
              const radian = (angle - 90) * (Math.PI / 180);
              const x = 200 + radius * Math.cos(radian);
              const y = 200 + radius * Math.sin(radian);
              const nodeSize = 22;
              const nodeColor = getColorByDistance(connection.distance);
              const isSelected = selectionMode && selectedConnection?.id === connection.id;

              return (
                <g key={connection.id}>
                  <circle
                    cx={x} cy={y} r={nodeSize + 3}
                    fill={nodeColor} opacity="0.4"
                  />
                  <circle
                    cx={x} cy={y} r={nodeSize}
                    fill="white"
                    stroke={isSelected ? '#5A8B6F' : 'transparent'}
                    strokeWidth="3"
                    filter="drop-shadow(0 2px 8px rgba(0,0,0,0.1))"
                    className="cursor-pointer transition-all hover:scale-110"
                    onClick={() => handleConnectionSelect(connection)}
                  />
                  <foreignObject
                    x={x - nodeSize} y={y - nodeSize}
                    width={nodeSize * 2} height={nodeSize * 2}
                    className="pointer-events-none"
                  >
                    <Avatar variant={connection.avatar} className="w-full h-full" />
                  </foreignObject>

                  <circle
                    cx={x} cy={y} r={nodeSize + 10}
                    fill="transparent"
                    className="cursor-pointer"
                    onClick={() => handleConnectionSelect(connection)}
                  />
                </g>
              );
            })}
          </svg>

          {/* Profile Preview Card */}
          <AnimatePresence>
            {selectedNode && (
              <>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 bg-black/30 -mx-6 backdrop-blur-[2px]"
                  onClick={() => setSelectedNode(null)}
                />

                <motion.div
                  initial={{ opacity: 0, scale: 0.92, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.92, y: 20 }}
                  transition={{ type: 'spring', damping: 28, stiffness: 320 }}
                  className="absolute left-6 right-6 top-1/2 -translate-y-1/2 bg-[#FAF8F2] rounded-3xl p-6 shadow-2xl z-10"
                >
                  {/* Share Icon */}
                  <button className="absolute top-4 right-4 p-2 hover:bg-[#F5F5F5] rounded-full transition-colors">
                    <Share2 className="w-4 h-4 text-[#666666]" />
                  </button>

                  <div className="flex flex-col items-center text-center">
                    <div className="w-20 h-20 mb-3 shadow-md rounded-full overflow-hidden">
                      <Avatar variant={selectedNode.avatar} className="w-full h-full" />
                    </div>

                    <h3 className="text-[17px] font-semibold text-[#1A1A1A] mb-1">
                      {selectedNode.name}
                    </h3>

                    <p className="text-[13px] font-medium text-[#666666] mb-2">
                      {selectedNode.businessType}
                    </p>

                    <div className="flex items-center gap-3 text-[12px] text-[#999999] mb-5">
                      <span>{selectedNode.distance} km away</span>
                      <span className="w-1 h-1 rounded-full bg-[#E0E0E0]" />
                      <span>{selectedNode.area}</span>
                    </div>

                    <div className="flex gap-2.5 w-full mb-2.5">
                      <button
                        className="flex-1 bg-[#5A8B6F] text-white py-3 rounded-[14px] font-semibold text-[13px] hover:bg-[#4A7360] active:scale-95 transition-all shadow-sm"
                        onClick={() => setSelectedNode(null)}
                      >
                        Connect
                      </button>
                      <button
                        className="flex-1 bg-[#E8F0EC] text-[#5A8B6F] py-3 rounded-[14px] font-semibold text-[13px] hover:bg-[#E8F0EC] active:scale-95 transition-all"
                        onClick={() => setSelectedNode(null)}
                      >
                        Message
                      </button>
                    </div>

                    <button
                      className="w-full bg-[#FAF8F2] text-[#5A8B6F] border-2 border-[#5A8B6F] py-3 rounded-[14px] font-semibold text-[13px] hover:bg-[#F8FCF9] active:scale-95 transition-all"
                      onClick={() => {
                        navigate(`/profile/${selectedNode.id}`);
                        setSelectedNode(null);
                      }}
                    >
                      View Profile
                    </button>
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>
      )}

      {/* List View - 24px from filters */}
      {viewMode === 'list' && (
        <div className="px-6 pt-6 space-y-3">
          {filteredConnections.length > 0 ? (
            filteredConnections.map((connection) => {
              const isSelected = selectionMode && selectedConnection?.id === connection.id;

              return (
                <div
                  key={connection.id}
                  className={`bg-[#FAF8F2] border-2 rounded-2xl p-4 transition-all cursor-pointer shadow-sm hover:shadow-md active:scale-[0.98] ${
                    isSelected
                      ? 'border-[#5A8B6F] shadow-md'
                      : 'border-[#E0E0E0] hover:border-[#5A8B6F]/30'
                  }`}
                  onClick={() => handleConnectionSelect(connection)}
                >
                  <div className="flex items-center gap-3.5 mb-3.5">
                    <div className={`w-14 h-14 flex-shrink-0 rounded-full overflow-hidden shadow-sm ${isSelected ? 'ring-2 ring-[#5A8B6F] ring-offset-2' : ''}`}>
                      <Avatar variant={connection.avatar} className="w-full h-full" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-[15px] font-semibold text-[#1A1A1A] mb-0.5 leading-tight">
                        {connection.name}
                      </h3>
                      <p className="text-[13px] font-medium text-[#666666] mb-1.5 leading-snug">
                        {connection.businessType}
                      </p>
                      <div className="flex items-center gap-2 text-[11px] text-[#999999]">
                        <span className="font-medium">{connection.distance} km away</span>
                        <span className="w-1 h-1 rounded-full bg-[#E0E0E0]" />
                        <span>{connection.area}</span>
                      </div>
                    </div>
                  </div>
                  {!selectionMode && (
                    <div className="flex gap-2.5">
                      <button
                        className="flex-1 bg-[#5A8B6F] text-white py-2.5 rounded-[12px] font-semibold text-[12px] hover:bg-[#4A7360] active:scale-95 transition-all shadow-sm"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Connect
                      </button>
                      <button
                        className="flex-1 bg-[#E8F0EC] text-[#5A8B6F] py-2.5 rounded-[12px] font-semibold text-[12px] hover:bg-[#E8F0EC] active:scale-95 transition-all"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Message
                      </button>
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="text-center py-16">
              <p className="text-[#999999] text-[13px]">
                No connections found in this area
              </p>
            </div>
          )}
        </div>
      )}

      {/* Distance Filter - 24px spacing */}
      <div className="px-6 mt-6 mb-6">
        <div className="flex justify-center">
          <div className="inline-flex bg-[#E8F0EC] rounded-full p-1 shadow-sm">
            <button
              onClick={() => setDistanceFilter(2)}
              className={`
                px-5 py-2.5 rounded-full text-[11px] font-bold tracking-wide whitespace-nowrap transition-all duration-200
                ${distanceFilter === 2
                  ? 'bg-[#5A8B6F] text-white shadow-md'
                  : 'text-[#666666] hover:text-[#5A8B6F]'
                }
              `}
            >
              WITHIN 2 KM
            </button>
            <button
              onClick={() => setDistanceFilter(5)}
              className={`
                px-5 py-2.5 rounded-full text-[11px] font-bold tracking-wide whitespace-nowrap transition-all duration-200
                ${distanceFilter === 5
                  ? 'bg-[#5A8B6F] text-white shadow-md'
                  : 'text-[#666666] hover:text-[#5A8B6F]'
                }
              `}
            >
              WITHIN 5 KM
            </button>
            <button
              onClick={() => setDistanceFilter(10)}
              className={`
                px-5 py-2.5 rounded-full text-[11px] font-bold tracking-wide whitespace-nowrap transition-all duration-200
                ${distanceFilter === 10
                  ? 'bg-[#5A8B6F] text-white shadow-md'
                  : 'text-[#666666] hover:text-[#5A8B6F]'
                }
              `}
            >
              WITHIN 10 KM
            </button>
          </div>
        </div>
      </div>

      {/* Send Button */}
      {selectionMode && selectedConnection && (
        <div className="fixed bottom-20 left-0 right-0 max-w-[390px] mx-auto bg-[#FAF8F2] pt-4 pb-4 px-6 shadow-[0_-6px_20px_rgba(0,0,0,0.08)] z-50">
          <button
            className="w-full bg-[#5A8B6F] text-white py-3.5 rounded-[14px] font-semibold text-[14px] hover:bg-[#4A7360] active:scale-95 transition-all shadow-md"
            onClick={handleSendRecommendation}
          >
            Share Profile
          </button>
        </div>
      )}
    </div>
  );
}