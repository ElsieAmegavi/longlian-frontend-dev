import AllQuote from '@/pages/dashboard/all-quote'
import GenerateReport from '@/pages/dashboard/generate-report'
import NewQuote from '@/pages/dashboard/new-quote'
import EnquiryPage from '@/pages/enquiries'
import EnquiryDetails from '@/pages/enquiries/details'
import Generators from '@/pages/generators'
import NotFound from '@/pages/not-found'
import Orders from '@/pages/orders'
import Report from '@/pages/report'
import Settings from '@/pages/settings'
import General from '@/pages/settings/general'
import { Suspense, lazy } from 'react'
import { Navigate, Outlet, useRoutes } from 'react-router-dom'
import Cookies from 'js-cookie'
import HelpSupport from '@/pages/settings/help'
import ContactSupport from '@/pages/settings/help/ContactSupport'
import AdminManagement from '@/pages/settings/admin'
import AdminManagementForm from '@/pages/settings/admin/AdminManagementForm'
import FAQ from '@/pages/settings/help/faq'
import ProfileSettings from '@/pages/settings/profile'
import AdminDetails from '@/pages/settings/admin/details'
const DashboardLayout = lazy(() => import('@/pages/layout'))
const LoginPage = lazy(() => import('@/pages/auth/login'))
const DashboardPage = lazy(() => import('@/pages/dashboard'))

// ----------------------------------------------------------------------

export default function AppRouter() {
	const token = Cookies.get('token')
	if (!token) {
		return <LoginPage />
	}
	const dashboardRoutes = [
		{
			path: '/',
			element: (
				<DashboardLayout>
					<Suspense>
						<Outlet />
					</Suspense>
				</DashboardLayout>
			),
			children: [
				{
					element: <DashboardPage />,
					index: true,
				},
				{
					path: 'enquiries',
					element: <EnquiryPage />,
				},
				{
					path: 'enquiries/:id',
					element: <EnquiryDetails />,
				},
				{
					path: 'new-quote',
					element: <NewQuote />,
				},
				{
					path: 'all-quote',
					element: <AllQuote />,
				},
				{
					path: 'generate',
					element: <GenerateReport />,
				},
				{
					path: 'orders',
					element: <Orders />,
				},
				{
					path: 'generators',
					element: <Generators />,
				},
				{
					path: 'report',
					element: <Report />,
				},
				{
					path: 'settings',
					element: <Settings />,
				},
				{
					path: '/settings/profile',
					element: <ProfileSettings />,
				},
				{
					path: '/settings/general',
					element: <General />,
				},
				{
					path: '/settings/help',
					element: <HelpSupport />,
				},
				{
					path: '/settings/help/contact-support',
					element: <ContactSupport />,
				},
				{
					path: '/settings/help/faq',
					element: <FAQ />,
				},
				{
					path: '/settings/admin',
					element: <AdminManagement />,
				},
				{
					path: '/settings/admin/form',
					element: <AdminManagementForm />,
				},
				{
					path: '/settings/admin/details',
					element: <AdminDetails />,
				},
			],
		},
	]

	const publicRoutes = [
		{
			path: '/login',
			element: <LoginPage />,
			index: true,
		},
		{
			path: '/404',
			element: <NotFound />,
		},
		{
			path: '*',
			element: <Navigate to='/404' replace />,
		},
	]

	// eslint-disable-next-line react-hooks/rules-of-hooks
	const routes = useRoutes([...dashboardRoutes, ...publicRoutes])

	return routes
}
