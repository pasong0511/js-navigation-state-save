// do something!
; (function () {
    'use strict'

    const get = (target) => {
        return document.querySelector(target)
    }

    const toggleButton = () => {
        $body.classList.remove("preload")       //초기 렌더링 시에 불필요한 트랜지션 방지

        const toggleCheck = $nav.classList.toggle("active")     //토글 상태 변경
        document.cookie = `navState=${toggleCheck}`             //토글 값 쿠키에 상태 저장
    }

    const getNavStatus = () => {
        //쿠키가 있으면 true -> 화면에 nav 보여주기
        //쿠키가 없으면 false -> 화면에 nav 안보여주기
        const cookieItem = document.cookie.split("=")   //쿠키의 navState의 값을 가져옴

        if (cookieItem[1] === "true") {              //쿠키가 true 보여주기
            $body.classList.add("preload")           //초기 렌더링 시에 불필요한 트랜지션 방지
            $nav.classList.add("active")            //보여주고 시작
        } else {                                    //쿠키가 false이면 안보여주기
            $nav.classList.remove("active")         //안보여주고 시작
        }
    }

    const $body = get("body")
    const $button = get(".toggle")
    const $nav = get("nav")

    $button.addEventListener("click", toggleButton) //클릭 이벤트 발생 시 토글 활성화

    const init = () => {
        window.addEventListener("DOMContentLoaded", () => {
            $body.style.visibility = 'visible'      //body 보이기

            getNavStatus()                          //쿠키 상태 확인하여 화면에 보여주기 여부 판단
        })
    }

    init()
})()



//1. 브라우저 로드
//2. 쿠키 있는지 확인
//3. 쿠키 있으면 화면에 보여주기
//4. 쿠키 없으면 그냥 냅두기
//5. 클릭 이벤트 발생 -> 토글 값이 true이면 쿠키에 true 저장
//                    -> 토글 값이 fasle이면 쿠키에 false 저장
