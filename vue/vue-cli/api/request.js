import axios from 'axios';
/**
 * @param  {String} url 请求地址
 * @param  {String} method  请求方式，默认get
 * @param  {Object} options 其它参数
 * @return {Promise}
 */
let axiosAPI = (url, data, method = 'GET', options) => {
  let params = {
    url,
    data,
    method,
  }
  if (options) {
    params = Object.assign(params, options);
  }
  return new Promise((resolve, reject) => {
    axios(params).then(res => {
      let result = res.data;
      if (result.code == 200) {
        resolve(result.data);
      } else {
        let err = `${result.msg || '请求失败！'} (${result.code})`;
        reject(err);
      }
    }).catch(function (err) {
      reject(err);
    });
  });
}

export function doPost(url, data, options) {
  return axiosAPI(url, data, 'POST', options);
}
export function doGet(url, data, options) {
  return axiosAPI(url, data, 'GET', options);
}
