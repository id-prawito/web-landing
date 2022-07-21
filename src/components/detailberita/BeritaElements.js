import styled from "styled-components";
import { devices } from "../../assets/_respondTo";

export const DetailBeritaSite = styled.section`
  padding: 40px 0;

  .berita {
    &_container {
      padding: 0 200px;

      ${devices.smartphone} {
        padding: 0 25px;
      }

      ${devices.ipads} {
        padding: 0 50px;
      }

      ${devices.laptops} {
        padding: 0 50px;
      }
    }

    &_content {
      display: flex;
      flex-direction: column;
      gap: 40px;
      align-items: flex-start;
      justify-content: flex-start;
    }

    &_breadcrum {
      display: flex;
      flex-direction: row;
      gap: 10px;
      width: 100%;

      .breadcrum {
        display: flex;
        flex-direction: row;

        .breadcrum_item {
          font-size: 13px;
          font-weight: 300;

          a {
            :hover {
              color: #7c3aed;
            }
          }

          :after {
            margin: auto 0.75rem;
            width: 4px;
            height: 4px;
            content: ">";
            color: #1d639d;
          }

          :last-child {
            ::after {
              margin: auto 0.75rem;
              width: 4px;
              height: 4px;
              content: "";
              color: #1d639d;
              display: none;
            }
          }
        }
      }
    }

    &_judul {
      display: flex;
      flex-direction: column;
      gap: 20px;
      align-items: flex-start;

      .judul {
        font-size: 26px;
        font-weight: 500;
      }
      p {
        font-size: 12px;
        font-weight: 300;
      }
    }

    &_full {
      display: flex;
      flex-direction: column;
      gap: 40px;
      align-items: flex-start;
      justify-content: flex-start;

      .berita_text {
        font-size: 14px;
        line-height: 1.5;
        font-weight: 300;
        text-align: left;
      }
    }
  }
`;
