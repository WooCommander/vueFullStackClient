import api from "@/services/api"
export default {
  registerGet(credentials: any) {
    return api().get('register', credentials)
  },
  registerPost(credentials: any) {
    return api().post('register', credentials)
  },
  register(credentials: any) {
    return api().post('register', credentials)
  },
  login(credentials: any) {
    return api().post('login', credentials)
  }
}