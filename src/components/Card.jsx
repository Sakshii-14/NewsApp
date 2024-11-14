import React from 'react';
import { useSelector } from 'react-redux';

function Card({onArticleClick}) {
  const list = useSelector((state) => state.newsslice.List);

  if (!list || list.length === 0) {
    return <p>No articles available.</p>;
  }

  const getformatteddate = (isoDate) => {
    const date = new Date(isoDate);

    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    };

    const formattedDate = date.toLocaleString('en-US', options);
    const [time, weekdayMonthYear, day] = formattedDate.split(', ');

    const times = day.split(' ');

    const finalDate = `${times[2]} ${times[3]} on ${time}  ${weekdayMonthYear} , ${date.getFullYear()}`;

    return finalDate;
  };

  return (
    <div className="flex flex-col gap-4 w-full h-full justify-center items-center mt-4 p-4 flex-1">
      {list.map((article, index) => {
        
        if (article.title==='[Removed]') return null;

        return (
          <div
            key={index}
            className="flex gap-4 sm:flex-row flex-col border w-[90vw] h-auto sm:h-[60vh] sm:w-[85vw] lg:h-[42vh] lg:w-[70vw] xl:w-[60vw] 2xl:w-[50vw] p-2 rounded-md"
            style={{
              boxShadow: '0 6px 12px rgba(0, 0, 0, 0.15), 0 6px 20px rgba(0, 0, 0, 0.10)',
            }}
            onClick={() => onArticleClick(article)}
          >
            <div className="sm:h-full sm:w-[35%] w-full h-[250px] rounded-md overflow-hidden object-cover">
              <img
                src={article.urlToImage || 'https://st3.depositphotos.com/1010280/18451/i/450/depositphotos_184518402-stock-photo-fake-news.jpg'}
                alt="news img"
                className="h-full w-full"
              />
            </div>

            
            <div className="flex flex-col flex-1 gap-3">
              <div>
                <p className="text-[1.2rem] sm:text-[1.3rem] font-light leading-tight text-slate-900">
                  {article.title || 'Default Title'}
                </p>
                <p className="text-[0.8rem] font-light text-slate-600">
                  <span className="font-bold">short by</span> {article.author || 'Unknown Author'} / {getformatteddate(article.publishedAt)}
                </p>
              </div>
              <div className="flex flex-col justify-between h-full">
                <p className="text-gray-800 text-[0.8rem] sm:text-[0.9rem] font-light">
                  {article.description || 'Description not available'}
                </p>
                <p className="text-[0.84rem] text-slate-900 font-medium">
                  Read more at {article.source.name || 'Source'}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Card;
