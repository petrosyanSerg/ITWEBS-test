import useSWR from 'swr';

import { Fetch } from '@/shared/utils/Fetch';

export const swrFetcher = (url) => Fetch.get(url);

export const useCustomSWR = (url) => {
  const { data, error, isLoading, mutate } = useSWR(url, swrFetcher);

  return {
    data,
    error,
    mutate,
    isLoading,
  };
};
