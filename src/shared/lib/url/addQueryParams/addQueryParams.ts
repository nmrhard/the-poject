export const getQueryParams = (params: Record<string, string>) => {
  const searchParams = new URLSearchParams(window.location.search);

  Object.entries(params).forEach(([key, value]) => {
    if (value) {
      searchParams.set(key, value);
    }
  });

  return `?${searchParams.toString()}`;
};

/**
 * Function to add query params to the url
 * @param params
 */

export const addQueryParams = (params: Record<string, string>) => {
  window.history.pushState(null, '', getQueryParams(params));
};
