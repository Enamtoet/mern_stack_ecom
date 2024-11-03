import { Link, useNavigate } from "react-router-dom"
import CommonForm from "@/component/common/forms"
import { registerFormControls } from "@/config"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { registerUser } from "@/store/auth-slice"
import { useToast } from "@/hooks/use-toast"

const initialState ={
  userName:'',
  email : '', 
  password : ''

}

function AuthRegister() {
 const [formData, setFormData] = useState(initialState)
const dispatch = useDispatch()
const navigate = useNavigate()
  const { toast } = useToast()
function onSubmit(event){
  event.preventDefault()
  dispatch(registerUser(formData)).then((data)=>{
    if(data?.payload?.success) {
      toast({
          title: data?.payload?.message,
        })
      navigate('/auth/login')
    }else{
      toast({
          title: data?.payload?.message,
          variant: "destructive" 
        })
    }

  })
}
  return (
    <div className="mx-auto w-full max-w-md space-y-6">
      <img className="mx-auto w-40" src="../../../public/logo.png" alt="logo" />
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-foreground">Create New Account </h1>
        <p className="mt-2">Aleardy have an account
          <Link className="font-medium text-primary ml-2 hover:underline" to ="../login">Login</Link>
        </p>
      </div>
      <CommonForm
       formControls={registerFormControls}
       buttonText={'Sign Up'}
       formData={formData}
       setFormData={setFormData}
       onSubmit={onSubmit}
       />
    </div>
  )
}
export default AuthRegister