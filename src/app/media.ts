import { Binary } from "./binary"

export interface Media {
  id: string;
  fileType: string;
  binary: Binary;
}
