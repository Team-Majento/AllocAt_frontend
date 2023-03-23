export interface Resource{
  id:number;
  activeStatus:boolean;
  availability:boolean;
  buildingId: string;
  description: string;
  floor: number;
  imgUrl: string;
  maximumCapacity:number;
  rateCardId:number;
  resourceType: number;
  companyId:number;
  company:string;

}
