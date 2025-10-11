"use client"
import { useState } from 'react';
import { FiClock, FiUser, FiSettings, FiUpload, FiDownload, FiEdit, FiTrash2, FiCheckCircle } from 'react-icons/fi';

type Activity = {
    id: number;
    icon: any;
    action: string;
    time: string;
    user: string;
}

export default function ActivityOverview() {
    const [activeTab, setActiveTab] = useState('daily');

    const activities : { [key: string]: Activity[] } = {
        daily: [
            { id: 1, icon: FiUpload, action: 'Uploaded new document', time: '2 hours ago', user: 'John Doe' },
            { id: 2, icon: FiEdit, action: 'Updated profile settings', time: '3 hours ago', user: 'Jane Smith' },
            { id: 3, icon: FiCheckCircle, action: 'Completed task review', time: '5 hours ago', user: 'Mike Johnson' },
            { id: 4, icon: FiDownload, action: 'Downloaded report', time: '6 hours ago', user: 'Sarah Wilson' },
            { id: 5, icon: FiSettings, action: 'Changed system settings', time: '8 hours ago', user: 'Admin' },
        ],
        weekly: [
            { id: 1, icon: FiUser, action: 'New user registered', time: '2 days ago', user: 'System' },
            { id: 2, icon: FiUpload, action: 'Bulk file upload', time: '3 days ago', user: 'John Doe' },
            { id: 3, icon: FiTrash2, action: 'Deleted old files', time: '4 days ago', user: 'Admin' },
            { id: 4, icon: FiCheckCircle, action: 'Project milestone completed', time: '5 days ago', user: 'Team Lead' },
            { id: 5, icon: FiEdit, action: 'Updated documentation', time: '6 days ago', user: 'Jane Smith' },
        ],
        monthly: [
            { id: 1, icon: FiCheckCircle, action: 'Monthly report generated', time: '1 week ago', user: 'System' },
            { id: 2, icon: FiSettings, action: 'Security audit completed', time: '2 weeks ago', user: 'Admin' },
            { id: 3, icon: FiUser, action: '50 new users joined', time: '2 weeks ago', user: 'System' },
            { id: 4, icon: FiUpload, action: 'Database backup created', time: '3 weeks ago', user: 'System' },
            { id: 5, icon: FiEdit, action: 'Terms of service updated', time: '3 weeks ago', user: 'Legal Team' },
        ],
        yearly: [
            { id: 1, icon: FiCheckCircle, action: 'Annual review completed', time: '2 months ago', user: 'Management' },
            { id: 2, icon: FiUser, action: '1000+ users milestone reached', time: '4 months ago', user: 'System' },
            { id: 3, icon: FiSettings, action: 'Major system upgrade', time: '6 months ago', user: 'IT Team' },
            { id: 4, icon: FiUpload, action: 'Year-end data migration', time: '8 months ago', user: 'Admin' },
            { id: 5, icon: FiCheckCircle, action: 'Annual goals achieved', time: '10 months ago', user: 'CEO' },
        ],
    };

    const tabs = [
        { key: 'daily', label: 'Daily' },
        { key: 'weekly', label: 'Weekly' },
        { key: 'monthly', label: 'Monthly' },
        { key: 'yearly', label: 'Yearly' },
    ];

    return (
        <div className="w-full bg-white">
            <div className="w-full">
                {/* Header */}
                <div className="w-full">
                    <h1 className="text-lg font-bold text-black">Activity Overview</h1>
                    <p className="text-gray-600">Track recent activities and system events</p>
                </div>

                {/* Tabs */}
                <div className="w-full h-10 flex items-center gap-6 mb-4 border-b border-gray-200">
                    {tabs.map((tab) => (
                        <button
                            key={tab.key}
                            onClick={() => setActiveTab(tab.key)}
                            className={` py-1.5 font-medium transition-all ${activeTab === tab.key
                                    ? 'text-black border-b-2 border-black'
                                    : 'text-gray-400 hover:text-gray-600'
                                }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Activity List */}
                <div className="space-y-4">
                    {activities[activeTab].map((activity) => {
                        const IconComponent = activity.icon;
                        return (
                            <div
                                key={activity.id}
                                className="flex items-start gap-4 p-4 border border-gray-200 rounded-md hover:bg-gray-50 transition-colors"
                            >
                                {/* Icon */}
                                <div className="flex-shrink-0 w-10 h-10 bg-black text-white rounded-full flex items-center justify-center">
                                    <IconComponent size={20} />
                                </div>

                                {/* Content */}
                                <div className="flex-1 min-w-0">
                                    <p className="text-black font-medium mb-1">{activity.action}</p>
                                    <div className="flex items-center gap-3 text-sm text-gray-500">
                                        <span className="flex items-center gap-1">
                                            <FiUser size={14} />
                                            {activity.user}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <FiClock size={14} />
                                            {activity.time}
                                        </span>
                                    </div>
                                </div>

                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}