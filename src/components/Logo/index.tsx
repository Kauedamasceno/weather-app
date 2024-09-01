
type Props = {
  nameLogo: string 
}

const Logo = ({nameLogo}: Props) => {
  return (
    <div>
      <h1 className='text-5xl font-robot font-bold bg-transparent'>{nameLogo}</h1>
    </div>
  )
}

export default Logo
