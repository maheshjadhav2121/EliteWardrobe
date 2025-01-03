import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn more about our company, mission, and values.",
};

export default function AboutPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#E11D48] to-[#FF6B6B] py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-white mb-4">About Us</h1>
          <p className="text-xl text-gray-200">
            Discover the story behind our passion for excellence.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Introduction Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Welcome to EliteWardrobe
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            At EliteWardrobe, we believe that fashion is more than just
            clothing—it’s a way to express yourself, boost your confidence, and
            make a statement. Founded in 2023, we’ve grown from a small online
            store to a global brand, offering a curated selection of
            high-quality fashion for men, women, and kids.
          </p>
          <p className="text-lg text-gray-600">
            Our journey has been driven by a commitment to quality, innovation,
            and customer satisfaction. We’re here to help you look and feel your
            best, every day.
          </p>
        </section>

        {/* Mission Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
          <p className="text-lg text-gray-600 mb-6">
            Our mission is simple: to inspire confidence and individuality
            through fashion that’s accessible, sustainable, and timeless. We
            strive to create a shopping experience that’s seamless, enjoyable,
            and empowering.
          </p>
          <p className="text-lg text-gray-600">
            We’re dedicated to offering products that not only look great but
            also stand the test of time. From everyday essentials to statement
            pieces, we’ve got you covered.
          </p>
        </section>

        {/* Values Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Quality
              </h3>
              <p className="text-gray-600">
                We source the finest materials and work with skilled artisans to
                ensure every product meets our high standards.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Innovation
              </h3>
              <p className="text-gray-600">
                We’re constantly exploring new trends, technologies, and designs
                to bring you fresh and exciting collections.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Sustainability
              </h3>
              <p className="text-gray-600">
                We’re committed to reducing our environmental impact by using
                eco-friendly materials and ethical practices.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Customer First
              </h3>
              <p className="text-gray-600">
                Your satisfaction is our top priority. We’re here to provide
                exceptional service and support every step of the way.
              </p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Meet Our Team
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* CEO */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="flex justify-center mb-6">
                {" "}
                {/* Increased margin-bottom */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-24 w-24 text-[#E11D48]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                John Doe
              </h3>
              <p className="text-gray-600">CEO & Founder</p>
            </div>

            {/* Creative Director */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="flex justify-center mb-6">
                {" "}
                {/* Increased margin-bottom */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-24 w-24 text-[#E11D48]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Jane Smith
              </h3>
              <p className="text-gray-600">Creative Director</p>
            </div>

            {/* Head of Operations */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="flex justify-center mb-6">
                {" "}
                {/* Increased margin-bottom */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-24 w-24 text-[#E11D48]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0zM10 8v4a1 1 0 001 1h3m-6-4h4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Mike Johnson
              </h3>
              <p className="text-gray-600">Head of Operations</p>
            </div>
          </div>
        </section>

        {/* Call-to-Action Section */}
        <section className="bg-gradient-to-r from-[#E11D48] to-[#FF6B6B] py-12 rounded-lg text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Join the EliteWardrobe Family
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Explore our latest collections and find your perfect style today.
          </p>
          <a
            href="/shop"
            className="inline-block bg-white text-[#E11D48] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300"
          >
            Shop Now
          </a>
        </section>
      </div>
    </div>
  );
}
