import './nav.css';

  function Navigation(){
    return (
      <nav>
        <div className="logo">
          <span id="logo">tweeter</span>
          <i className="fas fa-dove"></i>
        </div>
        <div id="write-new">
          <span><strong>Write</strong> a new tweet</span>
          <i className="fa fa-angle-double-down" aria-hidden="true"></i>
        </div>
      </nav>
    );
  }

  export default Navigation;
