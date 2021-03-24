
export class Product {
    id: number;
    title: string;
    type: string;
    description: string;
    releaseDate:Date;
    availibility:boolean;
    safeFor:number;
    qualityScore:number;
    tags:string[];
    sellers?: SellerAddress[];
    seller?: SellerAddress;
    price: number;
    rating: number;
    imageurl?: string;
    imageurls?: string[];    
}

export class SellerAddress{
    AddLine1:string;
	AddLine2:string;
	AddLine3:string;
	City:string;
	State:string;
} 
