import styled from "styled-components";

export const InformasiSite = styled.div`
  .informasi {
    display: flex;
    flex-direction: row;
    padding: 30px;
    background: #ffefd4;
    width: 100%;
    border-radius: 8px;
    gap: 20px;
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
  }

  .text_p {
    font-size: 14px;
  }
`;

export const CardComponents = styled.div`
  display: initial;
  width: 100%;

  .heading_card {
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
  }

  .card {
    gap: 10px;
    border-radius: 8px;
    box-shadow: 0 0 15px rgb(0 0 0 / 15%);
    /* height: 200px; */
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: 0 solid rgba(0, 0, 0, 0.125);
    overflow: hidden;

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
