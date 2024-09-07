type Props = {
  nameLogo: string 
}

const Logo = ({nameLogo}: Props) => {
  return (
    <div>
      <h1 className='text-5xl font-robot font-bold bg-transparent max-md:text-center max-sm:text-3xl max-sm:mb-3'>{nameLogo}</h1>
    </div>
  )
}

export default Logo
