import axios from "axios";
import { useState, useEffect } from "react";

const useAxios  = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get(url).then((res) => {
      setData(res.data);
  });
}, []);
    return [data, setData];
};

export default useAxios;
