import React from 'react';

function NewsPreview({ article, onClose }) {
  if (!article) return null;

  return (
    <div className="bg-white p-6 border rounded-lg shadow-lg w-full h-[100vh] overflow-y-auto flex flex-col gap-4">
      
      <img src={article.urlToImage || 'https://st3.depositphotos.com/1010280/18451/i/450/depositphotos_184518402-stock-photo-fake-news.jpg' } alt="" className='w-full  h-[100px] rounded-lg object-cover' />
      <h2 className="text-2xl font-semibold">{article.title}</h2>
      <p className="text-gray-700">{article.content || 'Content not available'}</p>
      <div className='flex gap-4 justify-between items-center'>
      <a 
        href={article.url} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-blue-500 underline mt-4"
      >
        Read full article
      </a>
       <button onClick={onClose} className="mt-4 text-slate-800 underline">
          Close
        </button>
      </div>
      
    </div>
  );
}

export default NewsPreview;
