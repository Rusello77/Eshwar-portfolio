import { useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { ArrowLeft, Phone, MessageCircle, Plus } from 'lucide-react';
import { Card } from '../components/Card';
import { Button } from '../components/Button';

interface Order {
  id: number;
  product: string;
  price: string;
  date: string;
  status: 'pending' | 'delivered';
  paymentStatus: 'paid' | 'pending' | 'partial';
}

const customersData: Record<string, {
  name: string;
  phone: string;
  orders: Order[];
  totalOrders: number;
}> = {
  '1': {
    name: 'Priya Sharma',
    phone: '+91 98765 43210',
    totalOrders: 5,
    orders: [
      { id: 1, product: 'Chocolate Cake', price: '₹800', date: 'Mar 28, 2026', status: 'pending', paymentStatus: 'pending' },
      { id: 2, product: 'Vanilla Cupcakes', price: '₹400', date: 'Mar 20, 2026', status: 'delivered', paymentStatus: 'paid' },
      { id: 3, product: 'Fruit Tart', price: '₹600', date: 'Mar 15, 2026', status: 'delivered', paymentStatus: 'paid' },
      { id: 4, product: 'Custom Cookies', price: '₹350', date: 'Mar 10, 2026', status: 'delivered', paymentStatus: 'paid' },
      { id: 5, product: 'Birthday Cake', price: '₹1200', date: 'Mar 5, 2026', status: 'delivered', paymentStatus: 'paid' },
    ]
  },
  '2': {
    name: 'Anjali Desai',
    phone: '+91 98765 43211',
    totalOrders: 8,
    orders: [
      { id: 1, product: 'Cookie Box', price: '₹350', date: 'Mar 27, 2026', status: 'delivered', paymentStatus: 'paid' },
      { id: 2, product: 'Chocolate Brownies', price: '₹300', date: 'Mar 22, 2026', status: 'delivered', paymentStatus: 'paid' },
      { id: 3, product: 'Cupcake Combo', price: '₹500', date: 'Mar 18, 2026', status: 'delivered', paymentStatus: 'partial' },
    ]
  },
  '3': {
    name: 'Kavita Singh',
    phone: '+91 98765 43212',
    totalOrders: 3,
    orders: [
      { id: 1, product: 'Custom Sweets', price: '₹500', date: 'Mar 26, 2026', status: 'pending', paymentStatus: 'partial' },
      { id: 2, product: 'Ladoo Box', price: '₹400', date: 'Mar 12, 2026', status: 'delivered', paymentStatus: 'paid' },
      { id: 3, product: 'Barfi Special', price: '₹600', date: 'Mar 3, 2026', status: 'delivered', paymentStatus: 'paid' },
    ]
  },
  '4': {
    name: 'Meera Patel',
    phone: '+91 98765 43213',
    totalOrders: 12,
    orders: [
      { id: 1, product: 'Birthday Cake', price: '₹1500', date: 'Mar 25, 2026', status: 'delivered', paymentStatus: 'paid' },
      { id: 2, product: 'Anniversary Cake', price: '₹1800', date: 'Mar 18, 2026', status: 'delivered', paymentStatus: 'paid' },
      { id: 3, product: 'Dessert Platter', price: '₹900', date: 'Mar 10, 2026', status: 'delivered', paymentStatus: 'paid' },
    ]
  }
};

export function CustomerDetailScreen() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [showBillModal, setShowBillModal] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  
  const customer = customersData[id || '1'];
  
  if (!customer) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center max-w-[390px] mx-auto">
        <p className="text-[#666666]">Customer not found</p>
      </div>
    );
  }
  
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'delivered': return '#5A8B6F';
      case 'pending': return '#999999';
      case 'paid': return '#5A8B6F';
      case 'partial': return '#FFB85C';
      default: return '#999999';
    }
  };
  
  const getStatusBg = (status: string) => {
    switch (status) {
      case 'delivered': return '#E8F0EC';
      case 'pending': return '#F5F5F5';
      case 'paid': return '#E8F0EC';
      case 'partial': return '#FFF5E6';
      default: return '#F5F5F5';
    }
  };
  
  const handleGenerateBill = (order: Order) => {
    setSelectedOrder(order);
    setShowBillModal(true);
  };
  
  const handleSendWhatsApp = () => {
    if (!selectedOrder) return;
    
    const message = `Hi ${customer.name}! 

Here's your bill:

Product: ${selectedOrder.product}
Amount: ${selectedOrder.price}
Date: ${selectedOrder.date}

Thank you for your order!`;
    
    const whatsappUrl = `https://wa.me/${customer.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    setShowBillModal(false);
  };
  
  return (
    <div className="min-h-screen bg-[#F5F5F5] pb-20 max-w-[390px] mx-auto">
      {/* Header */}
      <div className="bg-white px-6 pt-12 pb-6">
        <button onClick={() => navigate(-1)} className="p-2 -ml-2 mb-4">
          <ArrowLeft className="w-6 h-6 text-[#1A1A1A]" />
        </button>
        
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h1 className="mb-2">{customer.name}</h1>
            <p className="text-[14px] text-[#666666] mb-3">{customer.phone}</p>
            <p className="text-[13px] text-[#999999]">
              {customer.totalOrders} total orders
            </p>
          </div>
          
          <div className="flex gap-2">
            <button 
              className="p-3 rounded-full bg-[#E8F0EC] hover:bg-[#D5F0E6] transition-colors"
              onClick={() => window.open(`tel:${customer.phone}`)}
            >
              <Phone className="w-5 h-5 text-[#5A8B6F]" />
            </button>
            <button 
              className="p-3 rounded-full bg-[#E8F0EC] hover:bg-[#D5F0E6] transition-colors"
              onClick={() => window.open(`https://wa.me/${customer.phone.replace(/[^0-9]/g, '')}`)}
            >
              <MessageCircle className="w-5 h-5 text-[#5A8B6F]" />
            </button>
          </div>
        </div>
      </div>
      
      <div className="p-6 space-y-6">
        {/* Add Order Button */}
        <Button 
          variant="primary"
          className="w-full flex items-center justify-center gap-2"
        >
          <Plus className="w-5 h-5" />
          Add New Order
        </Button>
        
        {/* Order History */}
        <div>
          <h2 className="mb-4">Order History</h2>
          <div className="space-y-3">
            {customer.orders.map((order) => (
              <Card key={order.id}>
                <div className="space-y-3">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="font-medium text-[#1A1A1A] mb-1">{order.product}</h3>
                      <p className="text-[13px] text-[#999999]">{order.date}</p>
                    </div>
                    <p className="font-semibold text-[#1A1A1A]">{order.price}</p>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span 
                        className="text-[12px] px-3 py-1 rounded-full capitalize"
                        style={{ 
                          backgroundColor: getStatusBg(order.status),
                          color: getStatusColor(order.status)
                        }}
                      >
                        {order.status}
                      </span>
                      <span 
                        className="text-[12px] px-3 py-1 rounded-full capitalize"
                        style={{ 
                          backgroundColor: getStatusBg(order.paymentStatus),
                          color: getStatusColor(order.paymentStatus)
                        }}
                      >
                        {order.paymentStatus}
                      </span>
                    </div>
                    
                    <button 
                      className="text-[13px] text-[#5A8B6F] font-medium"
                      onClick={() => handleGenerateBill(order)}
                    >
                      Generate Bill
                    </button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
      
      {/* Bill Modal */}
      {showBillModal && selectedOrder && (
        <div 
          className="fixed inset-0 bg-black/50 flex items-end justify-center z-50"
          onClick={() => setShowBillModal(false)}
        >
          <div 
            className="bg-white rounded-t-[24px] p-6 w-full max-w-[390px] animate-slide-up"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-12 h-1 bg-[#E0E0E0] rounded-full mx-auto mb-6" />
            
            <h2 className="mb-6">Bill Summary</h2>
            
            <Card className="mb-6">
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-[#666666]">Customer</span>
                  <span className="font-medium text-[#1A1A1A]">{customer.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#666666]">Product</span>
                  <span className="font-medium text-[#1A1A1A]">{selectedOrder.product}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#666666]">Date</span>
                  <span className="font-medium text-[#1A1A1A]">{selectedOrder.date}</span>
                </div>
                <div className="h-px bg-[#E0E0E0] my-2" />
                <div className="flex justify-between">
                  <span className="font-semibold text-[#1A1A1A]">Total Amount</span>
                  <span className="font-semibold text-[#5A8B6F] text-[18px]">{selectedOrder.price}</span>
                </div>
              </div>
            </Card>
            
            <div className="space-y-3">
              <Button 
                variant="primary"
                className="w-full flex items-center justify-center gap-2"
                onClick={handleSendWhatsApp}
              >
                <MessageCircle className="w-5 h-5" />
                Send via WhatsApp
              </Button>
              
              <Button 
                variant="secondary"
                className="w-full"
                onClick={() => setShowBillModal(false)}
              >
                Cancel
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
