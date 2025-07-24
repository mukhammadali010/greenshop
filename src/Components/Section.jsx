import React, { useState } from 'react';

const Section = () => {
  const [activeTab, setActiveTab] = useState('description');

  return (
    <section className="w-[100%] p-20  py-8 ">
     <div className="container mx-auto">
        <div className="flex space-x-4 border-b border-gray-200 ">
        <button
          className={`pb-2 font-semibold ${
            activeTab === 'description'
              ? 'text-green-600 border-b-2 border-green-600'
              : 'text-gray-600 cursor-pointer'
          }`}
          onClick={() => setActiveTab('description')}
        >
          Product Description
        </button>
        <button
          className={`pb-2 font-semibold ${
            activeTab === 'reviews'
              ? 'text-green-600 border-b-2 border-green-600'
              : 'text-gray-600'
          }`}
          onClick={() => setActiveTab('reviews')}
        >
          Reviews (19)
        </button>
      </div>

      <div className="mt-6 text-gray-700 space-y-4">
        {activeTab === 'description' ? (
          <>
            <p>
              The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor.
            </p>
            <p>
              Pellentesque aliquet, sem eget laoreet ultrices, ipsum metus feugiat sem, quis fermentum turpis eros eget velit. Donec ac tempus ante. Fusce ultricies massa massa.
            </p>

            <div>
              <h4 className="font-bold text-gray-800 mt-6">Living Room:</h4>
              <p>
                The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. Lorem ipsum dolor sit amet.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-gray-800 mt-6">Dining Room:</h4>
              <p>
                The benefits of houseplants are endless. In addition to cleaning the air of harmful toxins, they help to improve your mood, reduce stress and provide you with better sleep.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-gray-800 mt-6">Office:</h4>
              <p>
                The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. Lorem ipsum dolor sit amet.
              </p>
            </div>
          </>
        ) : (
          <p className="italic text-gray-500">Reviews will go here...</p>
        )}
      </div>
     </div>
    </section>
  );
};

export default Section;
