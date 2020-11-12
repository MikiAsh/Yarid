export interface Store {
  id: string;
  name: string;
  desc?: string;
  email: string;
  city?: string;
  tags?: string[];
  store_img_url?: string;
  back_img_url?: string;
  create_date?: Date;
}
