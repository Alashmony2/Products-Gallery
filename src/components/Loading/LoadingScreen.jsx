import { Spinner } from '@heroui/react'

export default function LoadingScreen() {
  return <>
  <div className='h-screen w-full flex justify-center items-center'>
    <Spinner color="warning" label="Loading..." />
  </div>
    
  </>
}
