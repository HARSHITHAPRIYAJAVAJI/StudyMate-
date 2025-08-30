import React from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils/index";
import { 
  BookOpen, 
  LayoutDashboard, 
  Upload, 
  MessageSquare, 
  Brain, 
  Calendar,
  Users,
  Zap,
  GraduationCap
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

const navigationItems = [
  {
    title: "Dashboard",
    url: createPageUrl("Dashboard"),
    icon: LayoutDashboard,
    description: "Overview & Progress"
  },
  {
    title: "Library",
    url: createPageUrl("Library"),
    icon: Upload,
    description: "Upload & Manage Documents"
  },
  {
    title: "Study",
    url: createPageUrl("Study"),
    icon: MessageSquare,
    description: "AI Q&A Sessions"
  },
  {
    title: "Flashcards",
    url: createPageUrl("Flashcards"),
    icon: Brain,
    description: "Review & Practice"
  },
  {
    title: "Quizzes",
    url: createPageUrl("Quizzes"),
    icon: Zap,
    description: "Test Your Knowledge"
  },
  {
    title: "Planner",
    url: createPageUrl("Planner"),
    icon: Calendar,
    description: "Study Schedule"
  },
  {
    title: "Collaborate",
    url: createPageUrl("Collaborate"),
    icon: Users,
    description: "Group Study"
  },
  {
    title: "Timer",
    url: createPageUrl("Timer"),
    icon: Clock,
    description: "Focus Timer"
  }
];

export default function Layout({ children, currentPageName }) {
  const location = useLocation();

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gradient-to-br from-slate-50 to-blue-50">
        <Sidebar className="border-r border-blue-100 bg-white/80 backdrop-blur-xl">
          <SidebarHeader className="border-b border-blue-100 p-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  StudyMate+
                </h2>
                <p className="text-xs text-slate-500 font-medium">AI Study Companion</p>
              </div>
            </div>
          </SidebarHeader>
          
          <SidebarContent className="p-4">
            <SidebarGroup>
              <SidebarGroupLabel className="text-xs font-semibold text-slate-400 uppercase tracking-wider px-3 py-2">
                Study Tools
              </SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {navigationItems.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton 
                        asChild 
                        className={`hover:bg-blue-50 hover:text-blue-700 transition-all duration-300 rounded-xl mb-1 group ${
                          location.pathname === item.url 
                            ? 'bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 shadow-sm border border-blue-200' 
                            : 'hover:shadow-sm'
                        }`}
                      >
                        <Link to={item.url} className="flex items-center gap-3 px-4 py-3">
                          <item.icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                          <div className="flex-1 min-w-0">
                            <div className="font-semibold text-sm">{item.title}</div>
                            <div className="text-xs text-slate-500 truncate">{item.description}</div>
                          </div>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>

          <SidebarFooter className="border-t border-blue-100 p-4">
            <div className="flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center">
                <span className="text-white font-semibold text-sm">U</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-slate-800 text-sm truncate">Study Mode</p>
                <p className="text-xs text-slate-500 truncate">Ready to learn!</p>
              </div>
            </div>
          </SidebarFooter>
        </Sidebar>

        <main className="flex-1 flex flex-col overflow-hidden">
          <header className="bg-white/80 backdrop-blur-xl border-b border-blue-100 px-6 py-4 md:hidden">
            <div className="flex items-center gap-4">
              <SidebarTrigger className="hover:bg-blue-50 p-2 rounded-lg transition-colors duration-200" />
              <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                StudyMate+
              </h1>
            </div>
          </header>

          <div className="flex-1 overflow-auto">
            {children}
          </div>
        </main>
      </div>
      
      <style>{`
        :root {
          --primary: 30 64 175;
          --primary-foreground: 248 250 252;
          --secondary: 241 245 249;
          --accent: 59 130 246;
        }
      `}</style>
    </SidebarProvider>
  );
}