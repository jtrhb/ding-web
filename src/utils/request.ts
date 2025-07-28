import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';

export interface ServerResponse<T = any> {
  code: number;
  message?: string;
  data: T;
}

export interface APIResult<T = any> {
  error?: Error;
  resp?: ServerResponse<T>;
}

export class ResponseError extends Error {
  public url?: string;
  public response?: any;
  public body?: any;
}

interface UploadResponseData {
  url: string; // URL of the uploaded image
  // Add other fields your backend might return
  [key: string]: any;
}

const DEFAULT_REQUEST_TIMEOUT_TIME = 300000;

const HTTP_STATUS_UNAUTHORIZED = 401;

const timeoutMessage = '请求超时，请稍后重试';

// 创建 axios 实例
const axiosInstance = axios.create({
  timeout: DEFAULT_REQUEST_TIMEOUT_TIME,
  responseType: 'json',
});

// 请求拦截器
axiosInstance.interceptors.request.use(
  (config) => {
    const adminToken = localStorage.getItem('token') ?? '';
    if (adminToken) {
      config.headers.Authorization = adminToken;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 响应拦截器
axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response.data;
  },
  (error: AxiosError) => {
    console.error(error?.response);
    
    if (error?.response?.status === HTTP_STATUS_UNAUTHORIZED) {
      error.message = '登录已失效，正在刷新页面';
      const delay = 1500;
      setTimeout(() => {
        // window.location.reload();
      }, delay);
    } else if (error.message === 'Network Error') {
      error.message = '网络异常，请检查网络';
    } else if (error.code === 'ECONNABORTED') {
      error.message = timeoutMessage;
    } else {
      error.message = '服务异常，请稍后重试';
    }
    
    return Promise.reject(error);
  }
);

export const request = (url: string, options?: AxiosRequestConfig): Promise<APIResult> => {
  const promise: Promise<APIResult> = new Promise((resolve) => {
    axiosInstance({
      url,
      ...options,
    })
      .then((resp: any) => {
        // axios 拦截器已经返回了 response.data，这里直接使用
        resolve({ resp });
      })
      .catch((error: Error) => {
        resolve({ error: new Error(`请求失败：${error.message}`) });
      });
  });
  return promise;
};

// 常用的请求方法封装
export const get = (url: string, config?: AxiosRequestConfig): Promise<APIResult> => {
  return request(url, { ...config, method: 'GET' });
};

export const post = (url: string, data?: any, config?: AxiosRequestConfig): Promise<APIResult> => {
  return request(url, { ...config, method: 'POST', data });
};

export const put = (url: string, data?: any, config?: AxiosRequestConfig): Promise<APIResult> => {
  return request(url, { ...config, method: 'PUT', data });
};

export const del = (url: string, config?: AxiosRequestConfig): Promise<APIResult> => {
  return request(url, { ...config, method: 'DELETE' });
};

// 文件上传方法
export const upload = (url: string, formData: FormData, config?: AxiosRequestConfig): Promise<APIResult<UploadResponseData>> => {
  return request(url, {
    ...config,
    method: 'POST',
    data: formData,
    headers: {
      'Content-Type': 'multipart/form-data',
      ...config?.headers,
    },
  });
};
