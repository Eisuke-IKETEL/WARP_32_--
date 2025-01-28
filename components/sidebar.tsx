import { Button } from "@/components/ui/button"
import { Upload, MessageSquare, FileText, PieChart } from "lucide-react"

interface SidebarProps {
  setActiveTab: (tab: string) => void
}

export function Sidebar({ setActiveTab }: SidebarProps) {
  return (
    <div className="w-64 space-y-4 p-4 bg-gray-100 h-screen">
      <Button variant="ghost" className="w-full justify-start" onClick={() => setActiveTab("upload")}>
        <Upload className="mr-2 h-4 w-4" /> Upload
      </Button>
      <Button variant="ghost" className="w-full justify-start" onClick={() => setActiveTab("chat")}>
        <MessageSquare className="mr-2 h-4 w-4" /> Chat
      </Button>
      <Button variant="ghost" className="w-full justify-start" onClick={() => setActiveTab("document")}>
        <FileText className="mr-2 h-4 w-4" /> Document
      </Button>
      <Button variant="ghost" className="w-full justify-start" onClick={() => setActiveTab("analysis")}>
        <PieChart className="mr-2 h-4 w-4" /> Analysis
      </Button>
    </div>
  )
}

