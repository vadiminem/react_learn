import React from 'react';

import { delay } from 'utils';

export const useData = <T,>(delayMs: number): [T | null, boolean] => {
  const [loading, setLoading] = React.useState<boolean>(false);
  const [data, setData] = React.useState<T | null>(null);

  React.useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      await delay(delayMs);
      setLoading(false);
    };

    fetchData();
  }, [delayMs, setData]);

  return [data, loading];
};
