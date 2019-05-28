import axios from 'axios'

export default function ajax(url, data = {}, type = 'GET') {
  let promise;
  if (type === 'GET') {
    let datastr = '';
    Object.keys(data).forEach(key => {
      datastr += key + '=' + data[key] + '&';
    });
    if (datastr !== '') {
      datastr = datastr.substring(0, datastr.lastIndexOf('&'));
      url += '?' + datastr;
    }
    promise = axios.get(url).catch((err)=>console.log(err));
  } else {
    promise = axios.post(url, data);
  }
  return promise;
}