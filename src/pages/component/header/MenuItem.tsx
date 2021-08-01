import { motion } from "framer-motion";
import { RouteComponentProps, withRouter } from "react-router-dom";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    },
    originX: 0
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

interface MyComponentProps extends RouteComponentProps<any> {
    routeName: string;
}

const MenuItem = (props : MyComponentProps) => {

    const buttonClick = (route: string) => {
        switch(route) {
            case 'Home':
                if (props.history.location.pathname !== '/'){
                    console.log('routing to \'/\'')
                    props.history.push('/')
                }
                return;
            case 'Blog':
                if (props.history.location.pathname !== '/blog'){
                    console.log('routing to \'/blog\'')
                    props.history.push('/blog')
                }
                return;
            default:
                return;
        }
    }

    return (
        <motion.div
            role="button"
            variants={variants}
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.95 }}
            className="lihead"
            onClick={()=>buttonClick(props.routeName)}
        >
          <h3 className="route">{props.routeName}</h3>
        </motion.div>
    );
};

export default withRouter(MenuItem)
