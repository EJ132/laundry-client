import config from '../config'

const TokenService = {
  saveAuthToken(token) {
    window.localStorage.setItem(config.TOKEN_KEY, token)
  },
  saveUserName(user_name){
    window.localStorage.setItem(config.USER_NAME, user_name)
  },
  saveUserId(user_id){
    window.localStorage.setItem(config.USER_ID, user_id)
  },
  saveStep1(instructions){
    window.localStorage.setItem(config.STEP1, instructions)
  },
  saveStep2(instructions){
    window.localStorage.setItem(config.STEP2, instructions)
  },
  saveStep3(instructions){
    window.localStorage.setItem(config.STEP3, instructions)
  },
  saveStep4(instructions){
    window.localStorage.setItem(config.STEP4, instructions)
  },
  saveStep5(instructions){
    window.localStorage.setItem(config.STEP5, instructions)
  },
  getStep1(){
    return window.localStorage.getItem(config.STEP1)
  },
  getStep2(){
    return window.localStorage.getItem(config.STEP2)
  },
  getStep3(){
    return window.localStorage.getItem(config.STEP3)
  },
  getStep4(){
    return window.localStorage.getItem(config.STEP4)
  },
  getStep5(){
    return window.localStorage.getItem(config.STEP5)
  },
  getAllSteps(){
    const allSteps = [];
    allSteps.push(window.localStorage.getItem(config.STEP1))
    allSteps.push(window.localStorage.getItem(config.STEP2))
    allSteps.push(window.localStorage.getItem(config.STEP3))
    allSteps.push(window.localStorage.getItem(config.STEP4))
    allSteps.push(window.localStorage.getItem(config.STEP5))
    return allSteps;
  },
  getAuthToken() {
    return window.localStorage.getItem(config.TOKEN_KEY)
  },
  getUserName() {
    return window.localStorage.getItem(config.USER_NAME)
  },
  getUserId() {
    return window.localStorage.getItem(config.USER_ID)
  },
  clearAuthToken() {
    window.localStorage.removeItem(config.TOKEN_KEY)
  },
  clearUserName() {
    window.localStorage.removeItem(config.USER_NAME)
  },
  clearUserId() {
    window.localStorage.removeItem(config.USER_ID)
  },
  hasAuthToken() {
    return !!TokenService.getAuthToken()
  },
  makeBasicAuthToken(userName, password) {
    return window.btoa(`${userName}:${password}`)
  },
}

export default TokenService
