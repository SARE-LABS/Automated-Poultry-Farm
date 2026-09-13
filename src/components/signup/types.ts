export type Role = "Owner" | "Farm Manager" | "Veterinarian" | "Supervisor";

export interface FormData {
  firstName: string;
  otherNames: string;
  phone: string;
  email: string;
  password: string;
  role: Role | "";
  farmName: string;
  farmLocation: string;
  farmSize: string;
  aqmsInstalled: string;
  deviceSerialNo: string;
  birdType: string;
}
