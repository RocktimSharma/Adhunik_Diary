import React from "react";

const BlogItem = () => {
  return (
    <div className="my-7 py-3">
      <div className="flex justify-between">
        <div>
          <p className="text-xl font-medium text-dark-10 dark:text-white">
            Title of the Article
          </p>
          <p className="text-dark-50">
            Author<span className="text-dark-30 dark:text-dark-80"> Rocktim Sharma</span>
          </p>
        </div>
        <div className="text-dark-50">
          <p className="text-sm">12th May,2024</p>
          <p className="text-sm">Machine Learning</p>
        </div>
      </div>
      <div className="mt-1">
        <p className="text-dark-30 dark:text-dark-50 font-light line-clamp-3 text-justify">
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a document or a
          typeface without relying on meaningful content. Lorem ipsum may be
          used as a placeholder before the final copy is available. In
          publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a document
        </p>
      </div>
    </div>
  );
};

export default BlogItem;
