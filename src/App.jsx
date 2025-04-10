import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/AppSidebar"
import { Routes, Route, Navigate } from "react-router-dom"
import { Toaster } from "sonner"
import './App.css'

import Dashboard from "@/pages/Dashboard"
import Users from "./pages/users/Users"
import AddUser from "./pages/users/AddUser"
import Courses from "./pages/courses/Courses"
import Profile from "./pages/Profile"

function App() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className=" flex-1">
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/add" element={<AddUser />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        <Toaster/>
      </main>
    </SidebarProvider>
  )
}

export default App

