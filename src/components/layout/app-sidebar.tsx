import * as React from 'react';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import CallIcon from '@mui/icons-material/Call'
import EmailIcon from '@mui/icons-material/Email'
import MarkUnreadChatAltIcon from '@mui/icons-material/MarkUnreadChatAlt'
import { Plus } from 'lucide-react';
import SaveIcon from '@mui/icons-material/Save';
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Separator } from '@/components/ui/separator'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from '@/components/ui/sidebar'
import { NavGroup } from '@/components/layout/nav-group'
import { NavUser } from '@/components/layout/nav-user'
import { TeamSwitcher } from '@/components/layout/team-switcher'
import { sidebarData } from './data/sidebar-data'


export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
 
  const numbers=[
    { country: 'US', number: '+1 344 434 4455' },
    { country: 'US', number: '+1 344 434 4455' },
  ]

  return (
    <Sidebar collapsible='icon' variant='floating' {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={sidebarData.teams} />
      </SidebarHeader>
      <SidebarContent>
        

        <Card className='w-[275px] padding-left'>
          {/* <Separator className='my-4' /> */}
          <div className='icon-main flex h-5 items-center space-x-4 text-sm'>
            <div className='icon-show'>
              <EmailIcon sx={{ width: 20, height: 20 }} />
              <p>Email</p>
            </div>
            <Separator orientation='vertical' />
            <div className='icon-show'>
              <CallIcon sx={{ width: 20, height: 20 }} />
              <p>Call</p>
            </div>
            <Separator orientation='vertical' />
            <div className='icon-show'>
              <MarkUnreadChatAltIcon sx={{ width: 20, height: 20 }} />
              <p>Message</p>
            </div>
            <Separator orientation='vertical' />
            <div className='icon-show'>
              <CalendarMonthIcon sx={{ width: 20, height: 20 }} />              
              <p>Calendar</p>
            </div>
          </div>
        </Card>

        {/* {sidebarData.navGroups.map((props) => (
          <NavGroup key={props.title} {...props} />
        ))} */}
        <Card className='w-[275px] padding-left '>
          <CardHeader>
            <CardTitle className='business-de'>
              <span>Business Details</span>
              <span><p><SaveIcon sx={{ width: 15, height: 15 }} /> {" "}Save and Close
              </p></span> 
            </CardTitle>
          
          </CardHeader>
          {/* <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="picture">Picture</Label>
            <Input id="picture" type="file" />
          </div> */}



          <CardContent className='busness-padding'>
            <form>
              <div className='grid w-full items-center gap-4'>
                 
            


                <div className='flex flex-col space-y-1.5'>
                  <Label htmlFor='name'>Account Name</Label>
                  <Input id='name' placeholder='TRUCK GREAR' />
                </div>
                <div className='flex flex-col space-y-1.5'>
                  <Label htmlFor='name'>Email</Label>
                  <Input id='name' placeholder='Jillali@Onechanneladmin.Com' />
                </div>

                <div className="space-y-4">
      <label className="my-plush block text-sm font-medium text-gray-700 mb-2">Phone Number  <button  className="text-blue-500 mt-2 flex items-center">
        <Plus className="w-5 h-5 mr-1" />
      </button></label>
      {numbers.map((item, index) => (
        <div key={index} className="flex items-center space-x-3">
          <Select>
            <SelectTrigger className="w-24">
              <SelectValue placeholder={item.country} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="US">US</SelectItem>
              <SelectItem value="CA">CA</SelectItem>
              <SelectItem value="IN">IN</SelectItem>
            </SelectContent>
          </Select>
          <Input value={item.number} placeholder="Phone Number" className="flex-1" />
          <Button variant="outline" className="text-red-500 border-red-500">
            Remove
          </Button>
        </div>
      ))}
     
       </div>

                <div className='flex flex-col space-y-1.5'>
                  <Label htmlFor='name'>Contact Owner</Label>
                  <Select>
                    <SelectTrigger id='framework'>
                      <SelectValue placeholder='Suchithkumar@Onec.Com' />
                    </SelectTrigger>
                    <SelectContent position='popper'>
                      <SelectItem value='next'>Next.js</SelectItem>
                      <SelectItem value='sveltekit'>SvelteKit</SelectItem>
                      <SelectItem value='astro'>Astro</SelectItem>
                      <SelectItem value='nuxt'>Nuxt.js</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className='flex flex-col space-y-1.5'>
                  <Label htmlFor='name'>Industry</Label>
                  <Select>
                    <SelectTrigger id='framework'>
                      <SelectValue placeholder='Accounting' />
                    </SelectTrigger>
                    <SelectContent position='popper'>
                      <SelectItem value='next'>Next.js</SelectItem>
                      <SelectItem value='sveltekit'>SvelteKit</SelectItem>
                      <SelectItem value='astro'>Astro</SelectItem>
                      <SelectItem value='nuxt'>Nuxt.js</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className='flex flex-col space-y-1.5 phone-num'>
                  <Label htmlFor='framework'>Website</Label>
                  <Input id='name' placeholder='WWW.TRUCKGEAR.COM' />
                </div>

                <div className='flex flex-col space-y-1.5'>
                  <Label htmlFor='name'>No. Of Employee</Label>
                  <Select>
                    <SelectTrigger id='framework'>
                      <SelectValue placeholder='10' />
                    </SelectTrigger>
                    <SelectContent position='popper'>
                      <SelectItem value='next'>Next.js</SelectItem>
                      <SelectItem value='sveltekit'>SvelteKit</SelectItem>
                      <SelectItem value='astro'>Astro</SelectItem>
                      <SelectItem value='nuxt'>Nuxt.js</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className='flex flex-col space-y-1.5'>
                  <Label htmlFor='name'>Credit Limit</Label>
                  <Select>
                    <SelectTrigger id='framework'>
                      <SelectValue placeholder='$ 5000' />
                    </SelectTrigger>
                    <SelectContent position='popper'>
                      <SelectItem value='next'>Next.js</SelectItem>
                      <SelectItem value='sveltekit'>SvelteKit</SelectItem>
                      <SelectItem value='astro'>Astro</SelectItem>
                      <SelectItem value='nuxt'>Nuxt.js</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className='flex flex-col space-y-1.5'>
                  <Label htmlFor='name'>Available Credit</Label>
                  <Select>
                    <SelectTrigger id='framework'>
                      <SelectValue placeholder='$ 806.71' />
                    </SelectTrigger>
                    <SelectContent position='popper'>
                      <SelectItem value='next'>Next.js</SelectItem>
                      <SelectItem value='sveltekit'>SvelteKit</SelectItem>
                      <SelectItem value='astro'>Astro</SelectItem>
                      <SelectItem value='nuxt'>Nuxt.js</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </form>
          </CardContent>
          {/* <CardFooter className='flex justify-between'>
            <Button variant='outline'>Cancel</Button>
            <Button>Deploy</Button>
          </CardFooter> */}
        </Card>
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={sidebarData.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
