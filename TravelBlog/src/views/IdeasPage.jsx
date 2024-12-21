import { useState } from "react";
import FrontMap from "../components/FrontMap";

function IdeasPage() {
  const [formData, setFormData] = useState({
    country: "",
    city: "",
    from: "",
    to: "",
    ideas: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    setFormData({
      country: "",
      city: "",
      from: "",
      to: "",
      ideas: "",
    });
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center p-4 bg-tertiary">
      <div className="w-full md:w-1/2 lg:w-2/3 flex flex-col items-center p-6">
        <div className="mb-6 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Inspire Yourself</h1>
          <p className="text-base md:text-lg text-gray-600">Take a look into the world map and give me a suggestion using the form</p>
        </div>
        <div className="w-full max-w-4xl">
          <FrontMap markers={false} />
        </div>
      </div>
      <form
        onSubmit={handleSubmit}
        className="w-full md:w-1/2 lg:w-1/3 mt-8 md:mt-0 p-4 flex flex-col space-y-4 lg:pr-32"
      >
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Country</label>
          <input
            type="text"
            id="country"
            name="country"
            value={formData.country}
            onChange={handleChange}
            className="p-2 border rounded-md w-full border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter a country"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">City</label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            className="p-2 border rounded-md w-full border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter a city"
          />
        </div>

        <div className="mb-4 flex flex-col sm:flex-row sm:gap-4">
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700">From</label>
            <input
              type="date"
              id="from"
              name="from"
              value={formData.from}
              onChange={handleChange}
              className="p-2 border rounded-md w-full border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700">To</label>
            <input
              type="date"
              id="to"
              name="to"
              value={formData.to}
              onChange={handleChange}
              className="p-2 border rounded-md w-full border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">What to do?</label>
          <textarea
            id="ideas"
            name="ideas"
            rows="4"
            value={formData.ideas}
            onChange={handleChange}
            className="p-2 border rounded-md w-full border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
            placeholder="Got ideas on how to spend time? Share them here!"
          ></textarea>
        </div>

        <div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Enjoy!
          </button>
        </div>
      </form>
    </div>
  );
}

export default IdeasPage;


