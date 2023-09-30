import { Link } from 'react-router-dom';
import { FaHeartbeat, FaBrain } from 'react-icons/fa';

export default function Main() {
  return (
    <div className="text-center p-8">
      <div>
        <div className="h-80vh flex items-center justify-center">
          <img
            src="src/assets/images/logo.svg"
            alt="Logo"
            className="max-w-80%"
          />
        </div>
      </div>

      <h2 className="text-xl font-bold my-4">
        Welcome to MediML, your trustworthy AI for medical purposes
      </h2>

      <div className="mt-8 flex justify-center space-x-8">
        <Link to="/stroke" className="text-blue-500 hover:text-blue-700">
          <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-full flex items-center space-x-2">
            <span>Stroke</span>
            <FaBrain />
          </button>
        </Link>

        <Link to="/cardiovascular" className="text-blue-500 hover:text-blue-700">
          <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-full flex items-center space-x-2">
            <span>Cardiovascular</span>
            <FaHeartbeat />
          </button>
        </Link>
      </div>
    </div>
  );
}
