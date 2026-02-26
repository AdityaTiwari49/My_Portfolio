"use client"

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Download, FileText, ExternalLink } from "lucide-react"

interface ResumeModalProps {
    children: React.ReactNode
}

export function ResumeModal({ children }: ResumeModalProps) {
    const resumeUrl = "/resume.pdf"

    return (
        <Dialog>
            <DialogTrigger asChild>
                {children}
            </DialogTrigger>
            <DialogContent className="max-w-4xl w-[95vw] h-[90vh] flex flex-col p-0 overflow-hidden bg-zinc-950 border-white/10">
                <DialogHeader className="p-6 border-b border-white/5 bg-zinc-950/50 backdrop-blur-xl">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                                <FileText className="h-5 w-5" />
                            </div>
                            <div>
                                <DialogTitle className="text-xl font-bold text-white leading-none mb-1">
                                    Resume Preview
                                </DialogTitle>
                                <p className="text-xs text-zinc-500 font-medium uppercase tracking-wider">
                                    Aditya Tiwari · Portfolio 2025
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 mr-8">
                            <Button
                                variant="outline"
                                size="sm"
                                className="rounded-full border-white/10 bg-white/5 text-xs font-bold uppercase tracking-wider text-white hover:bg-white/10 hover:border-primary/30 transition-all"
                                asChild
                            >
                                <a href={resumeUrl} target="_blank" rel="noopener noreferrer">
                                    <ExternalLink className="h-3.5 w-3.5 mr-2" />
                                    Full View
                                </a>
                            </Button>
                            <Button
                                size="sm"
                                className="rounded-full bg-primary text-xs font-bold uppercase tracking-wider text-white hover:scale-105 transition-all shadow-lg shadow-primary/20"
                                asChild
                            >
                                <a href={resumeUrl} download="Aditya_Tiwari_Resume.pdf">
                                    <Download className="h-3.5 w-3.5 mr-2" />
                                    Download
                                </a>
                            </Button>
                        </div>
                    </div>
                </DialogHeader>

                <div className="flex-1 w-full bg-zinc-900 overflow-hidden relative group">
                    <iframe
                        src={`${resumeUrl}#toolbar=0&navpanes=0&scrollbar=0`}
                        className="w-full h-full border-none"
                        title="Resume Preview"
                    />
                    {/* Decorative overlay for better integration */}
                    <div className="absolute inset-0 pointer-events-none border-t border-white/5" />
                </div>

                <DialogFooter className="p-4 border-t border-white/5 bg-zinc-950/50 backdrop-blur-xl sm:justify-center">
                    <p className="text-[10px] text-zinc-500 font-medium uppercase tracking-[0.2em]">
                        Click the download button above to save the PDF
                    </p>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
