import { useRef, useState, useEffect } from "react";
const useLoadHandler = () => {
  const rawLoadRef = useRef([]).current;
  const [loading, setLoading] = useState(true);
  const [loadNumber, setLoadNumber] = useState(0);
  const [percentage, setPercentage] = useState(0);
  const [noNull, setNoNull] = useState([]);

  const handlerLoad = () => {
    setLoadNumber(loadNumber + 1);
  };

  const loadRef = (ref) => {
    if (!rawLoadRef.includes(ref) && ref !== null) {
      rawLoadRef.push(ref);
    }
  };
  useEffect(() => {
    setNoNull(rawLoadRef);
    console.log(rawLoadRef);
  }, [rawLoadRef]);

  useEffect(() => {
    if (!!noNull.length && loadNumber === noNull.length) {
      setLoading(false);
    }
  }, [loadNumber, noNull.length]);
  useEffect(() => {
    if (noNull.length > 0) {
      const count = ((loadNumber / noNull.length) * 100) | 0;
      setPercentage(count);
    }
  }, [loadNumber, noNull]);

  return { loading, handlerLoad, loadRef, percentage };
};

export default useLoadHandler;
