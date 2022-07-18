import styled from "styled-components";
import { devices } from "../../assets/_respondTo";

export const InformasiSite = styled.section`
  ${devices.smartphone} {
    padding: 50px 0;
  }
  .informasi {
    display: flex;
    flex-direction: row;
    padding: 30px;
    background: #ffefd4;
    width: 100%;
    border-radius: 8px;
    gap: 20px;

    ${devices.smartphone} {
      flex-direction: column;
    }

    .img {
      overflow: hidden;
      height: 150px;

      img {
        object-fit: contain;
      }
    }

    &_container {
      padding: 0 100px;

      ${devices.smartphone} {
        padding: 0px 25px;
      }
    }
  }

  .text_content {
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    width: 100%;
  }

  .content {
    width: 70%;
    display: flex;
    gap: 20px;
    flex-direction: column;

    ${devices.smartphone} {
      width: 100%;
    }
  }

  .text_p {
    font-size: 14px;
    font-weight: 300;
    line-height: 1.5;
  }
`;

export const CardItemComponents = styled.div`
  .card {
    &_item {
      gap: 10px;
      border-radius: 8px;
      box-shadow: 0 0 15px rgb(0 0 0 / 10%);
      /* height: 200px; */
      position: relative;
      display: flex;
      flex-direction: column;
      min-width: 0;
      word-wrap: break-word;
      background-color: #fff;
      background-clip: border-box;
      overflow: hidden;
      border: 1px solid transparent;

      :hover {
        border: 1px solid #a606ae;
        box-shadow: 0 0 10px rgb(0 0 0 / 15%);
      }
    }
    &_img {
      position: relative;
      width: 100%;
      object-fit: cover;

      img {
        object-fit: cover;
        /* max-width: 200px; */
      }
    }

    &_body {
      flex: 1 1 auto;
      min-height: 1px;
      padding: 1.25rem;
      text-align: left;
      height: 200px;

      h4 {
        font-size: 15px;
        font-weight: 500;
        margin-bottom: 10px;
      }

      p {
        line-height: 1.45;
        font-weight: 300;
        font-size: 13px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 5; /* number of lines to show */
        -webkit-box-orient: vertical;
      }
    }

    &_footer {
      padding: 20px 1.25rem;
      text-align: left;
      font-size: 12px;
      font-weight: 400;
      background-color: #f8f9fa;
    }
  }
`;

export const CardComponents = styled.section`
  ${devices.smartphone} {
    padding: 50px 0;
  }
  .card_container {
    padding: 0 100px;

    ${devices.smartphone} {
      padding: 0 25px;
    }
  }

  .heading {
    display: flex;
    flex-direction: column;
    gap: 20px;
    text-align: left;
    padding: 40px 0px;
    width: 80%;

    h2 {
      font-size: 42px;
      font-weight: 600;
    }

    p {
      font-size: 16px;
      font-weight: 400;
      line-height: 1.5;
    }
  }

  .card_content {
    display: grid;
    grid-template-columns: repeat(3, auto);
    align-items: flex-start;
    justify-content: center;
    height: 100%;
    gap: 30px;

    ${devices.smartphone} {
      grid-template-columns: repeat(1, auto);
    }
  }
`;

export const DetailComponents = styled.section`
  padding: 50px 0;
  ${devices.smartphone} {
    padding: 20px 0;
  }

  .detail {
    &_container {
      padding: 0 100px;

      ${devices.smartphone} {
        padding: 0px 25px;
      }
    }
    &_content {
      display: flex;
      flex-direction: row;
      gap: 20px;

      ${devices.smartphone} {
        flex-direction: column;
      }
    }

    &_img {
      display: flex;
      align-items: center;
      width: 50%;
      justify-content: center;
      overflow: hidden;
      padding: 10px;

      ${devices.smartphone} {
        width: 100%;
      }
    }
    &_text {
      display: flex;
      align-items: center;
      width: 50%;
      justify-content: flex-start;
      flex-direction: column;
      padding: 10px;
      gap: 40px;

      ${devices.smartphone} {
        width: 100%;
      }

      .visi_misi {
        text-align: left;
        display: flex;
        flex-direction: column;
        gap: 10px;
      }

      &_heading {
        font-size: 26px;
        font-weight: 500;
      }

      &_p {
        font-size: 14px;
        font-weight: 300;
        line-height: 1.5;
      }
    }
  }
`;

