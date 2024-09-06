export interface loginData {
    email: string;
    password: string;
}

export interface ErrorResponse {
    message: string;
  }
  
export interface UserDetails {
    role: string;
    name: string;
    profileUrl?: string;
    dob?: Date;
  }
  
export interface signupData{
    email: string;
    password: string;
    userDetails: UserDetails;
  }
  