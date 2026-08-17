import { Card } from './Card';
import { Button } from './Button';
import { Calculator, ClipboardList, Package, Wallet } from 'lucide-react';

interface ToolCardProps {
  name: string;
  description: string;
  icon: 'calculator' | 'tracker' | 'checklist' | 'expense';
  onClick?: () => void;
}

const icons = {
  calculator: Calculator,
  tracker: ClipboardList,
  checklist: Package,
  expense: Wallet
};

export function ToolCard({ name, description, icon, onClick }: ToolCardProps) {
  const Icon = icons[icon];
  
  return (
    <Card className="min-w-[260px] flex-shrink-0">
      <div className="flex items-start gap-3 mb-4">
        <div className="w-12 h-12 bg-gradient-to-br from-[#5A8B6F] to-[#7AA98A] rounded-xl flex items-center justify-center flex-shrink-0">
          <Icon className="w-6 h-6 text-white" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-[#1A1A1A] text-[15px] mb-1">{name}</h3>
          <p className="text-[#666666] text-[13px] leading-relaxed">{description}</p>
        </div>
      </div>
      <Button 
        variant="secondary" 
        className="w-full text-[14px]"
        onClick={onClick}
      >
        Use Tool
      </Button>
    </Card>
  );
}
