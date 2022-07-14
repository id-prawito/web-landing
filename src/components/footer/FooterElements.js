import styled from "styled-components";

export const FooterSite = styled.footer`
  .footer {
    &_header {
      display: flex;
      flex-direction: row;
      width: 100%;
      align-items: center;
      justify-content: space-between;

      &_content {
        display: flex;
        align-items: center;
        text-align: center;
        list-style: none;
        height: 100%;

        nav {
          display: flex;
          flex-direction: row;
          align-items: center;

          ul {
            display: flex;
            flex-direction: row;
            align-items: center;
          }
        }
      }
    }

    &_item {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: row;
      padding: 0 16px;
      height: 100%;
      width: 100%;
      gap: 8px;

      .text_menu {
        font-size: 13px;
        font-weight: 500;
        width: max-content;
        text-transform: uppercase;
        cursor: pointer;

        &:hover {
          color: #000;
        }
      }
    }

    &_media {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      width: 100%;
    }

    &_desc {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      width: 100%;

      &_img {
        display: flex;
        flex-direction: row;
        gap: 10px;
        align-items: center;
        justify-content: flex-start;

        .img_class {
          --size: 40px;
          width: 100%;
          height: var(--size);
        }
      }

      &_kebijakan {
        display: flex;
        flex-direction: row;
        padding: 0 10px;
        align-items: center;
        font-size: 12px;

        .end {
          display: initial;
          :hover {
            color: #000;
          }

          ::after {
            content: "";
            border-left: 1px solid #f1f2f3;
            margin: 0 10px 0 10px;
          }
          :last-child {
            ::after {
              content: "";
              border-left: none;
              margin: 0;
            }
          }
        }
      }

      &_p {
        font-size: 13px;
        font-weight: 300;
        width: 50%;
        text-align: left;
      }
    }
  }

  .footer {
    border-top: 1px solid #f1f2f3;
    z-index: 1;
    height: 100%;
    background-color: #7c3aed;
    color: #fff;
    padding: 40px 50px;
  }

  .footer_content {
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    justify-content: space-between;
    height: 100%;
  }
`;

export const Media = styled.ul`
  color: #fff;
  display: flex;
  align-items: center;
  list-style: none;
  font-size: 20px;
  padding: 0px;
  margin: 0px;

  .item_li {
    transition: all 0.3s ease 0s;
    padding: 10px;
  }
`;
