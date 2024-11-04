
import bannerbg from '../assets/books.jpg'
const Banner = () => {
    return (
        <div>
            <div className="hero bg-base-200 py-10">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img
      src={bannerbg}
      className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">Books to freshen up <br /> 
      your bookshelf</h1>
    
      <button className="btn btn-primary mt-10">Get Started</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;