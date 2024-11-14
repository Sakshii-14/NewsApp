import React from 'react';

function MobilePreview({ article, onClose }) {
  if (!article) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-30">
      <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 max-w-lg">
      <img src={article.urlToImage || 'https://st3.depositphotos.com/1010280/18451/i/450/depositphotos_184518402-stock-photo-fake-news.jpg' } alt="" className='w-full h-[200px] rounded-lg object-cover' />
        <h2 className="text-2xl font-semibold mb-4">{article.title}</h2>
        <p className="text-gray-700">{article.content || 'Content not available'}</p>
        <div className='flex gap-5 justify-between'>
        <a href={article.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline mt-4 inline-block">
          Read full article
        </a>
        <button onClick={onClose} className="mt-4 text-slate-800 underline">
          Close
        </button>
        </div>
        
      </div>
    </div>
  );
}

export default MobilePreview;
