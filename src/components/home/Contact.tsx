import {
  faEnvelope,
  faMapLocation,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Contact = () => {
  return (
    <div className="m-4 sm:m-6 md:m-12 lg:m-16 grid md:grid-cols-2 gap-2 items-center text-left ">
      <div className="my-5">
        <p className="text-5xl capatilize text-dark-10 dark:text-white  mb-6">
          Lets Talk<br></br> Tell us about your<br></br>
          <span className="dark:text-white font-bold">Project.</span>
        </p>
        <div className="flex  items-center mb-5 text-dark-50">
          <div>
            <FontAwesomeIcon icon={faPhone} />
          </div>
          <div className="ml-3">
            <p className="text-sm">Contact Number</p>
            <p className="font-normal text-lg text-dark-10 dark:text-white">
              +91-7086146243
            </p>
          </div>
        </div>
        <div className="flex  items-center mb-5 text-dark-50">
          <div>
            <FontAwesomeIcon icon={faEnvelope} />
          </div>
          <div className="ml-3">
            <p className="text-sm">Mail us at</p>
            <p className=" font-normal text-lg text-dark-10 dark:text-white">
              adhunikcode@gmail.com
            </p>
          </div>
        </div>
        <div className="flex  items-center mb-5 text-dark-50">
          <div>
            <FontAwesomeIcon icon={faMapLocation} />
          </div>
          <div className="ml-3">
            <p className="text-sm">Location</p>
            <p className=" font-normal text-lg text-dark-10 dark:text-white">
              Dibrugarh, Assam, <br></br>India, 785676
            </p>
          </div>
        </div>
      </div>
      <div className="bg-mate md:p-6 rounded-lg">
        <div className="m-5">
          <p className="dark:text-white text-5xl mb-5">Send a Message.</p>
          <form>
            <div className="mb-3">
              <label className="block text-dark-50">Your Name</label>
              <input
                className="block dark:bg-dark-10 w-full px-4 py-2 rounded-md mt-1 mb-2 dark:text-white border border-dark-50 focus:outline-none focus:border-white "
                type="text"
              />
            </div>
            <div className="mb-3">
              <label className="block text-dark-50">Your Email</label>
              <input
                className="block dark:bg-dark-10 w-full px-4 py-2 rounded-md mt-1 mb-2 dark:text-white border border-dark-50 focus:outline-none  focus:border-white"
                type="email"
              ></input>
            </div>
            <div className="mb-3">
              <label className="block text-dark-50">Message</label>
              <textarea
                className="block dark:bg-dark-10 w-full px-4 py-2 rounded-md mt-1 mb-2 dark:text-white border border-dark-50 focus:outline-none focus:border-white "
                rows="4"
              ></textarea>
            </div>
            <div className="flex  justify-end">
              <button
                type="submit"
                className="bg-accent-10 text-white  rounded py-2 px-4  dark:bg-dark-90 dark:text-dark-10 font-bold dark:hover:bg-white hover:bg-dark-20"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
