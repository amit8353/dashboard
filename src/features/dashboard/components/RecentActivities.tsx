import * as React from 'react';
import { Button } from '@/components/ui/button';
import { MessageSquare, Mail } from 'lucide-react';

const activities = [
  {
    date: 'Today',
    items: [
      { name: 'Christian Wood', action: 'Sent Message', to: 'Nikita Houston', time: '1 min ago', icon: 'message' },
      { name: 'Nikita Houston', action: 'Replay your message', to: 'Hello', time: '1 min ago', icon: 'reply' },
      { name: 'Christian Wood', action: 'Accept Order from', to: 'Ebay', time: '1 min ago', icon: 'order' },
      { name: 'Rohan Walker', action: 'Replay your message', to: 'Ebay', time: '1 min ago', icon: 'reply' },
    ],
  },
  {
    date: 'Yesterday',
    items: [
      { name: 'Christian Wood', action: 'Accept Order from', to: 'Amazon', time: '12:30PM', icon: 'order' },
    ],
  },
  {
    date: '25 May 2024',
    items: [
      { name: 'Christian Wood', action: 'Accept Order from', to: 'Walmart', time: '11:20AM', icon: 'order' },
    ],
  },
];

const RecentActivities = () => {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 w-full max-w-xl">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Recent Activities</h2>
        <div className="flex space-x-2">
          <Button variant="outline" className="px-4">Message</Button>
          <Button variant="outline" className="px-4">Email</Button>
        </div>
      </div>

      {activities.map((section, index) => (
        <div key={index} className="mb-4">
          <p className="text-sm font-semibold text-gray-500 mb-2">{section.date}</p>
          {section.items.map((activity, idx) => (
            <div key={idx} className="flex items-start mb-2">
              <div className="w-8 h-8 bg-blue-500 text-white flex items-center justify-center rounded-full mr-3">
                {activity.icon === 'message' ? <MessageSquare size={16} /> : activity.icon === 'reply' ? '↩️' : '📦'}
              </div>
              <div>
                <p className="text-sm">
                  <span className="text-blue-600 font-semibold">{activity.name}</span> {activity.action} <span className="text-blue-600 font-semibold">{activity.to}</span> • {activity.time}
                </p>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default RecentActivities;
