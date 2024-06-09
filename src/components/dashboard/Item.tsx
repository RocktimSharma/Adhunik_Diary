import { faEyeSlash, faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Item = () => {
  return (
    <div className="my-7 py-3">
      <div className="flex justify-between">
        <div>
          <p className="text-xl font-medium text-dark-10 dark:text-white">
            Title of the Article
          </p>
          <p className="text-dark-50">
            Views<span className="text-dark-30 dark:text-dark-80"> 50</span>
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
      <div className="flex gap-2 mt-3">
        <button className="px-2  py-1 border border-dark-50 rounded-md text-dark-30 dark:text-dark-90 hover:bg-dark-10 hover:text-white dark:hover:bg-dark-90 dark:hover:text-dark-10">
          <FontAwesomeIcon className="text-sm "icon={faPen}/> Edit
        </button>
       
        <button className="px-2 py-1 border border-dark-50 rounded-md text-dark-30 dark:text-dark-90 hover:bg-dark-10 hover:text-white dark:hover:bg-dark-90 dark:hover:text-dark-10">
        <FontAwesomeIcon className="text-sm "icon={faTrash}/> Delete
        </button>
        <button className="px-2 py-1 border border-dark-50 rounded-md text-dark-30 dark:text-dark-90 hover:bg-dark-10 hover:text-white dark:hover:bg-dark-90 dark:hover:text-dark-10">
        <FontAwesomeIcon className="text-sm "icon={faEyeSlash}/> Unpublish
        </button>
      </div>
    </div>
  );
};

export default Item;
