import { FaBrain, FaHeartbeat } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import Logo from '@assets/images/logo.svg?react';

export default function Main() {
  return (
    <div className="p-8 text-center">
      <div>
        <div className="h-80vh flex items-center justify-center">
          <Logo />
        </div>
      </div>

      <h2 className="my-4 text-xl font-bold">
        Welcome to MediML, your trustworthy AI for medical purposes
      </h2>

      <div className="mt-8 flex justify-center space-x-8">
        <Link to="/stroke" className="text-blue-500 hover:text-blue-700">
          <button className="flex items-center space-x-2 rounded-full bg-blue-500 px-4 py-2 text-white hover:bg-blue-700">
            <span>Stroke</span>
            <FaBrain />
          </button>
        </Link>

        <Link
          to="/cardiovascular"
          className="text-blue-500 hover:text-blue-700"
        >
          <button className="flex items-center space-x-2 rounded-full bg-blue-500 px-4 py-2 text-white hover:bg-blue-700">
            <span>Cardiovascular</span>
            <FaHeartbeat />
          </button>
        </Link>
      </div>
    </div>
  );
}
