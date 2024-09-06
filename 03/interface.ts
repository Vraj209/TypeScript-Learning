interface uUser {
    readonly dbId : number
    email: string,
    userId: number,
    googleId?: string
    // method
    startTrail: () => string
    start2(): string
    getCoupon(couponname: string, value: number): number
    
}

const vraj: uUser = {
    dbId:123,
    email: "h@h.com",
    gitToken:"git123",
    userId: 123,
    startTrail: () => {
        return "hello method"
    },
    start2 : () => {
        return "this is second method"
    },
    getCoupon: (name: "diwali10",discount:10) => {
        return 10
    }
}

// Reopening of interface
interface uUser{
    gitToken ?: string 
}


interface AdminBaap extends uUser{
    role : "admin" | "ta" | "learner"
}

const panchal: AdminBaap = {
    dbId: 123,
    role:"admin",
    email: "h@h.com",
    gitToken:"git123",
    userId: 123,
    startTrail: () => {
        return "hello method"
    },
    start2 : () => {
        return "this is second method"
    },
    getCoupon: (name: "diwali10",discount:10) => {
        return 10
    }
}
