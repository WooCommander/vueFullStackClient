import api from "@/services/api"
export default {
  register(credentials:any) {
    return api().post('register', credentials)
  }
}

// AuthenticationService.register({
//   email: 'testting@gmail.com',
//   password: 123456
// })