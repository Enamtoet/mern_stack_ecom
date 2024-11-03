import { Outlet } from "react-router-dom"




// function AuthLayout() {
//   return (
//     <div className="flex min-h-screen w-full">
//         <div className="hidden lg:flex items-center justify-center bg-primaryGreenLight  w-1/2 px-12">
//         <div className="max-w-md space-y-12 text-center text-primary-foreground">
//             <h1 className="text-4xl font-extrabold tracking-tight text-white">Benvenuto su Frutta e Sapori </h1>
//             <p className="text-white mt-0">il tuo negozio online di fiducia per una spesa genuina e di qualità!</p>

//         </div>
//         </div>
//         <div className="flex flex-1 items-center justify-center bg-background px-4 py-12 sm:px-4 lg:px-8">
//             <Outlet/>
//         </div>
//     </div>
//   )
// }
// export default AuthLayout

function AuthLayout() {
  return (
    <div className="flex min-h-screen w-full">
      {/* Left side with bounce animation on text */}
      <div className="hidden lg:flex items-center justify-center bg-primaryGreenLight w-1/2 px-12">
        <div className="max-w-md space-y-12 text-center text-primary-foreground">
          <h1 className="text-4xl font-extrabold tracking-tight text-white animate-bounceIn">
            Benvenuto su Frutta e Sapori
          </h1>
          <p className="text-white mt-0">
            Il tuo negozio online di fiducia per una spesa genuina e di qualità!
          </p>
        </div>
      </div>

      {/* Main section with outlet for other pages */}
      <div className="flex flex-1 items-center justify-center bg-background px-4 py-12 sm:px-4 lg:px-8">
        <Outlet />
      </div>
    </div>
  )
}
export default AuthLayout;



