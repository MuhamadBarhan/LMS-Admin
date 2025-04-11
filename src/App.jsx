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
import AddInstructor from "./pages/instructors/AddInstructor"
import Instructors from "./pages/instructors/Instructors"
import Performance from "./pages/instructors/Performance"
import AddCourse from "./pages/courses/AddCourse"
import AssignCourse from "./pages/courses/AssignCourse"
import Assessments from "./pages/assessments/Assessments"
import Quiz from "./pages/assessments/Quiz"
import Submissions from "./pages/assessments/Submissions"

function App() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className=" flex-1">
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />

          <Route path="/users" element={<Users />} />
          <Route path="/users/add" element={<AddUser />} />

          <Route path="/instructors" element={<Instructors />} />
          <Route path="/instructors/add" element={<AddInstructor />} />
          <Route path="/instructors/performance" element={<Performance />} />

          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/add" element={<AddCourse />} />
          <Route path="/courses/assign" element={<AssignCourse />} />

          <Route path="/assessments" element={<Assessments />} />
          <Route path="/assessments/quiz" element={<Quiz />} />
          <Route path="/assessments/submissions" element={<Submissions />} />
        </Routes>
        <Toaster/>
      </main>
    </SidebarProvider>
  )
}

export default App

