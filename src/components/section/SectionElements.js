import styled from "styled-components";
import { devices } from "../../assets/_respondTo";

export const TentangKamiSite = styled.section`
  ${devices.smartphone} {
    padding: 50px 0;
  }
  .tentang {
    &_container {
      padding: 0 100px;

      ${devices.smartphone} {
        padding: 0 25px;
      }
    }

    &_content {
      display: flex;
      flex-direction: column;
      gap: 20px;
      align-items: flex-start;
      justify-content: flex-start;
    }

    &_maps {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      justify-content: flex-start;
      gap: 20px;
      width: 100%;

      ${devices.smartphone} {
        flex-direction: column;
      }

      .maps {
        width: 100%;
        height: 400px;
        overflow: hidden;
        border-radius: 8px;

        iframe {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
      }

      .contact {
        width: 60%;
        display: flex;
        flex-direction: column;
        gap: 20px;
        justify-content: flex-start;
        height: 100%;
        align-items: flex-start;

        ${devices.smartphone} {
          width: 100%;
        }

        h1 {
          font-size: 26px;
          font-weight: 500;
        }

        p {
          font-size: 14px;
          font-weight: 300;
          line-height: 1.5;
          text-align: left;
        }
        .no_telp {
          display: flex;
          flex-direction: row;
          gap: 30px;
          align-items: center;

          p {
            display: flex;
            flex-direction: row;
            gap: 10px;
            align-items: center;
            font-weight: 500;
          }
        }
      }
    }

    &_cabang {
      display: flex;
      flex-direction: column;
      gap: 10px;
      margin-top: 40px;
      align-items: flex-start;

      h1 {
        font-size: 26px;
        font-weight: 500;
        margin-bottom: 20px;
      }

      .cabang_bank {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-column-gap: 40px;
        place-items: flex-start;

        ${devices.smartphone} {
          grid-template-columns: repeat(1, 1fr);
          grid-row-gap: 40px;
        }

        .cabang_content {
          display: flex;
          flex-direction: column;
          gap: 20px;
          align-items: flex-start;

          h1 {
            font-size: 18px;
            font-weight: 500;
            margin-bottom: 10px;
          }

          p {
            font-size: 13px;
            font-weight: 300;
            line-height: 1.5;
            text-align: left;
          }
          .no_telp {
            display: flex;
            flex-direction: row;
            gap: 30px;
            align-items: center;

            p {
              display: flex;
              flex-direction: row;
              gap: 10px;
              align-items: center;
              font-weight: 500;
            }
          }
        }
      }
    }
  }
`;

export const OrganisasiSite = styled.section`
  ${devices.smartphone} {
    padding: 50px 0;
  }
  .organisasi {
    &_container {
      padding: 0 100px;

      ${devices.smartphone} {
        padding: 0 25px;
      }
    }

    &_content {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }

    &_page {
      display: flex;
      flex-direction: column;
      gap: 20px;

      .button_organisasi {
        display: flex;
        flex-direction: row;
        gap: 30px;
        justify-content: flex-start;
        align-items: center;

        ${devices.smartphone} {
          gap: 20px;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
        }
      }

      .card_organisasi {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        gap: 20px;
        ${devices.smartphone} {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          place-items: center;
        }

        .padding {
          padding: 0px;
        }

        .card_component {
          background: #fff;
          max-width: 320px;
          height: auto;
          border-radius: 20px;
          color: #000;
          padding: 1rem;
          overflow: hidden;

          ${devices.smartphone} {
            padding: 2px;
          }

          .gambar_img {
            padding: 10px;
            overflow: hidden;
            transition: all 0.3s ease-in-out;

            img {
              object-fit: cover;
              width: 100%;
            }
          }
          .text_nama {
            display: flex;
            flex-direction: column;
            gap: 10px;

            h1 {
              font-size: 18px;
              font-weight: 600;
            }

            p {
              font-size: 12px;
              font-weight: 300;
            }
          }
        }
      }
    }

    &_download {
      font-size: 13px;
      font-weight: 400;
      background-color: #f4f4f4;
      padding: 8px 15px;
      border-radius: 8px;
      width: max-content;
      color: #a606ae;
      margin: auto;
      margin-top: 60px;
      a:hover {
        text-decoration: underline;
      }
    }
  }
`;
