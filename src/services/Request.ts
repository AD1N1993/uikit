import axios, { AxiosInstance } from 'axios'

declare module 'axios'

abstract class Request {
  protected readonly instance: AxiosInstance

  protected constructor() {
    this.instance = axios.create({
      baseURL: process.env.REACT_APP_BACKEND_URL,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache',
        'X-User-Timezone': Intl.DateTimeFormat().resolvedOptions().timeZone,
      },
    })

    this._initResponseInterceptor()
  }

  private _initResponseInterceptor = () => {
    // this.instance.interceptors.request.use(
    //   (config) => {
    //     const token = store.UserStore.user.token.token
    //     if (token) config.headers.Authorization = `Bearer ${token}`
    //     return config
    //   },
    //   (error) => Promise.reject(error)
    // )
    // this.instance.interceptors.response.use(
    //   (response: AxiosResponse) => response,
    //   (error) => {
    //     const refresh_token = store.UserStore.user.token.refresh
    //     const { attempts, plusAttempts, initAttempts } = store.UserStore
    //     const {
    //       response: { status, data }
    //     } = error
    //     if (status === 401 && refresh_token) {
    //       const originalRequest = error.config
    //       plusAttempts()
    //       if (attempts <= 1) {
    //         return new Promise((resolve, reject) => {
    //           this.instance
    //             .post('/api/token/refresh', {
    //               refresh_token
    //             })
    //             .then((response) => {
    //               const {
    //                 data: { token, refresh_token: new_refresh_token }
    //               } = response
    //               store.UserStore.initAuthToken(store.UserStore.user.id, token, new_refresh_token)
    //               originalRequest._retry = true
    //               resolve(this.instance(originalRequest))
    //             })
    //             .catch(() => {
    //               originalRequest._retry = false
    //               store.UserStore.logout()
    //               reject(error)
    //             })
    //         })
    //       } else {
    //         initAttempts()
    //       }
    //     } else if (status === 403) {
    //       const notice: INotice = {
    //         id: nanoid(),
    //         title: 'Не удачно',
    //         text: 'Отсутствуют права',
    //         variant: 'error'
    //       }
    //       store.NotificationsStore.createNotice(notice)
    //       return Promise.reject(error.response)
    //     } else if (status >= 400 && status < 500) {
    //       const notice: INotice = {
    //         id: uuid(),
    //         title: data['hydra:title'],
    //         text: data['hydra:description'],
    //         variant: 'error'
    //       }
    //       store.NotificationsStore.createNotice(notice)
    //     }
    //     throw error.response
    //   }
    // )
  }

  public getInstance = (): AxiosInstance => this.instance
}

export default Request
