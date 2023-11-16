import { motion } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';

const variants = {
    open: {
        y: 0,
        opacity: 1,
        transition: {
            y: { stiffness: 1000, velocity: -100 },
        },
        originX: 0,
    },
    closed: {
        y: 50,
        opacity: 0,
        transition: {
            y: { stiffness: 1000 },
        },
    },
};

interface MyComponentProps {
    routeName: string;
    toggle: () => void;
}

const MenuItem = (props: MyComponentProps) => {
    const location = useLocation();
    const navigate = useNavigate();

    const buttonClick = (route: string) => {
        switch (route) {
            case 'Home':
                if (location.pathname !== '/') {
                    console.log("routing to '/'");
                    props.toggle();
                    navigate('/');
                }
                return;
            case 'Blogs':
                if (location.pathname !== '/blogs') {
                    console.log("routing to '/blogs'");
                    props.toggle();
                    navigate('/blogs');
                }
                return;
            default:
                return;
        }
    };

    return (
        <motion.div
            role="button"
            variants={variants}
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.95 }}
            className="lihead"
            onClick={() => buttonClick(props.routeName)}
        >
            <h3 className="route">{props.routeName}</h3>
        </motion.div>
    );
};

export default MenuItem;
