import { API_URL, METHOD_GET } from '../const/api/mock';

export const GetDataMockApi = () =>
  fetch(API_URL, {
    method: METHOD_GET,
  }).then((resp: Response) => resp.json());
