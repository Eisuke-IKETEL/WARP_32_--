import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { FileText } from "lucide-react"

export function DocumentGenerator() {
  const [generatedDoc, setGeneratedDoc] = useState("")

  const handleGenerate = () => {
    // Here you would typically call your AI model to generate a document
    setGeneratedDoc("This is a placeholder for the generated document.")
  }

  return (
    <div className="space-y-4">
      <Button onClick={handleGenerate}>
        <FileText className="mr-2 h-4 w-4" /> Generate Document
      </Button>
      {generatedDoc && <Textarea value={generatedDoc} readOnly className="h-[200px]" />}
    </div>
  )
}

