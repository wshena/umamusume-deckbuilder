import axios from 'axios';

export const fetcher = async (api_url:string, options:any = {}) => {
  const config = {
    url: api_url,
    method: options?.method?.toUpperCase(),
    ...options
  }
  console.log(config.url)

  try {
    const res = await axios.request(config);
    return res.data;
  } catch (error:any) {
    console.log(error);
    throw {
      data: null,
      message: error?.message ?? error
    }
  }
}