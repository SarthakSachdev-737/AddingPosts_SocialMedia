function LoadingSpinner() {
  return (
    <div class="d-flex justify-content-center">
      <div className="spinner-grow s-spinner" style={{width: "5rem" ,  height: "5rem"}} role="status">
        <span className="visually-hidden">Loading...</span>
        {/* <div>Loading...</div> */}
      </div>
    </div>
  );
}

export default LoadingSpinner;
