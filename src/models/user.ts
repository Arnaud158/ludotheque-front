export interface User {
    avatar: number,
    created_at: string,
    email: string,
    id: string,
    name: number,
    nom: string,
    prenom: string,
    pseudo: string,
    updated_at: string,
    valide: string,
    jwtToken?: String
}

//export const ANONYMOUS_USER = {id:-1,name:"anonymous_user",email:"anonymous@example.com"}

export const ANONYMOUS_USER : User = <User>{};
