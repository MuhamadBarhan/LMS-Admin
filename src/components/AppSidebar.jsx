import {
    Calendar,
    Home,
    Inbox,
    Search,
    Settings,
    BookOpen,
    GraduationCap,
    LayoutDashboard,
    Users,
    ChevronDown
  } from "lucide-react"
  
  import { Link } from "react-router-dom"
  
  import {
    Sidebar,
    SidebarHeader,
    SidebarContent,
    SidebarGroup,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubItem,
    SidebarMenuSubButton
  } from "@/components/ui/sidebar"
  
  import {
    Collapsible,
    CollapsibleTrigger,
    CollapsibleContent
  } from "@/components/ui/collapsible"
  
  // Placeholder functions for isActive and isActiveGroup
  function isActive(path) {
    return window.location.pathname === path
  }
  
  function isActiveGroup(paths) {
    return paths.some((path) => window.location.pathname.startsWith(path))
  }
  
  export function AppSidebar() {
    return (
      <Sidebar>
        <SidebarHeader>
          <div className="flex h-14 items-center border-b px-4">
            <Link to="/" className="flex items-center gap-2 font-semibold">
              <GraduationCap className="h-6 w-6" />
              <span>Skill Wave</span>
            </Link>
          </div>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={isActive("/")}>
                  <Link to="/">
                    <LayoutDashboard className="h-4 w-4" />
                    <span>Dashboard</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
  
              <SidebarMenuItem>
                <Collapsible className="w-full" defaultOpen={isActiveGroup(["/users"])}>
                  <CollapsibleTrigger className="flex w-full items-center justify-between rounded-md p-2 hover:bg-sidebar-accent cursor-pointer">
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4" />
                      <span>User Management</span>
                    </div>
                    <ChevronDown className="h-4 w-4" />
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      <SidebarMenuSubItem>
                        <SidebarMenuSubButton asChild isActive={isActive("/users")}>
                          <Link to="/users">All Users</Link>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                      <SidebarMenuSubItem>
                        <SidebarMenuSubButton asChild isActive={isActive("/users/add")}>
                          <Link to="/users/add">Add User</Link>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                      <SidebarMenuSubItem>
                        <SidebarMenuSubButton asChild isActive={isActive("/users/roles")}>
                          <Link to="/users/roles">Manage Roles</Link>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                      <SidebarMenuSubItem>
                        <SidebarMenuSubButton asChild isActive={isActive("/users/activity")}>
                          <Link to="/users/activity">User Activity</Link>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </Collapsible>
              </SidebarMenuItem>
  
              <SidebarMenuItem>
                <Collapsible className="w-full" defaultOpen={isActiveGroup(["/instructors"])}>
                  <CollapsibleTrigger className="flex w-full items-center justify-between rounded-md p-2 hover:bg-sidebar-accent cursor-pointer">
                    <div className="flex items-center gap-2">
                      <GraduationCap className="h-4 w-4" />
                      <span>Instructor Management</span>
                    </div>
                    <ChevronDown className="h-4 w-4" />
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      <SidebarMenuSubItem>
                        <SidebarMenuSubButton asChild isActive={isActive("/instructors")}>
                          <Link to="/instructors">All Instructors</Link>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                      <SidebarMenuSubItem>
                        <SidebarMenuSubButton asChild isActive={isActive("/instructors/add")}>
                          <Link to="/instructors/add">Add Instructor</Link>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                      <SidebarMenuSubItem>
                        <SidebarMenuSubButton asChild isActive={isActive("/instructors/performance")}>
                          <Link to="/instructors/performance">Performance Overview</Link>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </Collapsible>
              </SidebarMenuItem>

            <SidebarMenuItem>
              <Collapsible className="w-full" defaultOpen={isActiveGroup(["/courses"])}>
                <CollapsibleTrigger className="flex w-full items-center justify-between rounded-md p-2 hover:bg-sidebar-accent cursor-pointer">
                  <div className="flex items-center gap-2">
                    <BookOpen className="h-4 w-4" />
                    <span>Course Management</span>
                  </div>
                  <ChevronDown className="h-4 w-4" />
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <SidebarMenuSub>
                    <SidebarMenuSubItem>
                      <SidebarMenuSubButton asChild isActive={isActive("/courses")}>
                        <Link to="/courses">All Courses</Link>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                    <SidebarMenuSubItem>
                      <SidebarMenuSubButton asChild isActive={isActive("/courses/add")}>
                        <Link to="/courses/add">Add Course</Link>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                    <SidebarMenuSubItem>
                      <SidebarMenuSubButton asChild isActive={isActive("/courses/categories")}>
                        <Link to="/courses/categories">Course Categories/Tags</Link>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                    <SidebarMenuSubItem>
                      <SidebarMenuSubButton asChild isActive={isActive("/courses/assign")}>
                        <Link to="/courses/assign">Assign Instructors</Link>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  </SidebarMenuSub>
                </CollapsibleContent>
              </Collapsible>
            </SidebarMenuItem>

            </SidebarMenu>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    )
  }
  