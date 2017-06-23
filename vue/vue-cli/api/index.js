import { doPost, doGet } from './request'
import { getImageUploadToken, setImageUploadToken } from '@util/image';

const DEBUG = true;

const API = {
  get(name) {
    if (DEBUG) {
      return `/static/json/${name}.json`;
    }
    const url = this.urls[name];
    if (!url) throw new Error(name + 'not found!');
    return url;
  },
  urls: {
    'ok': '/static/json/ok.json',
    'company.get': '/static/json/company.get.json',
    'order.wash.list': '/static/json/washtable.json',
    'order.wash.detail': '/order/wash/view',
    'order.refund': '/order/refund',
    // 获取图片上传token
    '/upload/token': '/Radio/resource/cloud/bulk/gettoken',
    'menu.list': '/system/permission',
  }
}
/**
 * * 提交企业信息表单
 * @param {object} data 表单数据
 */
export function addOrUpdateCompanyInfo(data) {
  const url = API.get('ok');
  return doPost(url, data);
}
/**
 * @return {企业信息}
 */
/**
 * 获取企业信息
 * @return {object} 企业信息
 */
export function getCompanyInfo() {
  const url = API.get('company.get');
  return doGet(url);
}

/**
 * 修改密码
 * @param  {object} data 新旧密码
 * @return {object}      返回信息
 */
export function updatePwd(data) {
  const url = API.get('ok');
  return doPost(url, data);
}
/**
 * 洗车订单列表
 * @param  {object} data 筛选参数
 * @return {object}      返回信息
 */
const PAGESIZE = 10;
export function getWashOrderList(data = null) {
  const url = API.get('order.wash.list');
  if (data != null) {
    Object.assign(data, { 'pageSize': PAGESIZE });
  } else {
    data = { 'pageSize': PAGESIZE };
  }
  return doGet(url, data);
}
/**
 * 由订单ID得到订单详情
 * @param {*Number} orderId 订单ID
 */
export function getWashOrderDetailById(orderId) {
  const url = API.get('order.wash.detail');
  return doGet(url, { 'id': orderId });
}
/**
 * 申请订单退款
 * @param {*支付密码、订单ID和退款备注} data Object
 */
export function refund(data) {
  const url = API.get('order.refund');
  return doPost(url, data);
}
/**
 * 获取图片上传token
 * @returns {*}
 */
export function getUploadToken() {
  const token = getImageUploadToken();
  if (token) return Promise.resolve(token);

  const url = API.get('/upload/token');
  return doGet(url, {}, { headers: {} }).then(res => {
    setImageUploadToken(res.token);
    return res.token;
  });
}
/*
 * 得到权限菜单列表
 */
export function getMenuList() {
  const url = API.get('menu.list');
  return doGet(url);
}
/**
 * 用户登陆
 * @param {*Object} data 用户名和登陆
 */
export function userLogin(data) {
  const url = API.get('user.login');
  return doPost(url, data);
}
