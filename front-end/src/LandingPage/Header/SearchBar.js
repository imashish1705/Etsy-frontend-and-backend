import "./SearchBar.css";

function SearchBar() {
  return (
    <>
  
    <div className="search_container">
      <svg xmlns="http://www.w3.org/2000/svg" style={{ display: "none" }}>
        <symbol
          xmlns="http://www.w3.org/2000/svg"
          id="sbx-icon-search-14"
          viewBox="0 0 40 40"
        >
          <path
            d="M24.19 28.6c-2.464 1.634-5.42 2.584-8.598 2.584C6.982 31.184 0 24.204 0 15.592 0 6.982 6.98 0 15.592 0c8.61 0 15.592 6.98 15.592 15.592 0 3.178-.95 6.134-2.583 8.6l10.24 10.24c1.175 1.173 1.18 3.07 0 4.252l-.156.155c-1.175 1.174-3.08 1.175-4.253 0L24.19 28.6zm-8.598 1.025c7.75 0 14.033-6.283 14.033-14.033 0-7.75-6.283-14.033-14.033-14.033C7.842 1.56 1.56 7.84 1.56 15.59S7.84 29.625 15.59 29.625zm10.646-1.182c-.39-.39-.39-1.023.003-1.417l.786-.785c.392-.39 1.028-.39 1.417-.002l9.612 9.612c.39.39.39 1.022-.003 1.416l-.786.786c-.392.392-1.028.39-1.416.003l-9.612-9.612zM15.592 3.898c-6.458 0-11.694 5.236-11.694 11.694 0 .43.35.78.78.78.43 0 .78-.35.78-.78 0-5.597 4.537-10.135 10.134-10.135.43 0 .78-.35.78-.78 0-.43-.35-.78-.78-.78z"
            fill-rule="evenodd"
          />
        </symbol>
        
        <symbol
          xmlns="http://www.w3.org/2000/svg"
          id="sbx-icon-clear-5"
          viewBox="0 0 20 20"
        >
          <path
            d="M10 20c5.523 0 10-4.477 10-10S15.523 0 10 0 0 4.477 0 10s4.477 10 10 10zm1.35-10.123l3.567 3.568-1.225 1.226-3.57-3.568-3.567 3.57-1.226-1.227 3.568-3.568-3.57-3.57 1.227-1.224 3.568 3.568 3.57-3.567 1.224 1.225-3.568 3.57zM10 18.272c4.568 0 8.272-3.704 8.272-8.272S14.568 1.728 10 1.728 1.728 5.432 1.728 10 5.432 18.272 10 18.272z"
            fill-rule="evenodd"
          />
        </symbol>
      </svg>
      
      <form
        novalidate="novalidate"
        onsubmit="return false;"
        className="searchbox searchbar"
      >
        <div role="search" className="searchbar__wrapper">
          <input
            type="search"
            name="search"
            placeholder="Search for anything"
            autocomplete="off"
            required="required"
            className="searchbar__input"
          />
          <button
            type="submit"
            title="Submit your search query."
            className="searchbar__submit"
          >
            <svg role="img" aria-label="Search">
              <use href="#sbx-icon-search-14"></use>
            </svg>
          </button>
          <button
            type="reset"
            title="Clear the search query."
            className="searchbar__reset"
          >
            <svg role="img" aria-label="Reset">
              <use href="#sbx-icon-clear-5"></use>
            </svg>
          </button>
        </div>
      </form>
      <script type="text/javascript">
        {`
        document.querySelector('.searchbox [type="reset"]').addEventListener('click', function() {  this.parentNode.querySelector('input').focus();});
      `}
      </script>
      </div>
    </>
  );
}

export default SearchBar;
