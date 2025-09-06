type Props ={
    fullscreen?:boolean
}
const Loader = ({fullscreen}:Props) => {
  return (
    <div className={`flex items-center justify-center ${fullscreen? 'fixed inset-0 bg-white z-50':'py-8'}`}
    >
        <div className="_loader bg-purple-600 w-3 h-3 rounded-full"></div>
    </div>
  )
}

export default Loader