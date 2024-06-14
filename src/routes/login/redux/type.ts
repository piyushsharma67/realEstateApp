export type AuthInitialState = {
    user: {
        name: string,
        phone: string,
        email: string,
        token: string
    } | null
}