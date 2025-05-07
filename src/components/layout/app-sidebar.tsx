import * as React from 'react'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import CallIcon from '@mui/icons-material/Call'
import EmailIcon from '@mui/icons-material/Email'
import MarkUnreadChatAltIcon from '@mui/icons-material/MarkUnreadChatAlt'
import Avatar from '@mui/material/Avatar'
import Divider from '@mui/material/Divider'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import ListItemText from '@mui/material/ListItemText'
import Typography from '@mui/material/Typography'
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
              <span><p>Save and Close</p></span> 
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
