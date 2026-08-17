import { useState } from 'react';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { Plus, Users, DollarSign, ShoppingCart, TrendingUp, Clock, CreditCard, Phone, MessageCircle, ChevronDown, ChevronRight, Check, Share2 } from 'lucide-react';
import { useNavigate } from 'react-router';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

type TimePeriod = 'week' | 'month' | 'year';

interface Task {
  id: number;
  label: string;
  icon?: any;
  color?: string;
  completed: boolean;
  isSystemTask: boolean;
  navigateTo?: string;
}

export function MyBusinessScreen() {
  const navigate = useNavigate();
  const [timePeriod, setTimePeriod] = useState<TimePeriod>('month');
  const [showTimePeriodMenu, setShowTimePeriodMenu] = useState(false);
  const [showAddTask, setShowAddTask] = useState(false);
  const [newTaskText, setNewTaskText] = useState('');
  
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, label: '3 orders pending delivery', icon: ShoppingCart, color: '#5A8B6F', completed: false, isSystemTask: true, navigateTo: '/orders' },
    { id: 2, label: '2 payments pending', icon: CreditCard, color: '#FFB85C', completed: false, isSystemTask: true, navigateTo: '/payments' },
    { id: 3, label: '1 order to prepare', icon: Clock, color: '#7AA98A', completed: true, isSystemTask: true, navigateTo: '/orders' },
    { id: 4, label: 'Update product photos', icon: null, color: null, completed: true, isSystemTask: false },
    { id: 5, label: 'Reply to customer messages', icon: null, color: null, completed: false, isSystemTask: false }
  ]);
  
  const toggleTask = (id: number) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };
  
  const addTask = () => {
    if (newTaskText.trim()) {
      const newTask: Task = {
        id: Date.now(),
        label: newTaskText,
        icon: null,
        color: null,
        completed: false,
        isSystemTask: false
      };
      setTasks([...tasks, newTask]);
      setNewTaskText('');
      setShowAddTask(false);
    }
  };
  
  const completedCount = tasks.filter(t => t.completed).length;
  const totalCount = tasks.length;
  const completionPercentage = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;
  
  // Consistency tracker data
  const averageCompletion = 72;
  const getConsistencyLabel = (percentage: number) => {
    if (percentage >= 80) return 'Highly consistent';
    if (percentage >= 60) return 'Moderately consistent';
    if (percentage >= 40) return 'Building consistency';
    return 'Needs improvement';
  };
  const getConsistencyColor = (percentage: number) => {
    if (percentage >= 80) return '#5A8B6F';
    if (percentage >= 60) return '#FFB85C';
    return '#FF6B6B';
  };
  
  const timePeriodLabels = {
    week: 'This Week',
    month: 'This Month',
    year: 'This Year'
  };
  
  // Data for different time periods
  const statsData = {
    week: {
      orders: 8,
      ordersTrend: '+2 from last week',
      customers: 6,
      customersTrend: '2 new this week',
      revenue: '₹3,200'
    },
    month: {
      orders: 24,
      ordersTrend: '+5 from last month',
      customers: 18,
      customersTrend: '3 new this week',
      revenue: '₹12,500'
    },
    year: {
      orders: 245,
      ordersTrend: '+42 from last year',
      customers: 65,
      customersTrend: '18 new this year',
      revenue: '₹1,45,000'
    }
  };
  
  const currentStats = statsData[timePeriod];
  
  // Chart data
  const ordersChartData = {
    week: [
      { id: 'w1', name: 'Mon', orders: 2 },
      { id: 'w2', name: 'Tue', orders: 1 },
      { id: 'w3', name: 'Wed', orders: 3 },
      { id: 'w4', name: 'Thu', orders: 0 },
      { id: 'w5', name: 'Fri', orders: 1 },
      { id: 'w6', name: 'Sat', orders: 1 },
      { id: 'w7', name: 'Sun', orders: 0 },
    ],
    month: [
      { id: 'm1', name: 'Week 1', orders: 5 },
      { id: 'm2', name: 'Week 2', orders: 8 },
      { id: 'm3', name: 'Week 3', orders: 6 },
      { id: 'm4', name: 'Week 4', orders: 5 },
    ],
    year: [
      { id: 'y1', name: 'Jan', orders: 18 },
      { id: 'y2', name: 'Feb', orders: 22 },
      { id: 'y3', name: 'Mar', orders: 24 },
      { id: 'y4', name: 'Apr', orders: 20 },
      { id: 'y5', name: 'May', orders: 25 },
      { id: 'y6', name: 'Jun', orders: 19 },
      { id: 'y7', name: 'Jul', orders: 21 },
      { id: 'y8', name: 'Aug', orders: 23 },
      { id: 'y9', name: 'Sep', orders: 20 },
      { id: 'y10', name: 'Oct', orders: 22 },
      { id: 'y11', name: 'Nov', orders: 26 },
      { id: 'y12', name: 'Dec', orders: 25 },
    ]
  };
  
  const customersChartData = {
    week: [
      { id: 'cw1', name: 'Mon', customers: 1 },
      { id: 'cw2', name: 'Tue', customers: 0 },
      { id: 'cw3', name: 'Wed', customers: 2 },
      { id: 'cw4', name: 'Thu', customers: 1 },
      { id: 'cw5', name: 'Fri', customers: 1 },
      { id: 'cw6', name: 'Sat', customers: 1 },
      { id: 'cw7', name: 'Sun', customers: 0 },
    ],
    month: [
      { id: 'cm1', name: 'Week 1', customers: 2 },
      { id: 'cm2', name: 'Week 2', customers: 5 },
      { id: 'cm3', name: 'Week 3', customers: 3 },
      { id: 'cm4', name: 'Week 4', customers: 3 },
    ],
    year: [
      { id: 'cy1', name: 'Jan', customers: 5 },
      { id: 'cy2', name: 'Feb', customers: 6 },
      { id: 'cy3', name: 'Mar', customers: 7 },
      { id: 'cy4', name: 'Apr', customers: 4 },
      { id: 'cy5', name: 'May', customers: 8 },
      { id: 'cy6', name: 'Jun', customers: 5 },
      { id: 'cy7', name: 'Jul', customers: 6 },
      { id: 'cy8', name: 'Aug', customers: 7 },
      { id: 'cy9', name: 'Sep', customers: 5 },
      { id: 'cy10', name: 'Oct', customers: 6 },
      { id: 'cy11', name: 'Nov', customers: 8 },
      { id: 'cy12', name: 'Dec', customers: 8 },
    ]
  };
  
  const stats = [
    { 
      label: 'Orders', 
      value: currentStats.orders.toString(), 
      icon: ShoppingCart, 
      color: '#5A8B6F',
      subtext: currentStats.ordersTrend,
      trend: 'up'
    },
    { 
      label: 'Customers', 
      value: currentStats.customers.toString(), 
      icon: Users, 
      color: '#7AA98A',
      subtext: currentStats.customersTrend,
      trend: 'up'
    },
    { 
      label: 'Revenue estimate', 
      value: currentStats.revenue, 
      icon: DollarSign, 
      color: '#FFB85C',
      subtext: '',
      trend: null
    }
  ];
  
  const recentOrders = [
    { 
      id: 1,
      customerName: 'Priya Sharma', 
      product: 'Chocolate Cake', 
      amount: '₹800',
      status: 'pending',
      paymentStatus: 'pending'
    },
    { 
      id: 2,
      customerName: 'Anjali Desai', 
      product: 'Cookie Box', 
      amount: '₹350',
      status: 'delivered',
      paymentStatus: 'paid'
    },
    { 
      id: 3,
      customerName: 'Kavita Singh', 
      product: 'Custom Sweets', 
      amount: '₹500',
      status: 'pending',
      paymentStatus: 'partial'
    },
  ];
  
  const customers = [
    { 
      id: 1,
      name: 'Priya Sharma', 
      phone: '+91 98765 43210',
      lastOrder: 'Chocolate Cake',
      totalOrders: 5
    },
    { 
      id: 2,
      name: 'Anjali Desai', 
      phone: '+91 98765 43211',
      lastOrder: 'Cookie Box',
      totalOrders: 8
    },
    { 
      id: 3,
      name: 'Kavita Singh', 
      phone: '+91 98765 43212',
      lastOrder: 'Custom Sweets',
      totalOrders: 3
    },
    { 
      id: 4,
      name: 'Meera Patel', 
      phone: '+91 98765 43213',
      lastOrder: 'Birthday Cake',
      totalOrders: 12
    },
  ];
  
  const quickActions = [
    { label: 'Add Order', icon: Plus, action: () => {} },
    { label: 'Add Customer', icon: Users, action: () => navigate('/add-customer') },
    { label: 'Update Payment', icon: CreditCard, action: () => {} }
  ];
  
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
  
  return (
    <div className="min-h-screen bg-[#F5F5F5] pb-20 max-w-[390px] mx-auto">
      <div className="bg-white px-6 pt-12 pb-4 sticky top-0 z-10">
        <h1 className="mb-2">My Business</h1>
        <p className="text-[#999999] text-[13px]">Your business dashboard</p>
      </div>
      
      <div className="px-6 pt-6 space-y-6">
        {/* Today's Tasks - Interactive Checklist */}
        <div>
          <h2 className="mb-4 text-[18px] font-semibold">Today's Tasks</h2>
          
          <Card className="mb-3 bg-gradient-to-b from-[#E8F0EC] to-white">
            {/* Progress Summary */}
            <div className="mb-5">
              <div className="flex items-center justify-between mb-3">
                <p className="text-[15px] text-[#1A1A1A] font-semibold">
                  {completedCount} of {totalCount} tasks completed
                </p>
                <p className="text-[16px] font-bold text-[#5A8B6F]">
                  {completionPercentage}%
                </p>
              </div>
              <div className="w-full h-2 bg-[#E0E0E0] rounded-full overflow-hidden">
                <div 
                  className="h-full bg-[#5A8B6F] rounded-full transition-all duration-500 ease-out"
                  style={{ width: `${completionPercentage}%` }}
                />
              </div>
            </div>
            
            {/* Task List */}
            <div className="space-y-4">
              {tasks.map((task) => {
                const Icon = task.icon;
                return (
                  <div 
                    key={task.id}
                    className={`flex items-center gap-3 transition-opacity duration-300 ${task.completed ? 'opacity-40' : ''}`}
                  >
                    {/* Checkbox */}
                    <button
                      onClick={() => toggleTask(task.id)}
                      className={`w-6 h-6 rounded-md border-2 flex items-center justify-center flex-shrink-0 transition-all duration-200 ${
                        task.completed 
                          ? 'bg-[#5A8B6F] border-[#5A8B6F] shadow-sm' 
                          : 'bg-white border-[#CCCCCC] hover:border-[#5A8B6F] hover:shadow-sm'
                      }`}
                    >
                      {task.completed && (
                        <Check className="w-4 h-4 text-white" strokeWidth={3} />
                      )}
                    </button>
                    
                    {/* Task Content */}
                    <div className="flex-1 flex items-center gap-2.5">
                      {Icon && (
                        <Icon className="w-4 h-4 flex-shrink-0" style={{ color: task.color }} />
                      )}
                      <p className={`text-[14px] transition-all duration-200 ${task.completed ? 'line-through text-[#AAAAAA]' : 'text-[#1A1A1A]'}`}>
                        {task.label}
                      </p>
                    </div>
                    
                    {/* Chevron for system tasks */}
                    {task.isSystemTask && task.navigateTo && (
                      <button
                        onClick={() => navigate(task.navigateTo!)}
                        className="p-1.5 hover:bg-white/50 rounded-md transition-colors"
                      >
                        <ChevronRight className="w-4 h-4 text-[#999999]" />
                      </button>
                    )}
                  </div>
                );
              })}
              
              {/* Add Task Input or Button */}
              {showAddTask ? (
                <div className="flex items-center gap-3 pt-3 border-t border-[#D5F0E6]">
                  <div className="w-6 h-6 flex-shrink-0" /> {/* Spacer for alignment */}
                  <input
                    type="text"
                    value={newTaskText}
                    onChange={(e) => setNewTaskText(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') addTask();
                      if (e.key === 'Escape') {
                        setShowAddTask(false);
                        setNewTaskText('');
                      }
                    }}
                    placeholder="Type your task..."
                    className="flex-1 text-[14px] text-[#1A1A1A] outline-none bg-transparent placeholder:text-[#AAAAAA]"
                    autoFocus
                  />
                  <button
                    onClick={addTask}
                    className="p-1.5 hover:bg-white/50 rounded-md transition-colors"
                  >
                    <Check className="w-4 h-4 text-[#5A8B6F]" />
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setShowAddTask(true)}
                  className="w-full flex items-center gap-3 pt-4 border-t border-[#D5F0E6] hover:bg-white/30 -m-4 p-4 rounded-b-[12px] transition-colors"
                >
                  <Plus className="w-4 h-4 text-[#5A8B6F]" />
                  <p className="text-[14px] text-[#5A8B6F] font-medium">Add a task</p>
                </button>
              )}
            </div>
          </Card>
          
          {/* Consistency Tracker */}
          <Card>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <p className="text-[12px] text-[#999999]">Average completion</p>
                <p className="text-[15px] font-bold text-[#1A1A1A]">{averageCompletion}%</p>
              </div>
              
              {/* Gradient Progress Bar */}
              <div className="relative w-full h-3 rounded-full overflow-hidden"
                style={{
                  background: 'linear-gradient(to right, #FF6B6B 0%, #FFB85C 50%, #5A8B6F 100%)'
                }}
              >
                {/* Indicator */}
                <div 
                  className="absolute top-0 bottom-0 w-1 bg-white shadow-md transition-all duration-500"
                  style={{ left: `${averageCompletion}%` }}
                />
              </div>
              
              <div className="flex items-center justify-between">
                <p className="text-[12px] font-semibold" style={{ color: getConsistencyColor(averageCompletion) }}>
                  {getConsistencyLabel(averageCompletion)}
                </p>
              </div>
              
              {/* Motivation Text */}
              <div className="pt-3 border-t border-[#E0E0E0]">
                <p className="text-[11px] text-[#999999] text-center leading-relaxed">
                  You're doing well — keep the momentum going 💪
                </p>
              </div>
            </div>
          </Card>
        </div>
        
        {/* Time Period Filter with Stats */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <div className="relative">
              <button
                onClick={() => setShowTimePeriodMenu(!showTimePeriodMenu)}
                className="flex items-center gap-2 px-3 py-1.5 bg-white rounded-[8px] border border-[#E0E0E0] hover:border-[#5A8B6F] transition-colors"
              >
                <span className="text-[14px] font-medium text-[#1A1A1A]">{timePeriodLabels[timePeriod]}</span>
                <ChevronDown className="w-3.5 h-3.5 text-[#999999]" />
              </button>
              
              {showTimePeriodMenu && (
                <div className="absolute top-full left-0 mt-2 w-40 bg-white rounded-[12px] shadow-lg border border-[#E0E0E0] overflow-hidden z-20">
                  {(['week', 'month', 'year'] as TimePeriod[]).map((period) => (
                    <button
                      key={period}
                      onClick={() => {
                        setTimePeriod(period);
                        setShowTimePeriodMenu(false);
                      }}
                      className={`w-full px-4 py-3 text-left text-[13px] hover:bg-[#E8F0EC] transition-colors ${
                        timePeriod === period ? 'bg-[#E8F0EC] text-[#5A8B6F] font-medium' : 'text-[#1A1A1A]'
                      }`}
                    >
                      {timePeriodLabels[period]}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
          
          <div className="space-y-2.5">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <Card key={i}>
                  <div className="flex items-center gap-3">
                    <div 
                      className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: `${stat.color}15` }}
                    >
                      <Icon className="w-5 h-5" style={{ color: stat.color }} />
                    </div>
                    <div className="flex-1">
                      <p className="text-[12px] text-[#999999] mb-0.5">{stat.label}</p>
                      <div className="flex items-baseline gap-1.5">
                        <p className="text-[20px] font-semibold text-[#1A1A1A]">{stat.value}</p>
                        {stat.trend && (
                          <TrendingUp className="w-3.5 h-3.5 text-[#5A8B6F]" />
                        )}
                      </div>
                      {stat.subtext && (
                        <p className="text-[11px] text-[#999999] mt-0.5">{stat.subtext}</p>
                      )}
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
        
        {/* Orders Dashboard */}
        <div key={`orders-chart-${timePeriod}`}>
          <h2 className="mb-4 text-[14px]">Orders Overview</h2>
          <Card>
            <div className="h-40">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={ordersChartData[timePeriod]}
                  margin={{ top: 5, right: 5, left: -20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#F0F0F0" />
                  <XAxis
                    dataKey="name"
                    tick={{ fill: '#999999', fontSize: 11 }}
                    axisLine={{ stroke: '#E0E0E0' }}
                  />
                  <YAxis
                    tick={{ fill: '#999999', fontSize: 11 }}
                    axisLine={{ stroke: '#E0E0E0' }}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'white',
                      border: '1px solid #E0E0E0',
                      borderRadius: '8px',
                      fontSize: '12px'
                    }}
                  />
                  <Bar key={`bar-${timePeriod}`} dataKey="orders" fill="#7AA98A" radius={[6, 6, 0, 0]} isAnimationActive={false} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </div>
        
        {/* Customers Dashboard */}
        <div key={`customers-chart-${timePeriod}`}>
          <h2 className="mb-4 text-[14px]">New Customers</h2>
          <Card>
            <div className="h-40">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={customersChartData[timePeriod]}
                  margin={{ top: 5, right: 5, left: -20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#F0F0F0" />
                  <XAxis
                    dataKey="name"
                    tick={{ fill: '#999999', fontSize: 11 }}
                    axisLine={{ stroke: '#E0E0E0' }}
                  />
                  <YAxis
                    tick={{ fill: '#999999', fontSize: 11 }}
                    axisLine={{ stroke: '#E0E0E0' }}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'white',
                      border: '1px solid #E0E0E0',
                      borderRadius: '8px',
                      fontSize: '12px'
                    }}
                  />
                  <Line
                    key={`line-${timePeriod}`}
                    type="monotone"
                    dataKey="customers"
                    stroke="#7AA98A"
                    strokeWidth={2.5}
                    dot={{ fill: '#7AA98A', r: 3 }}
                    isAnimationActive={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </div>
        
        {/* Recent Orders */}
        <div>
          <h2 className="mb-4">Recent Orders</h2>
          <div className="space-y-3">
            {recentOrders.map((order) => (
              <Card key={order.id} className="cursor-pointer hover:shadow-md transition-shadow">
                <div className="space-y-3">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-[15px] text-[#1A1A1A] mb-1">{order.customerName}</h3>
                      <p className="text-[13px] text-[#999999]">{order.product}</p>
                    </div>
                    <p className="font-bold text-[16px] text-[#1A1A1A] flex-shrink-0">{order.amount}</p>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <span 
                      className="text-[11px] font-medium px-2.5 py-1 rounded-full capitalize"
                      style={{ 
                        backgroundColor: getStatusBg(order.status),
                        color: getStatusColor(order.status)
                      }}
                    >
                      {order.status}
                    </span>
                    <span 
                      className="text-[11px] font-medium px-2.5 py-1 rounded-full capitalize"
                      style={{ 
                        backgroundColor: getStatusBg(order.paymentStatus),
                        color: getStatusColor(order.paymentStatus)
                      }}
                    >
                      {order.paymentStatus}
                    </span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
        
        {/* Quick Actions */}
        <div>
          <h2 className="mb-4">Quick Actions</h2>
          <div className="space-y-3">
            {quickActions.map((action, i) => {
              const Icon = action.icon;
              return (
                <Button 
                  key={i}
                  variant="secondary" 
                  className="w-full flex items-center justify-center gap-2"
                  onClick={action.action}
                >
                  <Icon className="w-5 h-5" />
                  {action.label}
                </Button>
              );
            })}
          </div>
        </div>
        
        {/* Customers Section */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2>Customers</h2>
            <button 
              onClick={() => navigate('/customers')}
              className="text-[13px] text-[#5A8B6F] font-medium flex items-center gap-1"
            >
              More Info
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          <div className="space-y-3">
            {customers.slice(0, 3).map((customer) => (
              <Card 
                key={customer.id} 
                className="cursor-pointer hover:shadow-md transition-shadow"
                onClick={() => navigate(`/customer/${customer.id}`)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="font-medium text-[#1A1A1A] mb-1">{customer.name}</h3>
                    <p className="text-[13px] text-[#666666] mb-1">{customer.phone}</p>
                    <p className="text-[12px] text-[#999999]">
                      Last order: {customer.lastOrder} • {customer.totalOrders} total orders
                    </p>
                  </div>
                  <div className="flex gap-2 ml-3">
                    <button 
                      className="p-2 rounded-full bg-[#E8F0EC] hover:bg-[#D5F0E6] transition-colors"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(`tel:${customer.phone}`);
                      }}
                    >
                      <Phone className="w-4 h-4 text-[#5A8B6F]" />
                    </button>
                    <button 
                      className="p-2 rounded-full bg-[#E8F0EC] hover:bg-[#D5F0E6] transition-colors"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(`https://wa.me/${customer.phone.replace(/[^0-9]/g, '')}`);
                      }}
                    >
                      <MessageCircle className="w-4 h-4 text-[#5A8B6F]" />
                    </button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
        
        {/* Vendors Section */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2>Vendors</h2>
            <button 
              onClick={() => navigate('/add-vendor')}
              className="text-[13px] text-[#5A8B6F] font-medium flex items-center gap-1"
            >
              + Add Vendor
            </button>
          </div>
          
          {/* Summary Card */}
          <Card 
            className="mb-3 cursor-pointer hover:shadow-md transition-shadow bg-gradient-to-br from-[#E8F0EC] to-white"
            onClick={() => navigate('/vendors')}
          >
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <h3 className="text-[24px] font-bold text-[#1A1A1A] mb-1">12</h3>
                <p className="text-[13px] text-[#666666]">Total vendors</p>
                <p className="text-[11px] text-[#999999] mt-1">3 recently added</p>
              </div>
              <ChevronRight className="w-5 h-5 text-[#5A8B6F]" />
            </div>
          </Card>
          
          {/* Preview Cards */}
          <div className="space-y-3">
            {[
              {
                id: 1,
                name: 'ABC Packaging Solutions',
                category: 'Packaging',
                address: 'BTM Layout, Bangalore',
                phone: '+91 98765 43210',
                notes: 'Eco-friendly boxes available'
              },
              {
                id: 2,
                name: 'Fresh Ingredients Co.',
                category: 'Raw Materials',
                address: 'Indiranagar, Bangalore',
                phone: '+91 98765 43211',
                notes: 'Best quality baking ingredients'
              }
            ].map((vendor) => (
              <Card key={vendor.id}>
                <div className="space-y-3">
                  {/* Top - Name & Category */}
                  <div>
                    <h3 className="font-medium text-[14px] text-[#1A1A1A] mb-0.5">{vendor.name}</h3>
                    <p className="text-[11px] text-[#999999]">{vendor.category}</p>
                  </div>
                  
                  {/* Middle - Address & Note */}
                  <div>
                    <p className="text-[12px] text-[#666666] mb-1">📍 {vendor.address}</p>
                    {vendor.notes && (
                      <p className="text-[11px] text-[#999999] italic">{vendor.notes}</p>
                    )}
                  </div>
                  
                  {/* Bottom - Phone & Actions */}
                  <div className="flex items-center justify-between pt-2 border-t border-[#E0E0E0]">
                    <p className="text-[12px] text-[#666666]">{vendor.phone}</p>
                    
                    <div className="flex gap-2">
                      <button 
                        className="p-1.5 rounded-full bg-[#E8F0EC] hover:bg-[#D5F0E6] transition-colors"
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(`https://wa.me/${vendor.phone.replace(/[^0-9]/g, '')}`);
                        }}
                      >
                        <MessageCircle className="w-3.5 h-3.5 text-[#5A8B6F]" />
                      </button>
                      <button 
                        className="p-1.5 rounded-full bg-[#E8F0EC] hover:bg-[#D5F0E6] transition-colors"
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(`tel:${vendor.phone}`);
                        }}
                      >
                        <Phone className="w-3.5 h-3.5 text-[#5A8B6F]" />
                      </button>
                      <button 
                        className="p-1.5 rounded-full bg-[#E8F0EC] hover:bg-[#D5F0E6] transition-colors"
                        onClick={(e) => {
                          e.stopPropagation();
                          navigate(`/share-vendor/${vendor.id}`);
                        }}
                      >
                        <Share2 className="w-3.5 h-3.5 text-[#5A8B6F]" />
                      </button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}