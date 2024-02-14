const parseCookies = (cookie = '') => {
    //쿠키값을 다음과 같은 방식으로 쪼갬
    //1.    쿠키값을 ; 기준으로 나눠 여러개의 key=value 쌍을 만든다.
    //2.    바로 연달아 map함수를 사용하여 key와 value가 담긴 2차원 배열을 형성한다.
    //2.2   map의 경우 매개변수로 콜백함수를 담는데, 이는 해당 배열을 새로 정의하기 위해 사용될 함수이다.
    //3.    reduce 함수를 통해서 2차원 배열을 객체 형태로 만든다.
    //      2차원 배열에서 한 raw의 첫번째는 key값이고 두번째는 value값이다.
    //3.2   reduce함수는 다음과 같은 방식으로 이뤄진다.
    //      reduce함수는 매개변수로 콜백함수를 받는데, 콜백함수의 매개변수가 핵심이다.
    //      reduce<U>(callbackfn: (previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U, initialValue: U): U;
    //      previousValue는 이제까지의 누적된 값이다. 초기값이 설정되어있다면 그 값을 따르고, 그렇지 않다면 0이다.
    //      currentValue는 현재 돌고있는 인덱스의 값을 표현하는 방식이다.
    //      currentIndex는 현재 돌고있는 인덱스의 번호이다.
    //      array는 원본 배열을 의미한다.
    //      initialValue는 previousValue의 초기값을 의미한다.
    return cookie
        .split(';')
        .map(v => v.split('='))
        .reduce((acc, [k, v]) => {
            acc[k.trim()] = decodeURIComponent(v);
            return acc;
        }, {});
};

const cookieString = `
SID=fgiHp4N3ojv2N1ikWLD73WDHO4uvffRg3z3YzOMgm1-XNDaBohLahVgAJJJ_EQ_h3pqqmw.; 
__Secure-1PSID=fgiHp4N3ojv2N1ikWLD73WDHO4uvffRg3z3YzOMgm1-XNDaBIOUdCMoBs3B6f6jvk0em1w.; 
__Secure-3PSID=fgiHp4N3ojv2N1ikWLD73WDHO4uvffRg3z3YzOMgm1-XNDaBVyUQ_AO7NiKR0E05D5sawg.; 
HSID=ArKj_YnlBJEwS38Qm; 
SSID=An_tSorSqwhXuDeGi; 
APISID=aScpUfCg2N48R5af/Ahjzy-YnQNVxPPOWg; 
SAPISID=q-2fu0l_XPEiNo-c/ArD4mFRN0ZaOm676m; 
__Secure-1PAPISID=q-2fu0l_XPEiNo-c/ArD4mFRN0ZaOm676m; 
__Secure-3PAPISID=q-2fu0l_XPEiNo-c/ArD4mFRN0ZaOm676m; 
VISITOR_INFO1_LIVE=l70RUdukDKs; 
VISITOR_PRIVACY_METADATA=CgJLUhIEGgAgJA%3D%3D; 
YSC=pGnDSEwmxrQ; 
__Secure-1PSIDTS=sidts-CjIBYfD7Z3svA3ie6HaIg5aFIqDAGuHw8owL-6sAAMmB_V4aRmBaWGSV_HTPrLpBkbAtQBAA; 
__Secure-3PSIDTS=sidts-CjIBYfD7Z3svA3ie6HaIg5aFIqDAGuHw8owL-6sAAMmB_V4aRmBaWGSV_HTPrLpBkbAtQBAA; 
LOGIN_INFO=AFmmF2swRQIgBeijcz2H5LvFlLVNNOoEss70_nBFKz6zvFdURTTNosICIQDlI1UgVKX2ZRTlaKHRgtwM9TS5GldIy31WpRKN-0qIXg:QUQ3MjNmeVJ4ZkVFV2ZMSGVQSW1LQTBxcFp0VVBjRUxfWTI4QzJubGN4SHFGVDBiM1I4MmxXT0d2VkZ6QjRnWVc2MXZQeXk0aGg5c04xMUhmbk1NY1VqVG04R19Qb0pxakUxZVc1ZVdMNHgzSkR3ZzlzdFZwc194U3VQMTRuRlJ1WnhEdl9hTmdzSUZIRUJBTzJfcmhYbEpIeEZyUnRoalJn; 
PREF=f6=80&f7=4100&tz=Asia.Seoul&f4=4000000&f5=30000; 
SIDCC=ABTWhQE-oTxfJhCMVxHhA-ze0zf86AoNIt1wPZL5g3uOa8qfP1d7SEfSCel3ZqxClmXk1GHPyOo; 
__Secure-1PSIDCC=ABTWhQFODssJpIGJAPrBmDkPUium3WxtWH5pyJKpcKxcL_dci5lORVbb3PHI8nCWAQ9We14jIkg; 
__Secure-3PSIDCC=ABTWhQFhcNMQrRE22SnLfpUx53eHIsWpfH7Y8_LWc-qbiR7rlg6-8CetuFgFJ5rmnxyDJUfGvg
`;

const cookiesObject = parseCookies(cookieString);
console.log(cookiesObject);
