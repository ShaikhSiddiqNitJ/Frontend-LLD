import { useEffect, useRef } from "react";
//check current and old value
function isSame(oldDepArr, newDepArr) {
  if (oldDepArr == null) return false;
  if (oldDepArr.length !== newDepArr.length) return false;
  //if any value change then it will be throw false
  for (let i = 0; i < oldDepArr.length; i++) {
    if (oldDepArr[i] !== newDepArr[i]) return false;
  }
  return true;
}
const useCustomMemo = (cb, depArr) => {
  //step1: take ref to handle references
  const mem = useRef(null);
  //step2: if dep change then it will be handle from here
  //first time or dep values change, then i will be add to current
  if (!mem.current || !isSame(mem.current.depArr, depArr)) {
    mem.current = {
      func: cb(),
      depArr,
    };
  }
  //step3: cleanup logic from here (suppose we referesh the page)
  useEffect(() => {
    return () => {
      mem.current = null;
    };
  }, []);
  //step4: finally i will be return mem value (function)
  return mem.current.func;
};
export default useCustomMemo;
