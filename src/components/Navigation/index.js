import './nav.css';

  function Navigation(){
    return (
      <nav>
        <div class="logo">
          <span id="logo">tweeter</span>
          <i class="fas fa-dove"></i>
        </div>
        <div id="write-new">
          <span><strong>Write</strong> a new tweet</span>
          <i class="fa fa-angle-double-down" aria-hidden="true"></i>
        </div>
      </nav>
    );
  }

  export default Navigation;
