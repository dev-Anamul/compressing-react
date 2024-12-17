type Props = {
  title: string;
  description: string;
  image: string;
  date: string;
  onClick: () => void;
};

function PostCard({ title, image, description, date, onClick }: Props) {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white border border-gray-200">
      <img className="w-full h-48 object-cover" src={image} alt={title} />
      <div className="p-4">
        <h2 className="text-lg font-bold text-gray-800 mb-2">{title}</h2>
        <p className="text-gray-500 text-sm mb-4">{date}</p>
        <p className="text-gray-700 text-base mb-4">{description}</p>
        <button
          onClick={onClick}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Read More
        </button>
      </div>
    </div>
  );
}

export default PostCard;
