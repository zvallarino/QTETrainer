function ModeDropDown(handleSelect, handleSort) {
  return (
    <form>
      <p>Choose mode:</p>
      <select onChange = {handleSelect}>
        <option value = "Alphabet" >Alphabet</option>
        <option value = "Numeric" > Numeric </option>
        <option value = "All" > All</option>
      </select>
      </form>
  )}



export default ModeDropDown; 