import React from "react";
import { Container } from "react-bootstrap-v5";
import GreenButton from "./GreenButton";

const BioChemistry = () => {
  return (
    <div>
      <section>
        <Container className="position-relative biochemistry">
          <div className="optimizeBG d-flex justify-content-center flex-column align-items-center py-5 rounded-pill br_50 position-relative z_2 px-2">
            <h2 className="text-center ff_jakarta fw_500 fs_4x8l clr_white lh_120 pb-2 pt-3">
              Optimize Biochemistry
            </h2>
            <p className="text-center ff_roboto fw_400 fs_md clr_white opacity_70 lh_150 maxW587 pt-1 pb-3 pb-sm-5">
              Lectus adipiscing pulvinar et praesent justo libero luctus tortor.
              A semper feugiat non dui ut egestas eu. Euismod eu fames ante in
              vestibulum duis in odio. Amet pharetra mauris at pellentesque.
              Netus libero nulla eu id.
            </p>
            <GreenButton greenButton="Book Call" />
            <span className="optimizeFirstplus position-absolute heroSvg d-sm-block d-none">
              <svg
                width="39"
                height="38"
                viewBox="0 0 39 38"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.3"
                  d="M7.6909 7.74509C7.59433 7.79625 7.52203 7.88368 7.48991 7.98814C7.45779 8.09261 7.46849 8.20555 7.51965 8.30213L11.379 15.5879C11.5324 15.8776 11.5645 16.2165 11.4682 16.5299C11.3718 16.8433 11.1549 17.1055 10.8652 17.259L3.58234 21.1168C3.48576 21.1679 3.41346 21.2554 3.38135 21.3598C3.34923 21.4643 3.35993 21.5772 3.41108 21.6738L8.4262 31.1416C8.53268 31.3426 8.78223 31.4193 8.98323 31.3128L16.2661 27.455C16.5558 27.3016 16.8947 27.2695 17.2081 27.3658C17.5215 27.4622 17.7837 27.6791 17.9372 27.9688L21.7958 35.2531C21.9022 35.4541 22.1518 35.5308 22.3528 35.4244L31.8205 30.4093C31.9171 30.3581 31.9894 30.2707 32.0215 30.1662C32.0536 30.0617 32.0429 29.9488 31.9918 29.8522L28.1332 22.5679C27.9798 22.2782 27.9477 21.9393 28.044 21.6259C28.1404 21.3126 28.3573 21.0503 28.647 20.8968L35.9299 17.039C36.0264 16.9879 36.0987 16.9004 36.1309 16.796C36.163 16.6915 36.1523 16.5786 36.1011 16.482L31.086 7.01425C31.0348 6.91767 30.9474 6.84537 30.8429 6.81326C30.7385 6.78114 30.6255 6.79184 30.529 6.84299L23.2461 10.7008C22.9564 10.8542 22.6175 10.8863 22.3041 10.79C21.9907 10.6936 21.7285 10.4767 21.575 10.187L17.7164 2.90269C17.6653 2.80611 17.5779 2.73381 17.4734 2.70169C17.3689 2.66958 17.256 2.68027 17.1594 2.73143L7.6909 7.74509ZM5.33479 9.45946C4.58946 8.05241 5.12652 6.30556 6.53357 5.56023L16.0013 0.545114C17.4084 -0.20021 19.1552 0.336844 19.9005 1.7439L23.1812 7.93725L29.3716 4.65813C30.7787 3.91281 32.5248 4.44841 33.2709 5.85691L38.286 15.3246C38.6441 16.0007 38.719 16.7913 38.4941 17.5225C38.2693 18.2538 37.7632 18.8658 37.0872 19.2239L30.8968 22.503L34.1766 28.6949C34.5347 29.3709 34.6096 30.1615 34.3848 30.8928C34.16 31.624 33.6539 32.236 32.9779 32.5941L23.5101 37.6092C22.8341 37.9673 22.0435 38.0422 21.3122 37.8174C20.581 37.5926 19.969 37.0865 19.6109 36.4105L16.331 30.2186L10.1406 33.4977C9.46453 33.8558 8.67393 33.9307 7.94268 33.7058C7.21143 33.481 6.59944 32.9749 6.24134 32.2989L1.22622 22.8312C0.480899 21.4241 1.01795 19.6773 2.425 18.9319L8.61544 15.6528L5.33479 9.45946Z"
                  fill="#27BBA2"
                />
              </svg>
            </span>
            <span className=" position-absolute heroSvg optimizeFirsteye">
              <svg
                width="32"
                height="21"
                viewBox="0 0 32 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.3"
                  d="M16.5824 2.96046C19.108 3.12626 21.5355 4.00141 23.5859 5.4853C25.6363 6.96918 27.2263 9.00155 28.1732 11.3488C25.5881 15.8202 20.7585 18.4259 15.5403 18.0659C10.3221 17.7059 5.89611 14.4616 3.94957 9.67755C5.2098 7.4826 7.06385 5.68784 9.29859 4.49959C11.5333 3.31135 14.058 2.77786 16.5824 2.96046ZM16.7719 0.214019C9.90582 -0.259683 3.74753 3.60649 0.955951 9.47102C2.91571 15.6633 8.48471 20.3386 15.3508 20.8123C22.2169 21.286 28.3752 17.4198 31.1668 11.5553C29.207 5.36297 23.638 0.68772 16.7719 0.214019ZM16.2982 7.08011C17.2087 7.14293 18.057 7.56487 18.6564 8.25311C19.2558 8.94135 19.5572 9.83951 19.4944 10.75C19.4316 11.6605 19.0097 12.5088 18.3214 13.1082C17.6332 13.7076 16.735 14.009 15.8245 13.9462C14.914 13.8834 14.0658 13.4615 13.4663 12.7732C12.8669 12.085 12.5655 11.1868 12.6283 10.2763C12.6911 9.36581 13.1131 8.51755 13.8013 7.91815C14.4895 7.31875 15.3877 7.0173 16.2982 7.08011ZM16.4877 4.33368C13.0821 4.09872 10.1168 6.68125 9.88187 10.0868C9.64692 13.4924 12.2294 16.4577 15.635 16.6926C19.0406 16.9276 22.0059 14.3451 22.2408 10.9395C22.4758 7.53391 19.8933 4.56863 16.4877 4.33368Z"
                  fill="#27BBA2"
                />
              </svg>
            </span>
            <span className="optimizeSecondplus position-absolute heroSvg d-sm-block d-none">
              <svg
                width="29"
                height="29"
                viewBox="0 0 29 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.3"
                  d="M5.34985 5.99185C5.27694 6.03046 5.22236 6.09646 5.19812 6.17532C5.17387 6.25418 5.18195 6.33944 5.22057 6.41235L8.13395 11.9123C8.24981 12.1311 8.27403 12.3868 8.2013 12.6234C8.12856 12.86 7.96483 13.058 7.74611 13.1738L2.24831 16.0861C2.17541 16.1247 2.12083 16.1907 2.09659 16.2695C2.07234 16.3484 2.08042 16.4337 2.11903 16.5066L5.90492 23.6537C5.9853 23.8054 6.17368 23.8634 6.32542 23.783L11.8232 20.8708C12.0419 20.7549 12.2977 20.7307 12.5343 20.8034C12.7709 20.8762 12.9689 21.0399 13.0847 21.2586L15.9975 26.7575C16.0779 26.9092 16.2663 26.9672 16.418 26.8868L23.5652 23.1009C23.6381 23.0623 23.6926 22.9963 23.7169 22.9174C23.7411 22.8386 23.7331 22.7533 23.6944 22.6804L20.7816 17.1815C20.6658 16.9628 20.6416 16.707 20.7143 16.4704C20.787 16.2338 20.9508 16.0359 21.1695 15.92L26.6673 13.0078C26.7402 12.9692 26.7948 12.9032 26.819 12.8243C26.8433 12.7454 26.8352 12.6602 26.7966 12.5873L23.0107 5.44014C22.9721 5.36723 22.9061 5.31265 22.8272 5.28841C22.7483 5.26416 22.6631 5.27224 22.5902 5.31086L17.0924 8.22308C16.8737 8.33893 16.6179 8.36316 16.3813 8.29042C16.1447 8.21769 15.9467 8.05395 15.8309 7.83524L12.9181 2.33634C12.8795 2.26343 12.8135 2.20886 12.7346 2.18461C12.6557 2.16037 12.5705 2.16844 12.4976 2.20706L5.34985 5.99185ZM3.57123 7.28601C3.00859 6.22384 3.414 4.90515 4.47618 4.34251L11.6233 0.556621C12.6855 -0.00601971 14.0042 0.399399 14.5668 1.46157L17.0434 6.1369L21.7165 3.66152C22.7787 3.09888 24.0968 3.5032 24.66 4.56647L28.4459 11.7136C28.7162 12.2239 28.7728 12.8208 28.603 13.3728C28.4333 13.9248 28.0513 14.3868 27.5409 14.6571L22.8678 17.1325L25.3438 21.8067C25.6141 22.3171 25.6706 22.9139 25.5009 23.4659C25.3312 24.0179 24.9492 24.4799 24.4388 24.7502L17.2917 28.5361C16.7814 28.8065 16.1845 28.863 15.6325 28.6933C15.0805 28.5236 14.6185 28.1415 14.3482 27.6312L11.8722 22.9569L7.19909 25.4323C6.68875 25.7027 6.09192 25.7592 5.53991 25.5895C4.9879 25.4198 4.52591 25.0377 4.25558 24.5274L0.469695 17.3802C-0.0929467 16.3181 0.312473 14.9994 1.37465 14.4367L6.04778 11.9613L3.57123 7.28601Z"
                  fill="#27BBA2"
                />
              </svg>
            </span>
            <span className=" position-absolute heroSvg optimizeSecondeye">
              <svg
                width="42"
                height="32"
                viewBox="0 0 42 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.3"
                  d="M24.9976 5.52785C28.4362 6.70865 31.4718 8.83584 33.7554 11.6649C36.039 14.4939 37.4779 17.91 37.9067 21.5203C32.6395 26.7454 24.9635 28.5391 17.8653 26.0752C10.7672 23.6113 5.85327 17.4475 4.95625 10.0827C7.52969 7.51449 10.7756 5.72463 14.3209 4.91888C17.8662 4.11313 21.5669 4.32421 24.9976 5.52785ZM26.2944 1.79197C16.9547 -1.44999 6.96211 1.59068 0.884139 8.66921C1.26924 17.9912 7.22884 26.5691 16.5685 29.8111C25.9082 33.053 35.9008 30.0123 41.9788 22.9338C41.5937 13.6118 35.6341 5.03392 26.2944 1.79197ZM23.0524 11.1317C24.291 11.5616 25.308 12.4659 25.8798 13.6456C26.4515 14.8254 26.5312 16.184 26.1013 17.4225C25.6714 18.661 24.7671 19.678 23.5873 20.2498C22.4076 20.8216 21.049 20.9013 19.8105 20.4714C18.572 20.0414 17.555 19.1371 16.9832 17.9574C16.4114 16.7776 16.3317 15.4191 16.7616 14.1805C17.1915 12.942 18.0958 11.925 19.2756 11.3532C20.4554 10.7815 21.8139 10.7018 23.0524 11.1317ZM24.3492 7.39579C19.7167 5.78778 14.6338 8.25126 13.0257 12.8838C11.4177 17.5162 13.8812 22.5992 18.5137 24.2072C23.1462 25.8152 28.2292 23.3518 29.8372 18.7193C31.4452 14.0868 28.9817 9.0038 24.3492 7.39579Z"
                  fill="#27BBA2"
                />
              </svg>
            </span>
            <span className="optimizethirdplus position-absolute heroSvg">
              <svg
                width="30"
                height="29"
                viewBox="0 0 30 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.3"
                  d="M5.79858 5.9418C5.72567 5.98042 5.67109 6.04641 5.64685 6.12527C5.6226 6.20413 5.63068 6.28939 5.6693 6.3623L8.58268 11.8623C8.69854 12.081 8.72276 12.3368 8.65003 12.5734C8.57729 12.8099 8.41356 13.0079 8.19484 13.1238L2.69704 16.036C2.62414 16.0746 2.56956 16.1406 2.54532 16.2195C2.52107 16.2984 2.52915 16.3836 2.56777 16.4565L6.35365 23.6037C6.43403 23.7554 6.62241 23.8133 6.77415 23.7329L12.272 20.8207C12.4907 20.7049 12.7464 20.6806 12.983 20.7534C13.2196 20.8261 13.4176 20.9898 13.5335 21.2086L16.4463 26.7075C16.5266 26.8592 16.715 26.9171 16.8668 26.8367L24.0139 23.0509C24.0868 23.0122 24.1414 22.9462 24.1656 22.8674C24.1899 22.7885 24.1818 22.7033 24.1432 22.6304L21.2304 17.1314C21.1145 16.9127 21.0903 16.657 21.163 16.4204C21.2358 16.1838 21.3995 15.9858 21.6182 15.8699L27.116 12.9577C27.1889 12.9191 27.2435 12.8531 27.2677 12.7743C27.292 12.6954 27.2839 12.6101 27.2453 12.5372L23.4594 5.39009C23.4208 5.31718 23.3548 5.2626 23.2759 5.23836C23.1971 5.21411 23.1118 5.22219 23.0389 5.26081L17.5411 8.17303C17.3224 8.28888 17.0666 8.31311 16.83 8.24037C16.5935 8.16764 16.3955 8.00391 16.2796 7.78519L13.3668 2.28629C13.3282 2.21339 13.2622 2.15881 13.1833 2.13456C13.1045 2.11032 13.0192 2.11839 12.9463 2.15701L5.79858 5.9418ZM4.01996 7.23596C3.45732 6.17379 3.86274 4.8551 4.92491 4.29246L12.0721 0.506572C13.1342 -0.0560685 14.4529 0.349351 15.0156 1.41153L17.4921 6.08685L22.1652 3.61147C23.2274 3.04883 24.5455 3.45315 25.1087 4.51642L28.8946 11.6636C29.165 12.1739 29.2215 12.7707 29.0518 13.3227C28.8821 13.8748 28.5 14.3367 27.9897 14.6071L23.3165 17.0825L25.7925 21.7567C26.0628 22.267 26.1194 22.8638 25.9497 23.4159C25.7799 23.9679 25.3979 24.4299 24.8876 24.7002L17.7404 28.4861C17.2301 28.7564 16.6333 28.8129 16.0812 28.6432C15.5292 28.4735 15.0672 28.0915 14.7969 27.5811L12.3209 22.9069L7.64782 25.3823C7.13748 25.6526 6.54066 25.7091 5.98864 25.5394C5.43663 25.3697 4.97464 24.9877 4.70431 24.4773L0.918425 17.3302C0.355784 16.268 0.761203 14.9493 1.82338 14.3867L6.49651 11.9113L4.01996 7.23596Z"
                  fill="#27BBA2"
                />
              </svg>
            </span>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default BioChemistry;
