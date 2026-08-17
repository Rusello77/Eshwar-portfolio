import { useNavigate, useParams } from 'react-router';
import { ArrowLeft, Calculator, ClipboardList, Package, Wallet } from 'lucide-react';
import { Card } from '../components/Card';
import { Button } from '../components/Button';

export function ToolDetailScreen() {
  const navigate = useNavigate();
  const { id } = useParams();

  const toolDetails = {
    1: {
      name: 'Pricing Calculator',
      description: 'Calculate the right price for your products',
      icon: Calculator,
      color: '#5A8B6F',
      details: 'Use this tool to determine the optimal price for your products by factoring in material costs, labor, overhead, and desired profit margin.',
      features: ['Calculate cost per unit', 'Add profit margin', 'Compare with market prices', 'Save calculations']
    },
    2: {
      name: 'Order Tracker',
      description: 'Keep track of all your orders',
      icon: ClipboardList,
      color: '#7AA98A',
      details: 'Never miss an order deadline. Track order status, delivery dates, and customer information all in one place.',
      features: ['Track order status', 'Set delivery reminders', 'Customer contact info', 'Order history']
    },
    3: {
      name: 'Packaging Checklist',
      description: 'Never forget important packaging steps',
      icon: Package,
      color: '#5A8B6F',
      details: 'Ensure consistent quality with a comprehensive packaging checklist for your products.',
      features: ['Step-by-step checklist', 'Custom templates', 'Quality control', 'Print-ready format']
    },
    4: {
      name: 'Expense Tracker',
      description: 'Monitor your business expenses',
      icon: Wallet,
      color: '#7AA98A',
      details: 'Keep your business finances organized by tracking all expenses and income in one simple tool.',
      features: ['Track daily expenses', 'Categorize costs', 'Monthly reports', 'Profit analysis']
    }
  };

  const tool = toolDetails[id as keyof typeof toolDetails] || toolDetails[1];
  const Icon = tool.icon;

  return (
    <div className="min-h-screen bg-[#F5F5F5] max-w-[390px] mx-auto">
      {/* Header */}
      <div className="bg-white px-6 pt-12 pb-6">
        <button onClick={() => navigate(-1)} className="mb-6">
          <ArrowLeft className="w-6 h-6 text-[#1A1A1A]" />
        </button>
        
        <div className="flex items-center gap-4 mb-4">
          <div 
            className="w-16 h-16 rounded-2xl flex items-center justify-center"
            style={{ background: `linear-gradient(135deg, ${tool.color} 0%, #E8F0EC 100%)` }}
          >
            <Icon className="w-8 h-8 text-white" />
          </div>
          <div className="flex-1">
            <h1 className="mb-1">{tool.name}</h1>
            <p className="text-[#666666] text-[14px]">{tool.description}</p>
          </div>
        </div>
      </div>

      {/* Tool Details */}
      <div className="px-6 py-6 space-y-4 pb-28">
        <Card>
          <h3 className="font-semibold text-[#1A1A1A] text-[15px] mb-2">About this tool</h3>
          <p className="text-[#666666] text-[14px] leading-relaxed">{tool.details}</p>
        </Card>

        <Card>
          <h3 className="font-semibold text-[#1A1A1A] text-[15px] mb-3">Features</h3>
          <ul className="space-y-2">
            {tool.features.map((feature, index) => (
              <li key={index} className="flex items-start gap-2 text-[#666666] text-[14px]">
                <span className="text-[#5A8B6F] mt-0.5">✓</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </Card>

        <Card className="bg-gradient-to-br from-[#5A8B6F] to-[#7AA98A] text-white">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-2xl">💡</span>
            <h3 className="font-semibold text-[15px]">Pro Tip</h3>
          </div>
          <p className="text-[14px] leading-relaxed opacity-95">
            Use this tool regularly to keep your business organized and make data-driven decisions.
          </p>
        </Card>
      </div>

      {/* Bottom Button - Fixed above bottom nav (no nav on this screen) */}
      <div className="fixed bottom-0 left-0 right-0 bg-white p-6 border-t border-[#E5E5E5] max-w-[390px] mx-auto">
        <Button variant="primary" className="w-full">
          Use Tool
        </Button>
      </div>
    </div>
  );
}