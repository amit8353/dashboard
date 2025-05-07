import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  import ShoppingBagIcon from "@mui/icons-material/ShoppingBag"
  import mobile from "../../../assets/mobile.png"

  const orders = [
    {
      orderId: "ORD001",
      productImage: "/products/shoe1.png",
      customer: "John Doe",
      channel: "Website",
      total: "$120.00",
    },
    {
      orderId: "ORD002",
      productImage: "/products/shirt1.png",
      customer: "Jane Smith",
      channel: "Mobile App",
      total: "$80.00",
    },
    {
      orderId: "ORD003",
      productImage: "/products/watch1.png",
      customer: "Amit Kumar",
      channel: "Instagram",
      total: "$250.00",
    },
    {
      orderId: "ORD004",
      productImage: "/products/bag1.png",
      customer: "Sara Lee",
      channel: "Facebook",
      total: "$95.00",
    },
  ]
  
  export function RecentOrdersTable() {
    return (
      <Table>
        <TableCaption>A list of your recent orders.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[120px]">Order ID</TableHead>
            <TableHead>Product</TableHead>
            <TableHead>Customer</TableHead>
            <TableHead>Channel</TableHead>
            <TableHead className="text-right">Total</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orders.map((order) => (
            <TableRow key={order.orderId}>
              <TableCell className="font-medium">{order.orderId}</TableCell>
              <TableCell>
              {/* <ShoppingBagIcon fontSize="large" className="text-gray-600" /> */}

                <img
                  src={mobile}
                  alt="Product"
                  className="w-10 h-10 rounded-md"
                />
              </TableCell>
              <TableCell>{order.customer}</TableCell>
              <TableCell>{order.channel}</TableCell>
              <TableCell className="text-right">{order.total}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={4}>Total Revenue</TableCell>
            <TableCell className="text-right">$545.00</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    )
  }
  