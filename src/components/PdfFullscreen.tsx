import { Dialog } from '@radix-ui/react-dialog'
import { useState } from 'react'
import { DialogContent, DialogTrigger } from './ui/dialog'
import { Button } from './ui/button'
import { Expand, Loader2 } from 'lucide-react'
import SimpleBar from 'simplebar-react'
import { Document, Page } from 'react-pdf'
import { useToast } from './ui/use-toast'
import { useResizeDetector } from 'react-resize-detector'

interface PdfFullscreenProps {
  fileUrl: string
}

const PdfFullscreen = ({ fileUrl }: PdfFullscreenProps) => {
  const { toast } = useToast()

  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [numPages, setNumPages] = useState<number>()

  const { width, ref } = useResizeDetector()

  return (
    <Dialog
      open={isOpen}
      onOpenChange={(v) => {
        if (!v) {
          setIsOpen(v)
        }
      }}>
      <DialogTrigger asChild onClick={() => setIsOpen(true)}>
        <Button variant={'ghost'}>
          <Expand aria-label='fullscreen' className='h-4 w-4' />
        </Button>
      </DialogTrigger>
      <DialogContent className='max-w-7xl w-full'>
        <SimpleBar autoHide={false} className='max-h-[calc(100vh-10rem)] mt-6'>
          <div ref={ref}>
            <Document
              loading={
                <div className='flex justify-center'>
                  <Loader2 className='my-24 h-6 w-6 animate-spin' />
                </div>
              }
              onLoadSuccess={({ numPages }) => setNumPages(numPages)}
              onLoadError={() => {
                toast({
                  title: 'Error loading PDF',
                  description: 'Please try again later',
                  variant: 'destructive',
                })
              }}
              file={fileUrl}
              className='max-h-full'>
              {new Array(numPages).fill(0).map((_, i) => (
                <Page key={i} width={width ? width : 1} pageNumber={i + 1} />
              ))}
            </Document>
          </div>
        </SimpleBar>
      </DialogContent>
    </Dialog>
  )
}

export default PdfFullscreen