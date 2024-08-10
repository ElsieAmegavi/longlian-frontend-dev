import { api } from '../client'


export const makeEnquiry = async (data: any) => {
	const res = await api.post('/make_enquiry', data)
	return res
}

export const contactUs = async (data: any) => {
	const res = await api.post('/contact_us', data)
	return res
}


export const orderOnline = async (data: any) => {
	const res = await api.post('/order_online', data)
	return res
}