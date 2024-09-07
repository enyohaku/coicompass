// types.ts または app/types.ts

export interface CountryInfo {
    country: string;
    advisoryText: string;
  }
  
  // 必要に応じて、他の型も定義できます
  export interface ApiResponse {
    success: boolean;
    message?: string;
    data?: CountryInfo;
  }