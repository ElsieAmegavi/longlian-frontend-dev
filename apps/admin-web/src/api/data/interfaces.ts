export interface Quote {
    id: string;
    quote_id: string;
    created_at: string;
    customer_name: string;
    customer_id: string;
    price: number;
    status: string;
}

export interface GetQuotesResponse {
    data: {
        data: Quote[];
    };
}



export interface QuoteIdRecordResponse {
    data: {
        response_code: string;
        data: string; // Adjust according to the actual data structure
    }
}


export interface QuoteStatisticsResponse {
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


export interface Customers {
    id: string;
    first_name: string;
    last_name: string;
    email: string;
    phone_number: string;
    location: string;
    active_status: boolean;
    del_status: boolean;
    created_at: string;
    updated_at: string;

}

export interface CustomersResponse {
    data: {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        [x: string]: any;
        data: Customers[];
    };
}



export interface Enquiries {
    id: string;
    customer_id: number;
    customer_name: string;
    email?: string;
    product_id?: number;
    message?: string;
    createdAt: string;
    updatedAt: string;

}

export interface EnquiriesResponse {
    data: {
        data: Enquiries[];
    };
}
