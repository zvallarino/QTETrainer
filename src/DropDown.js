function DropDown({ selectedRoute, setSelectedRoute }) {

  function RouteSelector(e){
    setSelectedRoute(e.target.value)
    console.log(e.target.value)
  }

 
  return (
    <>
    <form>
      <p>Choose mode:</p>
      <select onChange = {RouteSelector} value = {selectedRoute}>
        <option value = 'Alphabetic'>Alphabet</option>
        <option value = 'Numeric'> Numeric </option>
        <option value = 'All'> All</option>
      </select>
      </form>
    </>
  )}

export default DropDown;