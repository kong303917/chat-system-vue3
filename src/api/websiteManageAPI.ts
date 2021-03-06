/*
 * 网站管理接口
 * */
import services from "../config/axios";
import base from "./base"; // 导入接口域名列表

// 定义参数类型
type paramsType<T> = {
  [key: string]: T;
};

const websiteManageAPI = {
  // 登录
  login<T>(params: paramsType<T>) {
    return services.post(`${base.lk}/user/login`, params);
  },
  // 注册
  registered<T>(params: paramsType<T>) {
    return services.post(`${base.lk}/user/registered`, params);
  },
  // 获取用户头像
  getUserAvatar<T>(params: paramsType<T>) {
    return services.post(`${base.lk}/user/getUserAvatarSrc`, params);
  },
  // 根据用户id获取用户信息
  getUserDataByUid<T>(params: paramsType<T>) {
    return services.post(`${base.lk}/user/getUserDataByUid`, params);
  },

  // 获取家里电量信息
  getRoomBatteryInfo<T>(params: paramsType<T>) {
    return services.post(`${base.lkBaseURL}/other/getRoomBatteryInfo`, params);
  }
};

export default websiteManageAPI;