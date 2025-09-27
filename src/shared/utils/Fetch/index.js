import { AxiosInstance } from '@/shared/utils/axios';
import { Requests } from '@/shared/constants/requests';

const { GET, PATCH, POST, PUT, DELETE } = Requests;

class FetchService {
  async request(method, url, data = {}, config = {}) {
    try {
      const response = await AxiosInstance({
        method,
        url,
        data: [PATCH, POST, PUT].includes(method) ? data : undefined,
        params: method === GET ? data : undefined,
        ...config,
      });

      return response.data;
    } catch (error) {
      console.error(`${method} ${url}:`, error);

      throw error;
    }
  }

  get(url, params = {}) {
    return this.request(GET, url, params);
  }

  post(url, data) {
    return this.request(POST, url, data);
  }

  put(url, data) {
    return this.request(PUT, url, data);
  }

  patch(url, data) {
    return this.request(PATCH, url, data);
  }

  delete(url) {
    return this.request(DELETE, url);
  }
}

export const Fetch = new FetchService();
