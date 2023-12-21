import Image from 'next/image'


const Logo = () => {
    return (
       <Image
       height={110}
       width={110}
       alt='logo'
       src="/logo.svg">

       </Image>
    );
};

export default Logo;