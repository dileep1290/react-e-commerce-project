import React from "react";

const AboutPage = () => {
  return (
    <>
      <div className="flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center">
        <h1 className="text-4xl font-bold leading-none tracking-tight sm:text-6xl">
          This Is
        </h1>
        <div className="states bg-primary shadow">
          <div className="stat">
            <div className="stat-title text-primary-content text-4xl font-bold tracking-widest">
              Store
            </div>
          </div>
        </div>
      </div>
      <p className="mt-6 text-lg leading-8 max-w-2xl mx-auto">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur
        dignissimos quod eos eius, quaerat quisquam fugiat tempore ut veniam
        minus sed enim. Eveniet error expedita delectus aut? Perspiciatis,
        tempore voluptate. Perferendis natus earum repellendus distinctio
        mollitia dolorum repudiandae aut, eligendi blanditiis at, eos, animi
        facere sint minima veniam aspernatur consequuntur autem voluptatem
        laudantium.
      </p>
    </>
  );
};

export default AboutPage;
