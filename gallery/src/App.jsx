import "./App.css";

function App() {
  return (
    <>
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img
          src="https://assets.goal.com/images/v3/bltb8d4f2784f790fa7/230224_Mohamed_Salah_of_Liverpool_1920.jpg?auto=webp&format=pjpg&width=1200&quality=60"
          className="w-full"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-purple-500 text-xl mb-2">
            photo ops by joe
          </div>
          <ul>
            <li>
              <strong>Downloads:</strong>
              300
            </li>
            <li>
              <strong>Like:</strong>
              400
            </li>
            <li>
              <strong>Views:</strong>
              600
            </li>
          </ul>
        </div>
        <div className="px-6 py-4">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            tag
          </span>
        </div>
      </div>
    </>
  );
}

export default App;
