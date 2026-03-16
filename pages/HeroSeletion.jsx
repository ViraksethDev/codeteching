// pages/Dashboard.jsx
import { useState } from 'react';
import { 
  BarChart3, 
  Users, 
  DollarSign, 
  TrendingUp, 
  Activity, 
  ArrowUpRight, 
  MoreHorizontal 
} from 'lucide-react';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('overview');

  const stats = [
    { title: 'Total Revenue', value: '$48,920', change: '+12.5%', icon: DollarSign, color: 'from-emerald-500 to-teal-500' },
    { title: 'Active Users', value: '2,834', change: '+18.2%', icon: Users, color: 'from-blue-500 to-indigo-500' },
    { title: 'Conversion Rate', value: '4.8%', change: '+2.1%', icon: TrendingUp, color: 'from-purple-500 to-pink-500' },
    { title: 'Sessions Today', value: '12.4k', change: '+9.3%', icon: Activity, color: 'from-amber-500 to-orange-500' },
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-gray-200">
      {/* Main content */}
      <main className="pt-20 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
              Dashboard
            </h1>
            <p className="mt-2 text-gray-400">
              Welcome back, Seth. Here's what's happening with your project today.
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            <button className="rounded-lg bg-white/5 px-4 py-2 text-sm font-medium text-white border border-white/10 hover:bg-white/10 transition">
              Download Report
            </button>
            <button className="rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 px-5 py-2.5 text-sm font-medium text-white shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/30 transition hover:scale-[1.02]">
              New Campaign
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gray-900/60 backdrop-blur-xl p-6 shadow-xl transition-all hover:border-white/20 hover:shadow-2xl"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-400">{stat.title}</p>
                  <p className="mt-2 text-2xl font-bold text-white">{stat.value}</p>
                </div>
                <div className={`rounded-xl bg-gradient-to-br ${stat.color} p-3 opacity-80`}>
                  <stat.icon size={24} className="text-white" />
                </div>
              </div>
              <div className="mt-4 flex items-center gap-1 text-sm">
                <span className="text-emerald-400 font-medium">{stat.change}</span>
                <ArrowUpRight size={14} className="text-emerald-400" />
                <span className="text-gray-500">vs last week</span>
              </div>

              {/* Subtle gradient accent */}
              <div className="absolute -bottom-12 -right-12 h-32 w-32 rounded-full bg-gradient-to-br from-white/5 to-transparent blur-3xl" />
            </div>
          ))}
        </div>

        {/* Tabs + Main Content */}
        <div className="space-y-8">
          {/* Tabs */}
          <div className="flex border-b border-white/10">
            {['overview', 'analytics', 'users', 'revenue'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative px-6 py-4 text-sm font-medium transition-colors ${
                  activeTab === tab
                    ? 'text-white after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-gradient-to-r after:from-indigo-500 after:to-purple-500'
                    : 'text-gray-400 hover:text-gray-200'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          {/* Chart + Recent Activity */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Chart Area */}
            <div className="lg:col-span-2 rounded-2xl border border-white/10 bg-gray-900/60 backdrop-blur-xl p-6 shadow-xl">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-white">Revenue Overview</h3>
                <button className="rounded-lg p-2 text-gray-400 hover:bg-white/5 hover:text-white">
                  <MoreHorizontal size={20} />
                </button>
              </div>
              
              {/* Placeholder for chart (you can use Recharts, Chart.js, ApexCharts, etc.) */}
              <div className="h-80 bg-gradient-to-br from-gray-800/40 to-gray-900/40 rounded-xl flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <BarChart3 size={48} className="mx-auto mb-4 opacity-50" />
                  <p>Revenue chart would appear here</p>
                  <p className="text-sm">(Integrate Recharts / ApexCharts)</p>
                </div>
              </div>
            </div>

            {/* Recent Activity / Notifications */}
            <div className="rounded-2xl border border-white/10 bg-gray-900/60 backdrop-blur-xl p-6 shadow-xl">
              <h3 className="text-lg font-semibold text-white mb-6">Recent Activity</h3>
              
              <div className="space-y-5">
                {[
                  { user: 'Alex K.', action: 'upgraded to Pro', time: '12m ago' },
                  { user: 'Sarah M.', action: 'created new campaign', time: '47m ago' },
                  { user: 'Mike T.', action: 'reached 10k monthly users', time: '2h ago' },
                  { user: 'Emma L.', action: 'left a 5-star review', time: '5h ago' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-medium text-sm">
                      {item.user[0]}{item.user.split(' ')[1]?.[0] || ''}
                    </div>
                    <div>
                      <p className="text-sm">
                        <span className="font-medium text-white">{item.user}</span>{' '}
                        {item.action}
                      </p>
                      <p className="text-xs text-gray-500 mt-0.5">{item.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}