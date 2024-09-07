'use client';
import React from 'react';
import { useRouter } from 'next/navigation';

export default function UgandaPage() {
  const router = useRouter();

  return (
    <div className="w-full max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-3xl font-bold mb-4">ウガンダ</h1>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">基本情報</h2>
        <p>首都: カンパラ</p>
        <p>人口: 約4,570万人 (2021年推定)</p>
        <p>言語: 英語（公用語）、スワヒリ語、ルガンダ語など</p>
        <p>通貨: ウガンダ・シリング (UGX)</p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">重要な注意事項</h2>
        <ul className="list-disc pl-5">
          <li>渡航前に最新の安全情報を確認してください。</li>
          <li>マラリア予防薬の服用を検討してください。</li>
          <li>飲料水は必ずミネラルウォーターを使用してください。</li>
          <li>貴重品の管理には十分注意してください。</li>
        </ul>
      </section>

      <button 
        onClick={() => router.push('/')}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        トップページに戻る
      </button>
    </div>
  );
}