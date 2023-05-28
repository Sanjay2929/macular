import React from "react";
import { Navbar } from "./Navbar";
import { Container } from "react-bootstrap-v5";

const AboutHome = (props) => {
  return (
    <div>
      <header className="d-flex flex-column minVh40">
        <Navbar />
        <section className="d-flex justify-content-center align-items-center flex-grow-1 aboutus position-relative overflow-hidden pb-5">
          <Container className="pt-5 position-relative">
            <h2 className="text-center ff_jakarta fw_600 fs_5x6l lh_120 clr_white pt-5 position-relative z_2">
              {props.heroHeading}
            </h2>
            <span className="position-absolute heroSvg heroplusLeft">
              <svg
                width="49"
                height="43"
                viewBox="0 0 49 43"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.3"
                  d="M8.79025 8.76697C8.66772 8.82429 8.57599 8.92225 8.53524 9.03929C8.4945 9.15634 8.50807 9.28289 8.57297 9.3911L13.4694 17.5544C13.6641 17.8791 13.7048 18.2587 13.5826 18.6099C13.4603 18.961 13.1852 19.2549 12.8176 19.4268L3.57762 23.7493C3.45509 23.8066 3.36336 23.9045 3.32262 24.0216C3.28187 24.1386 3.29544 24.2652 3.36035 24.3734L9.72314 34.9815C9.85823 35.2067 10.1748 35.2927 10.4299 35.1734L19.6698 30.8509C20.0374 30.679 20.4673 30.643 20.8649 30.751C21.2625 30.8589 21.5952 31.102 21.79 31.4266L26.6854 39.5883C26.8205 39.8135 27.1371 39.8995 27.3921 39.7802L39.404 34.161C39.5266 34.1037 39.6183 34.0057 39.659 33.8887C39.6998 33.7716 39.6862 33.6451 39.6213 33.5369L34.7259 25.3752C34.5312 25.0505 34.4905 24.6709 34.6127 24.3197C34.7349 23.9686 35.0101 23.6747 35.3777 23.5028L44.6176 19.1803C44.7402 19.123 44.8319 19.0251 44.8726 18.908C44.9134 18.791 44.8998 18.6644 44.8349 18.5562L38.4721 7.9481C38.4072 7.83989 38.2963 7.75888 38.1638 7.7229C38.0312 7.68691 37.8879 7.6989 37.7654 7.75622L28.5255 12.0787C28.1579 12.2506 27.728 12.2866 27.3304 12.1786C26.9328 12.0707 26.6 11.8276 26.4053 11.503L21.5099 3.34131C21.445 3.2331 21.334 3.15209 21.2015 3.1161C21.069 3.08012 20.9257 3.09211 20.8032 3.14943L8.79025 8.76697ZM5.80099 10.6878C4.85538 9.1113 5.53675 7.15404 7.32191 6.31895L19.3338 0.699769C21.119 -0.135327 23.3353 0.466414 24.2809 2.04294L28.4431 8.98227L36.2971 5.30819C38.0822 4.4731 40.2975 5.07321 41.2441 6.65137L47.6069 17.2595C48.0612 18.0169 48.1562 18.9028 47.871 19.7221C47.5858 20.5414 46.9437 21.2271 46.086 21.6284L38.232 25.3024L42.3933 32.2401C42.8476 32.9976 42.9426 33.8834 42.6574 34.7028C42.3722 35.5221 41.7301 36.2078 40.8724 36.609L28.8605 42.2282C28.0027 42.6294 26.9997 42.7133 26.0719 42.4614C25.1442 42.2095 24.3677 41.6425 23.9134 40.885L19.7521 33.9473L11.8982 37.6214C11.0405 38.0226 10.0374 38.1065 9.10968 37.8546C8.18193 37.6027 7.40549 37.0357 6.95116 36.2782L0.588364 25.6701C-0.357244 24.0936 0.324128 22.1363 2.10928 21.3012L9.96324 17.6272L5.80099 10.6878Z"
                  fill="#27BBA2"
                />
              </svg>
            </span>
            <span className="position-absolute heroSvg heroEyeRight">
              <svg
                width="53"
                height="35"
                viewBox="0 0 53 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.3"
                  d="M30.7634 6.17723C35.1261 7.50026 38.9774 9.88367 41.8747 13.0535C44.7719 16.2233 46.5975 20.0508 47.1415 24.096C40.4589 29.9504 30.7201 31.9601 21.7145 29.1994C12.7089 26.4388 6.47458 19.5326 5.33651 11.2807C8.60149 8.40316 12.7197 6.39771 17.2177 5.49491C21.7157 4.59211 26.4109 4.82861 30.7634 6.17723ZM32.4087 1.99137C20.5592 -1.64107 7.88139 1.76583 0.170133 9.69697C0.658718 20.1417 8.2198 29.7529 20.0693 33.3853C31.9188 37.0177 44.5966 33.6108 52.3079 25.6797C51.8193 15.2349 44.2582 5.62381 32.4087 1.99137ZM28.2956 12.456C29.8669 12.9377 31.1572 13.9509 31.8826 15.2728C32.6081 16.5946 32.7092 18.1169 32.1637 19.5046C31.6183 20.8923 30.471 22.0318 28.9742 22.6724C27.4774 23.3131 25.7538 23.4024 24.1824 22.9207C22.6111 22.439 21.3208 21.4257 20.5954 20.1039C19.8699 18.782 19.7688 17.2598 20.3143 15.8721C20.8597 14.4844 22.007 13.3449 23.5038 12.7043C25.0006 12.0636 26.7242 11.9743 28.2956 12.456ZM29.9408 8.27016C24.0635 6.46847 17.6146 9.22868 15.5745 14.4191C13.5343 19.6096 16.6598 25.3048 22.5372 27.1065C28.4145 28.9082 34.8634 26.148 36.9035 20.9575C38.9436 15.7671 35.8182 10.0719 29.9408 8.27016Z"
                  fill="#27BBA2"
                />
              </svg>
            </span>
            <span className="heroEyeLeft position-absolute heroSvg">
              <svg
                width="40"
                height="24"
                viewBox="0 0 40 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.3"
                  d="M20.7274 3.24491C23.9316 3.43069 27.0115 4.41125 29.6128 6.07386C32.2142 7.73647 34.2315 10.0136 35.4328 12.6436C32.153 17.6536 26.0257 20.5731 19.4052 20.1697C12.7847 19.7664 7.16941 16.1314 4.6998 10.7711C6.29868 8.31174 8.65096 6.3008 11.4862 4.96943C14.3215 3.63807 17.5246 3.04032 20.7274 3.24491ZM20.9678 0.167668C12.2566 -0.36309 4.44347 3.96875 0.901729 10.5397C3.38812 17.4778 10.4536 22.7162 19.1648 23.247C27.876 23.7777 35.6891 19.4459 39.2309 12.875C36.7445 5.9368 29.679 0.698426 20.9678 0.167668ZM20.3668 7.86077C21.522 7.93115 22.5982 8.40391 23.3586 9.17505C24.1191 9.94619 24.5016 10.9525 24.4219 11.9727C24.3422 12.9929 23.8069 13.9433 22.9337 14.6149C22.0605 15.2865 20.921 15.6243 19.7658 15.5539C18.6106 15.4835 17.5344 15.0107 16.774 14.2396C16.0135 13.4685 15.631 12.4621 15.7107 11.4419C15.7904 10.4218 16.3257 9.47135 17.1989 8.79975C18.0721 8.12815 19.2116 7.79039 20.3668 7.86077ZM20.6072 4.78353C16.2865 4.52027 12.5243 7.41386 12.2262 11.2296C11.9282 15.0454 15.2047 18.3679 19.5254 18.6311C23.8461 18.8944 27.6083 16.0008 27.9064 12.185C28.2044 8.36923 24.9279 5.04679 20.6072 4.78353Z"
                  fill="#27BBA2"
                />
              </svg>
            </span>
            <span className="heroPlusRight position-absolute heroSvg">
              <svg
                width="37"
                height="33"
                viewBox="0 0 37 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.3"
                  d="M6.91997 7.14754C6.82748 7.19081 6.75823 7.26476 6.72747 7.35312C6.69671 7.44147 6.70696 7.53701 6.75595 7.61869L10.4522 13.7812C10.5992 14.0262 10.63 14.3128 10.5377 14.5779C10.4454 14.843 10.2377 15.0648 9.96017 15.1946L2.98499 18.4576C2.89249 18.5009 2.82325 18.5748 2.79249 18.6632C2.76173 18.7515 2.77197 18.8471 2.82097 18.9287L7.62421 26.9367C7.72618 27.1068 7.96519 27.1717 8.15771 27.0816L15.1329 23.8186C15.4104 23.6888 15.7349 23.6616 16.035 23.7431C16.3352 23.8246 16.5864 24.0081 16.7334 24.2532L20.4289 30.4144C20.5309 30.5844 20.7699 30.6493 20.9624 30.5592L30.0302 26.3173C30.1227 26.2741 30.1919 26.2001 30.2227 26.1118C30.2534 26.0234 30.2432 25.9279 30.1942 25.8462L26.4986 19.685C26.3517 19.4399 26.3209 19.1533 26.4132 18.8882C26.5055 18.6232 26.7132 18.4013 26.9907 18.2715L33.9659 15.0085C34.0584 14.9653 34.1276 14.8913 34.1584 14.803C34.1891 14.7146 34.1789 14.6191 34.1299 14.5374L29.3267 6.52938C29.2777 6.44769 29.1939 6.38654 29.0939 6.35937C28.9938 6.33221 28.8857 6.34126 28.7932 6.38453L21.818 9.64752C21.5405 9.77733 21.216 9.80447 20.9158 9.72298C20.6157 9.64148 20.3645 9.45803 20.2175 9.21297L16.522 3.05174C16.473 2.97005 16.3892 2.9089 16.2892 2.88173C16.1891 2.85457 16.0809 2.86362 15.9885 2.90689L6.91997 7.14754ZM4.6634 8.59759C3.94956 7.40748 4.46393 5.92995 5.81153 5.29954L14.8793 1.05765C16.2269 0.427244 17.8999 0.881495 18.6138 2.07161L21.7558 7.31007L27.6847 4.53653C29.0323 3.90612 30.7046 4.35914 31.4192 5.55048L36.2225 13.5585C36.5654 14.1303 36.6371 14.799 36.4218 15.4175C36.2065 16.036 35.7218 16.5536 35.0743 16.8565L29.1454 19.6301L32.2867 24.8673C32.6297 25.4391 32.7014 26.1078 32.4861 26.7263C32.2708 27.3448 31.7861 27.8625 31.1386 28.1653L22.0709 32.4072C21.4234 32.7101 20.6662 32.7735 19.9658 32.5833C19.2655 32.3932 18.6793 31.9651 18.3364 31.3933L15.1951 26.1561L9.26615 28.9296C8.61867 29.2325 7.86146 29.2958 7.16111 29.1057C6.46076 28.9155 5.87462 28.4874 5.53165 27.9156L0.728415 19.9076C0.0145796 18.7175 0.528944 17.24 1.87655 16.6096L7.80546 13.8361L4.6634 8.59759Z"
                  fill="#27BBA2"
                />
              </svg>
            </span>
          </Container>
        </section>
      </header>
    </div>
  );
};

export default AboutHome;
