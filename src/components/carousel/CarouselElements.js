import styled from "styled-components";
import { devices } from "../../assets/_respondTo";

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
  ${devices.smartphone} {
    padding: 50px 0;
  }

  ${devices.ipads} {
    padding: 25px 0;
  }

  ${devices.laptops} {
    padding: 35px 0;
  }

  ${devices.screen_large} {
    padding: 100px 0;
    max-width: 1580px;
  }

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

      ${devices.smartphone} {
        padding: 0px 25px;
      }
      ${devices.ipads} {
        padding: 0px 50px;
      }
      ${devices.laptops} {
        padding: 0px 50px;
      }
      ${devices.screen_large} {
        padding: 0px 100px;
      }
    }
    &_container_slide {
      ${devices.smartphone} {
        padding: 0px 25px;
      }

      ${devices.ipads} {
        padding: 0px 25px;
      }

      ${devices.laptops} {
        padding: 0px 25px;
      }
    }
  }
`;
