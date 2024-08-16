import apiClient from "../client"
// import { ProductResponseSchema, ProductResponseType } from "../schema"

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

export const getQuotes = async () => {
   const res = await apiClient.get('/admin/quote')
   return res  
}

export const searchQuotes = async ({
   customer_id,
   status,
   start_date,
   end_date,
 }: {
   customer_id?: string;
   status?: string;
   start_date?: string;
   end_date?: string;
 }) => {
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
export const getQuoteId = async () => {
   const res = await apiClient.get('/admin/get_new_quote_id')
   console.log({res})
   return res  
}