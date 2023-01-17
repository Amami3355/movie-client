import React from 'react';

const carouselContainerStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '500px',
    position: 'relative',
    overflow: 'hidden',
};

const carouselListStyles = {
    display: 'flex',
    width: '400%',
    height: '100%',
    transition: 'transform 0.5s',
    transform: 'translateX(-25%)',
};

const carouselItemStyles = {
    width: '25%',
    height: '100%',
};

const Carousel = () => {
    return (
        <div style={carouselContainerStyles}>
            <ul style={carouselListStyles}>
                <li style={carouselItemStyles}>Item 1</li>
                <li style={carouselItemStyles}>Item 2</li>
                <li style={carouselItemStyles}>Item 3</li>
                <li style={carouselItemStyles}>Item 4</li>
            </ul>
        </div>
    );
};

export default Carousel;
