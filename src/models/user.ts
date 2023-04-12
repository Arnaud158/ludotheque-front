export interface User {
    id: number,
    name: string,
    email: string,
    jwtToken?: string
}

export const ANONYMOUS_USER = {id:-1,name:"anonymous_user",email:"anonymous@example.com"}

//export const ANONYMOUS_USER: User = <User>{};