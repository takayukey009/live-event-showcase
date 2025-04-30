import React from 'react';
import { pastEvents } from '@/data/pastEvents';
import EventListJsonLd from './EventListJsonLd';

export default function PastEventsPage() {
  return (
    <main className="max-w-3xl mx-auto py-12 px-4">
      <EventListJsonLd />
      <h1 className="text-3xl font-bold mb-8 text-center">過去の開催一覧</h1>
      <div className="space-y-6">
        {pastEvents.map(event => (
          <div key={event.volume} className="bg-white/80 dark:bg-gray-800/80 rounded-lg shadow p-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
              <span className="text-lg font-semibold text-accent">{event.name}</span>
              <span className="text-gray-600 dark:text-gray-300 text-sm">{event.date}（{event.day}）</span>
            </div>
            <div>
              <span className="font-medium">出演者：</span>
              <span>{event.performers.join(' / ')}</span>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
