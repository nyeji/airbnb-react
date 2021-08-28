import "./style.css";
import "./discover.css";
import "./footer.css";
import "./footer2.css";
import "./hosting.css";
import "./liveanywhere.css";
import "./login.css";
import "./login_test.css";
import "./nearby.css";
import "./index.css";
import airbnbLogo from "./images/airbnb-logo.svg";
function App() {
  return (
    <>
      <div class="header-bar">
        <div class="logo-container">
          <img src={airbnbLogo} alt="airbnb-logo" />
        </div>
        <div class="nav-container">
          <div>숙소</div>
          <div>체험</div>
          <div>온라인 체험</div>
        </div>
        <div class="user-info-container">
          <div class="become-host">
            <div>호스트되기</div>
          </div>
          <div class="earth-icon-container">
            <img
              class="earth-icon"
              src="./images/airbnb-earth.svg"
              alt="airbnb-earth"
            />
          </div>
          <div class="user-icon-container">
            <div class="user-button">
              <img
                class="hamburger"
                src="./images/airbnb-hamburger.svg"
                alt="airbnb-hamburger"
              />
              <img
                class="user-icon"
                src="./images/airbnb-usericon.svg"
                alt="airbnb-usericon"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="nearby">
        <div class="n1">가까운 여행지 둘러보기</div>
        <div class="nearby_1">
          <div class="line_1">
            <div class="nearby_location">
              <img
                class="_6tbg2q"
                aria-hidden="true"
                alt=""
                decoding="async"
                src="https://a0.muscache.com/im/pictures/71e23854-a3c7-491c-b715-6e86233a293f.jpg?im_q=medq&amp;im_w=720"
                data-original-uri="https://a0.muscache.com/im/pictures/71e23854-a3c7-491c-b715-6e86233a293f.jpg?aki_policy=large"
              />
              <div class="seoul_1">
                서울
                <div class="seoul_1">차로 1.5시간 거리</div>
              </div>
            </div>
            <div class="nearby_location">
              <img
                class="_6tbg2q"
                aria-hidden="true"
                alt=""
                decoding="async"
                src="https://a0.muscache.com/im/pictures/be4d3ba5-08d7-4afe-95a7-f2da6453886a.jpg?im_q=medq&amp;im_w=720"
                data-original-uri="https://a0.muscache.com/im/pictures/be4d3ba5-08d7-4afe-95a7-f2da6453886a.jpg?aki_policy=large"
              />
              <div class="busan_">
                부산
                <div class="busan_">차로 5시간 거리</div>
              </div>
            </div>
            <div class="nearby_location">
              <img
                class="_6tbg2q"
                aria-hidden="true"
                alt=""
                decoding="async"
                src="https://a0.muscache.com/im/pictures/7253e011-7c22-48fd-b75d-d0da35372397.jpg?im_q=medq&amp;im_w=720"
                data-original-uri="https://a0.muscache.com/im/pictures/7253e011-7c22-48fd-b75d-d0da35372397.jpg?aki_policy=large"
              />
              <div class="yang_">
                양양군
                <div>차로 1.5시간 거리</div>
              </div>
            </div>
            <div class="nearby_location">
              <img
                class="_6tbg2q"
                aria-hidden="true"
                alt=""
                decoding="async"
                src="https://a0.muscache.com/im/pictures/52e8083e-2de2-446d-a860-534eab250541.jpg?im_q=medq&amp;im_w=720"
                data-original-uri="https://a0.muscache.com/im/pictures/52e8083e-2de2-446d-a860-534eab250541.jpg?aki_policy=large"
              />
              <div class="sokcho_">
                속초시
                <div>차로 1.5시간 거리</div>
              </div>
            </div>
          </div>
          <div class="line_2">
            <div class="nearby_location">
              <img
                class="_6tbg2q"
                aria-hidden="true"
                alt=""
                decoding="async"
                src="https://a0.muscache.com/im/pictures/20e74de0-0eb8-4fca-afb8-b111875acdf5.jpg?im_q=medq&amp;im_w=720"
                data-original-uri="https://a0.muscache.com/im/pictures/20e74de0-0eb8-4fca-afb8-b111875acdf5.jpg?aki_policy=large"
              />
              <div class="goseong_">
                고성군
                <div>차로2시간 거리</div>
              </div>
            </div>
            <div class="nearby_location">
              <img
                class="_6tbg2q"
                aria-hidden="true"
                alt=""
                decoding="async"
                src="https://a0.muscache.com/im/pictures/76e5f1c6-a788-418c-a28b-f0ee29cffd41.jpg?im_q=medq&amp;im_w=720"
                data-original-uri="https://a0.muscache.com/im/pictures/76e5f1c6-a788-418c-a28b-f0ee29cffd41.jpg?aki_policy=large"
              />
              <div class="daegu_">
                대구
                <div>차로3.5시간 거리</div>
              </div>
            </div>
            <div class="nearby_location">
              <img
                class="_6tbg2q"
                aria-hidden="true"
                alt=""
                decoding="async"
                src="https://a0.muscache.com/im/pictures/e639b7ab-aee3-48ee-9743-216684a51319.jpg?im_q=medq&amp;im_w=720"
                data-original-uri="https://a0.muscache.com/im/pictures/e639b7ab-aee3-48ee-9743-216684a51319.jpg?aki_policy=large"
              />
              <div>
                완주군
                <div>차로 4시간 거리</div>
              </div>
            </div>
            <div class="nearby_location">
              <img
                class="_6tbg2q"
                aria-hidden="true"
                alt=""
                decoding="async"
                src="https://a0.muscache.com/im/pictures/ca3737ef-0faf-46ba-b055-b4a2d99e2cea.jpg?im_q=medq&amp;im_w=720"
                data-original-uri="https://a0.muscache.com/im/pictures/ca3737ef-0faf-46ba-b055-b4a2d99e2cea.jpg?aki_policy=large"
              />
              <div>
                전주시
                <div>차로 4시간 거리</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="liveanywhere">
        <div class="livetitle">어디에서나, 여행은 살아보는 거야!</div>
        <div class="live_list">
          <div>
            <img
              class="live_img"
              aria-hidden="true"
              alt=""
              decoding="async"
              src="https://a0.muscache.com/im/pictures/2f13349d-879d-43c6-83e3-8e5679291d53.jpg?im_w=720"
              data-original-uri="https://a0.muscache.com/im/pictures/2f13349d-879d-43c6-83e3-8e5679291d53.jpg?aki_policy=large"
            />
            <div class="live_text">자연생활을 만끽할 수 있는 숙소</div>
          </div>
          <div>
            <img
              class="live_img"
              aria-hidden="true"
              alt=""
              decoding="async"
              src="https://a0.muscache.com/im/pictures/36f53e61-db8d-403c-9122-5b761c0e4264.jpg?im_w=720"
              data-original-uri="https://a0.muscache.com/im/pictures/36f53e61-db8d-403c-9122-5b761c0e4264.jpg?aki_policy=large"
            />
            <div class="live_text">독특한 공간</div>
          </div>
          <div>
            <img
              class="live_img"
              aria-hidden="true"
              alt=""
              decoding="async"
              src="https://a0.muscache.com/im/pictures/7d82ca14-56e5-4465-8218-dcfa7d69b6ac.jpg?im_w=720"
              data-original-uri="https://a0.muscache.com/im/pictures/7d82ca14-56e5-4465-8218-dcfa7d69b6ac.jpg?aki_policy=large"
            />
            <div class="live_text">집 전체</div>
          </div>
          <div>
            <img
              class="live_img"
              aria-hidden="true"
              alt=""
              decoding="async"
              src="https://a0.muscache.com/im/pictures/10a638e1-6aff-4313-8033-1275cec83987.jpg?im_w=720"
              data-original-uri="https://a0.muscache.com/im/pictures/10a638e1-6aff-4313-8033-1275cec83987.jpg?aki_policy=large"
            />
            <div class="live_text">반려동물 동반 가능</div>
          </div>
        </div>
      </div>
      <div class="discover">
        <div class="discover_title">특별한 즐길 거리를 찾아보세요</div>
        <div class="discover_list">
          <div class="discover_container">
            <div>
              <img
                class="discover_img"
                aria-hidden="true"
                alt=""
                decoding="async"
                src="https://a0.muscache.com/im/pictures/247a1ea3-946d-4eb8-a6ab-e8b9a66846f4.jpg?im_w=720"
                data-original-uri="https://a0.muscache.com/im/pictures/247a1ea3-946d-4eb8-a6ab-e8b9a66846f4.jpg?aki_policy=large"
              />
              <div class="discover_text">
                추천 컬렉션:여행 본능을 깨우는 체험
              </div>
              <div>온라인 체험으로 집에서 랜선 여행을 즐기세요.</div>
            </div>
            <div>
              <img
                class="discover_img"
                aria-hidden="true"
                alt=""
                decoding="async"
                src="https://a0.muscache.com/im/pictures/a6b08861-feb8-4a01-a76d-b33d2867b441.jpg?im_w=720"
                data-original-uri="https://a0.muscache.com/im/pictures/a6b08861-feb8-4a01-a76d-b33d2867b441.jpg?aki_policy=large"
              />
              <div class="discover_text">온라인 체험</div>
              <div>호스트와 실시간으로 소통하면서 액티비티를 즐겨보세요.</div>
            </div>
            <div>
              <img
                class="discover_img"
                aria-hidden="true"
                alt=""
                decoding="async"
                src="https://a0.muscache.com/im/pictures/ad109d56-2421-40cd-98e6-e114160dc85b.jpg?im_w=720"
                data-original-uri="https://a0.muscache.com/im/pictures/ad109d56-2421-40cd-98e6-e114160dc85b.jpg?aki_policy=large"
              />
              <div class="discover_text">체험</div>
              <div>가까운 곳에서 즐길 수 있는 잊지 못할체험을 찾아보세요.</div>
            </div>
          </div>
        </div>
      </div>
      <div class="hosting_wrapper">
        <img class="hostingcoverimage" src="../images/hosting.webp" />
        <div class="hosting_start">호스팅 시작하기</div>
        <div class="hosting_text">
          숙소를 공유하여 부수입을 올리고 새로운 가능성을 만나세요.
        </div>
        <button class="button">자세히 알아보기</button>
      </div>
      <footer>
        <div class="footer">
          <div class="section1">
            <div>소개</div>
            <div class="section_">에어비앤비 이용 방법</div>
            <div class="section_">뉴스룸</div>
            <div class="section_">에어비앤비2021</div>
            <div class="section_">투자자 정보</div>
            <div class="section_">에어비앤비 플러스</div>
            <div class="section_">에어비앤비Luxe</div>
            <div class="section_">호텔투나잇</div>
            <div class="section_">에어비앤비 비즈니스 프로그램</div>
            <div class="section_">호스트 분들이 있기에 가능합니다</div>
            <div class="section_">채용정보</div>
            <div class="section_">창립자 편지</div>
          </div>
          <div class="section2">
            <div>커뮤니티</div>
            <div class="section_">다양성 및 소속감</div>
            <div class="section_">접근성</div>
            <div class="section_">에어비앤비 어소시에이트</div>
            <div class="section_">구호 인력을 위한 숙소</div>
            <div class="section_">게스트 추천</div>
            <div class="section_">Airbnb.org</div>
          </div>
          <div class="section3">
            <div>호스팅하기</div>
            <div class="section_">숙소 호스팅</div>
            <div class="section_">온라인 체험 호스팅하기</div>
            <div class="section_">체험 호스팅하기</div>
            <div class="section_">책임감 있는 호스팅</div>
            <div class="section_">자료 센터</div>
            <div class="section_">커뮤니티 센터</div>
          </div>
          <div class="section4">
            <div>에어비앤비 지원</div>
            <div class="section_">에어비앤비의 코로나19 대응 방안</div>
            <div class="section_">도움말 센터</div>
            <div class="section_">예약 취소 옵션</div>
            <div class="section_">에어비앤비 이웃 민원 지원</div>
            <div class="section_">신뢰와 안전</div>
          </div>
        </div>
      </footer>
      <div class="footer2">
        <div class="footer2_container">
          <div class="footer2_1">
            © 2021 Airbnb, Inc. · 개인정보 처리방침 · 이용약관 · 사이트맵 ·
            한국의 변경된 환불 정책 · 회사 세부정보
          </div>
          <div class="footer2_2">
            <img
              class="icon icon_earth"
              src="../images/airbnbfooter1.svg"
              alt="airbnbfooter1_earth"
            />
            <div class="kr">한국어(KR)</div>
            <div class="krw_">₩</div>
            <div class="kr">KRW</div>
            <div class="footer2_icon">
              <div>
                <img
                  class="icon"
                  src="../images/facebook.svg"
                  alt="facebook icon"
                />
              </div>
              <div>
                <img class="icon" src="../images/twi.svg" alt="twitter icon" />
              </div>
              <div>
                <img class="icon" src="../images/insta.svg" alt="insta icon" />
              </div>
              <div>
                <img class="icon" src="../images/naver.svg" alt="naver icon" />
              </div>
              <div>
                <img
                  class="icon"
                  src="../images/naverpost.svg"
                  alt="post icon"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
