import apiClient from "../client"
// import { ProductResponseSchema, ProductResponseType } from "../schema"

interface Quote {
   id: string;
   quote_id: string;
   created_at: string;
   customer_name: string;
   customer_id: string;
   price: number;
   status: string;
 }
 
interface GetQuotesResponse {
   data: {
     data: Quote[];
   };
}


export const getEnquiries = async () => {
   const res = await apiClient.get('/admin/enquiries')
   return res  
}

export const getEnquiry = async (id: string) => {
   const res = await apiClient.get(`/admin/enquiries/${id}`)
   return res  
}


export const getOrders = async () => {
   const res = await apiClient.get('/admin/order')
   return res  
}

export const getQuotes = async (): Promise<GetQuotesResponse | undefined> => {
   const res = await apiClient.get<GetQuotesResponse>('/admin/quote');
   return res.data;  // Ensure you're returning res.data, not just res
 };


export const searchQuotes = async ({customer_id, status, start_date, end_date }: { customer_id?: string; status?: string; start_date?: string; end_date?: string;}) => {
   const params = {
     customer_id,
     status,
     start_date,
     end_date,
   };
 
   console.log("Search Parameters:", params);
 
   try {
     const res = await apiClient.get('/admin/quote', params);
     console.log("API Response:", res);
     return res;
   } catch (error) {
     console.error("API Error:", error);
     throw error; // Re-throw the error for handling in the calling code
   }
 };


export const getProducts = async () => {
   const res = await apiClient.get('/admin/products')
   console.log({res})
   return res  
}

interface QuoteIdRecordResponse {
   data: {
      response_code: string;
      data: string; // Adjust according to the actual data structure
   }
}


interface QuoteStatisticsResponse {
   // data: {
      response_code: string,
      response_message: "Statistics records found",
      data: { 
              totalQuoteCount: number, 
              pendingQuoteCount: number, 
              approvedQuoteCount: number, 
              rejectedQuoteCount: number
          }
//   }
 }
 

export const getQuoteId = async (): Promise<QuoteIdRecordResponse | undefined> => {
   const res = await apiClient.get<QuoteIdRecordResponse>('/admin/quote-id');
   return res.data;
};

export const getQuoteStatistics = async (): Promise<QuoteStatisticsResponse | undefined> => {
   const res = await apiClient.get<QuoteStatisticsResponse>('/admin/quotes_statistics');
   return res.data;
};