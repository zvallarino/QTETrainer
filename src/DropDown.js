function DropDown({ selectedRoute, setSelectedRoute }) {

  function filterHelper(e){
    if(e.target.value === 'Alphabetic' ) {
      setSelectedRoute('abcdefghijklmnopqrstuvwxyz')
    } else if (e.target.value  === 'Numeric') {
      setSelectedRoute('0123456789')
    } else {
      setSelectedRoute("`-=[];',./123456789abcdefghijklmnopqrstuvwxyz")
  }}
  

  function RouteSelector(e){
    setSelectedRoute(e.target.value)
    filterHelper(e)
    console.log(e.target.value)
  }

 
  return (
    <>
    <form>
      <p>Choose mode:</p>
      <select onChange = {RouteSelector} value = {selectedRoute}>
        <option value = 'All'>All</option>
        <option value = 'Alphabetic'>Alphabetic</option>
        <option value = 'Numeric'> Numeric </option>
        <option value = 'All'> All</option>
      </select>
      </form>
    </>
  )}

export default DropDown;