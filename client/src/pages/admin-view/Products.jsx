import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet'

import { Fragment, useState } from 'react'
import CommonForm from '@/component/common/forms'
import { addProductFormElements } from '@/config'
import ProductImageUpload from '@/component/admin-view/image-upload'

const initialFormData = {
  image: null,
  title: '',
  description: '',
  category: '',
  price: '',
}

function AdminProducts() {
  const [openCreateProductDialoge, setOpenCreateProductDialoge] =
    useState(false)
  const [formData, setFormData] = useState(initialFormData)
  const [imageFile, setImageFile] = useState(null)
  const [uploadedImageUrl, setuploadedImageUrl] = useState('')
  function onSubmit() {}
  return (
    <Fragment>
      <div className="flex justify-end w-full">
        <button
          onClick={() => setOpenCreateProductDialoge(true)}
          className="rounded-md bg-primaryGreenLight h-fit px-4 py-2 text-sm font-medium text-white shadow-md hover:bg-primaryGreenDark "
        >
          Aggiungi Nuovo Prodotto
        </button>
        <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4"></div>
        <Sheet
          open={openCreateProductDialoge}
          onOpenChange={() => {
            setOpenCreateProductDialoge(false)
          }}
        >
          <SheetContent side="right" className="bg-white w-full">
            <SheetHeader>
              <SheetTitle>Aggiungi Nuovo Prodotto</SheetTitle>
            </SheetHeader>
            <ProductImageUpload
              imageFile={imageFile}
              setImageFile={setImageFile}
              uploadedImageUrl={uploadedImageUrl}
              setuploadedImageUrl={setuploadedImageUrl}
            />
            <div className="py-6">
              <CommonForm
                formData={formData}
                setFormData={setFormData}
                formControls={addProductFormElements}
                buttonText={'Aggiungi'}
                onSubmit={onSubmit}
              />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </Fragment>
  )
}
export default AdminProducts
