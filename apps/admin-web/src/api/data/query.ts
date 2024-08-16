import apiClient from "../client"
import { CustomersResponse, EnquiriesResponse, GetQuotesResponse, QuoteIdRecordResponse, QuoteStatisticsResponse } from "./interfaces"
// import { ProductResponseSchema, ProductResponseType } from "../schema"





export const getCustomers = async (): Promise<CustomersResponse | undefined> => {
   const res = await apiClient.get<CustomersResponse>('/admin/customers')
   return res.data
}


// export const getQuotes = async (): Promise<GetQuotesResponse | undefined> => {
//    const res = await apiClient.get<GetQuotesResponse>('/admin/quote');
//    return res.data;  // Ensure you're returning res.data, not just res
// };


export const getEnquiries = async (): Promise<EnquiriesResponse | undefined> => {
   const res = await apiClient.get<EnquiriesResponse>('/admin/enquiries')
   console.log(res.data);
   return res 
}

export const getEnquiry = async (id: string) => {
   const res = await apiClient.get(`/admin/enquiries/${id}`)
   return res  
}


export const searchEnquiries = async ({customer_id, status, start_date, end_date }: { customer_id?: string; status?: string; start_date?: string; end_date?: string;}) => {
   const params = {
     customer_id,
     status,
     start_date,
     end_date,
   };
  
   try {
     const res = await apiClient.get('/admin/enquiries', params);
     console.log("API Response:", res);
     return res;
   } catch (error) {
     console.error("API Error:", error);
     throw error; // Re-throw the error for handling in the calling code
   }
};


export const getOrders = async (p0: { start_date: string | undefined; end_date: string | undefined }) => {   
   const res = await apiClient.get('/admin/order', p0);
   return res  
}

export const getQuotes = async (): Promise<GetQuotesResponse | undefined> => {
   const res = await apiClient.get<GetQuotesResponse>('/admin/quote');
   return res;  // Ensure you're returning res.data, not just res
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

 

export const getQuoteId = async (): Promise<QuoteIdRecordResponse | undefined> => {
   const res = await apiClient.get<QuoteIdRecordResponse>('/admin/quote-id');
   return res.data;
};

export const getQuoteStatistics = async (): Promise<QuoteStatisticsResponse | undefined> => {
   const res = await apiClient.get<QuoteStatisticsResponse>('/admin/quotes_statistics');
   return res.data;
};