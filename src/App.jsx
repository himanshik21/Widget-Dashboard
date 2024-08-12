import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addWidget, removeWidget, searchWidgets, setCategories } from "./redux-store/actions";
import "./App.css";

const App = () => {
  const categories = useSelector((state) => state.categories);
  const searchTerm = useSelector((state) => state.searchTerm);
  const dispatch = useDispatch();
  const [newWidget, setNewWidget] = useState({
    name: "",
    content: "",
    categoryId: null,
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Add widget function
  const handleAddWidget = () => {
    if (newWidget.name && newWidget.content && newWidget.categoryId) {
      dispatch(
        addWidget(newWidget.categoryId, { ...newWidget, id: Date.now() })
      );
      setNewWidget({ name: "", content: "", categoryId: null });
      setIsModalOpen(false);
    }
  };

  // Remove widget function
  const handleRemoveWidget = (categoryId, widgetId) => {
    dispatch(removeWidget(categoryId, widgetId));
  };

  // Search Function
  const handleSearch = (term) => {
    dispatch(searchWidgets(term));
  };

  // filter the search terms for categories and widgets
  const filteredCategories = categories.map((category) => ({
    ...category,
    widgets: category.widgets.filter(
      (widget) =>
        widget.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        widget.content.toLowerCase().includes(searchTerm.toLowerCase())
    ),
  }));

  // function for create a card to add new widget
  const openModalForCategory = (categoryId) => {
    setNewWidget({ ...newWidget, categoryId });
    setIsModalOpen(true);
  };

  useEffect(() => {
    const savedCategories = localStorage.getItem("categories");
    if (savedCategories) {
      dispatch(setCategories(JSON.parse(savedCategories)));
    }
  }, [dispatch]);

   useEffect(() => {
     localStorage.setItem("categories", JSON.stringify(categories));
   }, [categories]);

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
            Dashboard
          </h1>
          <button
            onClick={() => setIsModalOpen(true)}
            className="mt-4 sm:mt-0 sm:ml-4 w-full sm:w-auto bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 sm:py-2.5 px-3 sm:px-4 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 text-center"
          >
            + Add Widget
          </button>
        </div>

        {/* Search Bar */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search widgets..."
            value={searchTerm}
            onChange={(e) => handleSearch(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* Categories of Widgets */}
        {filteredCategories.map((category) => (
          <div key={category.id} className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              {category.name}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Display Widgets */}
              {category.widgets.map((widget) => (
                <div
                  key={widget.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300 ease-in-out"
                >
                  <div className="p-5">
                    <div className="flex justify-between items-center mb-3">
                      <h3 className="text-lg font-medium text-gray-800">
                        {widget.name}
                      </h3>
                      <button
                        onClick={() =>
                          handleRemoveWidget(category.id, widget.id)
                        }
                        className="text-red-500 hover:text-red-700 transition duration-300 ease-in-out"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                    </div>
                    <p className="text-gray-600">{widget.content}</p>
                  </div>
                </div>
              ))}

              {/* Add New Widget Card */}
              <div
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300 ease-in-out cursor-pointer flex justify-center items-center"
                onClick={() => openModalForCategory(category.id)}
              >
                <div className="p-5">
                  <h3 className="text-lg font-medium text-blue-500 text-center">
                    + Add Widget
                  </h3>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* rendering a a pop-up window when the isModalOpen state is true for adding a new widget */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 overflow-y-auto h-full w-full flex justify-center items-center"
          id="my-modal"
        >
          <div className="relative bg-white rounded-lg shadow-xl p-8 w-full max-w-md">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Add New Widget
            </h3>
            <input
              type="text"
              placeholder="Widget Name"
              value={newWidget.name}
              onChange={(e) =>
                setNewWidget({ ...newWidget, name: e.target.value })
              }
              className="w-full px-4 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500 mb-4"
            />
            <textarea
              placeholder="Widget Content"
              value={newWidget.content}
              onChange={(e) =>
                setNewWidget({ ...newWidget, content: e.target.value })
              }
              className="w-full px-4 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500 mb-4"
              rows="3"
            />
            <div className="flex justify-end">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg mr-2 hover:bg-gray-400 transition duration-300 ease-in-out"
              >
                Cancel
              </button>
              <button
                onClick={handleAddWidget}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out"
              >
                Add Widget
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
