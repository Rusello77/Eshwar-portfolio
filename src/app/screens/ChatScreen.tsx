import { useNavigate, useParams, useLocation } from 'react-router';
import { ArrowLeft, Send, Image, Mic, Share2, MessageCircle } from 'lucide-react';
import { useState, useEffect } from 'react';
import { ShareBottomSheet } from '../components/ShareBottomSheet';
import { VendorSelectionBottomSheet } from '../components/VendorSelectionBottomSheet';
import { VendorMessageCard } from '../components/VendorMessageCard';
import { ConnectionMessageCard } from '../components/ConnectionMessageCard';

interface Message {
  id: number;
  text?: string;
  sender: 'me' | 'them';
  time: string;
  type?: 'text' | 'vendor' | 'connection';
  data?: any;
}

export function ChatScreen() {
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams();
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: 'Hi! I saw your question about packaging. I can help!', sender: 'them', time: '10:30 AM', type: 'text' },
    { id: 2, text: 'That would be great! Thank you', sender: 'me', time: '10:32 AM', type: 'text' },
    { id: 3, text: 'I buy from a supplier in Andheri. Good quality and prices', sender: 'them', time: '10:33 AM', type: 'text' },
    { id: 4, text: 'Can you share their contact?', sender: 'me', time: '10:35 AM', type: 'text' },
  ]);
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [isVendorSelectionOpen, setIsVendorSelectionOpen] = useState(false);

  // Handle connection shared from ConnectionsScreen
  useEffect(() => {
    if (location.state?.sharedConnection) {
      const connection = location.state.sharedConnection;
      const newMessage: Message = {
        id: messages.length + 1,
        sender: 'me',
        time: new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true }),
        type: 'connection',
        data: connection
      };
      setMessages(prev => [...prev, newMessage]);
      
      // Clear the state to prevent re-adding on subsequent renders
      window.history.replaceState({}, document.title);
    }
  }, [location.state?.sharedConnection]);

  const handleVendorSelect = (vendor: any) => {
    const newMessage: Message = {
      id: messages.length + 1,
      sender: 'me',
      time: new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true }),
      type: 'vendor',
      data: vendor
    };
    setMessages([...messages, newMessage]);
    setIsVendorSelectionOpen(false);
  };

  const handleConnectionSelect = (connection: any) => {
    const newMessage: Message = {
      id: messages.length + 1,
      sender: 'me',
      time: new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true }),
      type: 'connection',
      data: connection
    };
    setMessages([...messages, newMessage]);
  };

  return (
    <div className="min-h-screen bg-[#F5F5F5] flex flex-col max-w-[390px] mx-auto">
      {/* Header */}
      <div className="bg-white px-6 pt-12 pb-4 border-b border-[#E0E0E0]">
        <div className="flex items-center gap-3">
          <button onClick={() => navigate(-1)} className="p-2 -ml-2">
            <ArrowLeft className="w-6 h-6" />
          </button>
          <div className="w-10 h-10 rounded-full bg-[#5A8B6F]" />
          <div className="flex-1">
            <h3>Meera Patel</h3>
            <p className="text-[13px] text-[#666666]">Home Baking</p>
          </div>
        </div>
      </div>
      
      {/* Messages */}
      <div className="flex-1 p-6 space-y-4 overflow-y-auto">
        {messages.map((msg) => (
          <div key={msg.id} className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}>
            <div className={`${msg.sender === 'me' ? 'order-2' : 'order-1'}`}>
              {msg.type === 'vendor' && (
                <div className={`${msg.sender === 'me' ? 'flex justify-end' : 'flex justify-start'} mb-1`}>
                  <VendorMessageCard
                    {...msg.data}
                    sharedBy={msg.sender === 'them' ? 'Meera' : undefined}
                  />
                </div>
              )}
              {msg.type === 'connection' && (
                <div className={`${msg.sender === 'me' ? 'flex justify-end' : 'flex justify-start'} mb-1`}>
                  <ConnectionMessageCard
                    {...msg.data}
                    sharedBy={msg.sender === 'them' ? 'Meera' : undefined}
                  />
                </div>
              )}
              {msg.type === 'text' && (
                <div className={`max-w-[75%] px-4 py-2 rounded-[16px] ${
                  msg.sender === 'me' 
                    ? 'bg-[#5A8B6F] text-white' 
                    : 'bg-white'
                }`} style={msg.sender !== 'me' ? { boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)' } : {}}>
                  <p>{msg.text}</p>
                </div>
              )}
              <p className={`text-[11px] text-[#666666] mt-1 ${msg.sender === 'me' ? 'text-right' : 'text-left'}`}>
                {msg.time}
              </p>
            </div>
          </div>
        ))}
      </div>
      
      {/* Quick Actions */}
      <div className="px-6 py-2 bg-white border-t border-[#E0E0E0]">
        <div className="flex gap-4 justify-center">
          <button className="flex flex-col items-center gap-1">
            <div className="w-10 h-10 bg-[#E8F0EC] rounded-full flex items-center justify-center">
              <Image className="w-5 h-5 text-[#5A8B6F]" />
            </div>
            <span className="text-[11px] text-[#666666]">Photo</span>
          </button>
          <button className="flex flex-col items-center gap-1">
            <div className="w-10 h-10 bg-[#E8F0EC] rounded-full flex items-center justify-center">
              <Mic className="w-5 h-5 text-[#5A8B6F]" />
            </div>
            <span className="text-[11px] text-[#666666]">Voice</span>
          </button>
          <button className="flex flex-col items-center gap-1" onClick={() => setIsShareOpen(true)}>
            <div className="w-10 h-10 bg-[#E8F0EC] rounded-full flex items-center justify-center">
              <Share2 className="w-5 h-5 text-[#5A8B6F]" />
            </div>
            <span className="text-[11px] text-[#666666]">Share</span>
          </button>
          <button className="flex flex-col items-center gap-1">
            <div className="w-10 h-10 bg-[#5A8B6F] rounded-full flex items-center justify-center">
              <MessageCircle className="w-5 h-5 text-white" />
            </div>
            <span className="text-[11px] text-[#666666]">WhatsApp</span>
          </button>
        </div>
      </div>
      
      {/* Input */}
      <div className="bg-white border-t border-[#E0E0E0] p-4">
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Type a message..."
            className="flex-1 px-4 py-2 border border-[#E0E0E0] rounded-[10px] focus:border-[#5A8B6F] focus:outline-none"
          />
          <button className="w-10 h-10 bg-[#5A8B6F] rounded-[10px] flex items-center justify-center">
            <Send className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>

      {/* Vendor Selection Bottom Sheet */}
      <VendorSelectionBottomSheet
        isOpen={isVendorSelectionOpen}
        onClose={() => setIsVendorSelectionOpen(false)}
        onSelect={handleVendorSelect}
      />

      {/* Share Bottom Sheet */}
      <ShareBottomSheet
        isOpen={isShareOpen}
        onClose={() => setIsShareOpen(false)}
        onSelectVendor={() => setIsVendorSelectionOpen(true)}
        onSelectConnection={() => {
          // Navigate to connections screen in selection mode
          navigate('/connections', { 
            state: { 
              selectionMode: true
            } 
          });
        }}
      />
    </div>
  );
}