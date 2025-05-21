import Logo from '../components/Logo';

function Landing() {
    return (
        <div className='flex flex-col pt-[100px] pl-[50px]'>
            <Logo scale={2} />
            <div className='font-[900] text-[#474444] mt-[50px] pl-[10px]' style={{fontFamily: 'rubik', fontSize: '30px'}}>
                COMING SOON ...
            </div>
        </div>
    );
}

export default Landing;