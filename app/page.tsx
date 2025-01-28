"use client"

import { useState } from "react"
import { Sidebar } from "@/components/sidebar"
import { FileUpload } from "@/components/file-upload"
import { ChatInterface } from "@/components/chat-interface"
import { DocumentGenerator } from "@/components/document-generator"
import { DataAnalysis } from "@/components/data-analysis"

export default function Home() {
  const [activeTab, setActiveTab] = useState("upload")

  return (
    <div className="flex">
      <Sidebar setActiveTab={setActiveTab} />
      <main className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-6">RAG System</h1>
        {activeTab === "upload" && (
          <div>
            <h2 className="text-2xl font-semibold mb-4">Upload Files</h2>
            <FileUpload />
          </div>
        )}
        {activeTab === "chat" && (
          <div>
            <h2 className="text-2xl font-semibold mb-4">Chat Interface</h2>
            <ChatInterface />
          </div>
        )}
        {activeTab === "document" && (
          <div>
            <h2 className="text-2xl font-semibold mb-4">Document Generator</h2>
            <DocumentGenerator />
          </div>
        )}
        {activeTab === "analysis" && (
          <div>
            <h2 className="text-2xl font-semibold mb-4">Data Analysis</h2>
            <DataAnalysis />
          </div>
        )}
      </main>
    </div>
  )
}

