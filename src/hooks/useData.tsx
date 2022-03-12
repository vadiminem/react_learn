import React from 'react';

export const useData = (delay: number) => {
  const [loading, setLoading] = React.useState<boolean>(false);
  const [data, setData] = React.useState<any[]>([]);

  React.useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setTimeout(() => {
        setData([]);
        setLoading(false);
      }, delay * 1000);
    };

    fetchData();
  }, [delay, setData]);

  return [data, loading];
};
