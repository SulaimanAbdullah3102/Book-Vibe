import { CiStar } from "react-icons/ci";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { key, keys } from "localforage";

const Book = ({ book }) => {
    const {bookId,bookName, image, author, category, tags, rating } = book;

    return (
      <Link to = {`/books/${bookId}`}>
        <div>
            <div className="card bg-base-100 w-96 shadow-xl p-6 rounded-lg">
                <figure className='p-6 rounded-xl' style={{
                    backgroundColor: "#F3F3F3"
                }}>
                    <img
                        src={image}
                        className='h-[166px] '
                        alt={bookName} />
                </figure>
              <div className='flex space-x-4'>
              {
                    tags.map((tag, idx) =>
                    // eslint-disable-next-line react/jsx-key
                    <div key = {idx} className="card-actions justify-center mt-5">
                        <button><div className="badge badge-outline text-green-500">{tag}</div></button>
                    </div>
                    )
                }
              </div>

                <div className="card-body">
                    <h2 className="card-title">
                        {bookName}
                    </h2>
                    <p>By : {author}</p>


                </div>
                <div className='border-b-2 border-dashed'></div>
                <div className='flex justify-between'>
                    <h2>{category}</h2>
                    <p className="flex items-center">{rating}<CiStar />
                    </p>
                </div>

            </div>
        </div>
      </Link>
    );
};

Book.propTypes = {
    book: PropTypes.object
};

export default Book;