
import { useLoaderData, useParams } from 'react-router-dom';
import { addToStoredReadList } from './addtoreadlist';

const Bookdetails = () => {
    const {bookId} = useParams();
    const data = useLoaderData();
    const id = parseInt(bookId);

  const book = data.find(book => book.bookId === id);
 const {image, bookId : currentId } = book;

const handleAddtomark =(id) => {
    addToStoredReadList(id);
}
  
    
    return (
        <div>
            <img src={image} alt="" />
            <button onClick={() => handleAddtomark(bookId)} className="btn btn-outline btn-accent">aff to read list</button>
            <button className="btn btn-outline btn-accent">Accent</button>
        </div>
    );
};

export default Bookdetails;