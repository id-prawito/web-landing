import styled from "styled-components";
import { devices } from "../../assets/_respondTo";

export const TentangKamiSite = styled.section`
  ${devices.smartphone} {
    padding: 50px 0;
  }

  ${devices.ipads} {
    padding: 25px 0;
  }
  .tentang {
    &_container {
      padding: 0 100px;

      ${devices.smartphone} {
        padding: 0 25px;
      }

      ${devices.ipads} {
        padding: 0 50px;
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

      ${devices.ipads} {
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

        ${devices.ipads} {
          grid-template-columns: repeat(2, 1fr);
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

  ${devices.ipads} {
    padding: 25px 0;
  }
  .organisasi {
    &_container {
      padding: 0 100px;

      ${devices.smartphone} {
        padding: 0 25px;
      }

      ${devices.ipads} {
        padding: 0 50px;
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

        ${devices.ipads} {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
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

export const LayananSite = styled.section`
  ${devices.smartphone} {
    padding: 50px 0;
  }

  ${devices.ipads} {
    padding: 25px 0;
  }
  .layanan {
    &_container {
      padding: 0 100px;

      ${devices.smartphone} {
        padding: 0 25px;
      }

      ${devices.ipads} {
        padding: 0 50px;
      }
    }

    &_content {
      display: flex;
      flex-direction: column;
      gap: 20;
      align-items: center;
      justify-content: center;
    }

    &_tabs {
      width: 100%;
      height: max-content;
      background: #fff;
      border: 1px solid #bdbdbd;
      box-sizing: border-box;
      border-radius: 20px;
      transition: box-shadow 1s;
      width: 100%;

      .content {
        display: flex;
        flex-direction: column;
        padding: 20px;

        padding-top: 30px;
      }
    }
  }
`;

export const Tabs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

  .tabs {
    &_button {
      display: flex;
      flex-direction: row;

      ${devices.smartphone} {
        flex-direction: column;
        gap: 10px;
      }
    }

    &_nav {
      padding: 16px 32px;
      text-transform: capitalize;
      font-size: 16px;
      font-weight: 500;
      letter-spacing: 0.5px;
      background-color: #efefef;
      color: #828282;
      border-radius: 0px;
      transition: all 0.3s ease-in-out;

      .button {
        text-decoration: none;
        cursor: pointer;
        color: unset;
        font-size: 16px;
        font-weight: 600;
        background-color: transparent;
      }

      :hover {
        color: #7c3aed;
      }

      :first-child {
        border-radius: 8px 0px 0px 8px;
      }
      :last-child {
        border-radius: 0px 8px 8px 0px;
      }

      ${devices.smartphone} {
        :first-child {
          border-radius: 8px 8px 0px 0px;
        }
        :last-child {
          border-radius: 0px 0px 8px 8px;
        }
      }
    }

    &_content {
      display: inline;
      transition: all 4s ease-in-out;
      .fade {
        display: block;
      }
    }
  }

  .active {
    padding-top: 30px;
    margin-top: -15px !important;
    color: #fff;
    background-color: #7c3aed;
    border-radius: 8px 8px 0px 0px;
    transition: all 0.3s ease-in-out;

    .button {
      text-decoration: none;
      cursor: pointer;
      color: unset;
      font-size: 16px;
      font-weight: 600;
      background-color: transparent;
    }

    :hover {
      color: #fff;
    }

    :first-child {
      border-radius: 8px 8px 0px 8px;
    }
    :last-child {
      border-radius: 8px 8px 8px 0px;
    }

    ${devices.smartphone} {
      :first-child {
        border-radius: 8px 8px 0px 0px;
      }
      :last-child {
        border-radius: 8px 8px 8px 8px;
      }
    }
  }
  .text {
    transition: all 3s ease-in-out;
  }
`;

export const ContentTabSite = styled.div`
  .tab_content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
    padding: 10px;

    .judul {
      font-size: 32px;
      font-weight: 600;

      ${devices.smartphone} {
        text-align: left;
      }
    }

    .value {
      display: flex;
      flex-direction: column;
      gap: 20px;
      align-items: flex-start;
      width: 100%;

      ${devices.smartphone} {
        text-align: left;
      }

      ${devices.ipads} {
        text-align: left;
      }

      h1 {
        font-size: 24px;
        font-weight: 500;

        ${devices.smartphone} {
          font-size: 20px;
        }
      }

      p {
        font-weight: 14px;
        font-weight: 300;
        line-height: 1.5;
      }
    }
    .value_b {
      display: flex;
      flex-direction: column;
      gap: 30px;
    }

    .value_all {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 14px;

      h1 {
        font-size: 18px;
        font-weight: 500;
      }

      p {
        font-size: 14px;
        line-height: 1.5;

        ${devices.ipads} {
          text-align: left;
        }
      }
      ol {
        display: flex;
        flex-direction: column;
        gap: 10px;
        margin-left: 40px;
        list-style-type: decimal;

        li {
          font-size: 14px;
          font-weight: 300;
          line-height: 1.5;
          display: list-item;
          list-style: decimal;
          text-align: left;
        }
      }
    }

    .button_download {
      display: flex;
      flex-direction: column;
      gap: 20px;
      width: 100%;

      .card_download {
        border-radius: 10px;
        border: 1px solid #b8b8b8;
        padding: 20px 20px;
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        color: #b8b8b8;

        :hover {
          border: 1px solid #7c3aed;
          color: #7c3aed;
        }

        ${devices.smartphone} {
          flex-direction: column;
          align-items: flex-start;
          gap: 20px;
        }

        .text_download {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 10px;

          h1 {
            font-size: 16px;
          }

          p {
            font-size: 12px;
            font-weight: 300;
          }
        }
      }
    }
  }
`;
