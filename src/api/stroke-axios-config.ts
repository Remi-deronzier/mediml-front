import Axios, { AxiosRequestConfig } from 'axios';

export const AXIOS_INSTANCE = Axios.create({
  baseURL: 'https://mediml-api-3gjfkxgxcq-od.a.run.app',
});

export const strokeApiInstance = <T>(
  config: AxiosRequestConfig,
  options?: AxiosRequestConfig
): Promise<T> => {
  const source = Axios.CancelToken.source();
  const promise = AXIOS_INSTANCE({
    ...config,
    ...options,
    cancelToken: source.token,
  }).then(({ data }) => data);

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  promise.cancel = () => {
    source.cancel('Query was cancelled');
  };

  return promise;
};
