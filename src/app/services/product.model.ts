
export class Product {

    productId: number;
    productName: string;
    productCode: string;
    releaseDate?: Date;
    price: number;
    starRating: number;
    currentAvailibility: boolean;
    imageUrl: string;
    description?: Description;
}

export class Description {
    descText: string;
    emailId: string;
}

// export class Person{
//     constructor(name:string, address:string){
//         this.Name = name;
//         this.Address = address;
//     }
//     Name:string;
//     Address:string;
// }

// export class Person {
//     constructor(public Name: string, public Address: string) {
//     }
// }

