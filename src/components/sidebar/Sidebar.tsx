export function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="logo">
        <h1></h1>
      </div>
      <nav className="main-nav">
        <ul>
          <li><a href="/taxonomy">Taxonomy</a></li>
          <li><a href="/sources">Data Sources</a></li>
          <li><a href="/results">Results <i className="icn icn-arrow arrw-dwn"></i></a>
            {/* <ul>
              <li><a href="#">Result 1</a></li>
              <li><a href="#">Result 2</a></li>
              <li><a href="#">Result 3</a></li>
            </ul> */}
          </li>
        </ul>
      </nav>

      <nav className="main-nav">
        <ul>
          <li> - </li>
          <li><a href="/results" >Table</a></li>
          <li><a href="/results/bar" >Bar</a></li>
          <li><a href="/results/graph" >Graph</a></li>
          <li><a href="/results/line" >Line</a></li>
          <li><a href="/results/bubble" >Bubble</a></li>
          <li><a href="/results/map" >Map</a></li>
        </ul>
      </nav>
      {/* <button className="btn btn--show-hide"><span>Hide sidebar</span><i className="icn icn--double-chevron-up"></i>
      </button> */}
    </aside>
  );
}

// https://www.pluralsight.com/guides/using-d3.js-inside-a-react-app