import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Item from "./Item";

const Dashboard = () => {
  return (
    <div className="m-4 py-2 sm:m-6 md:mx-12 ">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-3xl  text-dark-10 dark:text-dark-90">Articles</p>
          <p className="text-dark-50">Explore your publications</p>
        </div>
        <button className="px-4 py-2 bg-dark-10 dark:bg-dark-90 text-white dark:text-dark-10 rounded-md text-white hover:bg-dark-30 dark:hover:bg-white">
          Create Blog
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12">
        <div className="grid grid-cols-3 gap-2 md:gap-4">
          <select className="text-sm px-4 py-2 dark:bg-dark-10 border border-dark-50 rounded-md outline-none dark:text-white">
              <option >All</option>
              <option >Machine Learning</option>
              <option >Javascript</option>
              <option >Langchain</option>
          </select>

          <select className="text-sm px-4 py-2 dark:bg-dark-10 border border-dark-50 rounded-md outline-none dark:text-white">
    
              <option >Newest</option>
              <option >Oldest</option>
              <option >Most Viewed</option>
          </select>

          <select className="selector text-sm px-4 py-2 dark:bg-dark-10 border border-dark-50 rounded-md outline-none dark:text-white">
              <option className="focus:bg-white">All</option>
              <option className="focus:bg-white">Published</option>
              <option className="focus:bg-white">Unpublished</option>
            
          </select>

        </div>
        <div className="flex md:justify-end">
        <div className="w-full md:w-fit  mt-4 sm:mt-0 dark:bg-dark-10 border border-dark-50 rounded-full px-4 py-1 ">
          <label className="text-dark-50">
            <FontAwesomeIcon icon={faSearch} />
          </label>
          <input
            type="text"
            placeholder="Search..."
            className="text-sm px-3 py-1 dark:bg-dark-10 border-none outline-none dark:text-white"
          />
        </div>
        </div>
      
      </div>
      <div>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>

      </div>
    </div>
  );
};

export default Dashboard;
