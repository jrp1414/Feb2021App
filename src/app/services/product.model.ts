
export class Product {
    id: number;
    title: string;
    type: string;
    description: string;
    releaseDate: Date;
    availibility: boolean;
    safeFor: number;
    qualityScore: number;
    Tags: Tag[];
    tags:string[];
    Addresses?: SellerAddress[];
    seller?: SellerAddress;
    price: number;
    rating: number;
    imageurls?: string[];
    ImageUrls?: ImageUrl[];
    typeId:number;
}

export class SellerAddress {
    id: number;
    AddLine1: string;
    AddLine2: string;
    AddLine3: string;
    City: string;
    State: string;
}


export class TypeMaster {
    id?: number;
    Type: string;
}
export class Tag {
    id?: number;
    tag: string;
}
export class ImageUrl {
    id?: number;
    imageUrl: string;
}