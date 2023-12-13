import { FaPen, FaRegCircle, FaTimes } from 'react-icons/fa';

function Icon({ name }) {
  if (name === "circle") {
    return <FaRegCircle />;
  } else if (name === 'cross') {
    return <FaTimes />;
  } else {
    // Default to the pencil icon if the name is not specified or invalid
    return <FaPen />;
  }
}

export default Icon;
