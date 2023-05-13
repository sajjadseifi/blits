const baseUrlApi = 'https://bus.iran.liara.run/api'

const concatRoute = (route) => `${baseUrlApi}/${route}`

const routes = {
   login: concatRoute('login'),
   register: concatRoute('register'),
   addticket: concatRoute('addticket'),
   myticket: concatRoute('myticket'),
   cancelTicket: concatRoute('cancelTicket'),
   admin: concatRoute('myticket'),
}
const setToken = (token) => localStorage.setItem('token', token)
const getToken = () => localStorage.getItem('token')

const clearToken = () => {
   localStorage.removeItem('token')
   localStorage.removeItem('admin')
}

const userRole = (admin) => localStorage.setItem('admin', !!admin)


const isAuthedUser = () => !!getToken();
const isAdminAuthed = () => isAuthedUser() && localStorage.getItem('admin') == "true";