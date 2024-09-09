type Props = {
  nameLogo: string 
}

const Logo = ({nameLogo}: Props) => {
  return (
    <div>
      <h1 className='text-5xl font-robot font-bold bg-transparent max-md:text-center max-sm:mb-3 max-sm:text-3xl '>{nameLogo}</h1>
    </div>
  )
}

export default Logo
