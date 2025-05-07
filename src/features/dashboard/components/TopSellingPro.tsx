import * as React from 'react'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import mobile from '../../../assets/mobile.png'
import { CalendarComp } from '../components/CalaendarComp'

const products = [
  {
    id: 'P001',
    name: 'Nike Air Max',
    productImage: ShoppingBagIcon,
    category: 'Shoes',
    price: 120,
    sales: 15,
  },
  {
    id: 'P002',
    name: 'Classic T-Shirt',
    productImage: ShoppingBagIcon,
    category: 'Clothing',
    price: 40,
    sales: 20,
  },
  {
    id: 'P003',
    name: 'Smart Watch',
    productImage: ShoppingBagIcon,
    category: 'Electronics',
    price: 199,
    sales: 10,
  },
  {
    id: 'P004',
    name: 'Leather Bag',
    productImage: ShoppingBagIcon,
    category: 'Accessories',
    price: 80,
    sales: 8,
  },
]

export function TopSellingPro() {
  const totalRevenue = products.reduce((acc, p) => acc + p.price * p.sales, 0)
  const [date, setDate] = React.useState<Date>()

  return (
    <Card className='w-full'>
      <CardHeader className='topselling-pro'>
        <div>
          <CardTitle>Top selling products.</CardTitle>
        </div>
        <div>
          <CalendarComp />
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Product</TableHead>
              <TableHead>Sales</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Price</TableHead>
              <TableHead className='text-right'>Total Revenue</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product.id}>
                <TableCell className='flex items-center gap-3'>
                  <img
                    src={mobile}
                    alt={product.name}
                    className='h-10 w-10 rounded-md'
                  />
                  {/* <ShoppingBagIcon /> */}
                  {/* <span>{product.name}</span> */}
                </TableCell>
                <TableCell>{product.sales}</TableCell>
                <TableCell>{product.category}</TableCell>
                <TableCell>${product.price.toFixed(2)}</TableCell>
                <TableCell className='text-right'>
                  ${(product.price * product.sales).toFixed(2)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={4}>Total Revenue</TableCell>
              <TableCell className='text-right'>
                ${totalRevenue.toFixed(2)}
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </CardContent>
      {/* <CardFooter className='flex justify-between'>
        <Button variant='outline'>Cancel</Button>
        <Button>Deploy</Button>
      </CardFooter> */}
    </Card>
  )
}
