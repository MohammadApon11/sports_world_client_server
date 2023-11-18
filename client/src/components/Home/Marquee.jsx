import Marquee from 'react-fast-marquee'


const Marque = ({ handleTheme }) => {
    return (
        <div className='flex items-center lg:mx-20 px-6'>
            <Marquee className='lg:text-lg text-sm text-primary lg:font-normal font-semibold mt-1' speed={50}>
                Entertainment News International (ENI) is the #1 popular culture network for adult fans all around the world. Get the scoop on all the popular comics.......
                Entertainment News International (ENI) is the #1 popular culture network for adult fans all around the world. Get the scoop on all the popular comics.......
                Entertainment News International (ENI) is the #1 popular culture network for adult fans all around the world. Get the scoop on all the popular comics.......
                Entertainment News International (ENI) is the #1 popular culture network for adult fans all around the world. Get the scoop on all the popular comics.......

            </Marquee>
            <button className='btn btn-primary rounded-l-none lg:btn-sm btn-xs' onClick={handleTheme}>Dark Mode</button>
        </div>
    );
};

export default Marque;