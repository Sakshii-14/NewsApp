import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Card from './components/Card';
import { useDispatch } from 'react-redux';
import Loader from './components/Loader';
import useNewsData from './customhook/useNewsData';
import { getList } from './feature/newsSlice';
import NewsPreview from './components/NewsPreview';
import MobilePreview from './components/MobilePreview';

function App() {
  const dispatch = useDispatch();
  const { list, loading, error } = useNewsData();
  const [selectedArticle, setSelectedArticle] = useState(null);

  const handleArticleClick = (article) => {
    setSelectedArticle(article); 
  };

  const closePreview = () => {
    setSelectedArticle(null); 
  };

  useEffect(() => {
    if (list.length > 0) {
      dispatch(getList({ list }));
    }
  }, [list, dispatch]);


 

  if (loading) {
    return (
      <div className="flex h-full w-full justify-center items-center">
        <Loader />
      </div>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="flex flex-col gap-6 mt-[5rem]">
      <Navbar />
      
      <div className="flex w-full">
        <div className={`transition-all duration-300 ${selectedArticle ? 'sm:w-2/3 w-full' : 'w-full'}`}>
          <Card onArticleClick={handleArticleClick} /> 
        </div>

        {selectedArticle && (
          <div
            className="w-1/3 mt-[4.5rem] sm:block hidden"
            style={{
              position: 'fixed', 
              top: 0, 
              right: 0, 
              zIndex: 10, 
              overflowY: 'auto', 
              maxHeight:'100vh',
            }}
          >
            <NewsPreview article={selectedArticle} onClose={closePreview} />
          </div>
        )}
        {
          selectedArticle && (
            <div className='sm:hidden block'>
                  <MobilePreview article={selectedArticle} onClose={closePreview}/>
            </div>
          )
        }
      </div>
    </div>
  );
}

export default App;
