import React from "react";
import BlogItem from "./BlogItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const BlogTabs = () => {
  return (
    <div className="m-4 py-2 sm:m-6 md:m-12 lg:m-16">
      <div className="sm:flex justify-between items-center gap-4">
        <div>
          <p className="text-3xl dark:text-white">
            Recents Articles
          </p>
          <p className="text-dark-50">Explore our blogs by topics</p>
        </div>

        <div className="mt-4 sm:mt-0 dark:bg-dark-10 border border-dark-50 rounded-full px-4 py-1 ">
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

      <BlogItem />
    
      <BlogItem />
    
      <BlogItem />
    </div>
  );
};

export default BlogTabs;
