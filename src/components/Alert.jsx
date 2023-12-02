
const Alert = ({type, text}) => {
  return (
    <div className="absolute top-10 left-0 right-0 flex justify-center items-center">
          <div className={`${type === 'danger' ? 'bg-red-500' : 'bg-blue-800'} p-2 text-indigo-100 leading-none lg:rounded-full rounded-md flex lg:inline-flex items-center`}>
              <p className={`${type === 'danger' ? 'bg-red-500' : 'bg-blue-800'} flex rounded-full uppercase px-2 py-1 font-semibold mr-3`}> { 
                  type === 'danger' ? 'Failed' : 'Success'
              }</p>
              <p className="flex rounded-full uppercase px-1 py-1 font-bold mr-1">{text}</p>
       </div>   
    </div>
  )
}

export default Alert