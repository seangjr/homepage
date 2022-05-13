import styled from "@emotion/styled";

const ProjectImageStyled = styled.img`
<<<<<<< HEAD
  position: fixed;
  left: 60vw;
  width: 300px;
  object-fit: cover;
  top: 30vh;
  pointer-events: none;
  transition: transform 1s cubic-bezier(0.165, 0.84, 0.44, 1);
=======
    position: fixed;
    left: 60vw;
    width: 300px;
    object-fit: cover;
    top: 30vh;
    pointer-events: none;
    transition: transform 1s cubic-bezier(0.165, 0.84, 0.44, 1);
>>>>>>> a40aeaec618339a0332e399d489f9891f3f265a0
`;

const ProjectImage = ({ url, opacity, parallaxPos, scale, rotationPos }) => {
    return (
        <div>
            <ProjectImageStyled
                src={url}
                style={{
                    opacity: opacity,
                    transform: `translate3d(${parallaxPos.x}px, ${parallaxPos.y}px, 0px) rotate(${rotationPos}deg) scale(${scale})`,
                }}
            />
        </div>
    );
};

export default ProjectImage;
