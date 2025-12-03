import React from 'react';
import { pastEvents } from '@/data/pastEvents';

/**
 * Google構造化データ：イベントリストのJSON-LDを出力
 */
const EventListJsonLd = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "YAGATE LIVE 過去イベント一覧",
    "itemListElement": pastEvents.map((event, idx) => ({
      "@type": "Event",
      "position": idx + 1,
      "name": event.name,
      "startDate": event.date,
      "performer": event.performers.map(name => ({ "@type": "Person", "name": name })),
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      id="event-list-jsonld"
    />
  );
};

export default EventListJsonLd;
