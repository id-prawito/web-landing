import styled from "styled-components";

export const CorouselSection = styled.section`
  max-width: 100%;
  /* background: url() #ffa825 center center repeat-x; */
  padding: 0;
  height: 100%;

  .section_carousel {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    padding: 0px;
  }

  .carousel {
    &_container {
      /* padding: 0 100px;
      background-color: url() #ffa825 center center repeat-x; */
    }
  }
`;

export const CorouselSectionFicture = styled.section`
  max-width: 100%;
  padding: 100px 220px;
  height: 100%;

  .section_carousel {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    padding: 0px;
  }

  .carousel {
    &_container {
      padding: 0 100px;
      background-color: url() #ffa825 center center repeat-x;
    }
  }
`;
