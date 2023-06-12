export interface BookingRequest{
  id:number;
companyId:number;
requesterUserId:number;
requestersManagersUserId:number;

requiredDate:string;

resourceId:number;

startTime:string;

endTime:string;

status:string;
}
