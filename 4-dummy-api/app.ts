const axios = require('axios')

enum Gender {
    male = 'male',
    female = 'female',
}

interface User {
    id: number
    firstName: string
    lastName: string
    maidenName: string
    age: number
    gender: Gender
    email: string
    phone: string
    username: string
    password: string
    birthDate: string
    image: string
    bloodGroup: string
    height: number
    weight: number
    eyeColor: string
    hair: Hair
    domain: string
    ip: string
    address: Address
    macAddress: string
    university: string
    bank: Bank
    company: Company
    ein: string
    ssn: string
    userAgent: string
}

interface Hair {
    color: string
    type: string
}

interface Address {
    address: string
    city: string
    coordinates: Coordinates
    postalCode: string
    state: string
}

interface Coordinates {
    lat: number
    lng: number
}

interface Bank {
    cardExpire: string
    cardNumber: string
    cardType: string
    currency: string
    iban: string
}

interface Company {
    address: Address2
    department: string
    name: string
    title: string
}

interface Address2 {
    address: string
    city?: string
    coordinates: Coordinates2
    postalCode: string
    state: string
}

interface Coordinates2 {
    lat: number
    lng: number
}

async function getSetDataOfUser(id: number) {
    const user: User | undefined = await getUser(id)
    if (typeof user == 'undefined') {
        return {}
    } else {
        return  {
            firstName: user.firstName,
            lastName: user.lastName,
            age: user.age,
        };
    }
}

async function getUser(id: number) {
    try {
        const response = await axios.get('https://dummyjson.com/users')
        const { users } = await response.data
        return users[id-1]
    } catch (error) {
        console.error(error)
    }
}

getSetDataOfUser(3).then(data => console.log(data))
