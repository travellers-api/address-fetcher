export type Room = {
  id: number;
  name: string;
  photo_url: string;
  is_dormitory: boolean;
  kind_label: string;
  kind_sex_label: string;
  acceptable_sex: 'all' | 'male' | 'female' | string;
  capacity: number;
  capacity_label: string;
  bed_labels: string[];
  desk_chair_info: string;
  is_popular: boolean;
  notice: string;
};
