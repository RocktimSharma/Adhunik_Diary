const CommandsView = ({ items, command }) => {
  return (
    <div className="dark:bg-dark-30 bg-gray-100  rounded text-dark-10 dark:text-dark-90">
      <ul className="p-3 max-h-60 overflow-y-auto custom-scrollbar">
        {items.map((item, index: number) => (
          <li
            key={index}
            onClick={() => command(item)}
            className="p-2 rounded-md dark:hover:text-white hover:text-dark-10 dark:hover:bg-dark-40 hover:bg-white"
          >
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 bg-gray-200 text-dark-10 text-xl items-center justify-center rounded">{item.icon}</div>
              <div >
                <p className="mb-0">{item.title}</p>
                <p className="text-xs mt-0 text-dark-50">{item.description}</p>
              
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommandsView;
