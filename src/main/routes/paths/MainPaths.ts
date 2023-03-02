
export namespace PathsMap {
    export const root = {
        get: () => '/',
    }

    export const login = {
        get: () => '/login',
        create: {
            get: () => '/login/create',
        },
    }
    export const home = {
        get: () => '/home',
    }

    export const project = {
        get: () => '/project',
    }

    export const edit = {
        get: () => '/edit',
    }

    export const help = {
        get: () => '/help',
    }
    
}