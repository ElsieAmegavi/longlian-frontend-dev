/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { Label } from '@/components/ui/label'
import PageHead from '@/components/custom/page-head'
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table'
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { Link } from 'react-router-dom'
import { Tabs, TabsContent } from '@/components/ui/tabs'
import { Card, CardContent } from '@/components/ui/card'
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	// SelectLabel,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'
import { useQuery } from '@tanstack/react-query'
import { getProducts } from '@/api/data/query'
import { useState } from 'react'

export default function Generators() {
	// State to manage selected generator and stock status
	const [selectedProductId, setSelectedProductId] = useState<string | null>(null)
	const [selectedStockStatus, setSelectedStockStatus] = useState<string | null>(null)

	// Fetch products with the query key including selected generator and stock status
	const { data: products } = useQuery({
		queryFn: () => getProducts({ product_id: selectedProductId, stock_status: selectedStockStatus }),
		queryKey: ['enquiries', selectedProductId, selectedStockStatus],
	})

	console.log(products?.data)

	// Function to handle generator selection
	const handleGeneratorChange = (value: string) => {
		setSelectedProductId(value)
	}

	// Function to handle stock status selection
	const handleStockStatusChange = (value: string) => {
		setSelectedStockStatus(value)
	}

	return (
		<>
			<PageHead title='Dashboard | App' />
			<div className='flex-1 min-h-screen space-y-4 p-4 pt-6 md:p-8 bg-gray-100'>
				<div className='flex items-center justify-between space-y-2'>
					<h2 className='text-3xl font-bold tracking-tight'>Inventory</h2>
					<Breadcrumb>
						<BreadcrumbList>
							<BreadcrumbItem>
								<BreadcrumbLink>
									<Link to='/'>Dashboard</Link>
								</BreadcrumbLink>
							</BreadcrumbItem>
							<BreadcrumbSeparator />
							<BreadcrumbItem>
								<BreadcrumbLink className='cursor-pointer'>Inventory</BreadcrumbLink>
							</BreadcrumbItem>
						</BreadcrumbList>
					</Breadcrumb>
				</div>
				<Tabs defaultValue='details' className='space-y-4'>
					<TabsContent value='details' className='space-y-4'>
						<Card className='col-span-4 md:col-span-3 pt-10'>
							<CardContent>
								<div className='flex-col items-start gap-8 flex'>
									<form className='grid w-full items-start gap-6  '>
										<div className='flex items-center justify-between gap-4 ml-10'>
											<div className='flex items-center  gap-3 '>
												<Label htmlFor='generator' className='w-52 text-lg'>
													Generators
												</Label>
												<Select onValueChange={handleGeneratorChange}>
													<SelectTrigger className=' rounded'>
														<SelectValue placeholder='Select option' />
													</SelectTrigger>
													<SelectContent className='bg-white'>
														<SelectGroup>
															{(products?.data as any)?.map((product: any) => (
																<SelectItem key={product.id} value={product.id}>
																	{product.model}
																</SelectItem>
															))}
														</SelectGroup>
													</SelectContent>
												</Select>
											</div>

											<div className='flex items-center  gap-3 '>
												<Label htmlFor='stock_status' className='w-52 text-lg'>
													Stock Status
												</Label>
												<Select onValueChange={handleStockStatusChange}>
													<SelectTrigger className=' rounded'>
														<SelectValue placeholder='Select option' />
													</SelectTrigger>
													<SelectContent className='bg-white'>
														<SelectGroup>
															<SelectItem value='I'>In Stock</SelectItem>
															<SelectItem value='L'>Low Stock</SelectItem>
															<SelectItem value='O'>Out of Stock</SelectItem>
														</SelectGroup>
													</SelectContent>
												</Select>
											</div>
										</div>
									</form>
								</div>
							</CardContent>
						</Card>

						<Card className='col-span-4 md:col-span-3 pt-10'>
							<CardContent>
								<Table>
									<TableHeader>
										<TableRow className='border-t'>
											<TableHead className='text-gray-400'>Product Model</TableHead>
											<TableHead className='text-gray-400'>Generator Power</TableHead>
											<TableHead className='text-gray-400'>Engine</TableHead>
											<TableHead className='text-gray-400'>Status</TableHead>
											<TableHead className='text-gray-400'>Action</TableHead>
										</TableRow>
									</TableHeader>
									<TableBody>
										{(products?.data as any)?.map((product: any) => (
											<TableRow key={product.id} className='border-none '>
												<TableCell className='font-medium'>{product.model}</TableCell>
												<TableCell>{product.power}</TableCell>
												<TableCell className='capitalize'>{product.engine}</TableCell>
												<TableCell>
													<span className="bg-green-500 text-white px-2 py-1 rounded">
														In Stock
													</span>
												</TableCell>
												<TableCell>
													<Link to={`/generators/${product.id}`} className="bg-gray-200 p-1.5 rounded hover:bg-gray-300 transition">
														View
													</Link>
												</TableCell>
											</TableRow>
										))}
									</TableBody>
								</Table>
							</CardContent>
						</Card>
					</TabsContent>
				</Tabs>
			</div>
		</>
	)
}