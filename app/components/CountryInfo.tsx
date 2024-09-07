'use client';
import React from 'react';
import { useRouter } from 'next/navigation';

export default function COICompass() {
  const router = useRouter();
  const navigateToCountryPage = (country: string) => {
    router.push(`/country/${country}`);
  };

  return (
    <div className="w-full max-w-lg mx-auto p-4 bg-white shadow-md rounded-lg">
      <div className="mb-4 text-center">
        <h2 className="text-2xl font-bold">COI Compass</h2>
        <p className="text-lg mt-2">
          COI Compassでは、各国の重要な情報に簡単にアクセスできます。以下のボタンをクリックして、各国の詳細ページに移動してください。
        </p>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <button 
          onClick={() => navigateToCountryPage('uganda')}
          className="w-full p-4 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          ウガンダ
        </button>
        <button 
          onClick={() => navigateToCountryPage('sri-lanka')}
          className="w-full p-4 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          スリランカ
        </button>
        <button 
          onClick={() => navigateToCountryPage('nigeria')}
          className="w-full p-4 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          ナイジェリア
        </button>
        <button 
          onClick={() => navigateToCountryPage('cameroon')}
          className="w-full p-4 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          カメルーン
        </button>
      </div>
    </div>
  );
}