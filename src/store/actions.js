/*
 * 间接更新state的方法，通过mutations
 */
import {
  RECEIVE_ADDRESS,
  RECEIVE_FOODTYPES,
  RECEIVE_SHOPLIST
} from "./mutation-types";
import {
  reqAddress,
  reqFoodTypes,
  reqShopList
} from "../api";


export default {
  // 异步获取地址action
  async getAddress({commit, state}) {
    // 发送异步ajax
    const geohash = state.latitude + "," + state.longitude;
    let result = await reqAddress(geohash);
    result = result.data;
    console.log(result.data);
    // 提交一个commit
    if (result.code === 0) {
      const address = result.data;
      commit(RECEIVE_ADDRESS, {address})
    }
  },
  // 异步获取食品分类action
  async getFoodTypes({commit}) {
    // 发送异步ajax
    let result = await reqFoodTypes();
    result = result.data;
    console.log(result.data);
    // 提交一个commit
    if (result.code === 0) {
      const foodTypes = result.data;
      commit(RECEIVE_FOODTYPES, {foodTypes})
    }
  },
  // 异步获取商家列表action
  async getShopList({commit, state}) {
    // 发送异步ajax
    const {longitude, latitude} = state;
    let result = await reqShopList(longitude, latitude);
    result = result.data;
    console.log(result.data);
    // 提交一个commit
    if (result.code === 0) {
      const shopList = result.data;
      commit(RECEIVE_SHOPLIST, {shopList})
    }
  }
}