import { Media } from './media';

export interface Memory {
  id: string;
  text: string;
  creationDate: Date;
  tags: string[];
  media: Media[];
}
