import React, { useState } from "react";
import "./css/Connect.css";
import { Box } from "@mui/material";
import { ReactNotifications, Store } from "react-notifications-component";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Connect = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const navigate = useNavigate();
  // Function to handle option selection
  const handleOptionSelect = (value) => {
    setSelectedOption(value);
    console.log("Selected option:", value); // For testing purposes, log the selected value
  };
  const handleConnectClick = () => {
    console.log(selectedOption);
    if (selectedOption === "") {
      Store.addNotification({
        title: "Please select your interest",
        message: "",
        type: "danger",
        insert: "top",
        container: "bottom-center",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 2000,
          onScreen: true,
        },
      });
    } else {
      async function connect() {
        try {
          const response = await axios.post(
            "http://localhost:5000/blogs/set_interest",
            {
              page: "Connect",
            },
            {
              withCredentials: true,
              headers: {
                "Content-Type": "application/x-www-form-urlencoded",
              },
            }
          );
          if (response.data.message === "Interest set") {
            Store.addNotification({
              title: "Interest set",
              message: "",
              type: "success",
              insert: "top",
              container: "bottom-center",
              animationIn: ["animate__animated", "animate__fadeIn"],
              animationOut: ["animate__animated", "animate__fadeOut"],
              dismiss: {
                duration: 2000,
                onScreen: true,
              },
            });
          }
        } catch (error) {
          console.log(error);
        }
      }
      connect();
    }
  };
  const [avatarSrc, setAvatarSrc] = React.useState(
    "path/to/original-image.jpg"
  );

  const handleAvatarError = () => {
    setAvatarSrc("images/defaultAvatar.jpg");
  };
  return (
    <div>
      <div style={{ backgroundColor: "rgba(35, 36, 38, 1)" }}>
        <Box className="section">
          <img
            src="images/contactus_hero_image.png"
            alt="heroLanding"
            className="background"
          />
          <div className="buttons_top">
            <button
              className="btn1"
              onClick={() => {
                navigate("/commune");
              }}
            >
              Connect
            </button>
            <button className="btn2"> Job Openings</button>
          </div>
        </Box>
        <div className="middlepart">
          <div className="box1">
            <div className="upper_box1">
              <div className="ch">
                <p>
                  <span className="c">C</span>
                  <span className="h"> H</span>
                </p>
              </div>
              <p className="pink">What interests you?</p>
              <div className="connect_container">
                <div
                  className="item"
                  onClick={() => handleOptionSelect("Digital Communities")}
                  style={{
                    color:
                      selectedOption === "Digital Communities"
                        ? "#F74D79"
                        : "#ffffff",
                  }}
                >
                  Digital Communities
                </div>
                <span className="addline"></span>
                <div
                  className="item"
                  onClick={() => handleOptionSelect("Fashion Blogging")}
                  style={{
                    color:
                      selectedOption === "Fashion Blogging"
                        ? "#F74D79"
                        : "#ffffff",
                  }}
                >
                  Fashion Blogging
                </div>
                <span className="addline"></span>
                <div
                  className="item"
                  onClick={() => handleOptionSelect("Digital marketing")}
                  style={{
                    color:
                      selectedOption === "Digital marketing"
                        ? "#F74D79"
                        : "#ffffff",
                  }}
                >
                  Digital marketing
                </div>
                <span className="addline"></span>
                <div
                  className="item"
                  onClick={() => handleOptionSelect("Collaborations")}
                  style={{
                    color:
                      selectedOption === "Collaborations"
                        ? "#F74D79"
                        : "#ffffff",
                  }}
                >
                  Collaborations
                </div>
                <span className="addline"></span>
                <div
                  className="item"
                  onClick={() => handleOptionSelect("Buying")}
                  style={{
                    color: selectedOption === "Buying" ? "#F74D79" : "#ffffff",
                  }}
                >
                  Buying
                </div>
                <span className="addline"></span>
                <div
                  className="item"
                  onClick={() => handleOptionSelect("More")}
                  style={{
                    color: selectedOption === "More" ? "#F74D79" : "#ffffff",
                  }}
                >
                  More
                </div>
              </div>

              <p className="cont" onClick={handleConnectClick}>
                Connect
              </p>
            </div>

            <div className="lowerbox">
              <div className="ch2">
                <p>
                  <span className="c">C</span>
                  <span className="h"> H</span>
                </p>
              </div>
              <div className="connect">Partnership Program</div>

              <div className="lowerbox2">
                <div className="frame65">
                  <div className="text">
                    By connecting, I agree that i have read the privacy policy
                    and that I may receive updates from cH Commune for industry
                    updates and opportunities.
                  </div>
                </div>
                {/* <div className="frame67">
              <input type="email" name="email" placeholder="Enter Email"></input>
            </div> */}

                <div>
                  <button className="frame66">
                    {" "}
                    Read more about the program
                  </button>
                </div>

                <div className="frame68">
                  <span className="line"></span>

                  <div className="or_continue">or continue with</div>

                  <span className="line"></span>
                </div>
                <div className="frame71">
                  <button className="frame69">
                    <div className="google_logo">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <g clip-path="url(#clip0_1465_1537)">
                          <path
                            d="M6.68864 0.631589C4.77026 1.29709 3.11585 2.56024 1.96842 4.23549C0.820996 5.91074 0.241025 7.9098 0.313702 9.93904C0.386378 11.9683 1.10787 13.9207 2.3722 15.5096C3.63654 17.0985 5.37707 18.24 7.33814 18.7666C8.92802 19.1768 10.5938 19.1948 12.1921 18.8191C13.6401 18.4938 14.9788 17.7981 16.0771 16.8001C17.2203 15.7296 18.05 14.3678 18.4771 12.8611C18.9413 11.2226 19.0239 9.4995 18.7186 7.82409H9.79064V11.5276H14.9611C14.8578 12.1183 14.6364 12.682 14.3101 13.1851C13.9838 13.6882 13.5593 14.1203 13.0621 14.4556C12.4308 14.8734 11.7191 15.1544 10.9726 15.2806C10.2241 15.4198 9.45622 15.4198 8.70764 15.2806C7.94887 15.1239 7.2311 14.8107 6.60014 14.3611C5.58636 13.6435 4.82515 12.624 4.42514 11.4481C4.01847 10.2502 4.01847 8.95152 4.42514 7.75359C4.70988 6.91391 5.18059 6.14939 5.80214 5.51709C6.51343 4.78021 7.41394 4.25348 8.40487 3.9947C9.39581 3.73592 10.4389 3.75508 11.4196 4.05009C12.1858 4.28517 12.8865 4.69611 13.4656 5.25009C14.0486 4.67009 14.6306 4.08859 15.2116 3.50559C15.5116 3.19209 15.8386 2.89359 16.1341 2.57259C15.2499 1.74987 14.2121 1.10965 13.0801 0.688589C11.0187 -0.0599265 8.7631 -0.0800422 6.68864 0.631589Z"
                            fill="white"
                          />
                          <path
                            d="M6.68871 0.631585C8.763 -0.0805293 11.0186 -0.0609431 13.0802 0.687085C14.2124 1.111 15.2497 1.75431 16.1327 2.58009C15.8327 2.90109 15.5162 3.20109 15.2102 3.51309C14.6282 4.09408 14.0467 4.67309 13.4657 5.25008C12.8865 4.6961 12.1859 4.28517 11.4197 4.05009C10.4393 3.75405 9.39624 3.73378 8.40504 3.9915C7.41384 4.24922 6.51278 4.77498 5.80071 5.51109C5.17916 6.14339 4.70845 6.90791 4.42371 7.74758L1.31421 5.34008C2.42722 3.13293 4.35433 1.44462 6.68871 0.631585Z"
                            fill="#E33629"
                          />
                          <path
                            d="M0.489218 7.72509C0.656228 6.89675 0.933707 6.09458 1.31422 5.34009L4.42372 7.75359C4.01705 8.95152 4.01705 10.2502 4.42372 11.4481C3.38772 12.2481 2.35122 13.0521 1.31422 13.8601C0.361944 11.9646 0.0715174 9.80484 0.489218 7.72509Z"
                            fill="#F8BD00"
                          />
                          <path
                            d="M9.79071 7.8226H18.7187C19.0239 9.49801 18.9413 11.2211 18.4772 12.8596C18.0501 14.3663 17.2203 15.7281 16.0772 16.7986C15.0737 16.0156 14.0657 15.2386 13.0622 14.4556C13.5597 14.12 13.9844 13.6874 14.3107 13.1838C14.637 12.6802 14.8582 12.1158 14.9612 11.5246H9.79071C9.78921 10.2916 9.79071 9.0571 9.79071 7.8226Z"
                            fill="#587DBD"
                          />
                          <path
                            d="M1.3125 13.8601C2.3495 13.0601 3.386 12.2561 4.422 11.4481C4.82281 12.6244 5.58511 13.6439 6.6 14.3611C7.23293 14.8086 7.95224 15.1193 8.712 15.2731C9.46058 15.4123 10.2284 15.4123 10.977 15.2731C11.7234 15.1469 12.4352 14.8659 13.0665 14.4481C14.07 15.2311 15.078 16.0081 16.0815 16.7911C14.9833 17.7897 13.6446 18.4859 12.1965 18.8116C10.5981 19.1873 8.93239 19.1693 7.3425 18.7591C6.08505 18.4233 4.91051 17.8315 3.8925 17.0206C2.81509 16.165 1.93505 15.087 1.3125 13.8601Z"
                            fill="#319F43"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_1465_1537">
                            <rect width="19.2" height="19.2" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>

                    <div>Google</div>
                  </button>

                  <div>
                    <button className="frame70">
                      <div className="insta_logo">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                        >
                          <path
                            d="M12.7 10C12.7 8.5 11.5 7.3 10 7.3C8.5 7.3 7.3 8.5 7.3 10C7.3 11.5 8.5 12.7 10 12.7C11.5 12.7 12.7 11.5 12.7 10ZM14.1 10C14.1 12.3 12.3 14.1 10 14.1C7.7 14.1 5.9 12.3 5.9 10C5.9 7.7 7.7 5.9 10 5.9C12.3 5.9 14.1 7.7 14.1 10ZM15.2 5.7C15.2 6.3 14.8 6.7 14.2 6.7C13.6 6.7 13.2 6.3 13.2 5.7C13.2 5.1 13.6 4.7 14.2 4.7C14.8 4.7 15.2 5.2 15.2 5.7ZM10 3.4C8.8 3.4 6.3 3.3 5.3 3.7C4.6 4 4 4.6 3.8 5.3C3.4 6.3 3.5 8.8 3.5 10C3.5 11.2 3.4 13.7 3.8 14.7C4 15.4 4.6 16 5.3 16.2C6.3 16.6 8.9 16.5 10 16.5C11.1 16.5 13.7 16.6 14.7 16.2C15.4 15.9 15.9 15.4 16.2 14.7C16.6 13.6 16.5 11.1 16.5 10C16.5 8.9 16.6 6.3 16.2 5.3C16 4.6 15.4 4 14.7 3.8C13.7 3.3 11.2 3.4 10 3.4ZM18 10V13.3C18 14.5 17.6 15.7 16.7 16.7C15.8 17.6 14.6 18 13.3 18H6.7C5.5 18 4.3 17.6 3.3 16.7C2.5 15.8 2 14.6 2 13.3V6.7C2 5.4 2.5 4.2 3.3 3.3C4.3 2.5 5.5 2 6.7 2H13.3C14.5 2 15.7 2.4 16.7 3.3C17.5 4.2 18 5.4 18 6.7V10Z"
                            fill="white"
                          />
                        </svg>
                      </div>
                      <div> Instagram</div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="box2">
            <div className="sidepart">
              <div className="h1">
                <svg
                  className="logo1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="43"
                  height="43"
                  viewBox="0 0 44 45"
                  fill="none"
                >
                  <path
                    d="M22.1503 10.8L21.1783 11.736C21.3042 11.8667 21.4552 11.9706 21.6222 12.0416C21.7892 12.1125 21.9688 12.1491 22.1503 12.1491C22.3318 12.1491 22.5114 12.1125 22.6784 12.0416C22.8454 11.9706 22.9964 11.8667 23.1223 11.736L22.1503 10.8ZM13.1521 30.456C12.8752 30.2283 12.5192 30.1199 12.1624 30.1547C11.8056 30.1894 11.4772 30.3645 11.2495 30.6414C11.0218 30.9183 10.9134 31.2743 10.9482 31.6311C10.9829 31.9879 11.158 32.3163 11.4349 32.544L13.1521 30.456ZM4.76589 25.0398C4.85099 25.1953 4.96589 25.3326 5.10403 25.4437C5.24217 25.5549 5.40085 25.6377 5.571 25.6875C5.74115 25.7373 5.91945 25.7531 6.09572 25.734C6.27198 25.7149 6.44276 25.6613 6.59829 25.5762C6.75383 25.4911 6.89108 25.3762 7.00222 25.2381C7.11335 25.0999 7.19619 24.9412 7.246 24.7711C7.2958 24.6009 7.31161 24.4226 7.29251 24.2464C7.27342 24.0701 7.21979 23.8993 7.13469 23.7438L4.76589 25.0398ZM5.50029 17.3466C5.50029 13.4766 7.68729 10.2294 10.6735 8.8632C13.5751 7.5366 17.4739 7.8876 21.1783 11.736L23.1223 9.8658C18.7303 5.2992 13.6255 4.545 9.55029 6.408C5.56509 8.2314 2.80029 12.465 2.80029 17.3466H5.50029ZM15.8449 36C16.7683 36.7272 17.7583 37.5012 18.7609 38.088C19.7635 38.673 20.9083 39.15 22.1503 39.15V36.45C21.5923 36.45 20.9371 36.234 20.1235 35.757C19.3081 35.2818 18.4639 34.6266 17.5171 33.8796L15.8449 36ZM28.4557 36C31.0225 33.975 34.3057 31.6566 36.8797 28.7568C39.5023 25.8048 41.5003 22.1454 41.5003 17.3466H38.8003C38.8003 21.3012 37.1803 24.3504 34.8619 26.964C32.4949 29.628 29.5123 31.7286 26.7835 33.8796L28.4557 36ZM41.5003 17.3466C41.5003 12.465 38.7373 8.2314 34.7503 6.408C30.6751 4.545 25.5739 5.2992 21.1783 9.864L23.1223 11.736C26.8267 7.8894 30.7255 7.5366 33.6271 8.8632C36.6133 10.2294 38.8003 13.4748 38.8003 17.3466H41.5003ZM26.7835 33.8796C25.8367 34.6266 24.9925 35.2818 24.1771 35.757C23.3635 36.2322 22.7083 36.45 22.1503 36.45V39.15C23.3923 39.15 24.5371 38.673 25.5397 38.088C26.5441 37.5012 27.5323 36.7272 28.4557 36L26.7835 33.8796ZM17.5171 33.8796C16.0843 32.751 14.6281 31.671 13.1521 30.456L11.4349 32.544C12.9289 33.7734 14.5093 34.947 15.8449 36L17.5189 33.8796H17.5171ZM7.13469 23.7456C6.05039 21.788 5.48757 19.5844 5.50029 17.3466H2.80029C2.80029 20.295 3.55629 22.8294 4.76589 25.0398L7.13469 23.7438V23.7456Z"
                    fill="white"
                  />
                </svg>
                <div className="side_text">
                  <div className="text1">Stand out from the crowd</div>

                  <div className="text2">
                    Help us match your profile by telling us a bit more about
                    yourself
                  </div>
                </div>
              </div>
              <div className="h2">
                <svg
                  className="logo2"
                  xmlns="http://www.w3.org/2000/svg"
                  width="43"
                  height="43"
                  viewBox="0 0 43 43"
                  fill="none"
                >
                  <mask id="path-1-inside-1_1466_1627" fill="white">
                    <path d="M38.9161 28.4781C38.7696 28.3132 38.6259 28.1481 38.4847 27.9889C36.5441 25.7936 35.37 24.4687 35.37 18.2539C35.37 15.0364 34.5469 12.3964 32.9247 10.4164C31.7286 8.95371 30.1116 7.84408 27.9804 7.02403C27.953 7.00976 27.9285 6.99105 27.9081 6.96876C27.1415 4.56801 25.0439 2.96008 22.678 2.96008C20.3122 2.96008 18.2154 4.56801 17.4488 6.96628C17.4283 6.98775 17.4042 7.00588 17.3774 7.01991C12.404 8.93473 9.98696 12.6085 9.98696 18.2515C9.98696 24.4687 8.81462 25.7936 6.87219 27.9865C6.73105 28.1457 6.58726 28.3074 6.44083 28.4757C6.06258 28.9023 5.82293 29.4213 5.75023 29.9714C5.67754 30.5214 5.77485 31.0794 6.03065 31.5793C6.57492 32.6518 7.7349 33.3176 9.05897 33.3176H36.3068C37.6247 33.3176 38.7767 32.6526 39.3227 31.5851C39.5796 31.0851 39.6779 30.5266 39.6058 29.9759C39.5337 29.4253 39.2944 28.9055 38.9161 28.4781ZM22.678 39.9201C23.9527 39.9191 25.2034 39.5955 26.2973 38.9836C27.3913 38.3716 28.2878 37.4942 28.8917 36.4443C28.9201 36.394 28.9342 36.3377 28.9325 36.2808C28.9307 36.2239 28.9133 36.1684 28.8819 36.1197C28.8505 36.0709 28.8061 36.0306 28.7531 36.0026C28.7001 35.9747 28.6403 35.96 28.5794 35.9601H16.7784C16.7175 35.9599 16.6575 35.9744 16.6044 36.0023C16.5513 36.0302 16.5068 36.0705 16.4752 36.1193C16.4437 36.1681 16.4262 36.2236 16.4245 36.2806C16.4227 36.3376 16.4368 36.394 16.4652 36.4443C17.0691 37.4941 17.9654 38.3714 19.0592 38.9834C20.153 39.5953 21.4035 39.919 22.678 39.9201Z" />
                  </mask>
                  <path
                    d="M38.9161 28.4781L40.8928 26.7283L40.8906 26.7258L38.9161 28.4781ZM38.4847 27.9889L36.5068 29.7374L36.5091 29.7401L38.4847 27.9889ZM32.9247 10.4164L30.8811 12.0877L30.8826 12.0895L32.9247 10.4164ZM27.9804 7.02403L26.762 9.36604L26.8938 9.43459L27.0324 9.48793L27.9804 7.02403ZM27.9081 6.96876L25.3932 7.77177L25.5696 8.32422L25.9613 8.75187L27.9081 6.96876ZM17.4488 6.96628L19.3601 8.78739L19.7787 8.34806L19.9635 7.77005L17.4488 6.96628ZM17.3774 7.01991L18.3259 9.48361L18.4666 9.42946L18.6001 9.35965L17.3774 7.01991ZM6.87219 27.9865L8.84778 29.7376L8.84838 29.737L6.87219 27.9865ZM6.44083 28.4757L8.41622 30.2271L8.4244 30.2179L8.4325 30.2086L6.44083 28.4757ZM6.03065 31.5793L8.38486 30.3846L8.38086 30.3768L6.03065 31.5793ZM39.3227 31.5851L36.9745 30.3787L36.9723 30.3829L39.3227 31.5851ZM22.678 39.9201L22.6757 42.5601L22.68 42.5601L22.678 39.9201ZM28.8917 36.4443L31.1801 37.7607L31.1849 37.7523L31.1897 37.7438L28.8917 36.4443ZM28.5794 35.9601V38.6001H28.5819L28.5794 35.9601ZM16.7784 35.9601L16.7697 38.6001H16.7784V35.9601ZM16.4652 36.4443L14.1672 37.7438L14.172 37.7523L14.1768 37.7607L16.4652 36.4443ZM40.8906 26.7258C40.6782 26.4864 40.6879 26.4945 40.4603 26.2377L36.5091 29.7401C36.5638 29.8018 36.8611 30.1399 36.9415 30.2305L40.8906 26.7258ZM40.4627 26.2404C39.4717 25.1194 39.0049 24.5609 38.661 23.6742C38.2988 22.7402 38.01 21.2369 38.01 18.2539H32.73C32.73 21.4857 33.0282 23.7522 33.7382 25.5832C34.4665 27.4614 35.5571 28.6631 36.5068 29.7374L40.4627 26.2404ZM38.01 18.2539C38.01 14.5877 37.0669 11.3065 34.9668 8.74331L30.8826 12.0895C32.027 13.4864 32.73 15.4851 32.73 18.2539H38.01ZM34.9684 8.7452C33.4273 6.86062 31.3988 5.51066 28.9285 4.56014L27.0324 9.48793C28.8245 10.1775 30.0299 11.0468 30.8811 12.0877L34.9684 8.7452ZM29.1989 4.68203C29.4388 4.80684 29.6624 4.97539 29.8549 5.18564L25.9613 8.75187C26.1947 9.0067 26.4672 9.21269 26.762 9.36604L29.1989 4.68203ZM30.423 6.16574C29.3382 2.76819 26.2916 0.320084 22.678 0.320084V5.60008C23.7961 5.60008 24.9449 6.36783 25.3932 7.77177L30.423 6.16574ZM22.678 0.320084C19.0645 0.320084 16.0191 2.76803 14.9341 6.16252L19.9635 7.77005C20.4116 6.36799 21.5599 5.60008 22.678 5.60008V0.320084ZM15.5375 5.14517C15.7208 4.95274 15.9306 4.79723 16.1546 4.68016L18.6001 9.35965C18.8778 9.21453 19.1359 9.02277 19.3601 8.78739L15.5375 5.14517ZM16.4288 4.5562C13.5345 5.67054 11.198 7.37569 9.61172 9.78649C8.03381 12.1846 7.34696 15.0547 7.34696 18.2515H12.627C12.627 15.8052 13.1486 14.0169 14.0225 12.6887C14.8881 11.3732 16.2468 10.2841 18.3259 9.48361L16.4288 4.5562ZM7.34696 18.2515C7.34696 21.2362 7.05842 22.7401 6.69644 23.6739C6.35314 24.5596 5.88688 25.1173 4.896 26.2359L8.84838 29.737C9.79993 28.6627 10.891 27.4616 11.6195 25.5822C12.3293 23.7511 12.627 21.4839 12.627 18.2515H7.34696ZM4.8966 26.2353C4.75945 26.39 4.60563 26.563 4.44917 26.7428L8.4325 30.2086C8.5689 30.0518 8.70265 29.9014 8.84778 29.7376L4.8966 26.2353ZM4.46544 26.7243C3.74812 27.5333 3.27668 28.5383 3.13299 29.6255L8.36747 30.3173C8.36917 30.3044 8.37704 30.2713 8.41622 30.2271L4.46544 26.7243ZM3.13299 29.6255C2.98918 30.7137 3.18371 31.8111 3.68044 32.7819L8.38086 30.3768C8.37278 30.361 8.36944 30.3488 8.368 30.3406C8.36657 30.3324 8.36646 30.325 8.36747 30.3173L3.13299 29.6255ZM3.67644 32.774C4.7245 34.8393 6.86544 35.9576 9.05897 35.9576V30.6776C8.60436 30.6776 8.42533 30.4644 8.38485 30.3846L3.67644 32.774ZM9.05897 35.9576H36.3068V30.6776H9.05897V35.9576ZM36.3068 35.9576C38.502 35.9576 40.6261 34.8344 41.6731 32.7873L36.9723 30.3829C36.9273 30.4709 36.7473 30.6776 36.3068 30.6776V35.9576ZM41.671 32.7915C42.1697 31.8207 42.366 30.7226 42.2235 29.6333L36.9881 30.3186C36.9891 30.3263 36.989 30.3338 36.9876 30.3421C36.9861 30.3505 36.9827 30.3628 36.9745 30.3787L41.671 32.7915ZM42.2235 29.6333C42.081 28.545 41.6102 27.5386 40.8928 26.7283L36.9393 30.228C36.9786 30.2723 36.9864 30.3056 36.9881 30.3186L42.2235 29.6333ZM22.68 42.5601C24.3973 42.5588 26.092 42.1234 27.5861 41.2876L25.0085 36.6795C24.3147 37.0676 23.5081 37.2794 22.676 37.2801L22.68 42.5601ZM27.5861 41.2876C29.0812 40.4513 30.3298 39.2389 31.1801 37.7607L26.6033 35.128C26.2458 35.7495 25.7014 36.292 25.0085 36.6795L27.5861 41.2876ZM31.1897 37.7438C31.4517 37.2805 31.5877 36.7482 31.5713 36.2015L26.2937 36.3601C26.2806 35.9271 26.3885 35.5076 26.5936 35.1449L31.1897 37.7438ZM31.5713 36.2015C31.5548 35.6549 31.3873 35.1335 31.1006 34.689L26.6632 37.5503C26.4394 37.2033 26.3067 36.7929 26.2937 36.3601L31.5713 36.2015ZM31.1006 34.689C30.815 34.2459 30.4251 33.8999 29.9849 33.6676L27.5213 38.3377C27.1871 38.1613 26.886 37.8959 26.6632 37.5503L31.1006 34.689ZM29.9849 33.6676C29.5453 33.4358 29.061 33.3196 28.5769 33.3201L28.5819 38.6001C28.2196 38.6004 27.8548 38.5136 27.5213 38.3377L29.9849 33.6676ZM28.5794 33.3201H16.7784V38.6001H28.5794V33.3201ZM16.7871 33.3201C16.3024 33.3185 15.8172 33.4338 15.3768 33.6651L17.8319 38.3396C17.4978 38.5151 17.1325 38.6012 16.7697 38.6001L16.7871 33.3201ZM15.3768 33.6651C14.9357 33.8968 14.5449 34.2426 14.2583 34.6858L18.6921 37.5528C18.4686 37.8985 18.1668 38.1637 17.8319 38.3396L15.3768 33.6651ZM14.2583 34.6858C13.9708 35.1304 13.8025 35.6522 13.7857 36.1995L19.0632 36.3617C19.0499 36.795 18.9166 37.2057 18.6921 37.5528L14.2583 34.6858ZM13.7857 36.1995C13.7689 36.747 13.9049 37.28 14.1672 37.7438L18.7633 35.1449C18.9686 35.508 19.0765 35.9281 19.0632 36.3617L13.7857 36.1995ZM14.1768 37.7607C15.0271 39.2388 16.2755 40.451 17.7703 41.2873L20.3482 36.6794C19.6554 36.2918 19.1111 35.7494 18.7537 35.128L14.1768 37.7607ZM17.7703 41.2873C19.2641 42.1231 20.9586 42.5586 22.6757 42.5601L22.6803 37.2801C21.8483 37.2793 21.0419 37.0675 20.3482 36.6794L17.7703 41.2873Z"
                    fill="white"
                    mask="url(#path-1-inside-1_1466_1627)"
                  />
                </svg>
                <div className="side_text">
                  <div className="text3">Job Subscriptions</div>
                  <div className="text4">
                    {" "}
                    Be the first one to know about our job openings
                  </div>
                </div>
              </div>
              <div className="h3">
                <svg
                  className="logo3"
                  xmlns="http://www.w3.org/2000/svg"
                  width="43"
                  height="43"
                  viewBox="0 0 43 43"
                  fill="none"
                >
                  <path
                    d="M3.97974 11.1997C3.97974 10.2661 4.35059 9.3708 5.01072 8.71067C5.67085 8.05054 6.56617 7.67969 7.49973 7.67969H35.6597C36.5933 7.67969 37.4886 8.05054 38.1487 8.71067C38.8089 9.3708 39.1797 10.2661 39.1797 11.1997V30.5597C39.1797 31.4932 38.8089 32.3886 38.1487 33.0487C37.4886 33.7088 36.5933 34.0797 35.6597 34.0797H27.5884L22.824 38.844C22.494 39.1739 22.0464 39.3593 21.5797 39.3593C21.113 39.3593 20.6655 39.1739 20.3354 38.844L15.5711 34.0797H7.49973C6.56617 34.0797 5.67085 33.7088 5.01072 33.0487C4.35059 32.3886 3.97974 31.4932 3.97974 30.5597V11.1997ZM35.6597 11.1997H7.49973V30.5597H16.2997C16.7665 30.5598 17.2141 30.7453 17.544 31.0754L21.5797 35.111L25.6154 31.0754C25.9454 30.7453 26.393 30.5598 26.8597 30.5597H35.6597V11.1997ZM11.0197 17.3597C11.0197 16.8929 11.2052 16.4452 11.5352 16.1152C11.8653 15.7851 12.313 15.5997 12.7797 15.5997H30.3797C30.8465 15.5997 31.2942 15.7851 31.6242 16.1152C31.9543 16.4452 32.1397 16.8929 32.1397 17.3597C32.1397 17.8265 31.9543 18.2741 31.6242 18.6042C31.2942 18.9343 30.8465 19.1197 30.3797 19.1197H12.7797C12.313 19.1197 11.8653 18.9343 11.5352 18.6042C11.2052 18.2741 11.0197 17.8265 11.0197 17.3597ZM11.0197 24.3997C11.0197 23.9329 11.2052 23.4852 11.5352 23.1552C11.8653 22.8251 12.313 22.6397 12.7797 22.6397H23.3397C23.8065 22.6397 24.2542 22.8251 24.5842 23.1552C24.9143 23.4852 25.0997 23.9329 25.0997 24.3997C25.0997 24.8665 24.9143 25.3141 24.5842 25.6442C24.2542 25.9743 23.8065 26.1597 23.3397 26.1597H12.7797C12.313 26.1597 11.8653 25.9743 11.5352 25.6442C11.2052 25.3141 11.0197 24.8665 11.0197 24.3997Z"
                    fill="white"
                  />
                </svg>
                <div className="side_text">
                  <div className="text5">Add Recommendations</div>
                  <div className="text6">
                    Add people who can recommend your extraordinary work ethic
                  </div>
                </div>
              </div>
            </div>

            <div className="sidepart2">
              <div className="h1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="43"
                  height="43"
                  viewBox="0 0 44 45"
                  fill="none"
                >
                  <path
                    d="M22.1503 10.8L21.1783 11.736C21.3042 11.8667 21.4552 11.9706 21.6222 12.0416C21.7892 12.1125 21.9688 12.1491 22.1503 12.1491C22.3318 12.1491 22.5114 12.1125 22.6784 12.0416C22.8454 11.9706 22.9964 11.8667 23.1223 11.736L22.1503 10.8ZM13.1521 30.456C12.8752 30.2283 12.5192 30.1199 12.1624 30.1547C11.8056 30.1894 11.4772 30.3645 11.2495 30.6414C11.0218 30.9183 10.9134 31.2743 10.9482 31.6311C10.9829 31.9879 11.158 32.3163 11.4349 32.544L13.1521 30.456ZM4.76589 25.0398C4.85099 25.1953 4.96589 25.3326 5.10403 25.4437C5.24217 25.5549 5.40085 25.6377 5.571 25.6875C5.74115 25.7373 5.91945 25.7531 6.09572 25.734C6.27198 25.7149 6.44276 25.6613 6.59829 25.5762C6.75383 25.4911 6.89108 25.3762 7.00222 25.2381C7.11335 25.0999 7.19619 24.9412 7.246 24.7711C7.2958 24.6009 7.31161 24.4226 7.29251 24.2464C7.27342 24.0701 7.21979 23.8993 7.13469 23.7438L4.76589 25.0398ZM5.50029 17.3466C5.50029 13.4766 7.68729 10.2294 10.6735 8.8632C13.5751 7.5366 17.4739 7.8876 21.1783 11.736L23.1223 9.8658C18.7303 5.2992 13.6255 4.545 9.55029 6.408C5.56509 8.2314 2.80029 12.465 2.80029 17.3466H5.50029ZM15.8449 36C16.7683 36.7272 17.7583 37.5012 18.7609 38.088C19.7635 38.673 20.9083 39.15 22.1503 39.15V36.45C21.5923 36.45 20.9371 36.234 20.1235 35.757C19.3081 35.2818 18.4639 34.6266 17.5171 33.8796L15.8449 36ZM28.4557 36C31.0225 33.975 34.3057 31.6566 36.8797 28.7568C39.5023 25.8048 41.5003 22.1454 41.5003 17.3466H38.8003C38.8003 21.3012 37.1803 24.3504 34.8619 26.964C32.4949 29.628 29.5123 31.7286 26.7835 33.8796L28.4557 36ZM41.5003 17.3466C41.5003 12.465 38.7373 8.2314 34.7503 6.408C30.6751 4.545 25.5739 5.2992 21.1783 9.864L23.1223 11.736C26.8267 7.8894 30.7255 7.5366 33.6271 8.8632C36.6133 10.2294 38.8003 13.4748 38.8003 17.3466H41.5003ZM26.7835 33.8796C25.8367 34.6266 24.9925 35.2818 24.1771 35.757C23.3635 36.2322 22.7083 36.45 22.1503 36.45V39.15C23.3923 39.15 24.5371 38.673 25.5397 38.088C26.5441 37.5012 27.5323 36.7272 28.4557 36L26.7835 33.8796ZM17.5171 33.8796C16.0843 32.751 14.6281 31.671 13.1521 30.456L11.4349 32.544C12.9289 33.7734 14.5093 34.947 15.8449 36L17.5189 33.8796H17.5171ZM7.13469 23.7456C6.05039 21.788 5.48757 19.5844 5.50029 17.3466H2.80029C2.80029 20.295 3.55629 22.8294 4.76589 25.0398L7.13469 23.7438V23.7456Z"
                    fill="white"
                  />
                </svg>
                <div>
                  <div className="text1">Stand out from the crowd</div>

                  <div className="text2">
                    Help us match your profile by telling us a bit more about
                    yourself
                  </div>
                </div>
              </div>
              <div className="h2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="43"
                  height="43"
                  viewBox="0 0 43 43"
                  fill="none"
                >
                  <mask id="path-1-inside-1_1466_1627" fill="white">
                    <path d="M38.9161 28.4781C38.7696 28.3132 38.6259 28.1481 38.4847 27.9889C36.5441 25.7936 35.37 24.4687 35.37 18.2539C35.37 15.0364 34.5469 12.3964 32.9247 10.4164C31.7286 8.95371 30.1116 7.84408 27.9804 7.02403C27.953 7.00976 27.9285 6.99105 27.9081 6.96876C27.1415 4.56801 25.0439 2.96008 22.678 2.96008C20.3122 2.96008 18.2154 4.56801 17.4488 6.96628C17.4283 6.98775 17.4042 7.00588 17.3774 7.01991C12.404 8.93473 9.98696 12.6085 9.98696 18.2515C9.98696 24.4687 8.81462 25.7936 6.87219 27.9865C6.73105 28.1457 6.58726 28.3074 6.44083 28.4757C6.06258 28.9023 5.82293 29.4213 5.75023 29.9714C5.67754 30.5214 5.77485 31.0794 6.03065 31.5793C6.57492 32.6518 7.7349 33.3176 9.05897 33.3176H36.3068C37.6247 33.3176 38.7767 32.6526 39.3227 31.5851C39.5796 31.0851 39.6779 30.5266 39.6058 29.9759C39.5337 29.4253 39.2944 28.9055 38.9161 28.4781ZM22.678 39.9201C23.9527 39.9191 25.2034 39.5955 26.2973 38.9836C27.3913 38.3716 28.2878 37.4942 28.8917 36.4443C28.9201 36.394 28.9342 36.3377 28.9325 36.2808C28.9307 36.2239 28.9133 36.1684 28.8819 36.1197C28.8505 36.0709 28.8061 36.0306 28.7531 36.0026C28.7001 35.9747 28.6403 35.96 28.5794 35.9601H16.7784C16.7175 35.9599 16.6575 35.9744 16.6044 36.0023C16.5513 36.0302 16.5068 36.0705 16.4752 36.1193C16.4437 36.1681 16.4262 36.2236 16.4245 36.2806C16.4227 36.3376 16.4368 36.394 16.4652 36.4443C17.0691 37.4941 17.9654 38.3714 19.0592 38.9834C20.153 39.5953 21.4035 39.919 22.678 39.9201Z" />
                  </mask>
                  <path
                    d="M38.9161 28.4781L40.8928 26.7283L40.8906 26.7258L38.9161 28.4781ZM38.4847 27.9889L36.5068 29.7374L36.5091 29.7401L38.4847 27.9889ZM32.9247 10.4164L30.8811 12.0877L30.8826 12.0895L32.9247 10.4164ZM27.9804 7.02403L26.762 9.36604L26.8938 9.43459L27.0324 9.48793L27.9804 7.02403ZM27.9081 6.96876L25.3932 7.77177L25.5696 8.32422L25.9613 8.75187L27.9081 6.96876ZM17.4488 6.96628L19.3601 8.78739L19.7787 8.34806L19.9635 7.77005L17.4488 6.96628ZM17.3774 7.01991L18.3259 9.48361L18.4666 9.42946L18.6001 9.35965L17.3774 7.01991ZM6.87219 27.9865L8.84778 29.7376L8.84838 29.737L6.87219 27.9865ZM6.44083 28.4757L8.41622 30.2271L8.4244 30.2179L8.4325 30.2086L6.44083 28.4757ZM6.03065 31.5793L8.38486 30.3846L8.38086 30.3768L6.03065 31.5793ZM39.3227 31.5851L36.9745 30.3787L36.9723 30.3829L39.3227 31.5851ZM22.678 39.9201L22.6757 42.5601L22.68 42.5601L22.678 39.9201ZM28.8917 36.4443L31.1801 37.7607L31.1849 37.7523L31.1897 37.7438L28.8917 36.4443ZM28.5794 35.9601V38.6001H28.5819L28.5794 35.9601ZM16.7784 35.9601L16.7697 38.6001H16.7784V35.9601ZM16.4652 36.4443L14.1672 37.7438L14.172 37.7523L14.1768 37.7607L16.4652 36.4443ZM40.8906 26.7258C40.6782 26.4864 40.6879 26.4945 40.4603 26.2377L36.5091 29.7401C36.5638 29.8018 36.8611 30.1399 36.9415 30.2305L40.8906 26.7258ZM40.4627 26.2404C39.4717 25.1194 39.0049 24.5609 38.661 23.6742C38.2988 22.7402 38.01 21.2369 38.01 18.2539H32.73C32.73 21.4857 33.0282 23.7522 33.7382 25.5832C34.4665 27.4614 35.5571 28.6631 36.5068 29.7374L40.4627 26.2404ZM38.01 18.2539C38.01 14.5877 37.0669 11.3065 34.9668 8.74331L30.8826 12.0895C32.027 13.4864 32.73 15.4851 32.73 18.2539H38.01ZM34.9684 8.7452C33.4273 6.86062 31.3988 5.51066 28.9285 4.56014L27.0324 9.48793C28.8245 10.1775 30.0299 11.0468 30.8811 12.0877L34.9684 8.7452ZM29.1989 4.68203C29.4388 4.80684 29.6624 4.97539 29.8549 5.18564L25.9613 8.75187C26.1947 9.0067 26.4672 9.21269 26.762 9.36604L29.1989 4.68203ZM30.423 6.16574C29.3382 2.76819 26.2916 0.320084 22.678 0.320084V5.60008C23.7961 5.60008 24.9449 6.36783 25.3932 7.77177L30.423 6.16574ZM22.678 0.320084C19.0645 0.320084 16.0191 2.76803 14.9341 6.16252L19.9635 7.77005C20.4116 6.36799 21.5599 5.60008 22.678 5.60008V0.320084ZM15.5375 5.14517C15.7208 4.95274 15.9306 4.79723 16.1546 4.68016L18.6001 9.35965C18.8778 9.21453 19.1359 9.02277 19.3601 8.78739L15.5375 5.14517ZM16.4288 4.5562C13.5345 5.67054 11.198 7.37569 9.61172 9.78649C8.03381 12.1846 7.34696 15.0547 7.34696 18.2515H12.627C12.627 15.8052 13.1486 14.0169 14.0225 12.6887C14.8881 11.3732 16.2468 10.2841 18.3259 9.48361L16.4288 4.5562ZM7.34696 18.2515C7.34696 21.2362 7.05842 22.7401 6.69644 23.6739C6.35314 24.5596 5.88688 25.1173 4.896 26.2359L8.84838 29.737C9.79993 28.6627 10.891 27.4616 11.6195 25.5822C12.3293 23.7511 12.627 21.4839 12.627 18.2515H7.34696ZM4.8966 26.2353C4.75945 26.39 4.60563 26.563 4.44917 26.7428L8.4325 30.2086C8.5689 30.0518 8.70265 29.9014 8.84778 29.7376L4.8966 26.2353ZM4.46544 26.7243C3.74812 27.5333 3.27668 28.5383 3.13299 29.6255L8.36747 30.3173C8.36917 30.3044 8.37704 30.2713 8.41622 30.2271L4.46544 26.7243ZM3.13299 29.6255C2.98918 30.7137 3.18371 31.8111 3.68044 32.7819L8.38086 30.3768C8.37278 30.361 8.36944 30.3488 8.368 30.3406C8.36657 30.3324 8.36646 30.325 8.36747 30.3173L3.13299 29.6255ZM3.67644 32.774C4.7245 34.8393 6.86544 35.9576 9.05897 35.9576V30.6776C8.60436 30.6776 8.42533 30.4644 8.38485 30.3846L3.67644 32.774ZM9.05897 35.9576H36.3068V30.6776H9.05897V35.9576ZM36.3068 35.9576C38.502 35.9576 40.6261 34.8344 41.6731 32.7873L36.9723 30.3829C36.9273 30.4709 36.7473 30.6776 36.3068 30.6776V35.9576ZM41.671 32.7915C42.1697 31.8207 42.366 30.7226 42.2235 29.6333L36.9881 30.3186C36.9891 30.3263 36.989 30.3338 36.9876 30.3421C36.9861 30.3505 36.9827 30.3628 36.9745 30.3787L41.671 32.7915ZM42.2235 29.6333C42.081 28.545 41.6102 27.5386 40.8928 26.7283L36.9393 30.228C36.9786 30.2723 36.9864 30.3056 36.9881 30.3186L42.2235 29.6333ZM22.68 42.5601C24.3973 42.5588 26.092 42.1234 27.5861 41.2876L25.0085 36.6795C24.3147 37.0676 23.5081 37.2794 22.676 37.2801L22.68 42.5601ZM27.5861 41.2876C29.0812 40.4513 30.3298 39.2389 31.1801 37.7607L26.6033 35.128C26.2458 35.7495 25.7014 36.292 25.0085 36.6795L27.5861 41.2876ZM31.1897 37.7438C31.4517 37.2805 31.5877 36.7482 31.5713 36.2015L26.2937 36.3601C26.2806 35.9271 26.3885 35.5076 26.5936 35.1449L31.1897 37.7438ZM31.5713 36.2015C31.5548 35.6549 31.3873 35.1335 31.1006 34.689L26.6632 37.5503C26.4394 37.2033 26.3067 36.7929 26.2937 36.3601L31.5713 36.2015ZM31.1006 34.689C30.815 34.2459 30.4251 33.8999 29.9849 33.6676L27.5213 38.3377C27.1871 38.1613 26.886 37.8959 26.6632 37.5503L31.1006 34.689ZM29.9849 33.6676C29.5453 33.4358 29.061 33.3196 28.5769 33.3201L28.5819 38.6001C28.2196 38.6004 27.8548 38.5136 27.5213 38.3377L29.9849 33.6676ZM28.5794 33.3201H16.7784V38.6001H28.5794V33.3201ZM16.7871 33.3201C16.3024 33.3185 15.8172 33.4338 15.3768 33.6651L17.8319 38.3396C17.4978 38.5151 17.1325 38.6012 16.7697 38.6001L16.7871 33.3201ZM15.3768 33.6651C14.9357 33.8968 14.5449 34.2426 14.2583 34.6858L18.6921 37.5528C18.4686 37.8985 18.1668 38.1637 17.8319 38.3396L15.3768 33.6651ZM14.2583 34.6858C13.9708 35.1304 13.8025 35.6522 13.7857 36.1995L19.0632 36.3617C19.0499 36.795 18.9166 37.2057 18.6921 37.5528L14.2583 34.6858ZM13.7857 36.1995C13.7689 36.747 13.9049 37.28 14.1672 37.7438L18.7633 35.1449C18.9686 35.508 19.0765 35.9281 19.0632 36.3617L13.7857 36.1995ZM14.1768 37.7607C15.0271 39.2388 16.2755 40.451 17.7703 41.2873L20.3482 36.6794C19.6554 36.2918 19.1111 35.7494 18.7537 35.128L14.1768 37.7607ZM17.7703 41.2873C19.2641 42.1231 20.9586 42.5586 22.6757 42.5601L22.6803 37.2801C21.8483 37.2793 21.0419 37.0675 20.3482 36.6794L17.7703 41.2873Z"
                    fill="white"
                    mask="url(#path-1-inside-1_1466_1627)"
                  />
                </svg>
                <div>
                  <div className="text3">Job Subscriptions</div>
                  <div className="text4">
                    {" "}
                    Be the first one to know about our job openings
                  </div>
                </div>
              </div>
              <div className="h3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="43"
                  height="43"
                  viewBox="0 0 43 43"
                  fill="none"
                >
                  <path
                    d="M3.97974 11.1997C3.97974 10.2661 4.35059 9.3708 5.01072 8.71067C5.67085 8.05054 6.56617 7.67969 7.49973 7.67969H35.6597C36.5933 7.67969 37.4886 8.05054 38.1487 8.71067C38.8089 9.3708 39.1797 10.2661 39.1797 11.1997V30.5597C39.1797 31.4932 38.8089 32.3886 38.1487 33.0487C37.4886 33.7088 36.5933 34.0797 35.6597 34.0797H27.5884L22.824 38.844C22.494 39.1739 22.0464 39.3593 21.5797 39.3593C21.113 39.3593 20.6655 39.1739 20.3354 38.844L15.5711 34.0797H7.49973C6.56617 34.0797 5.67085 33.7088 5.01072 33.0487C4.35059 32.3886 3.97974 31.4932 3.97974 30.5597V11.1997ZM35.6597 11.1997H7.49973V30.5597H16.2997C16.7665 30.5598 17.2141 30.7453 17.544 31.0754L21.5797 35.111L25.6154 31.0754C25.9454 30.7453 26.393 30.5598 26.8597 30.5597H35.6597V11.1997ZM11.0197 17.3597C11.0197 16.8929 11.2052 16.4452 11.5352 16.1152C11.8653 15.7851 12.313 15.5997 12.7797 15.5997H30.3797C30.8465 15.5997 31.2942 15.7851 31.6242 16.1152C31.9543 16.4452 32.1397 16.8929 32.1397 17.3597C32.1397 17.8265 31.9543 18.2741 31.6242 18.6042C31.2942 18.9343 30.8465 19.1197 30.3797 19.1197H12.7797C12.313 19.1197 11.8653 18.9343 11.5352 18.6042C11.2052 18.2741 11.0197 17.8265 11.0197 17.3597ZM11.0197 24.3997C11.0197 23.9329 11.2052 23.4852 11.5352 23.1552C11.8653 22.8251 12.313 22.6397 12.7797 22.6397H23.3397C23.8065 22.6397 24.2542 22.8251 24.5842 23.1552C24.9143 23.4852 25.0997 23.9329 25.0997 24.3997C25.0997 24.8665 24.9143 25.3141 24.5842 25.6442C24.2542 25.9743 23.8065 26.1597 23.3397 26.1597H12.7797C12.313 26.1597 11.8653 25.9743 11.5352 25.6442C11.2052 25.3141 11.0197 24.8665 11.0197 24.3997Z"
                    fill="white"
                  />
                </svg>
                <div>
                  <div className="text5">Add Recommendations</div>
                  <div className="text6">
                    Add people who can recommend your extraordinary work ethic
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="lastpart"> */}
        {/* <Footer /> */}
        {/* </div> */}
      </div>
    </div>
  );
};

export default Connect;
