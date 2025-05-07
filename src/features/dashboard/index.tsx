import * as React from 'react'
import { format } from 'date-fns'
import { CalendarIcon } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from '@/components/ui/card'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Header } from '@/components/layout/header'
import { Main } from '@/components/layout/main'
import { TopNav } from '@/components/layout/top-nav'
import { ProfileDropdown } from '@/components/profile-dropdown'
import { Search } from '@/components/search'
import { ThemeSwitch } from '@/components/theme-switch'
import OrderStatusg from '../../assets/Group.png'
import IconMainf from '../../assets/order-f.png'
import orderIcon from '../../assets/orders.png'
import OrderStatus from '../../assets/orderstatus.png'
import PenIcon from '../../assets/pending.png'
import RetIcon from '../../assets/return.png'
import RevIcon from '../../assets/rev.png'
import TokenIconf from '../../assets/token-f.png'
import TokenIcon from '../../assets/token.png'
import { TableDemo } from './components/DataTsblecom'
import { PiChartComponents } from './components/PiChartscomp'
import { RecentOrdersTable } from './components/RecentOrdersTable'
import { TopSellingPro } from './components/TopSellingPro'
import { Overview } from './components/overview'
import { RecentSales } from './components/recent-sales'

export default function Dashboard() {
  const [date, setDate] = React.useState<Date>()

  const summaryData = [
    { month: 'All', value: 50, img: OrderStatus },
    { month: 'New', value: 50, img: OrderStatusg },
    { month: 'Pending', value: 50, img: OrderStatus },
    { month: 'Dispatched', value: 30, img: OrderStatusg },
    { month: 'Delivered', value: 40, img: OrderStatus },
    { month: 'Cancelled', value: 30, img: OrderStatusg },
  ]

  return (
    <>
      {/* ===== Top Heading ===== */}
      <Header>
        <TopNav links={topNav} />
        <div className='ml-auto flex items-center space-x-4'>
          <Search />
          <ThemeSwitch />
          <ProfileDropdown />
        </div>
      </Header>

      {/* ===== Main ===== */}
      <Main>
        {/* <div className='mb-2 flex items-center justify-between space-y-2'>
          <h1 className='text-2xl font-bold tracking-tight'>Dashboard</h1>
          <div className='flex items-center space-x-2'>
            <Button>Download</Button>
          </div>
        </div> */}
        <Tabs
          orientation='vertical'
          defaultValue='overview'
          className='space-y-4'
        >
          <div className='w-full overflow-x-auto pb-2'>
            <TabsList>
              <TabsTrigger value='overview'>Dashboard</TabsTrigger>
              <TabsTrigger value='analytics' disabled>
                Orders
              </TabsTrigger>
              <TabsTrigger value='reports' disabled>
                Address
              </TabsTrigger>
              <TabsTrigger value='notifications' disabled>
                Notes
              </TabsTrigger>
              <TabsTrigger value='notifications' disabled>
                Tasks
              </TabsTrigger>
              <TabsTrigger value='notifications' disabled>
                Contacts
              </TabsTrigger>
              <TabsTrigger value='notifications' disabled>
                Credit History
              </TabsTrigger>
            </TabsList>
          </div>
          <TabsContent value='overview' className='space-y-4'>
            <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-5'>
              <Card>
                <CardContent className='cart-image'>
                  {/* <div className='text-2xl font-bold'>$45,231.89</div> */}
                  <div>
                    <img src={orderIcon} />
                  </div>
                  <div>
                    <p className='text-muted-foreground text-xs'>
                      Total Orders
                    </p>
                    <h3>123</h3>
                  </div>
                </CardContent>
                <CardFooter className='busness-padding flex justify-between'>
                  <img src={IconMainf} />
                  <CardContent className='footer-text'>
                    From The Last Month
                  </CardContent>
                  {/* <img src={IconMainf}/> */}
                </CardFooter>
              </Card>

              <Card>
                <CardContent className='cart-image'>
                  {/* <div className='text-2xl font-bold'>$45,231.89</div> */}
                  <div>
                    <img src={TokenIcon} />
                  </div>
                  <div>
                    <p className='text-muted-foreground text-xs'>Total Taken</p>
                    <h3>123</h3>
                  </div>
                </CardContent>
                <CardFooter className='busness-padding flex justify-between'>
                  <img src={TokenIconf} />
                  <CardContent className='footer-text'>
                    From The Last Month
                  </CardContent>
                  {/* <img src={IconMainf}/> */}
                </CardFooter>
              </Card>
              <Card>
                <CardContent className='cart-image'>
                  {/* <div className='text-2xl font-bold'>$45,231.89</div> */}
                  <div>
                    <img src={RevIcon} />
                  </div>
                  <div>
                    <p className='text-muted-foreground text-xs'>
                      Total Revenue
                    </p>
                    <h3>123</h3>
                  </div>
                </CardContent>
                <CardFooter className='busness-padding flex justify-between'>
                  <img src={IconMainf} />
                  <CardContent className='footer-text'>
                    From The Last Month
                  </CardContent>
                  {/* <img src={IconMainf}/> */}
                </CardFooter>
              </Card>
              <Card>
                <CardContent className='cart-image'>
                  {/* <div className='text-2xl font-bold'>$45,231.89</div> */}
                  <div>
                    <img src={PenIcon} />
                  </div>
                  <div>
                    <p className='text-muted-foreground text-xs'>
                      Total Orders
                    </p>
                    <h3>123</h3>
                  </div>
                </CardContent>
                <CardFooter className='busness-padding flex justify-between'>
                  <img src={IconMainf} />
                  <CardContent className='footer-text'>
                    From The Last Month
                  </CardContent>
                  {/* <img src={IconMainf}/> */}
                </CardFooter>
              </Card>
              <Card>
                <CardContent className='cart-image'>
                  {/* <div className='text-2xl font-bold'>$45,231.89</div> */}
                  <div>
                    <img src={RetIcon} />
                  </div>
                  <div>
                    <p className='text-muted-foreground text-xs'>
                      Total Orders
                    </p>
                    <h3>123</h3>
                  </div>
                </CardContent>
                <CardFooter className='busness-padding flex justify-between'>
                  <img src={IconMainf} />
                  <CardContent className='footer-text'>
                    From The Last Month
                  </CardContent>
                  {/* <img src={IconMainf}/> */}
                </CardFooter>
              </Card>
            </div>

            <div className='grid grid-cols-1 gap-4 lg:grid-cols-7'>
              <Card className='col-span-1 shadow-md lg:col-span-4'>
                <CardHeader className='adddisplay flex items-center space-x-4'>
                  {' '}
                  {/* Added space between elements */}
                  <div>
                    <CardTitle className='text-lg md:text-xl'>
                      Order Status
                    </CardTitle>
                  </div>
                  {/* Select 1 */}
                  <div className='addflex-data'>
                    <Select>
                      <SelectTrigger id=''>
                        <SelectValue placeholder='All Categories' />
                      </SelectTrigger>
                      <SelectContent position='popper'>
                        <SelectItem value='next'>Next.js</SelectItem>
                        <SelectItem value='sveltekit'>SvelteKit</SelectItem>
                        <SelectItem value='astro'>Astro</SelectItem>
                        <SelectItem value='nuxt'>Nuxt.js</SelectItem>
                      </SelectContent>
                    </Select>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant={'outline'}
                          className={cn(
                            'w-[140px] justify-start text-left font-normal',
                            !date && 'text-muted-foreground'
                          )}
                        >
                          <CalendarIcon />
                          {date ? (
                            format(date, 'PPP')
                          ) : (
                            <span>Pick a date</span>
                          )}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className='w-auto p-0' align='start'>
                        <Calendar
                          mode='single'
                          selected={date}
                          onSelect={setDate}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                </CardHeader>

                <CardContent className='pl-2'>
                  <div className='flex flex-col justify-between gap-6 md:flex-row'>
                    {/* Left: Summary Grid */}
                    <div className='w-full space-y-4 md:w-full'>
                      <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2'>
                        {summaryData.map((item, idx) => (
                          <div
                            key={idx}
                            className='flex items-center gap-3 rounded-md p-3 transition'
                          >
                            <div className='bg-primary/10 text-primary flex h-14 w-14 items-center justify-center rounded-full p-2'>
                              <img
                                src={item.img}
                                alt={item.month}
                                // className='h-10 w-6 rounded-full object-cover'
                              />
                            </div>
                            <div className='flex flex-col'>
                              <span className='text-muted-foreground text-sm font-medium'>
                                {item.month}
                              </span>
                              <span className='text-base font-bold'>
                                {item.value}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Right: Donut Chart */}
                    <div className='flex w-full items-center justify-center md:w-1/2'>
                      <div className='w-full max-w-xs'>
                        <PiChartComponents />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className='col-span-1 lg:col-span-3'>
                <CardHeader>
                  <CardTitle>Recent Activities</CardTitle>
                  <CardDescription>
                    You made 265 sales this month.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <RecentSales />
                </CardContent>
              </Card>
            </div>

            <div className='grid grid-cols-1 gap-4 lg:grid-cols-7'>
              <Card className='col-span-1 lg:col-span-4'>
                <CardHeader>
                  <CardTitle>Recent Orders</CardTitle>
                </CardHeader>
                <CardContent className='pl-2'>
                  <RecentOrdersTable />
                </CardContent>
              </Card>
              <Card className='col-span-1 lg:col-span-3'>
                <CardHeader>
                  <CardTitle>Recent Transactions</CardTitle>
                  <CardDescription>
                    You made 265 sales this month.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <TableDemo />
                </CardContent>
              </Card>
            </div>

            <TopSellingPro />

            <div className='grid grid-cols-1 gap-4 lg:grid-cols-7'>
              <Card className='col-span-1 lg:col-span-4'>
                {/* <CardHeader >
                  <Tabs defaultValue='account' className='w-[400px]'>
                    <TabsList>
                      <TabsTrigger value='account'>Revenue</TabsTrigger>
                      <TabsTrigger value='password'>Orders</TabsTrigger>
                      <TabsTrigger value='password'>Customers</TabsTrigger>
                    </TabsList>
                  </Tabs>
                </CardHeader> */}
                 <CardHeader className='adddisplay flex items-center space-x-4'>
                  {' '}
                  {/* Added space between elements */}
                  <div>
                  <CardHeader >
                  <Tabs defaultValue='Revenue' className='w-[400px]'>
                    <TabsList>
                      <TabsTrigger value='Revenue'>Revenue</TabsTrigger>
                      <TabsTrigger value='Orders'>Orders</TabsTrigger>
                      <TabsTrigger value='Customers'>Customers</TabsTrigger>
                    </TabsList>
                  </Tabs>
                </CardHeader>
                  </div>
                  {/* Select 1 */}
                  <div className='addflex-data'>
                    <Select >
                      <SelectTrigger id=''>
                        <SelectValue placeholder='All Categories' />
                      </SelectTrigger>
                      <SelectContent position='popper'>
                        <SelectItem value='next'>Next.js</SelectItem>
                        <SelectItem value='sveltekit'>SvelteKit</SelectItem>
                        <SelectItem value='astro'>Astro</SelectItem>
                        <SelectItem value='nuxt'>Nuxt.js</SelectItem>
                      </SelectContent>
                    </Select>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant={'outline'}
                          className={cn(
                            'w-[80px] justify-start text-left font-normal',
                            !date && 'text-muted-foreground'
                          )}
                        >
                          <CalendarIcon />
                          {date ? (
                            format(date, 'PPP')
                          ) : (
                            <span>2023</span>
                          )}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className='w-auto p-0' align='start'>
                        <Calendar
                          mode='single'
                          selected={date}
                          onSelect={setDate}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                </CardHeader>
                <CardContent className='pl-2'>
                  <Overview />
                </CardContent>
              </Card>
              <Card className='col-span-1 lg:col-span-3'>
                <CardHeader>
                  <CardTitle>Recent Sales</CardTitle>
                  <CardDescription>
                    You made 265 sales this month.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <RecentSales />
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </Main>
    </>
  )
}

const topNav = [
  {
    title: 'Overview',
    href: 'dashboard/overview',
    isActive: true,
    disabled: false,
  },
  {
    title: 'Customers',
    href: 'dashboard/customers',
    isActive: false,
    disabled: true,
  },
  {
    title: 'Products',
    href: 'dashboard/products',
    isActive: false,
    disabled: true,
  },
  {
    title: 'Settings',
    href: 'dashboard/settings',
    isActive: false,
    disabled: true,
  },
]