export const OjkComponents = styled.section`
  ${devices.smartphone} {
    padding: 50px 0;
  }
  .ojk {
    &_container {
      padding: 0 100px;

      ${devices.smartphone} {
        padding: 0px 25px;
      }
    }

    &_content {
      display: grid;
      grid-template-columns: repeat(4, auto);
      align-items: center;
      gap: 20px;
      width: 100%;
    }

    &_img {
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      border-radius: 8px;
      width: 100%;

      ${devices.smartphone} {
        display: flex !important;
        height: 20vh;
      }

      img {
        width: 150px;

        ${devices.smartphone} {
          width: 200px !important;
          object-fit: contain;
        }
      }
    }
  }
`;

export const HeadingAll = styled.div`
  width: 100%;
  .heading {
    display: flex;
    flex-direction: column;
    gap: 20px;
    text-align: left;
    padding: 40px 0px;
    width: 80%;

    ${devices.smartphone} {
      width: 100%;
      padding: 30px 0px;
    }

    h2 {
      font-size: 42px;
      font-weight: 600;

      ${devices.smartphone} {
        font-size: 30px;
      }
    }

    p {
      font-size: 16px;
      font-weight: 300;
      line-height: 1.5;
    }
  }
`;

export const FocusComponentSite = styled.section`
  padding: 100px 0px;
  max-width: 100%;

  ${devices.smartphone} {
    padding: 50px 0;
  }

  .focus_container {
    background-color: aliceblue;
    padding: 0;

    .gambar_bg {
      overflow: hidden;
      height: 380px;
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      place-items: center;
      display: grid;
    }

    .gambar_bg_tentang {
      overflow: hidden;
      height: 380px;
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      place-items: center;
      display: flex;
      flex-direction: row;
      gap: 20px;
      padding: 0 25px;

      .gambar_img {
        width: 100%;
        display: flex;
        align-items: center;
        padding: 30px;
        justify-content: center;
        overflow: hidden;
        height: 100%;

        img {
          object-fit: contain;
        }
      }
    }
  }
`;

export const FocusComponentSiteContact = styled.section`
  padding: 0;
  max-width: 100%;

  ${devices.smartphone} {
    padding: 0px 0;
  }

  .focus_container {
    background-color: aliceblue;
    padding: 0;

    .gambar_bg_tentang {
      overflow: hidden;
      height: 380px;
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      place-items: center;
      display: flex;
      flex-direction: row;
      gap: 20px;
      padding: 0 50px;

      ${devices.smartphone} {
        padding: 0 25px;
        flex-direction: column-reverse;
        height: 450px;
        gap: 0px;
      }

      .gambar_img {
        width: 100%;
        display: flex;
        align-items: center;
        padding: 30px;
        justify-content: center;
        overflow: hidden;
        height: 100%;

        ${devices.smartphone} {
          margin-top: 35px;
          padding: 0;
        }

        img {
          object-fit: contain;
        }
      }
    }
  }
`;

export const OrganisasiSite = styled.div`
  display: grid;
  place-items: center;

  .informasi {
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    justify-content: center;
  }
  .gambar_img {
    padding: 10px;
    overflow: hidden;
    max-width: 280px;

    img {
      object-fit: cover;
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
`;

export const PimpinanComponent = styled.section`
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

    &_all {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }

    &_button {
      display: flex;
      flex-direction: row;
      gap: 20px;
      justify-content: center;
      align-items: center;

      ${devices.smartphone} {
        display: grid;
        grid-template-columns: repeat(2, auto);
      }
    }

    &_content_active {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      grid-column-gap: 20px;
      grid-row-gap: 20px;

      ${devices.smartphone} {
        grid-template-columns: repeat(1, auto);
      }
    }

    &_content {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      grid-column-gap: 20px;
      grid-row-gap: 20px;

      ${devices.smartphone} {
        grid-template-columns: repeat(2, auto);
      }
    }
  }

  .download {
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
`;
