import Breadcrum from '@/components/common/Breadcrum'
import SelectComponent from '@/components/common/SelectComponent'
import Footer1 from '@/components/Footer/Footer1'
import Home1FooterTop from '@/components/Footer/Home1FooterTop'
import Header1 from '@/components/header/Header1'
import React from 'react'

const page = () => {
    return (
        <>
            <Header1  fluid={"container-fluid"}/>
            <Breadcrum content='Asked Any Question' pageTitle={'FAQ'} pagename={'FAQ'} />
            <div className="faq-page pt-120 mb-120">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-xl-5 col-lg-6 wow animate fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
                            <div className="section-title2 mb-60">
                                <h2>Frequently <span /> <br /> Asked Question</h2>
                            </div>
                            <div className="faq-wrap style-2">
                                <div className="accordion" id="accordionExample">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingOne">
                                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                01. Do you provide design and Handyman services?
                                            </button>
                                        </h2>
                                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                Yes, we offer comprehensive design and handyman services to meet your construction needs.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingTwo">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                02. Is Vernex suitable for my business?
                                            </button>
                                        </h2>
                                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                Discover if Vernex is the right fit for your business by exploring its tailored solutions for various industries and unique needs.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingThree">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                03. What is your typical project timeline?
                                            </button>
                                        </h2>
                                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                Discover the typical project timeline for our construction services, outlining each phase from planning to completion, ensuring timely and efficient project delivery.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingFour">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                                04. How do you handle permits and inspections?
                                            </button>
                                        </h2>
                                        <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                We handle all necessary permits and inspections for your project, ensuring full compliance with local regulations and smooth progress throughout the construction process.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingFive">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                                05. How do you handle waste disposal and recycling?
                                            </button>
                                        </h2>
                                        <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                At our construction sites, we prioritize responsible waste disposal and recycling by adhering to local regulations, implementing sustainable practices, and partnering with certified waste management services to minimize environmental impact.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingSix">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                                06. What information do I need for my project?
                                            </button>
                                        </h2>
                                        <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                At our construction sites, we prioritize responsible waste disposal and recycling by adhering to local regulations, implementing sustainable practices, and partnering with certified waste management services to minimize environmental impact.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingSeven">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                                                07. What is sustainable architecture?
                                            </button>
                                        </h2>
                                        <div id="collapseSeven" className="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                Discover if Vernex is the right fit for your business by exploring its tailored solutions for various industries and unique needs.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingEight">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                                                08. How do ensure buildings are structurally safe?
                                            </button>
                                        </h2>
                                        <div id="collapseEight" className="accordion-collapse collapse" aria-labelledby="headingEight" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                Discover if Vernex is the right fit for your business by exploring its tailored solutions for various industries and unique needs.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 d-lg-block d-none wow animate fadeInRight" data-wow-delay="200ms" data-wow-duration="1500ms">
                            <div className="faq-img magnetic-item">
                                <img src="/assets/img/inner-pages/faq-img.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="home6-contact-section mb-120">
                <div className="container">
                    <div className="contact-wrapper">
                        <div className="row gy-5 align-items-center">
                            <div className="col-lg-5 wow animate fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
                                <div className="contact-content">
                                    <div className="section-title">
                                        <h2>Connect with our team.</h2>
                                    </div>
                                    <svg width={8} height={143} viewBox="0 0 8 143" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1.33333 3C1.33333 4.47276 2.52724 5.66667 4 5.66667C5.47276 5.66667 6.66667 4.47276 6.66667 3C6.66667 1.52724 5.47276 0.333333 4 0.333333C2.52724 0.333333 1.33333 1.52724 1.33333 3ZM3.64645 142.354C3.84171 142.549 4.1583 142.549 4.35356 142.354L7.53554 139.172C7.7308 138.976 7.7308 138.66 7.53554 138.464C7.34028 138.269 7.0237 138.269 6.82843 138.464L4.00001 141.293L1.17158 138.464C0.976317 138.269 0.659734 138.269 0.464472 138.464C0.26921 138.66 0.26921 138.976 0.464472 139.172L3.64645 142.354ZM3.5 3L3.50001 142L4.50001 142L4.5 3L3.5 3Z" />
                                    </svg>
                                    <ul className="contact-list">
                                        <li className="single-contact">
                                            <div className="icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" width={28} height={28} viewBox="0 0 28 28">
                                                    <path d="M27.2653 21.5995L21.598 17.8201C20.8788 17.3443 19.9147 17.5009 19.383 18.1798L17.7322 20.3024C17.6296 20.4377 17.4816 20.5314 17.3154 20.5664C17.1492 20.6014 16.9759 20.5752 16.8275 20.4928L16.5134 20.3196C15.4725 19.7522 14.1772 19.0458 11.5675 16.4352C8.95784 13.8246 8.25001 12.5284 7.6826 11.4893L7.51042 11.1753C7.42683 11.0269 7.39968 10.8532 7.43398 10.6864C7.46827 10.5195 7.56169 10.3707 7.69704 10.2673L9.81816 8.61693C10.4968 8.08517 10.6536 7.1214 10.1784 6.40198L6.39895 0.734676C5.91192 0.00208106 4.9348 -0.21784 4.18082 0.235398L1.81096 1.65898C1.06634 2.09672 0.520053 2.80571 0.286612 3.63733C-0.56677 6.74673 0.0752209 12.1131 7.98033 20.0191C14.2687 26.307 18.9501 27.9979 22.1677 27.9979C22.9083 28.0011 23.6459 27.9048 24.3608 27.7115C25.1925 27.4783 25.9016 26.932 26.3391 26.1871L27.7641 23.8187C28.218 23.0645 27.9982 22.0868 27.2653 21.5995ZM26.9601 23.3399L25.5384 25.7098C25.2242 26.2474 24.7142 26.6427 24.1152 26.8128C21.2447 27.6009 16.2298 26.9482 8.64053 19.3589C1.0513 11.7697 0.398595 6.75515 1.18669 3.88421C1.35709 3.28446 1.75283 2.77385 2.2911 2.45921L4.66096 1.03749C4.98811 0.840645 5.41221 0.93606 5.62354 1.25397L7.67659 4.3363L9.39976 6.92078C9.60612 7.23283 9.53831 7.65108 9.24392 7.88199L7.1223 9.53232C6.47665 10.026 6.29227 10.9193 6.68979 11.6283L6.85826 11.9344C7.45459 13.0281 8.19599 14.3887 10.9027 17.095C13.6095 19.8012 14.9696 20.5427 16.0628 21.139L16.3694 21.3079C17.0783 21.7053 17.9716 21.521 18.4653 20.8753L20.1157 18.7537C20.3466 18.4595 20.7647 18.3918 21.0769 18.5979L26.7437 22.3773C27.0618 22.5885 27.1572 23.0128 26.9601 23.3399ZM15.8658 4.66809C20.2446 4.67296 23.7931 8.22149 23.798 12.6003C23.798 12.858 24.0069 13.0669 24.2646 13.0669C24.5223 13.0669 24.7312 12.858 24.7312 12.6003C24.7257 7.7063 20.7598 3.74029 15.8658 3.73494C15.6081 3.73494 15.3992 3.94381 15.3992 4.20151C15.3992 4.45922 15.6081 4.66809 15.8658 4.66809Z" />
                                                    <path d="M15.865 7.46746C18.6983 7.4708 20.9943 9.76678 20.9976 12.6001C20.9976 12.7238 21.0468 12.8425 21.1343 12.93C21.2218 13.0175 21.3404 13.0666 21.4642 13.0666C21.5879 13.0666 21.7066 13.0175 21.7941 12.93C21.8816 12.8425 21.9308 12.7238 21.9308 12.6001C21.9269 9.2516 19.2134 6.53813 15.865 6.5343C15.6073 6.5343 15.3984 6.74318 15.3984 7.00088C15.3984 7.25859 15.6073 7.46746 15.865 7.46746Z" />
                                                    <path d="M15.865 10.267C17.1528 10.2686 18.1964 11.3122 18.198 12.6C18.198 12.7238 18.2472 12.8424 18.3347 12.9299C18.4222 13.0174 18.5409 13.0666 18.6646 13.0666C18.7883 13.0666 18.907 13.0174 18.9945 12.9299C19.082 12.8424 19.1312 12.7238 19.1312 12.6C19.1291 10.797 17.668 9.33589 15.865 9.33386C15.6073 9.33386 15.3984 9.54274 15.3984 9.80044C15.3984 10.0581 15.6073 10.267 15.865 10.267Z" />
                                                </svg>
                                            </div>
                                            <div className="content">
                                                <span>To More Inquiry</span>
                                                <h6><a href="tel:+990737621432">+990-737 621 432</a></h6>
                                            </div>
                                        </li>
                                        <li className="single-contact">
                                            <div className="icon">
                                                <svg width={26} height={27} viewBox="0 0 26 27" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M13.5367 15.515C12.5654 15.5104 11.6005 15.3582 10.675 15.0635C9.94863 14.8205 9.29972 14.3891 8.79454 13.8133C8.28935 13.2376 7.94598 12.5381 7.79946 11.7863C7.47317 10.215 8.06813 8.55365 9.43051 7.22767C9.57687 7.08521 9.72894 6.94874 9.88637 6.81861C10.5736 6.24322 11.3905 5.84373 12.2666 5.65462C13.1428 5.4655 14.0517 5.49245 14.9151 5.73312C15.7431 5.99752 16.469 6.51169 16.9932 7.20506C17.5174 7.89843 17.8141 8.73703 17.8427 9.60576C17.9062 10.6305 17.5722 11.6403 16.9102 12.425C16.6597 12.7404 16.3272 12.9807 15.9491 13.1196C15.571 13.2584 15.162 13.2903 14.7669 13.2119C14.6039 13.1781 14.4494 13.1117 14.3126 13.0168C14.1758 12.9218 14.0596 12.8003 13.9709 12.6594C13.8913 12.5226 13.8401 12.371 13.8205 12.2139C13.8008 12.0568 13.8131 11.8974 13.8565 11.7451C14.2357 10.3125 14.6209 8.13549 14.6248 8.11382C14.6347 8.05777 14.6555 8.00422 14.6861 7.95622C14.7167 7.90822 14.7565 7.86672 14.8031 7.83409C14.8498 7.80146 14.9024 7.77833 14.9579 7.76603C15.0135 7.75373 15.071 7.75249 15.127 7.76239C15.1831 7.77229 15.2366 7.79314 15.2846 7.82374C15.3326 7.85433 15.3741 7.89409 15.4067 7.94072C15.4394 7.98736 15.4625 8.03996 15.4748 8.09554C15.4871 8.15111 15.4883 8.20857 15.4784 8.26462C15.4624 8.35518 15.0828 10.4993 14.6946 11.9665C14.6809 12.0068 14.6756 12.0494 14.6789 12.0918C14.6823 12.1342 14.6942 12.1755 14.7141 12.2131C14.774 12.2959 14.8644 12.3516 14.9654 12.3678C15.2073 12.4082 15.4557 12.3817 15.6836 12.2912C15.9116 12.2007 16.1105 12.0496 16.2589 11.8543C16.773 11.2393 17.0306 10.4499 16.9782 9.64996C16.9575 8.95841 16.7233 8.2902 16.3078 7.73703C15.8923 7.18386 15.3157 6.77283 14.6573 6.56034C13.9319 6.36082 13.1689 6.34078 12.434 6.50195C11.6992 6.66313 11.0146 7.00069 10.4393 7.4855C10.3002 7.60119 10.1646 7.72209 10.0346 7.84862C9.36117 8.50381 8.28522 9.86359 8.64792 11.6099C8.76766 12.2094 9.04196 12.7673 9.44365 13.2282C9.84535 13.6891 10.3605 14.0371 10.938 14.2376C12.9703 14.8858 15.891 14.9643 17.4293 13.0511C17.5022 12.9645 17.6061 12.9098 17.7188 12.8987C17.8315 12.8877 17.944 12.9212 18.0323 12.9921C18.1206 13.063 18.1776 13.1657 18.1912 13.2781C18.2047 13.3905 18.1737 13.5038 18.1048 13.5937C16.9669 15.0089 15.2353 15.515 13.5367 15.515Z" />
                                                    <path d="M12.0531 13.2688C11.595 13.2768 11.1481 13.1267 10.7878 12.8438C9.9562 12.1782 9.93324 11.0216 10.1664 10.2343C10.2452 9.9721 10.3505 9.7186 10.4814 9.47811C10.8065 8.82208 11.3264 8.28254 11.9699 7.9333C12.3602 7.73084 12.8052 7.65929 13.2393 7.7292C13.6734 7.79912 14.0735 8.0068 14.3805 8.32156C14.6932 8.66423 14.9287 9.07 15.0712 9.51147C15.107 9.61907 15.0992 9.73642 15.0495 9.83835C14.9998 9.94027 14.9121 10.0186 14.8052 10.0566C14.6984 10.0946 14.5809 10.0892 14.478 10.0416C14.3751 9.99395 14.295 9.90786 14.2548 9.8018C14.1521 9.47575 13.9813 9.1752 13.7539 8.91998C13.5751 8.73707 13.3414 8.61762 13.0884 8.57984C12.8354 8.54205 12.577 8.588 12.3525 8.71069C11.8699 8.98286 11.4821 9.3961 11.241 9.89497C11.1398 10.082 11.058 10.2789 10.9971 10.4826C10.8285 11.0519 10.8658 11.7955 11.3303 12.1673C11.8381 12.5755 12.6953 12.4031 13.1776 11.9871C13.5368 11.6635 13.8454 11.2878 14.0932 10.8726C14.1232 10.8242 14.1624 10.7822 14.2087 10.749C14.2549 10.7158 14.3073 10.692 14.3627 10.6791C14.4181 10.6661 14.4756 10.6641 14.5317 10.6734C14.5879 10.6826 14.6417 10.7028 14.6901 10.7328C14.7384 10.7628 14.7804 10.8021 14.8136 10.8483C14.8468 10.8946 14.8706 10.9469 14.8836 11.0023C14.8966 11.0577 14.8985 11.1152 14.8893 11.1714C14.88 11.2275 14.8598 11.2813 14.8298 11.3297C14.5361 11.8189 14.1705 12.261 13.7452 12.6414C13.2714 13.0412 12.673 13.2631 12.0531 13.2688Z" />
                                                    <path d="M24.6996 26.7866H1.29998C0.955309 26.7863 0.624854 26.6492 0.381135 26.4055C0.137416 26.1618 0.000344239 25.8313 8.47364e-08 25.4866V9.45356C-5.14206e-05 9.37119 0.023378 9.2905 0.0675423 9.22097C0.111707 9.15143 0.174776 9.09593 0.249359 9.06096C0.323942 9.02598 0.406948 9.01299 0.488649 9.02351C0.57035 9.03403 0.647361 9.06762 0.710655 9.12034L11.3428 17.9567C11.8091 18.3421 12.3952 18.5529 13.0002 18.5529C13.6052 18.5529 14.1913 18.3421 14.6577 17.9567L25.2889 9.1199C25.3523 9.06716 25.4293 9.03356 25.511 9.02306C25.5928 9.01256 25.6758 9.02559 25.7504 9.06061C25.825 9.09564 25.8881 9.15121 25.9322 9.22081C25.9763 9.29041 25.9997 9.37115 25.9996 9.45356V25.4866C25.9992 25.8313 25.8622 26.1618 25.6184 26.4055C25.3747 26.6492 25.0443 26.7863 24.6996 26.7866ZM0.866653 10.377V25.4866C0.866653 25.7258 1.06078 25.92 1.29998 25.92H24.6996C24.8145 25.92 24.9247 25.8743 25.006 25.7931C25.0873 25.7118 25.1329 25.6016 25.1329 25.4866V10.377L15.2106 18.6232C14.5887 19.1372 13.807 19.4185 13.0002 19.4186C12.1933 19.4188 11.4116 19.1378 10.7894 18.6241L0.866653 10.377Z" />
                                                    <path d="M0.434172 9.88695C0.342147 9.88713 0.252454 9.85801 0.178087 9.8038C0.103719 9.7496 0.0485401 9.67312 0.020542 9.58546C-0.00745601 9.4978 -0.00681877 9.4035 0.0223615 9.31622C0.0515417 9.22894 0.10775 9.15322 0.182842 9.10003L4.08278 6.33541C4.17656 6.26892 4.29291 6.24241 4.40623 6.26171C4.51955 6.28101 4.62057 6.34454 4.68705 6.43832C4.75354 6.5321 4.78005 6.64845 4.76075 6.76177C4.74145 6.8751 4.67792 6.97611 4.58414 7.04259L0.684201 9.80722C0.611181 9.85916 0.52378 9.88703 0.434172 9.88695ZM25.5662 9.88695C25.4766 9.88703 25.3892 9.85916 25.3162 9.80722L21.4163 7.04259C21.3235 6.97578 21.2609 6.875 21.242 6.76221C21.2232 6.64943 21.2498 6.53378 21.3159 6.44047C21.382 6.34716 21.4823 6.28376 21.5949 6.26408C21.7075 6.2444 21.8234 6.27004 21.9172 6.33541L25.8171 9.10003C25.8922 9.15318 25.9483 9.22882 25.9775 9.31601C26.0067 9.40321 26.0075 9.49743 25.9796 9.58505C25.9517 9.67267 25.8966 9.74914 25.8224 9.80342C25.7482 9.85769 25.6582 9.88694 25.5662 9.88695ZM17.0041 3.82038C16.9144 3.82046 16.8269 3.79259 16.7537 3.74065L14.6824 2.27167C14.2165 1.87788 13.6271 1.66013 13.0171 1.65641C12.4071 1.65269 11.8151 1.86323 11.3445 2.2513L9.24716 3.74065C9.15339 3.80713 9.03704 3.83364 8.92371 3.81434C8.81039 3.79504 8.70937 3.73151 8.64289 3.63773C8.57641 3.54395 8.5499 3.4276 8.5692 3.31428C8.5885 3.20096 8.65203 3.09994 8.7458 3.03346L10.8171 1.56448C11.4376 1.05709 12.2154 0.781554 13.017 0.785192C13.8186 0.788829 14.5938 1.07141 15.2097 1.58441L17.255 3.03346C17.3301 3.08665 17.3863 3.16237 17.4155 3.24965C17.4447 3.33693 17.4453 3.43123 17.4173 3.51889C17.3893 3.60655 17.3342 3.68303 17.2598 3.73723C17.1854 3.79144 17.0957 3.82056 17.0037 3.82038H17.0041ZM0.715401 26.5527C0.626173 26.5529 0.539066 26.5255 0.465979 26.4743C0.392892 26.4231 0.337387 26.3506 0.307046 26.2667C0.276706 26.1828 0.273008 26.0916 0.296459 26.0055C0.31991 25.9194 0.369366 25.8426 0.438072 25.7857L10.3266 17.5698C10.3704 17.5335 10.4209 17.5061 10.4753 17.4892C10.5296 17.4724 10.5868 17.4664 10.6435 17.4717C10.7001 17.4769 10.7552 17.4933 10.8056 17.5198C10.8559 17.5464 10.9006 17.5826 10.9369 17.6264C10.9733 17.6702 11.0007 17.7207 11.0175 17.7751C11.0343 17.8294 11.0403 17.8866 11.0351 17.9433C11.0298 17.9999 11.0134 18.055 10.9869 18.1054C10.9604 18.1557 10.9242 18.2004 10.8804 18.2367L0.991863 26.4526C0.914246 26.5173 0.816424 26.5527 0.715401 26.5527ZM25.2846 26.5527C25.1835 26.5528 25.0857 26.5173 25.0081 26.4526L15.1196 18.2367C15.0747 18.2007 15.0374 18.1562 15.0099 18.1056C14.9824 18.055 14.9652 17.9995 14.9594 17.9422C14.9536 17.885 14.9593 17.8271 14.9761 17.7721C14.9929 17.717 15.0205 17.6659 15.0573 17.6216C15.0941 17.5773 15.1393 17.5408 15.1903 17.5143C15.2414 17.4877 15.2972 17.4715 15.3546 17.4667C15.4119 17.4619 15.4697 17.4686 15.5244 17.4864C15.5791 17.5042 15.6298 17.5327 15.6734 17.5703L25.5619 25.7861C25.6306 25.8431 25.6801 25.9198 25.7035 26.0059C25.727 26.092 25.7233 26.1832 25.6929 26.2671C25.6626 26.351 25.6071 26.4235 25.534 26.4747C25.4609 26.5259 25.3738 26.5529 25.2846 26.5527Z" />
                                                    <path d="M21.6668 13.1279C21.5518 13.1279 21.4416 13.0823 21.3604 13.001C21.2791 12.9197 21.2334 12.8095 21.2334 12.6946V3.82352C21.2321 3.83218 21.2148 3.82005 21.1858 3.82005H4.81471C4.80523 3.81948 4.79574 3.82083 4.7868 3.82404C4.77786 3.82724 4.76967 3.83222 4.76271 3.83868L4.76704 12.6946C4.76704 12.8095 4.72139 12.9197 4.64013 13.001C4.55886 13.0823 4.44864 13.1279 4.33372 13.1279C4.21879 13.1279 4.10857 13.0823 4.02731 13.001C3.94604 12.9197 3.90039 12.8095 3.90039 12.6946V3.82005C3.9072 3.58404 4.00723 3.36034 4.17859 3.19792C4.34994 3.03549 4.57867 2.94757 4.81471 2.9534H21.1858C21.4218 2.94757 21.6505 3.03549 21.8219 3.19792C21.9933 3.36034 22.0933 3.58404 22.1001 3.82005V12.6946C22.1001 12.8095 22.0544 12.9197 21.9732 13.001C21.8919 13.0823 21.7817 13.1279 21.6668 13.1279Z" />
                                                </svg>
                                            </div>
                                            <div className="content">
                                                <span>To Send Mail</span>
                                                <h6><a href="mailto:example@gmail.com">example@gmail.com</a></h6>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-7 wow animate fadeInRight" data-wow-delay="200ms" data-wow-duration="1500ms">
                                <div className="contact-form-wrap">
                                    <form>
                                        <div className="row g-4">
                                            <div className="col-md-12">
                                                <div className="form-inner">
                                                    <label>Full Name *</label>
                                                    <input type="text" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-inner">
                                                    <label>Email *</label>
                                                    <input type="email" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-inner">
                                                    <label>Phone *</label>
                                                    <input type="text" />
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-inner">
                                                    <label>Service Type</label>
                                                    <SelectComponent options={["Conceptual Design", "Project Planning", "Site Analysis"]} placeholder={"Service Type"} />

                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-inner">
                                                    <label>Message *</label>
                                                    <textarea defaultValue={""} />
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="form-inner2">
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" defaultValue id="contactCheck" />
                                                        <label className="form-check-label" htmlFor="contactCheck">
                                                            I have read &amp; accepted Terms &amp; Conditions.
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <button type="submit" className="primary-btn2">
                                            <span>
                                                Submit Now
                                                <svg viewBox="0 0 13 20">
                                                    <polyline points="0.5 19.5 3 19.5 12.5 10 3 0.5" />
                                                </svg>
                                            </span>
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Home1FooterTop />
            <Footer1 />
        </>
    )
}

export default page