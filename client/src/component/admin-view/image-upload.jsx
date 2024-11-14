import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { FileIcon, UploadCloudIcon, XIcon } from 'lucide-react'
import { useRef } from 'react'

function ProductImageUpload({
  imageFile,
  setImageFile,
  uploadedImageUrl,
  setuploadedImageUrl,
}) {
  const inputRef = useRef(null)
  function handleImageFileChange(event) {
    console.log(event.target.files)
    const selectedFile = event.target.files?.[0]
    if (selectedFile) setImageFile(selectedFile)
  }

  function handleDragOver(event) {
    event.preventDefault()
  }

  function handleDrop(event) {
    event.preventDefault()
    const droppedFile = event.dataTransfer.files?.[0]
    if (droppedFile) setImageFile(droppedFile)
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <Label className="text-lg font-semibold mb-2 block mt-4 text-md">
        Carica immagine
      </Label>
      <div onDragOver={handleDragOver} onDrop={handleDrop}>
        <Input
          id="image-upload"
          type="file"
          className="hidden"
          ref={inputRef}
          onChange={handleImageFileChange}
        />
        {!imageFile ? (
          <Label
            htmlFor="image-upload"
            className="flex flex-col items-center text-gray-400 text-center justify-center h-32 cursor-pointer p-4 border border-dashed border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-600 "
          >
            <UploadCloudIcon className="h-10 w-10 mb-2 " />
            <span className="text-sm ">
              Trascina e rilascia o clicca per caricare l'immagine;
            </span>
          </Label>
        ) : (
          <div className="flex items-center justify-around bg-gray-100 py-4 border border-dashed border-gray-300 rounded-lg">
            <FileIcon className=" w-8 h-8 mr-2 text-primaryGreenLight" />
            <p>{imageFile.name}</p>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setImageFile(null)}
            >
              <XIcon className="w-5 h-5" />
              {/* <span>Rimuovi immagine</span> */}
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
export default ProductImageUpload
