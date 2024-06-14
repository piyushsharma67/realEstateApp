export enum RootRoutes {
    LoginScreen = "LoginScreen",
    HomeListScreen = "HomeListScreen",
    HomeDetailsScreen = "HomeDetailsScreen"
}

export type HomeDetailsScreenparams = {
    homeid: number
}

export type RootRouteStackParams = {
    [RootRoutes.LoginScreen]: undefined,
    [RootRoutes.HomeListScreen]: undefined,
    [RootRoutes.HomeDetailsScreen]: HomeDetailsScreenparams
}