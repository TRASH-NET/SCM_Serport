import Image from 'next/image'

const Home = () => {
    return (
        <div className='h-full flex bg-[#F6F9FF]'>
            <Image
                className="w-[195px] h-[104px] mx-auto"
                src="/logo2.webp"
                width={195}
                height={104}
                alt="Logo Serport"
                priority={true}
            />
        </div>
    )
}

export default Home 