import { useEffect, useState, useCallback } from 'react';

export default function Counter() {
  const getData = useCallback(() => {
    // fetch data
    return { foo: 'bar' };
  }, []);

  const [counter, setCounter] = useState(0);
  useEffect(() => {
    getData();
    setCounter((prev) => prev + 1);
  }, [getData]);

  return <div>Fetching {counter} times</div>;
}
