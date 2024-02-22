import { TypeAnimation } from 'react-type-animation';

const TextAnimation = () => {
    return (
        <div>
            <TypeAnimation
                sequence={[
                    // Same substring at the start will only be typed out once, initially
                    'Web Development',
                    1000, // wait 1s before replacing "Mice" with "Hamsters"
                    'Graphic Design',
                    1000,
                    'Digital Marketing',
                    1000,
                    1000,
                ]}
                wrapper="span"
                speed={50}
                style={{ fontSize: '2em', display: 'inline-block' }}
                repeat={Infinity}
            />
        </div>
    );
};

export default TextAnimation;