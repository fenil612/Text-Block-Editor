import React, { useState } from "react";
import Editor from "./components/Editor";

export default function App() {
  const [output, setOutput] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen p-6 bg-background-light text-black dark:bg-background-dark dark:text-white">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">Tiptap Rich Text Editor</h1>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="px-3 py-1 bg-primary dark:bg-primary-dark text-white rounded"
          >
            Toggle {darkMode ? "Light" : "Dark"} Mode
          </button>
        </div>
        <Editor onChange={setOutput} />
        <div className="mt-6">
          <h2 className="text-lg font-semibold">JSON Output</h2>
          <pre className="bg-surface-light text-black dark:bg-surface-dark dark:text-white p-4 border rounded mt-2 text-sm overflow-x-auto border-border-light dark:border-border-dark">
            {JSON.stringify(output, null, 2)}
          </pre>
        </div>
      </div>
    </div>
  );
}
