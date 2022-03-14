import React from 'react';

import { delay } from 'utils';

export const useData = <T,>(delayMs: number): [T[], boolean] => {
  const [loading, setLoading] = React.useState<boolean>(false);
  const [data, setData] = React.useState<T[]>([]);

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
