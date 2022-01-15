import './sidebar.css';


export function Sidebar() {
  return (
      <div className="sidebar">
        <a href="/results">R</a>
        <a href="/taxonomy">T</a>
        <a href="/sources">S</a>
      </div>
  );
}

// https://www.pluralsight.com/guides/using-d3.js-inside-a-react-app