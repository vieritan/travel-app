import { FaMap, FaCalendarWeek, FaUsers } from 'react-icons/fa';

const SearchBox = () => {
  return (
    <div className="bg-white rounded-lg p-9 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-4 sm:mt-12 w-[85%] sm:w-[80%] mx-auto">
      {/* Location Input */}
      <div className="flex items-center space-x-4">
        <FaMap className="w-6 h-6 text-blue-600" />
        <div>
          <p className="text-lg font-medium">Location</p>
          <input type="text" placeholder="Where are you going?" className="outline-none rounded-md p-2 w-full placeholder:text-gray-800" />
        </div>
      </div>

      {/* Start Date Input */}
      <div className="flex items-center space-x-4">
        <FaCalendarWeek className="w-6 h-6 text-blue-600" />
        <div>
          <p className="text-lg font-medium">Start Date</p>
          <input type="date" className="outline-none rounded-md p-2 w-full" />
        </div>
      </div>

      {/* End Date Input */}
      <div className="flex items-center space-x-4">
        <FaCalendarWeek className="w-6 h-6 text-blue-600" />
        <div>
          <p className="text-lg font-medium">End Date</p>
          <input type="date" className="outline-none rounded-md p-2 w-full" />
        </div>
      </div>

      {/* Guest Input */}
      <div className="flex items-center space-x-4">
        <FaUsers className="w-6 h-6 text-blue-600" />
        <div>
          <p className="text-lg font-medium">Guest</p>
          <input type="text" placeholder="How many people?" className="outline-none rounded-md p-2 w-full placeholder:text-gray-800" />
        </div>
      </div>
    </div>
  );
};

export default SearchBox;
