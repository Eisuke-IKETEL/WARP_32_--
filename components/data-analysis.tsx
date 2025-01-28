import { useState } from "react"
import { Button } from "@/components/ui/button"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts"
import { PieChart } from "lucide-react"

const dummyData = [
  { name: "Category A", value: 400 },
  { name: "Category B", value: 300 },
  { name: "Category C", value: 200 },
  { name: "Category D", value: 100 },
]

export function DataAnalysis() {
  const [showChart, setShowChart] = useState(false)

  return (
    <div className="space-y-4">
      <Button onClick={() => setShowChart(!showChart)}>
        <PieChart className="mr-2 h-4 w-4" /> {showChart ? "Hide" : "Show"} Analysis
      </Button>
      {showChart && (
        <BarChart width={500} height={300} data={dummyData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="value" fill="#8884d8" />
        </BarChart>
      )}
    </div>
  )
}

