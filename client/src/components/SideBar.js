import React from "react";
import styled from "styled-components";

const SidebarStyled = styled.div`
  position: fixed;
  z-index: 555;
  top: 0;
  left: 0;
  width: 80%;
  background-color: #eef2f9;
  padding: 1rem;
  color: #fff;
  max-width: 200px;
  height: 100%;
  transform: translateX(${(props) => (props.show ? "0" : "-100%")});
  transition: all 0.3s ease-in-out;
`;

const SidebarWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

const Link = styled.a`
  text-decoration: none;
  color: #000000;
  font-family: inherit;
  padding: 1em 2rem;
  font-size: 13px;

  &:first-of-type {
    margin-top: 50px;
  }
`;

const CloseIcon = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  padding: 10px 35px 16px 0px;

  & span,
  & span:before,
  & span:after {
    cursor: pointer;
    border-radius: 1px;
    height: 3px;
    width: 30px;
    background: #adb8cc;
    position: absolute;
    display: block;
    content: "";
  }

  & span {
    background-color: transparent;
  }

  & span:before {
    top: 0;
    transform: rotate(45deg);
  }

  & span:after {
    top: 0;
    transform: rotate(-45deg);
  }
`;

const Sidebar = ({ show, setIsOpened }) => {
  return (
    <SidebarStyled show={show ? 1 : 0}>
      <SidebarWrapper>
        <CloseIcon
          onClick={() => {
            setIsOpened(false);
            console.log("Close icon clicked, close sidebar");
          }}
        >
          <span />
        </CloseIcon>
        <Link href="link here">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <svg
              width="30"
              height="25"
              viewBox="0 0 30 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M4.49702 0.659668H9.32167C11.3198 0.659668 12.9388 2.05228 12.9388 3.77093V7.92082C12.9388 9.63947 11.3198 11.0321 9.32167 11.0321H4.49702C2.49893 11.0321 0.879883 9.63947 0.879883 7.92082V3.77093C0.879883 2.05228 2.49893 0.659668 4.49702 0.659668ZM4.49707 14.5944H9.32172C11.3198 14.5944 12.9388 15.987 12.9388 17.7057V21.8556C12.9388 23.573 11.3198 24.9668 9.32172 24.9668H4.49707C2.49898 24.9668 0.879932 23.573 0.879932 21.8556V17.7057C0.879932 15.987 2.49898 14.5944 4.49707 14.5944ZM25.7608 14.5944H20.9361C18.938 14.5944 17.319 15.987 17.319 17.7057V21.8556C17.319 23.573 18.938 24.9668 20.9361 24.9668H25.7608C27.7588 24.9668 29.3779 23.573 29.3779 21.8556V17.7057C29.3779 15.987 27.7588 14.5944 25.7608 14.5944Z"
                fill="#200E32"
              />
            </svg>

            <span style={{ paddingTop: 10 }}>Workplace</span>
          </div>
        </Link>
        <Link href="link here">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <svg
              width="29"
              height="22"
              viewBox="0 0 29 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M26.8737 2.5551C27.3296 3.00974 27.6819 3.53272 27.9126 4.09726C28.3665 5.25753 28.5767 6.47684 28.5334 7.69921V14.0835C28.5315 14.6213 28.485 15.1582 28.394 15.6904C28.2208 16.6295 27.8334 17.5307 27.2538 18.3433C26.9874 18.7358 26.6639 19.0981 26.291 19.4217C24.6028 20.7433 22.361 21.4312 20.0705 21.3306H8.49117C6.19702 21.4305 3.95165 20.7429 2.25808 19.4217C1.88961 19.0975 1.57039 18.7352 1.30791 18.3433C0.731706 17.5313 0.352614 16.6292 0.193045 15.6904C0.0915823 15.1591 0.0407411 14.6217 0.041017 14.0835V7.69921C0.0407699 7.16602 0.0746037 6.6332 0.14237 6.10314C0.15662 6.01014 0.177994 5.91865 0.199146 5.82812C0.23441 5.67719 0.269059 5.52889 0.269059 5.38059C0.397662 4.74092 0.632265 4.12002 0.965848 3.53647C1.95402 1.7355 3.98105 0.81883 7.3003 0.81883H21.2361C23.0952 0.696187 24.9405 1.17357 26.405 2.15608C26.5737 2.27808 26.7304 2.41152 26.8737 2.5551ZM7.12298 13.4905H21.4642H21.4895C21.8042 13.5022 22.1112 13.4061 22.3421 13.2238C22.573 13.0414 22.7085 12.7879 22.7184 12.52C22.7362 12.2844 22.6453 12.0522 22.465 11.8729C22.2577 11.6319 21.9291 11.488 21.5782 11.4847H7.12298C6.47228 11.4847 5.94477 11.9337 5.94477 12.4876C5.94477 13.0415 6.47228 13.4905 7.12298 13.4905Z"
                fill="#200E32"
              />
            </svg>

            <span style={{ paddingTop: 10 }}>My Chart</span>
          </div>
        </Link>

        <Link href="link here">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <svg
              width="29"
              height="22"
              viewBox="0 0 29 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M26.8737 2.5551C27.3296 3.00974 27.6819 3.53272 27.9126 4.09726C28.3665 5.25753 28.5767 6.47684 28.5334 7.69921V14.0835C28.5315 14.6213 28.485 15.1582 28.394 15.6904C28.2208 16.6295 27.8334 17.5307 27.2538 18.3433C26.9874 18.7358 26.6639 19.0981 26.291 19.4217C24.6028 20.7433 22.361 21.4312 20.0705 21.3306H8.49117C6.19702 21.4305 3.95165 20.7429 2.25808 19.4217C1.88961 19.0975 1.57039 18.7352 1.30791 18.3433C0.731706 17.5313 0.352614 16.6292 0.193045 15.6904C0.0915823 15.1591 0.0407411 14.6217 0.041017 14.0835V7.69921C0.0407699 7.16602 0.0746037 6.6332 0.14237 6.10314C0.15662 6.01014 0.177994 5.91865 0.199146 5.82812C0.23441 5.67719 0.269059 5.52889 0.269059 5.38059C0.397662 4.74092 0.632265 4.12002 0.965848 3.53647C1.95402 1.7355 3.98105 0.81883 7.3003 0.81883H21.2361C23.0952 0.696187 24.9405 1.17357 26.405 2.15608C26.5737 2.27808 26.7304 2.41152 26.8737 2.5551ZM7.12298 13.4905H21.4642H21.4895C21.8042 13.5022 22.1112 13.4061 22.3421 13.2238C22.573 13.0414 22.7085 12.7879 22.7184 12.52C22.7362 12.2844 22.6453 12.0522 22.465 11.8729C22.2577 11.6319 21.9291 11.488 21.5782 11.4847H7.12298C6.47228 11.4847 5.94477 11.9337 5.94477 12.4876C5.94477 13.0415 6.47228 13.4905 7.12298 13.4905Z"
                fill="#200E32"
              />
            </svg>

            <span style={{ paddingTop: 10 }}>Setting</span>
          </div>
        </Link>

        <Link href="link here">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <svg
              width="34"
              height="32"
              viewBox="0 0 34 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity="0.4" filter="url(#filter0_bd)">
                <path
                  d="M29.1637 14.4454C29.1637 17.3516 26.4571 19.7058 23.0858 19.7162H23.0737H11.0992C7.73999 19.7162 4.99707 17.3725 4.99707 14.4662V14.4558C4.99707 14.4558 5.00432 9.84539 5.01399 7.52664C5.0152 7.09123 5.5952 6.84748 5.99032 7.11831C8.86132 9.08185 13.9955 12.6621 14.0596 12.7089C14.9175 13.3016 16.005 13.636 17.1167 13.636C18.2283 13.636 19.3158 13.3016 20.1737 12.6975C20.2378 12.661 25.2572 9.1881 28.1717 7.19227C28.568 6.92039 29.1504 7.16414 29.1517 7.59852C29.1637 9.89956 29.1637 14.4454 29.1637 14.4454Z"
                  fill="#5DADEC"
                />
              </g>
              <path
                d="M28.5311 3.75099C27.4847 2.05099 25.4257 0.965576 23.1589 0.965576H11.0997C8.83287 0.965576 6.77387 2.05099 5.72745 3.75099C5.49304 4.1312 5.6042 4.60516 5.9945 4.87391L14.9664 11.0604C15.5947 11.4979 16.356 11.7156 17.1172 11.7156C17.122 11.7156 17.1257 11.7156 17.1293 11.7156C17.1329 11.7156 17.1377 11.7156 17.1414 11.7156C17.9026 11.7156 18.6639 11.4979 19.2922 11.0604L28.2641 4.87391C28.6544 4.60516 28.7655 4.1312 28.5311 3.75099Z"
                fill="#200E32"
              />
              <defs>
                <filter
                  id="filter0_bd"
                  x="0.99707"
                  y="3.00464"
                  width="32.1667"
                  height="24.7116"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feGaussianBlur in="BackgroundImage" stdDeviation="2" />
                  <feComposite
                    in2="SourceAlpha"
                    operator="in"
                    result="effect1_backgroundBlur"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="2" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="effect1_backgroundBlur"
                    result="effect2_dropShadow"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect2_dropShadow"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>

            <span style={{ paddingTop: 10 }}>Mail</span>
          </div>
        </Link>

        <Link href="link here">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <svg
              width="44"
              height="37"
              viewBox="0 0 44 37"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_bd)">
                <g filter="url(#filter1_f)">
                  <ellipse
                    cx="22.057"
                    cy="16.328"
                    rx="12.1535"
                    ry="14.668"
                    transform="rotate(-84.8925 22.057 16.328)"
                    fill="#E4F3FF"
                  />
                </g>
                <path
                  d="M22.2878 18.9888C18.6728 18.9888 15.585 19.5587 15.585 21.8386C15.585 24.1192 18.6535 24.7093 22.2878 24.7093C25.9029 24.7093 28.9907 24.1402 28.9907 21.8595C28.9907 19.5788 25.923 18.9888 22.2878 18.9888Z"
                  fill="#200E32"
                />
                <path
                  opacity="0.4"
                  d="M22.2882 16.8173C24.7507 16.8173 26.7238 14.8434 26.7238 12.3817C26.7238 9.91995 24.7507 7.94604 22.2882 7.94604C19.8264 7.94604 17.8525 9.91995 17.8525 12.3817C17.8525 14.8434 19.8264 16.8173 22.2882 16.8173Z"
                  fill="#68BDFF"
                />
                <path
                  d="M33.1843 21.5034C29.5693 21.5034 26.4814 22.0734 26.4814 24.3532C26.4814 26.6339 29.55 27.224 33.1843 27.224C36.7994 27.224 39.8872 26.6548 39.8872 24.3742C39.8872 22.0935 36.8195 21.5034 33.1843 21.5034Z"
                  fill="#200E32"
                />
                <path
                  opacity="0.4"
                  d="M33.1846 19.3319C35.6472 19.3319 37.6203 17.358 37.6203 14.8963C37.6203 12.4346 35.6472 10.4607 33.1846 10.4607C30.7229 10.4607 28.749 12.4346 28.749 14.8963C28.749 17.358 30.7229 19.3319 33.1846 19.3319Z"
                  fill="#68BDFF"
                />
                <path
                  d="M11.3914 21.5034C7.77631 21.5034 4.68848 22.0734 4.68848 24.3532C4.68848 26.6339 7.75703 27.224 11.3914 27.224C15.0064 27.224 18.0942 26.6548 18.0942 24.3742C18.0942 22.0935 15.0265 21.5034 11.3914 21.5034Z"
                  fill="#200E32"
                />
                <path
                  opacity="0.4"
                  d="M11.3917 19.3319C13.8542 19.3319 15.8273 17.358 15.8273 14.8963C15.8273 12.4346 13.8542 10.4607 11.3917 10.4607C8.92995 10.4607 6.95605 12.4346 6.95605 14.8963C6.95605 17.358 8.92995 19.3319 11.3917 19.3319Z"
                  fill="#68BDFF"
                />
              </g>
              <defs>
                <filter
                  id="filter0_bd"
                  x="0.688477"
                  y="0.151367"
                  width="43.1987"
                  height="36.353"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feGaussianBlur in="BackgroundImage" stdDeviation="2" />
                  <feComposite
                    in2="SourceAlpha"
                    operator="in"
                    result="effect1_backgroundBlur"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="2" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="effect1_backgroundBlur"
                    result="effect2_dropShadow"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect2_dropShadow"
                    result="shape"
                  />
                </filter>
                <filter
                  id="filter1_f"
                  x="3.40625"
                  y="0.151367"
                  width="37.301"
                  height="32.353"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feGaussianBlur
                    stdDeviation="2"
                    result="effect1_foregroundBlur"
                  />
                </filter>
              </defs>
            </svg>

            <span style={{ paddingTop: 10 }}>My Team</span>
          </div>
        </Link>

        
      </SidebarWrapper>
    </SidebarStyled>
  );
};

export default Sidebar;
