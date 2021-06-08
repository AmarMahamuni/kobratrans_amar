export interface PickupDetails {
    p_location: string,
    p_phone: string;
    p_comments: string;

  }
  type AddPickup= (p_location: string, p_phone: string,p_comments: string) => void;
