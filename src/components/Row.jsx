import img1 from '../assets/images/1.png';
import img4 from '../assets/images/4.png';
import team14 from '../assets/images/team14.png';
import team15 from '../assets/images/team15.png';

import PropTypes from 'prop-types';

function Row({ translateClass, direction }) {

    const items = [
        { text: "Decentralized", image: img1 },
        { text: "Transparent", image: img4 },
        { text: "Liquid", image: team14 },
        { text: "Accessible", image: team15 },
        { text: "Secure", image: img1 },
        { text: "Innovative", image: img4 },
        { text: "Decentralized", image: team14 },
        { text: "Transparent", image: team15 },
        { text: "Liquid", image: img1 },
        { text: "Accessible", image: img4 },
        { text: "Secure", image: team14 },
        { text: "Innovative", image: team15 },
        { text: "Decentralized", image: img1 },
        { text: "Transparent", image: img4 },
        { text: "Liquid", image: team14 },
    ]

  return (
    <div
        className={`${translateClass} ${direction} row w-full flex
        items-center
        gap-4 sm:gap-6 lg:gap-8
        whitespace-nowrap mb-2`}
    >
        {items.map((item, index) => {
            return (
                <div
                    key={index}
                    className='elem flex items-center gap-4 sm:gap-6 lg:gap-8'
                >
                    <h1
                        className='font-[SansitaBold] text-3xl sm:text-5xl lg:text-7xl
                        leading-tight'
                    >
                        {item.text}
                    </h1>
                    <div className='imgdiv w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 flex-shrink-0'>
                        <img
                            className='w-full h-full object-contain'
                            src={item.image}
                        />
                    </div>
                </div>
            )
        })}
    </div>
  )
}

Row.propTypes = {
    translateClass: PropTypes.string.isRequired,
    direction: PropTypes.string.isRequired
  };

export default Row
