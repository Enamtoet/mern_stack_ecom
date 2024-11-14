import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

function commonForm({
  formControls,
  formData,
  setFormData,
  onSubmit,
  buttonText,
}) {
  // Function to render different types of form inputs based on 'componentType'
  function renderInputByComponentType(getControlItem) {
    let element = null
    const value = formData[getControlItem.name]
    // Switch statement to choose the element type based on 'componentType'
    switch (getControlItem.componentType) {
      // Case for 'input' type element
      case 'input':
        element = (
          <Input
            type={getControlItem.type}
            name={getControlItem.name}
            id={getControlItem.name}
            placeholder={getControlItem.placeholder}
            value={value}
            onChange={(event) =>
              setFormData({
                ...formData,
                [getControlItem.name]: event.target.value,
              })
            }
          />
        )
        break
      // Case for 'select' type element
      case 'select':
        element = (
          <Select
            onValueChange={(value) =>
              setFormData({
                ...formData,
                [getControlItem.name]: value,
              })
            }
            value={value}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder={getControlItem.label}></SelectValue>
            </SelectTrigger>
            <SelectContent>
              {getControlItem.options && getControlItem.options.length > 0
                ? getControlItem.options.map((optionItem) => (
                    <SelectItem
                      key={optionItem.id}
                      value={optionItem.id}
                      className="bg-white cursor-pointer hover:bg-primaryGreenLight hover:text-white"
                    >
                      {optionItem.label}
                    </SelectItem>
                  ))
                : null}
            </SelectContent>
          </Select>
        )
        break

      // Case for 'textarea' type element
      case 'textarea':
        element = (
          <Textarea
            name={getControlItem.name}
            placeholder={getControlItem.placeholder}
            id={getControlItem.id}
            value={value}
            onChange={(event) =>
              setFormData({
                ...formData,
                [getControlItem.name]: event.target.value,
              })
            }
          />
        )
        break

      // Default case for unhandled types (renders a basic input)
      default:
        element = (
          <input
            type={getControlItem.type}
            name={getControlItem.name}
            id={getControlItem.name}
            placeholder={getControlItem.placeholder}
            value={value}
            onChange={(event) =>
              setFormData({
                ...formData,
                [getControlItem.name]: event.target.value,
              })
            }
          />
        )
        break
    }
    return element
  }
  return (
    // Render the form with dynamic controls from 'formControls'
    <form onSubmit={onSubmit}>
      <div className="flex flex-col gap-3">
        {formControls.map((controlItem) => (
          <div className="grid w-full gap-1.5" key={controlItem.name}>
            <Label className="mb-1">{controlItem.label}</Label>
            {renderInputByComponentType(controlItem)}
          </div>
        ))}
      </div>
      <button
        type="submit"
        className="mt-4 py-2 w-full bg-primaryGreenLight text-white  rounded-xl hover:bg-primaryGreenDark"
      >
        {buttonText || 'Submit'}
      </button>
    </form>
  )
}
export default commonForm
