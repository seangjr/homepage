import { useRef, useReducer } from "react";
import Title from "./title";
import ProjectImage from "./image";
import animate from "./animate";
import styled from "@emotion/styled";

const ProjectList = styled.li`
  cursor: pointer;
  line-height: 1.25 !important;
  padding: 5px 0;
`;

const InfoBlock = styled.div`
  position: fixed;
  top: 50%;
  transform: translateY(-50%);

  left: 70vw;
  z-index: 1;
  text-align: left;
  font-size: 20px;
`;
const InfoBlockHeader = styled.p`
  position: fixed;
  top: 50%;
  transform: translateY(-50%);

  left: 70vw;
  z-index: 1;
  text-align: left;

  margin-bottom: 20px;
  color: rgb(255, 255, 255);
  font-weight: 500;
  font-size: 24px;
`;

const initialState = {
  opacity: 0,
  parallaxPos: { x: 0, y: 0 },
  scale: 0.8,
  rotationPosition: 0,
  active: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "MOUSE/ENTER": {
      return {
        ...state,
        active: true,
      };
    }
    case "MOUSE/LEAVE": {
      return {
        ...state,
        active: false,
      };
    }
    case "CHANGE/OPACITY": {
      return {
        ...state,
        opacity: action.payload,
      };
    }
    case "MOUSE/COORDINATES": {
      return {
        ...state,
        parallaxPos: action.payload,
      };
    }
    case "CHANGE/ROTATION": {
      return {
        ...state,
        rotationPosition: action.payload,
      };
    }
    case "CHANGE/SCALE": {
      return {
        ...state,
        scale: action.payload,
      };
    }
    default: {
      throw new Error();
    }
  }
}

const ProjectItem = ({ project, itemIndex, projectTransition }) => {
  const listItem = useRef(null);
  const [state, dispatch] = useReducer(reducer, initialState);
  const easeMethod = "easeInOutCubic";
  const parallax = (e) => {
    const speed = -5;
    const x = (window.innerWidth - e.pageX * speed) / 100;
    const y = (window.innerHeight - e.pageY * speed) / 100;

    dispatch({ type: "MOUSE/COORDINATES", payload: { x, y } });
  };

  const handleOpacity = (initialOpacity, newOpacity, duration) => {
    animate({
      fromValue: initialOpacity,
      toValue: newOpacity,
      onUpdate: (i, callback) => {
        dispatch({ type: "CHANGE/OPACITY", payload: i });
        callback();
      },
      //eslint-disable-next-line
      onComplete: () => {},
      duration: duration,
      easeMethod: easeMethod,
    });
  };
  const handleScale = (initialScale, newScale, duration) => {
    animate({
      fromValue: initialScale,
      toValue: newScale,
      onUpdate: (i, callback) => {
        dispatch({ type: "CHANGE/SCALE", payload: i });
        callback();
      },
      onComplete: () => {},
      duration: duration,
      easeMethod: easeMethod,
    });
  };
  const handleRotation = (currentRotation, duration) => {
    // random between -15 and 15
    const newRotation =
      Math.random() * 15 * (Math.round(Math.random()) ? 1 : -1);
    animate({
      fromValue: currentRotation,
      toValue: newRotation,
      onUpdate: (i, callback) => {
        dispatch({ type: "CHANGE/ROTATION", payload: i });
        callback();
      },
      onComplete: () => {},
      duration: duration,
      easeMethod: easeMethod,
    });
  };

  const handleMouseEnter = () => {
    handleScale(0.8, 1, 500);
    handleOpacity(0, 1, 800);
    handleRotation(state.rotationPosition, 500);
    listItem.current.addEventListener("mousemove", parallax);
    dispatch({ type: "MOUSE/ENTER" });
  };

  const handleMouseLeave = () => {
    listItem.current.removeEventListener("mousemove", parallax);
    handleRotation(state.rotationPosition, 500);
    handleOpacity(1, 0, 800);
    handleScale(1, initialState.scale, 500);
    dispatch({
      type: "MOUSE/COORDINATES",
      payload: initialState.parallaxPos,
    });
    dispatch({ type: "MOUSE/LEAVE" });
  };

  return (
    <ProjectList ref={listItem}>
      <Title
        title={project.title}
        handleMouseEnter={handleMouseEnter}
        handleMouseLeave={handleMouseLeave}
        path={project.path}
      />
      <ProjectImage
        url={project.url}
        opacity={state.opacity}
        parallaxPos={state.parallaxPos}
        scale={state.scale}
        rotationPos={state.rotationPosition}
      />
      <InfoBlock>
        <InfoBlockHeader>
          <span>{itemIndex}</span>
        </InfoBlockHeader>
      </InfoBlock>
    </ProjectList>
  );
};

export default ProjectItem;
