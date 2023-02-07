import { useState } from "react";
function Toggler(defaultValue = false) {
  const [isOn, setIsOn] = useState(defaultValue);
  function toggle(value) {
    if (value === false || value === true) {
      setIsOn(value);
    } else setIsOn((prev) => !prev);
  }
  return [isOn, toggle];
}
export default Toggler;
